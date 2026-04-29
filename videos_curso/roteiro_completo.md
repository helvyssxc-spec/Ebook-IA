# 🎬 Roteiro Completo de Vídeos — Do Zero ao SaaS

> Eu li o ebook inteiro como um leigo. Abaixo está **cada momento exato** em que eu pensaria: *"Tá, mas como eu faço isso na prática?"* — organizado em ordem cronológica, seguindo a jornada real do aluno.

---

## A Lógica Temporal dos Vídeos

O aluno segue esta jornada linear. Cada vídeo corresponde a uma **ação prática** que o texto do ebook descreve mas que é difícil (ou impossível) de entender apenas lendo.

```
SEMANA 1: Validar a ideia e planejar
SEMANA 2: Criar o app e conectar o banco de dados
SEMANA 3: Integrar login, pagamento e publicar
SEMANA 4: Polir, auditar e vender
```

---

## 📦 MÓDULO 0 — Preparação do Ambiente (Antes de tudo)
> *O ebook assume que o aluno tem conta nas ferramentas. Mas o leigo não sabe nem onde se cadastrar.*

### Vídeo 0.1 — Criando suas contas (5 min)
- **O que mostrar:** Tela de cadastro de cada ferramenta, uma por uma.
- **Ordem:** Claude → Gemini → ChatGPT → Supabase → Vercel → Stripe → Lovable → GitHub
- **Ferramentas usadas:** Navegador
- **Por que o leigo precisa:** Ele vai abrir o ebook e não saber por onde começar. Este vídeo elimina a paralisia do "primeiro passo".

### Vídeo 0.2 — Instalando Git e Claude Code no seu computador (8 min)
- **O que mostrar:** Baixar e instalar o Git (Windows + Mac). Abrir o Terminal/PowerShell pela primeira vez. Instalar o Claude Code via terminal. Rodar `claude --version` para confirmar.
- **Ferramentas usadas:** Terminal, git-scm.com, site da Anthropic
- **Por que o leigo precisa:** O Cap. 14 fala "abra o terminal". O leigo não sabe o que é terminal. Este vídeo destrói essa barreira.

---

## 📦 MÓDULO 1 — Validação da Ideia (Ebook: Parte 1 + Parte 3, Cap. 8-9)
> *Corresponde ao Passo 1 (IDEIA) e Passo 2 (PESQUISA) do Ciclo dos 5 Passos*

### Vídeo 1.1 — Validando sua ideia com o Claude (10 min)
- **Trecho do ebook:** Cap. 3 (prompt do "investidor cético") + Cap. 9 (Estudo de Caso Foconote, Passo 1)
- **O que mostrar:**
  1. Abrir o Claude (claude.ai)
  2. Criar um **Project** chamado "Meu SaaS"
  3. Digitar o prompt do "investidor cético" com uma ideia real (ex: SaaS de agendamento para barbearias)
  4. Ler a resposta do Claude mostrando riscos, suposições e experimento sugerido
  5. Refinar a ideia com base no feedback (mostrar a ida e volta da conversa)
- **Ferramenta:** Claude AI
- **Quando:** Dia 1. Primeiro contato com qualquer ferramenta de IA.
- **Entregável esperado:** Um parágrafo de 5 frases definindo o produto.

### Vídeo 1.2 — Pesquisa rápida de concorrentes com Gemini (8 min)
- **Trecho do ebook:** Cap. 4 (Gemini como Tutor) + Cap. 9 (Passo 2)
- **O que mostrar:**
  1. Abrir o Gemini (gemini.google.com)
  2. Digitar prompt de pesquisa de concorrentes (com a tabela estruturada do Cap. 9)
  3. Mostrar o Gemini retornando a tabela de concorrentes com URL, preço e ponto fraco
  4. Copiar o resultado e salvar num arquivo `.md`
- **Ferramenta:** Google Gemini
- **Quando:** Dia 2-3. Logo após validar a ideia.
- **Entregável esperado:** Tabela de 10+ concorrentes.

