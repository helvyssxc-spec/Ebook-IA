# Template — Prompt de Scaffold Premium pro Lovable

> **O que é:**
> Um prompt de scaffold calibrado pra que o Lovable entregue um MVP de alto padrão em 1 a 3 prompts — maximizando valor por crédito gasto e deixando o projeto pronto pra sair do Lovable.
>
> **Como usar:**
> Abra projeto novo no Lovable. Preencha os [campos entre colchetes] deste prompt. Cole. Aguarde (leva 2-5 minutos). Refine com no máximo 1-2 prompts adicionais. Depois saia do Lovable.

---

## O prompt (copie tudo abaixo e edite os colchetes)

```
Crie um aplicativo web SaaS completo com as seguintes
especificações exatas. Quero um scaffold de alta qualidade que
eu possa continuar editando fora do Lovable via GitHub + Claude Code.

=== IDENTIDADE ===

NOME: [Nome do produto]
DESCRIÇÃO: [1 frase dizendo o que o produto faz]
TAGLINE: [1 frase curta de venda, pode aparecer na landing]
PÚBLICO: [Quem usa — persona objetiva]

=== STACK TÉCNICA ===

- Framework: React 18 + TypeScript + Vite
- Estilização: Tailwind CSS + shadcn/ui
- Backend: Supabase (Auth + Database + Storage)
- Pagamento: Stripe (Checkout hospedado + Webhooks via Edge Function)
- Email: Resend
- Hospedagem: Vercel

=== ESTRUTURA DE ROTAS ===

Rotas PÚBLICAS (sem login):
- /           → Landing page de venda
- /login      → Login (email/senha + Google)
- /signup     → Cadastro
- /forgot     → Recuperar senha
- /reset      → Redefinir senha (chega por email)
- /termos     → Termos de uso (placeholder)
- /privacidade → Política de privacidade (placeholder)

Rotas PROTEGIDAS (só com login):
- /app             → Dashboard principal
- /app/[FEATURE]   → [PRIMEIRA FEATURE - descreva]
- /app/[FEATURE2]  → [SEGUNDA FEATURE - descreva, se houver]
- /app/perfil      → Perfil e conta (trocar senha, gerenciar assinatura, sair)

=== LANDING PAGE (/) ===

Estrutura:
1. Header fixo transparente com logo + nav (Features, Preço, Entrar) + CTA "Começar grátis"
2. Hero:
   - Headline: [HEADLINE PRINCIPAL - 10-12 palavras, impacto imediato]
   - Sub-headline: [1 frase desdobrando a promessa]
   - CTA primário: "Começar grátis"
   - CTA secundário (fantasma): "Ver como funciona"
   - Imagem/ilustração à direita OU abaixo (placeholder — eu substituo depois)
3. Prova social simples (logos de empresas — use placeholders)
4. 3 features principais em grid:
   - Feature 1: [NOME + 1 frase]
   - Feature 2: [NOME + 1 frase]
   - Feature 3: [NOME + 1 frase]
5. Seção "Como funciona" em 3 passos
6. Pricing simples: 1 plano com ticket mensal + CTA
7. FAQ com 5 perguntas placeholder
8. Footer com links essenciais

=== DESIGN SYSTEM ===

Estética: [dark minimal / light editorial / colorful vibrant — escolha uma]

Paleta base:
- Fundo: [cor hex]
- Texto principal: [cor hex]
- Accent / CTA: [cor hex]
- Secundário: [cor hex]

Tipografia:
- Títulos: [serifa ou sans? ex: "Fraunces" serif, "Inter Tight" sans]
- Corpo: [ex: "Inter" sans]
- Mono: "JetBrains Mono" (pra detalhes técnicos, se aplicável)

Referência visual: [cite 1-2 marcas — ex: "Linear, Arc browser, Vercel"]

Evite:
- Gradientes roxo-rosa genéricos.
- Ícones infantis.
- Muitas cores (máximo 3 cores + neutros).
- Animações excessivas.

=== SCHEMA SUPABASE (cole o SQL completo) ===

[Cole aqui o SQL completo que você gerou no passo anterior,
incluindo tabelas, RLS, triggers, policies.]

=== AUTENTICAÇÃO ===

- Email/senha com confirmação obrigatória por email.
- Google OAuth habilitado.
- Rotas /app/* protegidas — usuário não-logado redireciona pra /login.
- Após login, redirect pra /app.
- Logout disponível em /app/perfil.

=== INTEGRAÇÃO STRIPE ===

- Botão "Assinar" em /app/perfil (ou numa tela de paywall)
- Clica → redireciona pra Stripe Checkout hospedado
- success_url: /app?checkout=success
- cancel_url: /app?checkout=canceled
- Edge Function em /functions/stripe-webhook pra receber eventos:
  - checkout.session.completed
  - customer.subscription.updated
  - customer.subscription.deleted
  - invoice.payment_failed
- Webhook valida stripe-signature (obrigatório)
- Atualiza tabela subscriptions no Supabase baseado no evento

=== EMAILS TRANSACIONAIS ===

Use Resend nos seguintes momentos:
1. Welcome email após confirmação de cadastro
2. Password reset (Supabase tem template, só confirme)
3. Subscription confirmed (quando webhook recebe checkout.session.completed)
4. Subscription canceled

Templates podem ser básicos com placeholder — vou refinar depois.

=== VARIÁVEIS DE AMBIENTE ===

Já inclua na configuração do projeto:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY
- STRIPE_SECRET_KEY (server-side only)
- STRIPE_WEBHOOK_SECRET (server-side only)
- RESEND_API_KEY (server-side only)

=== FUNCIONALIDADE CENTRAL DO PRODUTO ===

[Descreva aqui, em 3-6 bullets detalhados, QUAL É A FEATURE
CENTRAL do seu SaaS. Isso é o que diferencia seu produto.

Exemplo:
- Usuário escreve notas livres em formato markdown
- Pode selecionar uma nota e clicar em "Destilar"
- 3 opções de destilação: resumo, lista de ações, expansão
- Destilação chama API via Edge Function (eu adiciono a lógica
  de chamada à IA depois no Claude Code)
- Resultado aparece ao lado da nota original
- Usuário pode editar, salvar, deletar destilações]

=== EXPERIÊNCIA DO USUÁRIO ===

Princípios:
- Loading states em TODAS as ações assíncronas
- Error handling com toast de erro descritivo (não "Error" genérico)
- Empty states ilustrados (primeira visita = nada na tela, com CTA claro)
- Responsivo (mobile first, desktop também impecável)
- Acessível (contraste WCAG AA, navegável por teclado)

=== INSTRUÇÕES DE ENTREGA ===

Quero que você:
1. Entregue o scaffold completo com as telas navegáveis.
2. Configure Supabase Auth funcionando de verdade.
3. Configure as rotas protegidas corretamente.
4. Integre o schema Supabase (crie as queries básicas).
5. Crie as Edge Functions (stripe-webhook + outras que precisar).
6. Deixe comentários TODO nos pontos onde eu preciso completar
   lógica customizada (ex: algoritmo de destilação, integração
   com IA, etc).

DEPOIS de entregar o scaffold, vou conectar o projeto ao GitHub
e continuar editando via Claude Code. Não otimize o projeto
pra edição dentro do Lovable — otimize pra estar pronto pra
sair do Lovable.

Pode começar.
```

