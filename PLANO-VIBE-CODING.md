# Plano de Reposicionamento — Vibe Coding com Método

> **Status:** Opção B aprovada em 2026-04-29. Aguardando execução.
> **Quem retoma:** Helvys (provavelmente da máquina Itanna).

---

## 🎯 Tese do reposicionamento

A landing e o Kiwify hoje vendem "Do Zero ao SaaS / Sem saber programar". O termo **"vibe coding"** está em pico de busca no Brasil (2026), mas o mercado tá saturado de cursos rasos do tipo "manda no Lovable e reza".

**O ângulo:** posicionar o produto como **vibe coding feito direito** — versão séria, com método, prompts, auditoria de código. O público chega pelo termo da moda e descobre algo mais profundo (orquestração de 5 IAs).

**Como foi descoberto:** o ebook já é, de fato, um curso de vibe coding centrado em **Lovable + Claude + Supabase** (106 + 61 + 57 menções no `pdf-build/ebook-completo.md`). Falta só alinhar a comunicação externa.

---

## ✅ Já feito (29/04/2026)

Aplicado em `deploy-landing/index-novo.html` (cópia de preview, **NÃO no index.html real**):

- [x] [1] `<title>` reescrito com termo "vibe coding"
- [x] [2] `<meta name="description">` reescrita com "vibe coding" + 5 IAs corretas
- [x] [3] `hero-tag` (linha 826): "Do Zero ao SaaS · 30 dias" → "Vibe coding com método · 30 dias"
- [x] [4] sub-headline (linha 833): "Claude + Cursor + Gemini" → "5 IAs (Claude, Gemini, GPT, Lovable e Manus)"
- [x] [5] card Problema 01 (linha 879): "Cursor" → "Manus" (correção factual)
- [x] Criado `comparar.html` pra visualizar lado a lado

**Importante:** essas 5 mudanças são pequenas/cosméticas. Helvys identificou que só a hero-tag é visualmente perceptível. Por isso aprovou a **Opção B** abaixo.

---

## 🟡 A executar — Opção B (aprovada)

### Etapa 1 — Landing: reforço visível (~45 min)

Editar `deploy-landing/index-novo.html` (e depois replicar no `index.html` + `produto-orquestra/landing/index.html`):

1. **H1 do hero** (linhas 827-831)
   - Trocar `<s>Sem saber programar.</s>` por algo com **"Vibe coding com método"** em destaque colorido
   - Adicionar **badge "VIBE CODING"** acima do H1 com cor de destaque (algo tipo amarelo/dourado pra puxar olho)
   - Resultado esperado: visitante vê "vibe coding" ~3 vezes na primeira dobra

2. **Renomear seção "O método"** (linha ~899)
   - Atual: `Você não toca instrumento. Você rege a orquestra.`
   - Proposto: `Vibe coding feito direito: você não programa, você orquestra.`

3. **Adicionar 1 pergunta nova no FAQ**
   - Pergunta: *"Isso é só mais um curso de vibe coding?"*
   - Resposta deve posicionar como **versão séria** (com método, prompts, auditoria) vs **versão "manda no Lovable e reza"** que é o que tá no mercado
   - Inserir antes ou depois das perguntas atuais — escolher onde encaixa melhor narrativamente

### Etapa 2 — Replicar para produção

Depois de aprovar a versão final do `index-novo.html`:

```bash
# Substituir o index.html real
cp deploy-landing/index-novo.html deploy-landing/index.html

# Replicar para a outra cópia do repo
cp deploy-landing/index.html produto-orquestra/landing/index.html

# Apagar o preview e o comparar (já cumpriram a função)
rm deploy-landing/index-novo.html deploy-landing/comparar.html

# Commit + push (usar --author pra não cair no bug do git config)
cd "C:/Users/HelvysCastro/Ebook Saas/Ebook-IA"
git add deploy-landing/ produto-orquestra/landing/
git commit --author "Helvys Xavier <helvyssxc@gmail.com>" -m "Reposicionamento: vibe coding com método (Opção B)"
git push origin main
```

Vercel deploy automático ao push. Validar em `dozeroaosaas.com.br` em ~2 min.

### Etapa 3 — Kiwify (~15-20 min, painel web)

Como o produto está em **rascunho** (não ativado por causa do CNAE pendente) e arquivos ainda **não fizeram upload**, é o momento ideal — risco zero.

**Essencial:**

1. **Subtítulo do produto** (página principal do produto no Kiwify)

   ```
   ANTES:
   Publique e venda seu primeiro SaaS em 30 dias orquestrando 5 IAs.
   Sem saber programar.

   DEPOIS:
   Vibe coding com método: publique seu primeiro SaaS em 30 dias
   orquestrando 5 IAs. Sem saber programar.
   ```

2. **Descrição longa do produto** (área "Sobre o produto" na página de venda)
   - Reescrever os 2-3 primeiros parágrafos com a mesma tese da landing
   - Pedir pra Claude gerar copy alinhada com a landing nova

