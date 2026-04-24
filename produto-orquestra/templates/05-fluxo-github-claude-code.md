# Template — Fluxo GitHub + Claude Code

> **O que este arquivo é:**
> Um guia operacional prático para você executar o "Pulo do Gato #2" — o fluxo Lovable → GitHub → Claude Code que economiza 80% dos créditos.
>
> Use como referência de consulta. Não precisa decorar.

---

## Pré-requisitos (faça uma vez, pra sempre)

### 1. Instalar Git
- **Mac**: já vem instalado (ou rode `xcode-select --install`).
- **Windows**: baixe em https://git-scm.com e instale com defaults.
- **Linux**: `sudo apt install git` (Ubuntu/Debian).

### 2. Configurar seu nome e email no Git
Abra o terminal e rode uma vez:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### 3. Autenticar no GitHub
Caminho mais fácil — GitHub CLI:
```bash
# Mac (com Homebrew)
brew install gh

# Windows (via winget)
winget install --id GitHub.cli

# Depois:
gh auth login
```

Segue as instruções do terminal, autoriza no navegador, pronto.

### 4. Instalar Claude Code
Vai no site da Anthropic, segue a documentação oficial de instalação. É preciso ter uma assinatura Claude Code ativa (a partir de USD 20/mês no Claude Pro).

### 5. Testar que tudo funciona
```bash
git --version          # deve aparecer a versão
gh auth status         # deve dizer "Logged in to github.com"
claude --version       # deve aparecer a versão do Claude Code
```

Se tudo responde, você está pronto.

---

## Etapa A — Do Lovable pro GitHub (primeira vez por projeto)

### No painel do Lovable:

1. Abra o projeto.
2. Procure o botão de **GitHub** (geralmente no header ou em "Settings").
3. Clique em **Connect to GitHub**.
4. Autorize.
5. Escolha **Create new repository**.
6. Nome: `meu-saas-v1` (ou o nome do seu projeto).
7. Público ou privado (privado requer plano Pro do Vercel futuramente).
8. Clique em **Create**.

Em 30 segundos, o Lovable criou o repo no seu GitHub e fez o primeiro push.

### No terminal (seu computador):

```bash
# Navegue até a pasta onde você quer guardar projetos
cd ~/Documents/projetos      # (ou onde preferir)

# Clone o repo (substitua pela URL do seu)
git clone https://github.com/seu-usuario/meu-saas-v1.git

# Entre na pasta
cd meu-saas-v1

# Confira que está tudo lá
ls
```

Você deve ver os arquivos do projeto.

### Abra o Claude Code

```bash
claude
```

Claude Code abre. Você está "dentro" do projeto pela primeira vez. Primeira conversa:

```
Liste os arquivos do projeto e me faça um resumo rápido
da estrutura.
```

Claude Code responde descrevendo o que vê. Você está em casa.

---

## Etapa B — Fluxo diário de trabalho

Este é o ciclo que você vai repetir dezenas de vezes.

### 1. Antes de começar, sincronize com GitHub

```bash
git pull
```

Isso baixa qualquer alteração que o Lovable tenha feito desde a última vez. Importante se você mexeu no Lovable pra alguma ação visual.

### 2. Abra o Claude Code

```bash
claude
```

### 3. Peça as alterações que quer fazer

Exemplos de prompts úteis:

**Adicionar feature:**
```
Preciso adicionar uma página de perfil em /app/perfil onde
o usuário pode:
- Ver e editar seu nome.
- Fazer upload de foto de perfil (use Supabase Storage, bucket "avatars").
- Cancelar a assinatura (use portal_url do Stripe).

Antes de começar, liste os arquivos que vai criar ou mexer
e me peça aprovação.
```

**Corrigir bug:**
```
Tem um bug: quando o usuário clica em "Salvar nota", às vezes
aparece erro mas a UI não mostra. Investigue a causa e proponha
correção. Antes de aplicar, me explique.
```

**Refatorar:**
```
A lógica de chamar a API do Stripe está duplicada em 3 arquivos.
Extraia para um hook customizado reutilizável em /hooks/useStripe.ts.
Mantenha o comportamento idêntico.
```

**Auditar segurança:**
```
Audite esses arquivos quanto a:
1. RLS e segurança de dados
2. Validação de input
3. Tratamento de erro
4. Chaves expostas

Liste achados em ordem de gravidade.
```

### 4. Aprove as alterações

Claude Code vai mostrar o diff (o que vai mudar). Você:
- Aprova tudo.
- Ou pede ajustes: "não, no lugar de X faça Y".

Vai iterando até ficar como você quer.

### 5. Commit e push

Quando terminar um bloco coerente de alterações, peça pro próprio Claude Code:

```
Faça commit com uma mensagem clara descrevendo o que mudou,
e depois faça push pro GitHub.
```