### Vídeo 1.3 — Pesquisa profunda com Manus (delegação) (5 min)
- **Trecho do ebook:** Cap. 7 (Manus) + Cap. 9 (Passo 2)
- **O que mostrar:**
  1. Abrir o Manus
  2. Colar o briefing completo de pesquisa de mercado (template do Cap. 7)
  3. Mostrar o Manus "saindo para trabalhar"
  4. Mostrar o PDF final entregue (pode ser um exemplo pré-gravado)
- **Ferramenta:** Manus AI
- **Quando:** Dia 2-3 (em paralelo com o Vídeo 1.2).

---

## 📦 MÓDULO 2 — Criação do PRD e Schema (Ebook: Parte 3, Cap. 9)
> *Corresponde ao Passo 3 (PLANO) do Ciclo dos 5 Passos*

### Vídeo 2.1 — Gerando o PRD completo com Claude (12 min)
- **Trecho do ebook:** Cap. 3 (prompt do PRD) + Cap. 9 (Passo 3)
- **O que mostrar:**
  1. Abrir o **Project** criado no Claude
  2. Colar o prompt-template do PRD (da Parte 2, Cap. 3)
  3. Preencher com os dados reais do projeto (nome, problema, persona, stack)
  4. Mostrar o Claude gerando o PRD completo (14 páginas)
  5. Mostrar o **Artifact** lateral com o documento estruturado
  6. Copiar e salvar como `prd.md`
- **Ferramenta:** Claude AI (Project + Artifacts)
- **Quando:** Dia 4-5. Após ter a pesquisa pronta.
- **Entregável:** Arquivo `prd.md`

### Vídeo 2.2 — Gerando o Schema SQL do banco de dados (10 min)
- **Trecho do ebook:** Cap. 3 + Cap. 9 (schema do Foconote)
- **O que mostrar:**
  1. No mesmo Project do Claude, pedir o schema SQL completo
  2. Mostrar o Claude gerando as tabelas (profiles, subscriptions, items, etc.)
  3. Mostrar o RLS sendo gerado junto
  4. Explicar visualmente (zoom nos comentários do SQL) o que cada tabela faz
  5. Copiar e salvar como `schema.sql`
- **Ferramenta:** Claude AI
- **Quando:** Logo após o PRD (mesmo dia).
- **Entregável:** Arquivo `schema.sql` pronto para colar no Supabase.

---

## 📦 MÓDULO 3 — Construção do App (Ebook: Parte 3, Cap. 10 + Parte 4, Cap. 12-13)
> *Corresponde ao Passo 4 (EXECUÇÃO) do Ciclo dos 5 Passos. Este é o módulo mais importante.*

### Vídeo 3.1 — Scaffold inicial no Lovable (1 prompt) (10 min)
- **Trecho do ebook:** Cap. 6 (prompt de scaffold) + Cap. 10 (Passo 4, parte 1)
- **O que mostrar:**
  1. Abrir o Lovable (lovable.dev)
  2. Colar o prompt-mestre de scaffold (do Cap. 6) com o PRD e schema já colados dentro
  3. Mostrar o Lovable **gerando o app em tempo real** (landing, login, dashboard, settings)
  4. Navegar pelas 4 telas criadas no preview
  5. Mostrar que gastou **1 prompt** (destacar economia)
- **Ferramenta:** Lovable
- **Quando:** Dia 6-7. Primeiro dia de "construção".
- **⚠️ Este é o vídeo mais "UAU" do curso** — o aluno vai ver um app inteiro aparecer do nada.

### Vídeo 3.2 — Conectando Lovable ao GitHub (3 min)
- **Trecho do ebook:** Cap. 13 (Etapa 2)
- **O que mostrar:**
  1. No painel do Lovable, clicar em "GitHub integration"
  2. Autorizar
  3. Criar novo repositório
  4. Mostrar o código aparecendo no GitHub
- **Ferramenta:** Lovable + GitHub
- **Quando:** Imediatamente após o scaffold (mesmo sessão).