3. **Imagem/banner do produto** (se já tem cover)
   - Se tiver headline antiga, trocar por uma com termo "vibe coding"

**Opcional mas recomendado:**

4. **Renomear módulos** (substituir os atuais "Modulo" sem acento por nomes mais fortes):

   | Módulo atual | Proposto |
   |---|---|
   | Comece aqui | Boas-vindas: o que é vibe coding com método |
   | Ebook completo | Manual: orquestrando as 5 IAs |
   | Templates práticos | Templates: PRDs, schemas e prompts prontos |
   | Biblioteca de prompts | Biblioteca de 100+ prompts (por ferramenta) |
   | Dashboard interativo | (manter) |

5. **Email de boas-vindas automático** (se já configurado)
   - Ajustar assunto e primeiro parágrafo pra mencionar "vibe coding"

### Etapa 4 — Pedir pra Claude preparar copy completa

Antes de abrir o painel Kiwify, pedir pra Claude gerar um arquivo `copy-kiwify.md` com **todos os textos prontos pra colar**:
- Subtítulo (1 versão final)
- Descrição longa (3-5 parágrafos)
- Nomes de módulos finalizados
- Assunto e corpo do email de boas-vindas

---

## 🚫 Não mexer

- **Preço R$ 147** — travado pro 1º lançamento
- **Arquivos PDF do ebook** — já são coerentes com a tese (não precisa regerar)
- **Estrutura de 5 módulos no Kiwify** — formato tá certo, só nome muda
- **Tools-row da landing** (linhas 909-940) — já lista as 5 IAs corretas (Claude, Gemini, GPT, Lovable, Manus)
- **Trilha de 7 fases** — já alinhada com método
- **Pulo do Gato** — diferencial forte e único

---

## 🔒 Bloqueio que permanece

**NÃO ativar o produto no Kiwify até o CNAE sair.** Contador adicionando:
- 8599-6/04 (treinamento)
- 6202-3/00 (SaaS)
- 6201-5/01 (software encomenda)

Tudo desse plano pode ser feito **em rascunho** agora. Quando o CNAE liberar, basta clicar "Ativar".

---

## 📁 Arquivos relevantes (para retomar em outra máquina)

```bash
# Clonar o repo se ainda não estiver na máquina:
git clone https://github.com/helvyssxc-spec/Ebook-IA.git
cd Ebook-IA

# Configurar autor pra evitar o bug do git config:
git config user.email helvyssxc@gmail.com
git config user.name "Helvys Xavier"

# Ler o estado atual:
cat PLANO-VIBE-CODING.md          # este arquivo
cat PLANEJAMENTO-PUBLICACAO.md    # plano mestre maior
```

| Arquivo | O que é |
|---|---|
| `deploy-landing/index.html` | Landing atual (no ar em `dozeroaosaas.com.br`) — **intacto** |
| `deploy-landing/index-novo.html` | Preview com 5 mudanças cosméticas aplicadas |
| `deploy-landing/comparar.html` | Comparador lado a lado (abre no browser) |
| `produto-orquestra/landing/index.html` | Cópia do repo principal — também precisa ser atualizada |
| `pdf-build/ebook-completo.md` | Source do ebook (já alinhado com a tese, não precisa mexer) |
| `PLANEJAMENTO-PUBLICACAO.md` | Plano mestre fase 1-8 (contexto maior) |

---

## ▶️ Como retomar do zero (mensagem pra Claude)

> "Quero retomar o plano de reposicionamento vibe coding. Lê o arquivo `PLANO-VIBE-CODING.md` na raiz do repo Ebook-IA. Comece pela Etapa 1 (mudanças no H1, badge e seção O método). Antes de aplicar, me mostre as 3 mudanças propostas em formato diff e espere minha aprovação."

Claude deve:
1. Ler este arquivo
2. Ler `deploy-landing/index-novo.html` pra ver onde aplicar
3. Propor as mudanças visuais da Etapa 1 em formato diff
4. Esperar aprovação antes de editar
5. Depois passar pra Etapa 2 (replicar) e 3 (Kiwify)

---

## 📌 Decisões em aberto

Coisas que ficaram pra discutir quando retomar:

1. **Cor do badge "VIBE CODING":** dourado, amarelo, gradiente? (escolher 1 que case com a paleta atual)
2. **Posição do badge:** acima do H1 ou na hero-tag?
3. **Onde encaixar a pergunta do FAQ:** primeira pergunta (impacto) ou meio (orgânico)?
4. **Headline alternativa do H1:**
   - Opção A: "Do zero ao SaaS faturando em 30 dias. **Vibe coding com método.**"
   - Opção B: "**Vibe coding com método**: do zero ao SaaS faturando em 30 dias."
   - Opção C: manter H1 atual e só adicionar o badge acima