# Template — PRD do [SEU PROJETO]

> **Como usar este template:**
> Substitua todo [CONTEÚDO ENTRE COLCHETES] com o seu projeto.
> Não apague as seções — preencha mesmo se a resposta for curta.
> Quando não souber algo, escreva "A DECIDIR: [pergunta específica]".
> Cole este arquivo preenchido no Claude (num Project) e peça pra ele criticar/completar.

---

## 1. Visão e objetivo

**Uma frase:** [O QUE SEU PRODUTO FAZ, PRA QUEM, COM QUE DIFERENCIAL.]

> Exemplo: "Um SaaS que gera relatórios técnicos de engenharia civil usando IA, pra engenheiros autônomos que perdem 5h por laudo."

**Objetivo principal deste MVP:** [1 FRASE COM A META MENSURÁVEL.]

> Exemplo: "Atingir 20 assinantes pagantes em 60 dias após o lançamento."

**Não-objetivos do MVP (pra não desviar):**
- [ALGO QUE VOCÊ NÃO VAI FAZER NESTA VERSÃO]
- [OUTRA COISA QUE NÃO VAI FAZER]
- [MAIS UMA QUE NÃO VAI FAZER]

---

## 2. Problema e contexto

**A dor real (em palavras do usuário):**
> "[FRASE QUE UMA PESSOA AFETADA PELO PROBLEMA DIRIA]"

**Como as pessoas resolvem hoje?**
- [SOLUÇÃO ATUAL 1 - e por que não é boa]
- [SOLUÇÃO ATUAL 2 - e por que não é boa]
- [SOLUÇÃO ATUAL 3 - e por que não é boa]

**Por que agora?** [POR QUE ESTE É O MOMENTO CERTO PRA ESSE PRODUTO EXISTIR?]

---

## 3. Personas (quem vai usar)

### Persona 1 — [NOME DA PERSONA, EX: "A MARIANA"]

- **Idade e contexto:** [X-Y anos, profissional de...]
- **Dor principal:** [O QUE DÓI TODO DIA PRA ELA]
- **Situação quando abre seu produto:** [EM QUE ESTADO EMOCIONAL/PRÁTICO?]
- **Resultado que ela busca:** [O QUE ELA QUER SAIR DALI TENDO FEITO?]
- **Ticket disposto a pagar:** R$ [VALOR]/mês

### Persona 2 — [NOME DA SEGUNDA PERSONA]

*(Repita a estrutura acima. Se você só tem 1 persona clara, ok — marque como "A DECIDIR" a segunda.)*

---

## 4. Proposta de valor

**A frase de venda de 1 linha:**
> "[PRODUTO] ajuda [PERSONA] a [RESULTADO] sem [DOR QUE EVITA]."

**3 diferenciais que nenhum concorrente oferece:**
1. [DIFERENCIAL 1]
2. [DIFERENCIAL 2]
3. [DIFERENCIAL 3]

**Concorrentes mapeados:**
| Concorrente | URL | Preço | Ponto forte | Ponto fraco |
|---|---|---|---|---|
| [NOME] | [link] | R$ [valor] | [o que fazem bem] | [onde falham] |
| [NOME] | [link] | R$ [valor] | [o que fazem bem] | [onde falham] |
| [NOME] | [link] | R$ [valor] | [o que fazem bem] | [onde falham] |

---

## 5. Escopo do MVP

### ENTRA no MVP (versão 1.0)

- [ ] Cadastro e login (email/senha + Google)
- [ ] Dashboard principal do usuário
- [ ] [FEATURE CENTRAL 1]
- [ ] [FEATURE CENTRAL 2]
- [ ] [FEATURE CENTRAL 3]
- [ ] Fluxo de assinatura via Stripe (mensal)
- [ ] Área de conta (gerenciar assinatura, trocar senha)
- [ ] Landing pública de vendas
- [ ] Email transacional (boas-vindas, recuperação de senha)

### FICA DE FORA do MVP (versão 1.1 ou 2.0)

- [FEATURE ADIADA 1 — justificativa: "isso é legal mas o MVP funciona sem"]
- [FEATURE ADIADA 2]
- [FEATURE ADIADA 3]

> **Princípio:** se você não conseguir defender em 1 frase por que a feature precisa estar no MVP, ela sai. A cada feature extra, o tempo de entrega dobra e o risco de lançar nunca aumenta.

---

## 6. Fluxos de usuário principais

### Fluxo 1 — Cadastro e primeiro uso

1. Usuário chega pela landing.
2. Clica em "Começar grátis" → redireciona pra /signup.
3. Cadastra com email+senha OU Google.
4. Recebe email de confirmação.
5. Após confirmar, entra no /app.
6. Vê tela de onboarding com 3 passos guiados.
7. Conclui onboarding → chega no dashboard principal.

### Fluxo 2 — [AÇÃO CENTRAL DO SEU PRODUTO]