Claude Code executa os comandos Git automaticamente.

Ou, se preferir fazer manual (vale aprender pelo menos 1 vez):

```bash
git status          # vê o que mudou
git add .           # marca tudo pra commit
git commit -m "adiciona página de perfil com upload de foto"
git push            # envia pro GitHub
```

Em 30 segundos, o Lovable sincroniza o preview, e você vê o resultado visual.

---

## Etapa C — Quando voltar pro Lovable

**Só volte pro Lovable em 3 situações:**

1. **Pra visualizar preview.** É o jeito mais fácil de ver o resultado atual do projeto.
2. **Mudança puramente visual trivial.** Ex: trocar cor de fundo de um botão que você escolhe por tentativa/erro. Uma única coisa. Rápido.
3. **Compartilhar o preview com cliente ou stakeholder.** A URL do Lovable é pública e fácil de compartilhar.

**NÃO volte pra:**
- Adicionar feature nova.
- Corrigir bug.
- Mudar lógica.
- Refatorar.
- Integração com API.

Tudo isso é Claude Code. Sempre.

---

## Fluxo visual resumido

```
┌─────────────┐       ┌──────────┐       ┌─────────────┐
│   Lovable   │ ──1── │  GitHub  │ ──2── │  Seu Mac    │
│  (scaffold) │       │  (repo)  │       │  (local)    │
└─────────────┘       └──────────┘       └─────────────┘
      ↑                     ↑                    │
      │                     │                    │
      │                     │                    ▼
      │                     │            ┌─────────────┐
      │                     │            │ Claude Code │
      │                     │            │  (editor)   │
      │                     │            └─────────────┘
      │                     │                    │
      │                     │                    │
      │                     └──── 4 ─────────────┤
      │                          git push        │
      │                                          │
      └────── 3 ────────────────────────────────┘
            sync automático
            (preview atualiza)
```

1. Você cria projeto no Lovable, conecta ao GitHub.
2. Clona o repo no seu computador.
3. Lovable sincroniza preview com o GitHub automaticamente.
4. Você edita via Claude Code, faz push, e o preview Lovable atualiza.

---

## Comandos Git essenciais — cheat sheet

```bash
# Ver o que mudou no projeto desde último commit
git status

# Ver histórico de commits
git log --oneline -20

# Ver as alterações em detalhe (antes de commit)
git diff

# Baixar alterações remotas (ex: do Lovable)
git pull

# Preparar arquivos pra commit (. = todos)
git add .

# Salvar uma versão (commit)
git commit -m "mensagem descritiva"

# Enviar commits pro GitHub
git push

# Reverter arquivo pra última versão commitada
git checkout nome-do-arquivo

# Reverter o último commit (mantendo as mudanças pra editar)
git reset --soft HEAD~1

# Criar nova branch (pra testar algo arriscado isolado)
git checkout -b nome-da-branch

# Voltar pra branch principal
git checkout main
```

---

## Problemas comuns e soluções

### "error: failed to push some refs"
Significa que tem alterações no GitHub que você não tem localmente.
```bash
git pull
# depois
git push
```

### "fatal: not a git repository"
Você não está dentro da pasta do projeto. Rode `cd ~/caminho/do/projeto` primeiro.

### "your branch is ahead by X commits"
Normal. Significa que você tem commits locais não enviados. Rode `git push`.

### "merge conflict"
Raro em projeto solo. Se acontecer, tire print do que o terminal mostra e passe pro Claude Code resolver.

### Claude Code diz "command not found"
Claude Code não está instalado. Volte aos pré-requisitos.

### Editei no Lovable E no Claude Code ao mesmo tempo, deu conflito
Não faça isso. Escolha sempre UM só pra edição ativa. Lovable só pra visualizar.

---

## Dica profissional: commits pequenos e frequentes

**Ruim:**
```bash
git commit -m "mudanças da semana"
```

**Bom:**
```bash
git commit -m "adiciona página de perfil"
git commit -m "adiciona upload de avatar"
git commit -m "corrige bug de validação de email"
```

Commits pequenos permitem:
- Reverter uma mudança específica sem perder outras.
- Entender o histórico depois de 3 meses.
- Colaborar com outras pessoas no futuro.

Regra: um commit por "feature" ou "correção" pequena. Não acumule.

---

## Cadência ideal da semana

**Segunda a quinta:** edições no Claude Code, commits múltiplos por dia, push no final do dia.
**Sexta:** revisão geral, auditoria com Claude, deploy pra preview no Vercel (se aplicável).
**Sábado/Domingo:** descanso ou polimento visual no Lovable (só visual trivial).

Esse ritmo sustenta os 30 dias sem queimar você.

---

**Frase pra lembrar:** "Lovable começa, Claude Code continua, GitHub liga os dois."