### Vídeo 3.3 — Clonando o projeto e abrindo no Claude Code (5 min)
- **Trecho do ebook:** Cap. 13 (Etapas 3-4) + Cap. 14
- **O que mostrar:**
  1. Abrir o Terminal/PowerShell
  2. Digitar `git clone [URL do repo]`
  3. Entrar na pasta com `cd`
  4. Digitar `claude` para abrir o Claude Code
  5. Pedir "liste os arquivos e me faça um resumo"
  6. Mostrar o Claude Code respondendo com a estrutura do projeto
- **Ferramenta:** Terminal + Claude Code
- **Quando:** Logo após conectar ao GitHub.
- **Por que o leigo precisa:** Este é o momento mais assustador (terminal + código). O vídeo mostra que é simples.

### Vídeo 3.4 — Editando features no Claude Code (sem tocar em código) (12 min)
- **Trecho do ebook:** Cap. 13 (Etapa 5) + Cap. 10 (Passo 4, parte 2)
- **O que mostrar:**
  1. No Claude Code, pedir em português: "adicione uma página de perfil onde o usuário pode ver e editar o nome"
  2. Mostrar o Claude Code **listando os arquivos que vai editar** e pedindo aprovação
  3. Aprovar
  4. Mostrar o **diff** (mudanças em verde e vermelho)
  5. Pedir: "faça commit e push pro GitHub"
  6. Voltar no Lovable e mostrar o **preview atualizado automaticamente**
- **Ferramenta:** Claude Code + Lovable (preview)
- **Quando:** Dias 7-15 (o grosso do desenvolvimento).
- **Por que o leigo precisa:** Prova que ele nunca precisa escrever código. Só conversa.

---

## 📦 MÓDULO 4 — Configurações Técnicas com Gemini (Ebook: Parte 4, Cap. 11)
> *Este módulo cobre as "5 paredes" que o ebook descreve. Cada vídeo é um tutorial guiado.*

### Vídeo 4.1 — Configurando Supabase do zero com Gemini (15 min)
- **Trecho do ebook:** Cap. 11, Tutorial 1
- **O que mostrar:**
  1. Abrir o Gemini
  2. Colar o prompt-matriz "Me Guie Passo a Passo" (do Cap. 11)
  3. Criar o projeto no Supabase, passo a passo, seguindo as instruções do Gemini
  4. Abrir o SQL Editor e colar o `schema.sql` gerado no Vídeo 2.2
  5. Clicar em "Run" e mostrar as tabelas sendo criadas
  6. Ativar o RLS
- **Ferramentas:** Gemini + Supabase
- **Quando:** Dia 7-8 (em paralelo com o início da construção).

### Vídeo 4.2 — Configurando Login com Google (OAuth) (12 min)
- **Trecho do ebook:** Cap. 11, Tutorial 4
- **O que mostrar:**
  1. Abrir o Google Cloud Console
  2. Criar projeto, habilitar APIs, criar credenciais OAuth
  3. Configurar redirect URIs (mostrar O ERRO mais comum e como evitar)
  4. Colar client_id e client_secret no Supabase Auth
  5. Testar login no app (mostrar o botão "Login com Google" funcionando)
- **Ferramentas:** Google Cloud Console + Supabase + Gemini (como tutor)
- **Quando:** Dia 10-12 (após o app ter telas básicas funcionando).

### Vídeo 4.3 — Integrando Stripe (aceitar pagamentos) (15 min)
- **Trecho do ebook:** Cap. 11, Tutorial 3 + Cap. 10 (menção ao Stripe)
- **O que mostrar:**
  1. Criar conta no Stripe
  2. Criar um Produto e um Preço (ex: R$ 29/mês)
  3. Copiar as API Keys (Publishable + Secret)
  4. Colar no `.env` do projeto e nas variáveis de ambiente do Vercel
  5. No Claude Code: pedir para integrar o Stripe Checkout
  6. Testar com cartão de teste (4242 4242 4242 4242)
  7. Mostrar o pagamento aparecendo no dashboard do Stripe
- **Ferramentas:** Stripe Dashboard + Claude Code + Navegador
- **Quando:** Dia 15-18 (quando o app já está funcional).
- **⚠️ Segundo vídeo mais "UAU"** — o aluno vê dinheiro (teste) entrando.