1. [PASSO 1]
2. [PASSO 2]
3. [PASSO 3]
4. [PASSO 4]
5. [RESULTADO ENTREGUE AO USUÁRIO]

### Fluxo 3 — Assinatura

1. Usuário usa o produto em modo free/trial.
2. Atinge limite ou clica em "Upgrade".
3. Redireciona pra Stripe Checkout.
4. Paga com cartão ou Pix.
5. Webhook atualiza `subscriptions` no Supabase.
6. Usuário volta pro produto com acesso pago ativo.

---

## 7. Schema de banco (Supabase)

### Tabelas principais

```sql
-- Usuários (gerenciado pelo Supabase Auth, mas com profile público)
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default now()
);

-- Assinaturas
create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  stripe_customer_id text not null,
  stripe_subscription_id text unique not null,
  status text not null, -- 'active', 'canceled', 'past_due'
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default now()
);

-- [TABELA PRINCIPAL DO SEU PRODUTO]
create table [nome_da_tabela] (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  -- [OUTROS CAMPOS DO SEU DOMÍNIO]
  created_at timestamp with time zone default now()
);
```

### Row Level Security (RLS)

**TODAS as tabelas acima precisam de RLS ativo.** Exemplo pra `subscriptions`:

```sql
alter table subscriptions enable row level security;

-- Usuário só vê a própria assinatura
create policy "Users see own subscriptions"
  on subscriptions for select
  using (auth.uid() = user_id);
```

> **Aviso:** sem RLS configurado, QUALQUER usuário logado pode ver dados de qualquer outro usuário. Isso é brecha grave. Configurar RLS é obrigatório antes de qualquer pagamento.

---

## 8. Autenticação e segurança

- **Provedores:** Email/senha + Google OAuth (via Supabase Auth).
- **Recuperação de senha:** via email transacional (Resend).
- **RLS ativo:** em todas as tabelas com dados de usuário.
- **Rotas protegidas:** /app/* só acessível com usuário autenticado.
- **Chaves secretas:** `SUPABASE_SERVICE_ROLE_KEY` e `STRIPE_SECRET_KEY` ficam em variáveis de ambiente do Vercel (NUNCA no código).

---

## 9. Integrações externas

| Serviço | Pra que | Pacote/API | Observação |
|---|---|---|---|
| Stripe | Assinaturas e pagamento | stripe SDK | Checkout hospedado + webhook |
| Supabase | Auth + DB + Storage | @supabase/supabase-js | RLS obrigatório |
| Resend | Email transacional | resend SDK | Domínio verificado |
| [SERVIÇO 4] | [PRA QUE SERVE] | [API] | [OBS] |

---

## 10. Métricas de sucesso

### Métricas de produto (MVP)

- **Cadastros**: meta de 200 em 30 dias.
- **Conversão free → paid**: meta de 8%.
- **Churn mensal**: abaixo de 10%.
- **Tempo médio até o "aha moment"**: abaixo de 5 minutos no primeiro uso.

### Métricas de negócio

- **MRR (Monthly Recurring Revenue)**: meta de R$ [X] em 60 dias.
- **CAC (Custo de Aquisição)**: abaixo de R$ [Y].
- **LTV / CAC**: acima de 3.

---

## 11. Riscos e mitigações

| Risco | Gravidade | Mitigação |
|---|---|---|
| Concorrente grande lançar feature similar | Média | Focar em nicho específico onde o grande não entra |
| Custo de infra maior que esperado | Média | Monitorar Supabase/Vercel mensalmente, ter plano de migração pronto |
| Conversão abaixo do esperado | Alta | 3 variações de landing testadas nas 2 primeiras semanas |
| Bugs críticos em produção | Alta | Testes antes do deploy, rollback rápido via Vercel |
| IA gerando output inconsistente | Média | Fallback para fluxo manual quando IA falha |

---

## 12. Cronograma (30 dias)

| Semana | Fases da Trilha | Entregável |
|---|---|---|
| Semana 1 | Idear + Especificar | PRD (este documento) + schema + stack definida |
| Semana 2 | Construir | MVP navegável com scaffold, integração GitHub |
| Semana 3 | Integrar + Polir | Auth + Stripe + auditoria código |
| Semana 4 | Publicar + Vender | URL própria + SSL + primeira venda real |

---

## 13. Decisões em aberto

*(Aqui vai tudo que você ainda não decidiu. Quando começar a fase correspondente, resolva.)*

- A DECIDIR: [pergunta 1]
- A DECIDIR: [pergunta 2]
- A DECIDIR: [pergunta 3]

---

**Próximo passo depois de preencher este PRD:**
1. Cole no Claude (dentro de um Project chamado "[seu produto]").
2. Peça: "Critique este PRD como se fosse pra um investidor. O que está vago, incompleto, ou otimista demais?"
3. Iterar até o Claude não ter mais críticas relevantes.
4. Só então começar a Fase 3 (Construir).
