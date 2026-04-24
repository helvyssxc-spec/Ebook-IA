# Template — Schema Supabase base para SaaS com assinatura

> **Como usar:**
> Cole este arquivo no Claude (dentro do seu Project) e peça:
> "Adapte este schema para o meu produto [descrição]. Adicione as tabelas de domínio necessárias. Mantenha todos os RLS."
>
> Depois cole o SQL final no **SQL Editor do Supabase** (painel do seu projeto) e execute.

---

## O que este schema entrega

- ✅ Tabela de perfis (estende o `auth.users` do Supabase Auth)
- ✅ Tabela de assinaturas conectada ao Stripe
- ✅ Tabela de logs de webhook (crítico pra debug de pagamento)
- ✅ RLS ativo em todas as tabelas
- ✅ Políticas básicas já configuradas
- ✅ Triggers pra sync automático de perfil no cadastro

---

## SQL completo (copie do bloco abaixo)

```sql
-- ============================================
-- 1. TABELA DE PERFIS (estende auth.users)
-- ============================================
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Trigger para criar profile automaticamente quando usuário se cadastra
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


-- ============================================
-- 2. TABELA DE ASSINATURAS (Stripe)
-- ============================================
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade not null,
  stripe_customer_id text not null,
  stripe_subscription_id text unique not null,
  stripe_price_id text,
  status text not null check (status in (
    'active', 'trialing', 'past_due', 'canceled',
    'unpaid', 'incomplete', 'incomplete_expired', 'paused'
  )),
  current_period_start timestamp with time zone,
  current_period_end timestamp with time zone,
  cancel_at_period_end boolean default false,
  canceled_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create index idx_subscriptions_user_id on public.subscriptions(user_id);
create index idx_subscriptions_stripe_customer on public.subscriptions(stripe_customer_id);

alter table public.subscriptions enable row level security;

-- Usuário pode ver sua própria assinatura
create policy "Users can view their own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Apenas service_role pode modificar assinaturas (via webhook)
-- Usuário final NÃO deve conseguir editar diretamente.


-- ============================================
-- 3. LOGS DE WEBHOOK DO STRIPE (debug)
-- ============================================
create table if not exists public.stripe_webhook_logs (
  id uuid primary key default gen_random_uuid(),
  event_id text unique not null,
  event_type text not null,
  payload jsonb not null,
  processed boolean default false,
  error text,
  created_at timestamp with time zone default now()
);

create index idx_webhook_logs_event_type on public.stripe_webhook_logs(event_type);
create index idx_webhook_logs_processed on public.stripe_webhook_logs(processed);

alter table public.stripe_webhook_logs enable row level security;
-- Apenas service_role acessa essa tabela. Nenhuma política pra usuário final.


-- ============================================
-- 4. HELPER — verificar se usuário está ativo
-- ============================================
create or replace function public.user_has_active_subscription(user_uuid uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.subscriptions
    where user_id = user_uuid
      and status in ('active', 'trialing')
      and (current_period_end is null or current_period_end > now())
  );
$$;


-- ============================================
-- 5. UPDATED_AT AUTOMÁTICO
-- ============================================
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger subscriptions_updated_at
  before update on public.subscriptions
  for each row execute function public.set_updated_at();


-- ============================================
-- 6. SUAS TABELAS DE DOMÍNIO (customize aqui)
-- ============================================

-- EXEMPLO: tabela principal do seu produto
-- Renomeie "items" pro nome real do seu domínio (ex: "reports", "tasks", "clients")

create table if not exists public.items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade not null,
  title text not null,
  content text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create index idx_items_user_id on public.items(user_id);

alter table public.items enable row level security;

-- CRUD completo com RLS:
create policy "Users can view their own items"
  on public.items for select
  using (auth.uid() = user_id);

create policy "Users can insert their own items"
  on public.items for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own items"
  on public.items for update
  using (auth.uid() = user_id);

create policy "Users can delete their own items"
  on public.items for delete
  using (auth.uid() = user_id);

create trigger items_updated_at
  before update on public.items
  for each row execute function public.set_updated_at();
```

---

## Como validar que tudo funciona

Depois de rodar o SQL acima no painel do Supabase, valide cada ponto:

### 1. Cadastro cria profile automático
- Cadastre um usuário de teste no seu app.
- Abra Supabase → Table Editor → `profiles`.
- O usuário deve aparecer lá automaticamente. Se não, o trigger falhou.

### 2. RLS está ativo em todas as tabelas
No SQL Editor do Supabase, rode:
```sql
select schemaname, tablename, rowsecurity
from pg_tables
where schemaname = 'public';
```
Todas as tabelas devem ter `rowsecurity = true`.

### 3. Usuário só vê os próprios dados
- Com usuário A logado, insira um item.
- Desloga. Cadastra usuário B. Loga.
- Faça query `select * from items` — deve retornar vazio (porque só tem item do A).

Se o B ver os itens do A, **o RLS está mal configurado**. Pare tudo e ajuste antes de prosseguir.

---

## Próximos passos

Depois do schema aplicado:

1. Configure Supabase Auth no painel (providers: email + Google).
2. Pegue as chaves do Supabase (`url` + `anon key` + `service_role key`).
3. Cole essas chaves nas variáveis de ambiente do seu projeto Lovable.
4. Teste o fluxo de cadastro ponta a ponta.

Agora você está pronto pra Fase 4 da trilha (Integrar).