---

## Dicas pra maximizar o primeiro prompt

### 1. Preencha TUDO com detalhe

Prompt vago → Lovable preenche do próprio jeito → você ajusta depois → queima crédito.

Prompt detalhado → Lovable acerta na primeira → você só refina uma vez → economiza.

Cada campo `[entre colchetes]` é crítico. Não pule nenhum.

### 2. Gere o schema ANTES de abrir o Lovable

O campo "=== SCHEMA SUPABASE ===" deve ter o SQL completo. Use o template 02 (schema-supabase) como base, adapte com Claude pro seu produto, e cole aqui pronto.

Lovable usando schema pronto = integração correta de primeira.
Lovable inventando schema = bagunça que você conserta depois.

### 3. Feature central em bullets, não parágrafos

Lovable lê melhor listas do que texto corrido. Divida a funcionalidade em 3-6 bullets objetivos. Nada de "o app deve ser intuitivo e resolver o problema X". Seja concreto.

### 4. Estética com referência real

"Dark minimal" é vago. "Dark minimal como Linear, Arc browser, com tipografia Fraunces nos títulos" é preciso. Sempre cite referências concretas.

### 5. Deixe claro que você vai sair do Lovable

O último parágrafo do prompt é crucial. Avisar que você vai continuar no Claude Code faz o Lovable:
- Não otimizar demais pra edição dentro dele.
- Estruturar o código de forma mais "editável" por outras IAs.
- Criar TODOs claros onde a lógica precisa ser adicionada depois.

---

## Segundo prompt (se necessário)

Após o scaffold, avalie. Se estiver 80% bom, refine com UM prompt cirúrgico:

```
Ajustes no scaffold entregue:

1. [ajuste visual concreto — ex: "reduza o tamanho da fonte
   do hero pra 4xl em desktop e 3xl em mobile"]
2. [ajuste de fluxo — ex: "no formulário de signup, adicione
   campo de confirmação de senha e valide que coincidem"]
3. [ajuste de integração — ex: "no webhook do Stripe,
   adicione log no console quando cada evento chegar, pra debug"]

Mantenha tudo o mais como está. Não refaça o que já está bom.
```

Note: esse prompt é específico. Lista EXATA do que mudar. Proíbe retrabalho desnecessário.

---

## Terceiro prompt (raro, mas acontece)

Se ainda não estiver 100%, faça um terceiro prompt com a mesma estrutura do segundo. Se depois de 3 prompts ainda não está bom, **pare** e vá pro Claude Code. Continuar no Lovable queima crédito sem retorno.

---

## Checklist antes de sair do Lovable

Antes de conectar ao GitHub, confirme:

- [ ] Login com email/senha funciona.
- [ ] Login com Google funciona (se configurou OAuth).
- [ ] Cadastro cria usuário e chega email de confirmação.
- [ ] Rotas protegidas realmente protegem.
- [ ] Dashboard vazio mostra empty state, não erro.
- [ ] Design bate com a paleta/tipografia que você pediu.
- [ ] Schema Supabase foi realmente criado (confere no painel Supabase).
- [ ] Variáveis de ambiente estão declaradas (pode estar sem valor ainda).
- [ ] Preview público funciona (abra em aba anônima pra confirmar).

Se marcou todos: parabéns. Conecte ao GitHub. Saia do Lovable. Bem-vindo ao Claude Code.

Se não marcou todos: use seu terceiro prompt pra ajustar o que falta.

---

**Frase pra lembrar:** "Scaffold bem feito em 1 prompt vale mais do que 30 prompts pequenos."