### Vídeo 4.4 — Configurando o Webhook do Stripe (10 min)
- **Trecho do ebook:** Cap. 11, Tutorial 3
- **O que mostrar:**
  1. Explicar o que é webhook (2 frases)
  2. Criar Edge Function no Supabase para receber o webhook
  3. No painel do Stripe: configurar o endpoint webhook
  4. Copiar o Webhook Secret e colar na Edge Function
  5. Fazer um pagamento teste e mostrar a tabela `subscriptions` sendo atualizada automaticamente
- **Ferramentas:** Stripe + Supabase Edge Functions + Gemini (como tutor)
- **Quando:** Imediatamente após o Vídeo 4.3.

### Vídeo 4.5 — Deploy na Vercel + Apontamento de DNS (12 min)
- **Trecho do ebook:** Cap. 11, Tutorial 2 e 5
- **O que mostrar:**
  1. Conectar o repositório GitHub à Vercel
  2. Configurar variáveis de ambiente no Vercel (VITE_SUPABASE_URL, etc.)
  3. Fazer o primeiro deploy
  4. **Quando o build falhar** (e vai), copiar o log de erro e colar no Gemini para diagnosticar
  5. Corrigir e re-deployar
  6. Adicionar domínio customizado (Registro.br)
  7. Mostrar o site abrindo em `meuproduto.com.br`
- **Ferramentas:** Vercel + GitHub + Registro.br + Gemini
- **Quando:** Dia 20-22. Quando tudo estiver integrado.
- **Por que o leigo precisa:** O momento "meu site está no ar" é o mais emocionante da jornada.

---

## 📦 MÓDULO 5 — Auditoria e Polimento (Ebook: Parte 3, Cap. 10 Passo 5 + Parte 5)
> *Corresponde ao Passo 5 (AUDITORIA) do Ciclo dos 5 Passos*

### Vídeo 5.1 — Auditoria de segurança com Claude (8 min)
- **Trecho do ebook:** Cap. 3 (prompt de auditoria) + Cap. 10 (Passo 5)
- **O que mostrar:**
  1. Abrir o Claude
  2. Colar o código dos arquivos principais e usar o prompt de auditoria (4 níveis)
  3. Mostrar o Claude apontando bugs críticos (RLS ausente, webhook sem validação, etc.)
  4. Ir ao Claude Code e aplicar cada correção, uma por uma
  5. Rodar segunda auditoria e mostrar "0 críticos"
- **Ferramenta:** Claude AI + Claude Code
- **Quando:** Dia 23-25. Antes de abrir para o público.

### Vídeo 5.2 — Criando assets visuais com GPT (5 min)
- **Trecho do ebook:** Cap. 5 (GPT) + Cap. 10 (Passo 4, parte 3)
- **O que mostrar:**
  1. Abrir o ChatGPT
  2. Pedir a hero illustration para a landing page (prompt do Cap. 10)
  3. Mostrar o DALL-E gerando a imagem
  4. Baixar e adicionar ao projeto
- **Ferramenta:** ChatGPT + DALL-E
- **Quando:** Dia 22-25 (polimento visual).

---

## 📦 MÓDULO 6 — Troubleshooting (Ebook: Parte 5, Cap. 15)
> *Vídeos curtos de "pronto-socorro" para quando algo quebrar*

### Vídeo 6.1 — Resolvendo os 5 erros mais comuns (10 min)
- **O que mostrar (compilado em um único vídeo):**
  1. **"Failed to fetch" do Supabase:** Abrir console do navegador (F12), checar variáveis de ambiente
  2. **Build falho no Vercel:** Copiar log, colar no Gemini, seguir a correção
  3. **Login com Google não redireciona:** Mostrar onde fica o redirect URI no Google Cloud Console
  4. **Webhook não dispara:** Abrir Events tab no Stripe e ler o status
  5. **RLS bloqueando dados:** Mostrar a aba Policies no Supabase e criar a policy correta
- **Ferramentas:** Navegador + Gemini + Supabase + Stripe + Vercel
- **Quando:** A qualquer momento. Vídeo de referência.

---

## 📦 MÓDULO 7 — Marketing e Vendas (Ebook: Cap. 16 + Cap. 5)
> *O ebook menciona "Fase 7 — Vender". Esse módulo fecha o ciclo.*

### Vídeo 7.1 — Criando copy de vendas com GPT (8 min)
- **Trecho do ebook:** Cap. 5 (prompt de brainstorm + copy)
- **O que mostrar:**
  1. Abrir ChatGPT
  2. Usar o prompt de brainstorm de nomes (30 opções em 5 categorias)
  3. Usar o prompt de copy punchy para headlines da landing
  4. Gerar variações de anúncio para Instagram/Meta Ads
- **Ferramenta:** ChatGPT
- **Quando:** Dia 26-28. Quando o produto já está no ar.

### Vídeo 7.2 — Produzindo conteúdo em batch com Manus (5 min)
- **Trecho do ebook:** Cap. 7 (delegação de tarefas longas)
- **O que mostrar:**
  1. Delegar para o Manus: "produza 15 posts para Instagram sobre [tema]"
  2. Mostrar o entregável final
- **Ferramenta:** Manus AI
- **Quando:** Dia 28-30.

---

## 📊 Resumo Executivo

| # | Vídeo | Duração | Ferramenta Principal | Dia da Jornada |
|---|-------|---------|---------------------|----------------|
| 0.1 | Criando suas contas | 5 min | Navegador | Dia 0 |
| 0.2 | Instalando Git e Claude Code | 8 min | Terminal | Dia 0 |
| 1.1 | Validando ideia com Claude | 10 min | Claude | Dia 1 |
| 1.2 | Pesquisa de concorrentes com Gemini | 8 min | Gemini | Dia 2-3 |
| 1.3 | Pesquisa profunda com Manus | 5 min | Manus | Dia 2-3 |
| 2.1 | Gerando o PRD com Claude | 12 min | Claude | Dia 4-5 |
| 2.2 | Gerando o Schema SQL | 10 min | Claude | Dia 5 |
| 3.1 | Scaffold no Lovable (1 prompt!) | 10 min | Lovable | Dia 6-7 |
| 3.2 | Conectando ao GitHub | 3 min | Lovable + GitHub | Dia 7 |
| 3.3 | Clonando e abrindo no Claude Code | 5 min | Terminal + Claude Code | Dia 7 |
| 3.4 | Editando features (sem código) | 12 min | Claude Code | Dia 7-15 |
| 4.1 | Configurando Supabase do zero | 15 min | Gemini + Supabase | Dia 7-8 |
| 4.2 | Login com Google (OAuth) | 12 min | Google Cloud + Supabase | Dia 10-12 |
| 4.3 | Integrando Stripe (pagamentos) | 15 min | Stripe + Claude Code | Dia 15-18 |
| 4.4 | Webhook do Stripe | 10 min | Stripe + Supabase | Dia 18 |
| 4.5 | Deploy + DNS | 12 min | Vercel + Registro.br | Dia 20-22 |
| 5.1 | Auditoria de segurança | 8 min | Claude | Dia 23-25 |
| 5.2 | Assets visuais com GPT | 5 min | ChatGPT + DALL-E | Dia 22-25 |
| 6.1 | Os 5 erros mais comuns | 10 min | Várias | Referência |
| 7.1 | Copy de vendas com GPT | 8 min | ChatGPT | Dia 26-28 |
| 7.2 | Conteúdo em batch com Manus | 5 min | Manus | Dia 28-30 |

**Total: 21 vídeos | ~3 horas de conteúdo**

---

## 🎯 Os 3 Vídeos Mais Importantes (que vendem o curso)

Se você for gravar apenas 3 para começar, grave estes:

1. **Vídeo 3.1 (Scaffold no Lovable)** — O momento "UAU" em que o app aparece do nada em 3 minutos.
2. **Vídeo 4.3 (Stripe)** — O momento em que o aluno vê dinheiro (teste) entrando.
3. **Vídeo 3.4 (Claude Code)** — A prova de que ele nunca precisa escrever código.

Esses 3 vídeos sozinhos justificam a compra do ebook.
