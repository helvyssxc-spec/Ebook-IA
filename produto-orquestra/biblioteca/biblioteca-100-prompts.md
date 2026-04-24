# Biblioteca de 100 Prompts — Do Zero ao SaaS

> Referência completa dos 100 prompts do método, organizados por categoria e ferramenta.
> Use a busca do seu leitor (Cmd/Ctrl + F) pra achar o prompt que precisa.
> Formato otimizado pra importar no Notion, Obsidian ou qualquer editor Markdown.

**Total de prompts:** 100
**Última atualização:** 2026-04-23

---

## Sumário por categoria

- [🎯 Planejamento](#planejamento) — 8 prompts
- [🔍 Pesquisa](#pesquisa) — 4 prompts
- [🏗️ Arquitetura](#arquitetura) — 6 prompts
- [🎨 Design](#design) — 5 prompts
- [⚙️ Desenvolvimento](#desenvolvimento) — 13 prompts
- [🔌 Integração](#integracao) — 12 prompts
- [🛡️ Auditoria](#auditoria) — 5 prompts
- [🐛 Debug](#debug) — 5 prompts
- [📝 Conteúdo](#conteudo) — 7 prompts
- [📣 Marketing](#marketing) — 9 prompts
- [✉️ Emails](#emails) — 5 prompts
- [💰 Vendas](#vendas) — 6 prompts
- [⚙️ Operações](#ops) — 9 prompts
- [✨ Skills do Claude](#skills) — 6 prompts

---

## 🎯 Planejamento

<a id="planejamento"></a>

### 001. Pressionar uma ideia como investidor

**Ferramenta:** 🧠 Claude

```
Aja como um investidor cético e rigoroso. Vou descrever uma ideia de SaaS. Sua tarefa: listar os 5 maiores riscos em ordem de gravidade, identificar 3 suposições que estou assumindo como verdade, e sugerir o menor experimento possível para validar a #1. Se a ideia for fraca, fale sem rodeios.

IDEIA: [descreva em 2-3 frases]
PÚBLICO: [quem usaria]
MODELO: [como ganha dinheiro]
```

---

### 002. Refinar proposta de valor em 1 frase

**Ferramenta:** 🧠 Claude

```
Ajude-me a escrever a proposta de valor do meu SaaS em UMA frase com a estrutura: '[Produto] ajuda [Persona] a [Resultado] sem [Dor evitada]'.

Gere 10 variações diferentes dessa frase pra:

PRODUTO: [nome + descrição em 1 linha]
PERSONA: [quem é]
PROBLEMA: [dor principal]

Varie os ângulos: velocidade, qualidade, economia, conforto, status. Indique qual versão você escolheria e por quê.
```

---

### 003. Definir escopo de MVP — entra e fica de fora

**Ferramenta:** 🧠 Claude

```
Estou planejando um MVP com prazo de 30 dias. Abaixo está a lista COMPLETA de features que me ocorreram. Ajude-me a dividir entre 'ENTRA no MVP' e 'FICA DE FORA' usando estes critérios:

1. É essencial pra resolver o problema central do usuário?
2. Dá pra construir em menos de 3 dias?
3. Se eu remover, o produto ainda tem valor pagável?

Se a resposta pros 3 for SIM, entra. Senão, fica de fora.

LISTA DE FEATURES:
[cole sua lista]

Seja rigoroso. Espero que pelo menos metade fique de fora.
```

---

### 004. Criar personas detalhadas

**Ferramenta:** 🧠 Claude

```
Crie 2 personas detalhadas pro meu produto.

PRODUTO: [descrição]
MERCADO-ALVO GERAL: [ex: profissionais criativos 25-40 anos]

Pra cada persona, entregue:
- Nome fictício
- Idade, ocupação, contexto familiar
- Um dia típico dela (2 parágrafos)
- Dor principal relacionada ao meu produto
- Soluções atuais que ela usa (e por que não resolvem)
- Em que momento ela buscaria algo como o meu produto
- Objeções que ela teria pra pagar
- Ticket mensal que ela aceitaria pagar

Não invente persona genérica. Seja específico.
```

---

### 005. Definir métricas do MVP

**Ferramenta:** 🧠 Claude

```
Quais métricas eu deveria monitorar nos primeiros 90 dias do meu MVP?

PRODUTO: [descrição + modelo de receita]

Entregue:
1. Métrica de aquisição principal (com meta numérica pros 90 dias)
2. Métrica de ativação (usuário chegando ao 'aha moment')
3. Métrica de retenção
4. Métrica de receita
5. Métrica de referência/viralização (se aplicável)

Pra cada métrica:
- Como calcular
- Meta realista pros 90 dias
- Sinal de alerta (quando preocupar)
- Ferramenta sugerida pra medir

Seja prático. Nada de métrica vaidosa (tipo 'visitantes na landing').
```

---

### 097. Plano de features pra V2 pós-lançamento

**Ferramenta:** 🧠 Claude

```
Meu MVP está no ar faz [X semanas]. Me ajude a planejar features da V2.

FEEDBACK RECEBIDO DOS PRIMEIROS CLIENTES:
[cole feedback consolidado]

MÉTRICAS ATUAIS:
- Cadastros: [X]
- Conversão: [Y%]
- Churn mensal: [Z%]
- Pedido mais comum: [liste]

ENTREGUE:
1. Priorize features usando RICE framework (Reach, Impact, Confidence, Effort)
2. Top 5 pra V2 em ordem
3. Top 3 que você NÃO deveria construir mesmo tendo pedido (explique por quê)
4. Prazo realista pra cada uma
5. Features que resolveriam objeções de compra (não só delight de atual)
```

---

### 099. Roadmap trimestral do produto

**Ferramenta:** 🧠 Claude

```
Desenhe roadmap trimestral (próximos 90 dias) pro meu produto.

SITUAÇÃO ATUAL:
- Usuários: [X]
- MRR: R$ [Y]
- Churn: [Z%]
- Features: [liste principais]

OBJETIVOS DO TRIMESTRE (priorizados):
1. [objetivo 1 — ex: dobrar MRR]
2. [objetivo 2 — ex: reduzir churn]
3. [objetivo 3]

ENTREGUE:
1. Macro-iniciativas pra cada objetivo (3-4 por objetivo)
2. Cronograma semana a semana
3. Métricas pra validar sucesso de cada iniciativa
4. Dependências e riscos
5. 'Não vou fazer' list (o que recusar pra manter foco)

Seja rigoroso. Se o roadmap tem 30 itens, você vai entregar 5. Foque em menos com mais peso.
```

---

### 100. Retrospectiva dos 30 dias da trilha

**Ferramenta:** 🧠 Claude

```
Estou terminando a trilha Do Zero ao SaaS (30 dias). Me ajude a fazer retrospectiva.

ONDE CHEGUEI:
- Produto no ar: [sim/não, URL se sim]
- Primeiras vendas: [quantidade]
- MRR: R$ [X]
- O que funcionou MUITO: [liste]
- O que NÃO funcionou: [liste]
- O que mudaria se refizesse: [liste]

ENTREGUE:
1. Análise objetiva do que aconteceu (celebrar vitórias reais, sem inflar)
2. 5 lições centrais pra memorizar
3. Próximos 30 dias: 3 prioridades em ordem
4. O que parar de fazer (importante tanto quanto o que começar)
5. Habilidades a aprofundar nos próximos 90 dias

Tom: mentor honesto, não torcida cega.
```

---

## 🔍 Pesquisa

<a id="pesquisa"></a>

### 006. Mapear concorrentes diretos e indiretos

**Ferramenta:** 🔎 Gemini

```
Faça uma pesquisa rápida de concorrentes pro seguinte produto.

PRODUTO: [descrição em 1-2 frases]
MERCADO: [Brasil / global]

Me entregue:
1. 10 concorrentes diretos (mesma proposta de valor)
2. 5 concorrentes indiretos (resolvem a mesma dor de outra forma)
3. 3 produtos adjacentes (mercado próximo)

Para cada um: URL, proposta de valor em 1 frase, preço mensal, ponto forte, ponto fraco.

Use busca. Cite fontes. Priorize empresas com presença real (site funcional, última atualização recente).
```

---

### 007. Identificar tendências do nicho

**Ferramenta:** 🔎 Gemini

```
Quais são as tendências dos últimos 12 meses no nicho de [SEU NICHO]?

Quero:
1. 5 tendências fortes com evidência (artigo, reporte, dado)
2. 3 tendências em declínio (o que não funciona mais)
3. Previsão pros próximos 12 meses
4. Implicações pra quem vai lançar um produto novo no nicho

Priorize fontes de: Gartner, McKinsey, relatórios setoriais, TechCrunch, 10-K de empresas do nicho, boletins setoriais. Cite todas as fontes com link.
```

---

### 008. Pesquisa profunda com relatório PDF

**Ferramenta:** 🤖 Manus

```
Faça uma pesquisa de mercado completa e entregue um relatório estruturado em PDF.

NICHO: [descrição em 1-2 frases]
REGIÃO: [Brasil / LATAM / Global]
MEU PRODUTO: [1 parágrafo]

Entrega esperada — relatório de 15-25 páginas com:
1. Tamanho de mercado atual e projetado (com fontes)
2. Mapa de 30-50 concorrentes com URL, preço, proposta
3. Matriz SWOT consolidada dos 5 principais
4. 5 tendências relevantes com evidências dos últimos 12 meses
5. 3 lacunas de mercado não atendidas
6. 5 ângulos de posicionamento diferenciado
7. Apêndice com todas as fontes linkadas

Requisitos:
- Todas as afirmações com fonte linkada
- Priorizar dados primários (Statista, 10-K, reports)
- Tabelas markdown pra dados comparativos
- Tom executivo, sem floreio
```

---

### 009. Validar disposição de pagar

**Ferramenta:** 🔎 Gemini

```
Me ajude a estimar a disposição de pagar do meu público-alvo.

PRODUTO: [descrição + proposta de valor]
PÚBLICO: [persona]
FAIXA DE PREÇO QUE ESTOU CONSIDERANDO: R$ [X] a R$ [Y] / mês

Entregue:
1. 5 concorrentes similares e o que cobram
2. Análise se meu público aceita esse ticket hoje
3. Ferramentas adjacentes que esse público já paga
4. Recomendação de ticket com justificativa
5. Estratégia de posicionamento em relação ao preço (barato, premium, meio)

Seja realista. Se o ticket está desajustado, me avise.
```

---

## 🏗️ Arquitetura

<a id="arquitetura"></a>

### 010. Escrever PRD completo

**Ferramenta:** 🧠 Claude

```
Atue como Product Manager sênior. Gere um PRD completo para o seguinte projeto.

PROJETO: [nome + 1 parágrafo]
PROBLEMA: [dor resolvida]
USUÁRIO-ALVO: [persona]
STACK: Lovable (React/TS) + Supabase + Stripe + Resend

Estrutura do PRD:
1. Visão e objetivo
2. Problema e contexto
3. Personas detalhadas
4. Proposta de valor
5. Escopo do MVP (ENTRA e FICA DE FORA)
6. Fluxos principais de usuário
7. Schema de banco (tabelas + relações em SQL)
8. Autenticação e segurança (RLS)
9. Integrações externas
10. Métricas de sucesso
11. Riscos e mitigações

Seja específico. Liste em vez de parafrasear. Onde houver decisão, recomende UMA opção com 1 frase de justificativa.
```

---

### 011. Projetar schema Supabase completo

**Ferramenta:** 🧠 Claude

```
Projete o schema Supabase completo pro seguinte produto.

PRODUTO: [descrição + funcionalidades principais]

Entregue:
1. SQL completo CREATE TABLE com tipos corretos.
2. Índices nos campos que serão consultados frequentemente.
3. Relações com foreign keys.
4. RLS ativo em TODAS as tabelas com dados de usuário.
5. Policies mínimas (select, insert, update, delete).
6. Triggers onde fizer sentido (ex: updated_at automático, novo profile ao cadastrar).
7. Função helper pra checar assinatura ativa.

Inclua comentários explicando decisões. Priorize segurança — assuma que será produção com dados sensíveis.
```

---

### 012. Definir estrutura de pastas do projeto

**Ferramenta:** 🧠 Claude

```
Sugira uma estrutura de pastas pro meu projeto React/TS.

PROJETO: [descrição]
FEATURES PRINCIPAIS: [lista]

Quero estrutura:
- Escalável (aguenta 3x o tamanho atual sem ficar bagunçado)
- Fácil de navegar (nomenclatura clara)
- Compatível com convenções modernas (Next.js App Router ou Vite + React Router)

Entregue:
1. Árvore de pastas visual
2. Justificativa de cada pasta
3. Exemplo de 3 arquivos que morariam em cada uma
4. Convenções de nomenclatura (PascalCase, kebab-case, etc)
```

---

### 013. Decidir stack com base em requisitos

**Ferramenta:** 🧠 Claude

```
Me ajude a decidir o stack ideal pro meu produto.

REQUISITOS:
- [requisito 1]
- [requisito 2]
- [requisito 3]

RESTRIÇÕES:
- Orçamento mensal pra infra: R$ [X]
- Não sou dev (preciso usar IA pra construir)
- Quero poder escalar sem migrar em 2 anos

Compare 3 opções de stack, com vantagens e desvantagens pra cada uma no meu contexto. Recomende UMA com justificativa clara.
```

---

### 014. Diagrama de fluxo de autenticação

**Ferramenta:** 🧠 Claude

```
Desenhe (em markdown/ASCII ou Mermaid) o fluxo completo de autenticação do meu app.

PROVEDORES: email/senha + Google OAuth
PLATAFORMA: Supabase Auth
FRONTEND: React + TypeScript

Cubra:
1. Signup (cadastro + email de confirmação)
2. Login via email
3. Login via Google
4. Recuperação de senha
5. Logout
6. Sessão expirando
7. Rota protegida tentando ser acessada sem login

Inclua decisões de roteamento em cada cenário (pra onde redirecionar).
```

---

### 087. Escolher entre serverless vs servidor dedicado

**Ferramenta:** 🧠 Claude

```
Me ajude a decidir: serverless (Vercel/Supabase Edge Functions) OU servidor dedicado (VPS, AWS EC2) pro meu backend.

MEU APP: [descrição + funcionalidades]
VOLUME ESPERADO ANO 1: [baixo/médio/alto]
CASO DE USO MAIS PESADO: [ex: processamento de vídeo, IA, real-time]
ORÇAMENTO MENSAL: R$ [X]
EXPERIÊNCIA MINHA COM DevOps: [iniciante]

COMPARE:
1. Custo estimado em cada cenário
2. Complexidade operacional
3. Escalabilidade automática
4. Latência
5. Manutenção necessária

RECOMENDE uma com justificativa objetiva. E diga quando eu deveria reconsiderar.
```

---

## 🎨 Design

<a id="design"></a>

### 015. Definir design system minimalista

**Ferramenta:** 🧠 Claude

```
Defina um design system mínimo mas profissional pro meu produto.

PRODUTO: [descrição + público]
SENSAÇÃO DESEJADA: [ex: dark minimal, editorial, premium]

Entregue:
1. Paleta (fundo, texto, accent, mute, error, success) com hex
2. Tipografia (fonte de título + corpo + mono se aplicável)
3. Espaçamentos (escala de 4 a 128px)
4. Border radius padrão
5. Tamanhos de botão (small, default, large)
6. Três exemplos de referência visual (marcas reais)
7. O que EVITAR (ex: gradientes, ícones infantis)

Mantenha simples. Nada de 12 cores. 4-5 bastam.
```

---

### 016. Gerar ilustração hero pra landing

**Ferramenta:** 💡 Gpt

```
Gere uma ilustração hero pra landing de um produto chamado [NOME].

ESTILO: [isométrico / flat / 3D / minimalista]
PALETA: [cores principais]
ASSUNTO: [o que aparece na cena]
USO: banner hero, dimensão 16:9, sem texto
REFERÊNCIA VISUAL: [cite 1-2 marcas]
EVITAR: rostos humanos realistas, texto, clichês de SaaS (gráfico subindo, foguete)
```

---

### 017. Gerar 3 ícones pra as features principais

**Ferramenta:** 💡 Gpt

```
Gere 3 ícones minimalistas pra representar as seguintes features do meu produto.

FEATURE 1: [nome + 1 linha]
FEATURE 2: [nome + 1 linha]
FEATURE 3: [nome + 1 linha]

ESTILO: linha fina, monocromático, quadrado 1:1, fundo transparente
PALETA: preto/branco só (vou tintar depois)
TAMANHO: 512x512
INSPIRAÇÃO: Lucide icons, Phosphor icons
```

---

### 018. Revisar UI de uma tela

**Ferramenta:** 🧠 Claude

```
Vou descrever (ou anexar screenshot de) uma tela do meu app. Faça review de UX/UI e aponte 7 melhorias, em ordem de impacto.

Critérios: clareza visual, hierarquia, acessibilidade, conforto em dispositivos diferentes, call to action claro, consistência com o resto do produto.

Pra cada melhoria: problema → solução concreta → por que importa.

Não elogie. Aponte só o que precisa mudar.

[descrição ou imagem da tela]
```

---

### 019. Criar copy de empty states

**Ferramenta:** 🧠 Claude

```
Escreva 5 empty states pro meu produto.

CONTEXTO: [ex: 'usuário abre o dashboard e ainda não criou nada']

Pra cada empty state, entregue:
- Headline curta (máx 8 palavras)
- Subtexto explicando
- CTA em 1 linha
- Sugestão de ilustração/ícone simples

Tom: encorajador mas não cafona. Nada de 'Oh não, está vazio!' — prefira 'Comece criando sua primeira nota'.

EMPTY STATES A COBRIR:
1. Dashboard vazio (primeiro login)
2. Busca sem resultados
3. Feed sem notificações
4. Lista de [items] vazia
5. Erro de conexão
```

---

## ⚙️ Desenvolvimento

<a id="desenvolvimento"></a>

### 020. Scaffold inicial premium (1 prompt)

**Ferramenta:** 🛠️ Lovable

```
Crie um aplicativo web com as seguintes especificações.

NOME: [nome]
DESCRIÇÃO: [1 frase]
STACK: React + TypeScript + Tailwind + shadcn/ui + Supabase

TELAS:
1. Landing pública (hero, features, pricing, footer)
2. Login/Signup com Supabase Auth (email + Google)
3. /app — dashboard protegido
4. [tela principal 1]
5. [tela principal 2]

SCHEMA SUPABASE:
[cole o schema completo]

ESTÉTICA: [3 palavras — ex: 'dark minimal sóbria']
INSPIRAÇÃO: [1-2 marcas — ex: 'Linear, Arc']

Configure Supabase Auth, proteja /app/*, integre schema. DEPOIS vou mover pro GitHub e editar via Claude Code.
```

---

### 021. Adicionar feature completa

**Ferramenta:** 💻 Claude Code

```
Preciso adicionar a feature [NOME] ao projeto.

COMPORTAMENTO ESPERADO:
1. [passo 1 do fluxo]
2. [passo 2]
3. [passo 3]
4. [resultado]

CONSIDERAÇÕES:
- Precisa de [permissões/auth]
- Deve persistir em [tabela X]
- Integra com [serviço externo, se houver]

Antes de editar, liste os arquivos que vai mexer e peça aprovação. Depois implemente e me mostre o diff.
```

---

### 022. Refatorar código duplicado

**Ferramenta:** 💻 Claude Code

```
A lógica [X] está duplicada em [N] arquivos. Extraia pra [um hook customizado / uma função utilitária / um componente reutilizável] em [pasta sugerida].

Mantenha o comportamento idêntico. Atualize todos os imports. Teste que nada quebrou.

Mostre antes e depois em cada arquivo tocado.
```

---

### 023. Criar hook customizado

**Ferramenta:** 💻 Claude Code

```
Crie um hook customizado chamado use[Nome] que encapsula [funcionalidade].

API ESPERADA:
```
const { data, loading, error, [actions] } = use[Nome]([params])
```

COMPORTAMENTO:
- [descreva o que o hook faz]
- [estado inicial]
- [efeitos colaterais]

Inclua tipagem TypeScript completa. Salve em /hooks/use[Nome].ts.
```

---

### 024. Migrar componente pra server component

**Ferramenta:** 💻 Claude Code

```
Este componente é client-side mas não precisa ser. Converta pra server component do Next.js App Router.

CRITÉRIOS:
- Remove 'use client'
- Queries ao banco acontecem no servidor
- Estado interativo (se houver) vai pra sub-componente client separado

Arquivo: [caminho]

Explique a estrutura final em 2 bullets.
```

---

### 025. Melhorar acessibilidade de uma tela

**Ferramenta:** 💻 Claude Code

```
Audite a acessibilidade da tela [X] e aplique correções.

CRITÉRIOS:
- ARIA labels onde necessário
- Contraste WCAG AA
- Navegação por teclado completa
- Focus states visíveis
- Semântica HTML correta (button vs div clicável, etc)
- Alt text em imagens

Mostre o que foi mudado arquivo por arquivo.
```

---

### 026. Implementar dark mode

**Ferramenta:** 💻 Claude Code

```
Implemente dark mode no projeto.

REQUISITOS:
- Toggle na interface (header ou menu)
- Preferência salva em localStorage
- Respeita prefers-color-scheme do SO no primeiro load
- Todas as cores via CSS variables (evitar hex hardcoded)
- Transição suave entre modos

Mostre as mudanças em: tailwind.config, CSS global, componente de toggle, e exemplo de aplicação em 1-2 componentes.
```

---

### 027. Adicionar loading states em toda app

**Ferramenta:** 💻 Claude Code

```
Toda ação assíncrona no meu app hoje não mostra feedback de loading. Percorra todos os hooks/queries e adicione loading states consistentes.

PADRÃO A SEGUIR:
- Skeleton em listas
- Spinner em botões de ação (desabilitar durante loading)
- Placeholder em textos aguardando dados
- Toast 'Carregando...' em ações que demoram >1s

Liste os arquivos tocados ao final.
```

---

### 028. Implementar error boundary React

**Ferramenta:** 💻 Claude Code

```
Adicione ErrorBoundary pro meu app React.

REQUISITOS:
- ErrorBoundary no topo da árvore (envolve /app)
- Fallback UI amigável ('Algo deu errado. Tente novamente.')
- Botão 'Recarregar página'
- Logar erro pra console (em dev) e pra serviço externo (em prod)
- Permitir ErrorBoundary aninhado em rotas específicas se necessário

Mostre o componente e como usar.
```

---

### 029. Otimizar performance de lista grande

**Ferramenta:** 💻 Claude Code

```
A página [X] mostra uma lista de potencialmente milhares de itens e está lenta. Otimize a renderização.

TÉCNICAS A APLICAR:
- Virtualização (react-window ou tanstack virtual)
- Paginação ou infinite scroll
- Memoização de itens da lista
- Query do banco com limit + offset (não buscar tudo de uma vez)
- Debounce em filtros/busca

Explique o que foi aplicado e o ganho esperado.
```

---

### 088. Implementar rate limiting

**Ferramenta:** 💻 Claude Code

```
Implemente rate limiting pro meu app.

ENDPOINTS A PROTEGER:
- [endpoint 1]: [limite sugerido]
- [endpoint 2]: [limite sugerido]

TÉCNICA RECOMENDADA: [por IP / por user_id / combinação]
STORAGE DO CONTADOR: [memória (simples) / Redis / Supabase]

CASOS A TRATAR:
- Rate limit excedido: retornar 429 com header Retry-After
- Usuário autenticado: contar por user_id (mais justo)
- Usuário anônimo: contar por IP
- Whitelist de IPs (opcional)

Entregue código + exemplo de aplicação em 1 endpoint.
```

---

### 089. Adicionar busca full-text

**Ferramenta:** 💻 Claude Code

```
Implemente busca full-text na tabela [X].

CAMPOS BUSCÁVEIS: [liste]
REQUISITOS:
- Portuguese dictionary (ignora acento, stemming)
- Ranking por relevância
- Highlight dos termos encontrados
- Debounce de 300ms no frontend
- RLS respeitado (só retorna resultados do próprio usuário)

USE Postgres built-in tsvector + tsquery (Supabase suporta).

Entregue: migration SQL, função de busca, hook customizado no frontend.
```

---

### 090. Implementar upload de arquivo com preview

**Ferramenta:** 💻 Claude Code

```
Implemente upload de arquivo com preview antes do envio.

TIPOS ACEITOS: [imagem / PDF / áudio]
TAMANHO MÁXIMO: [X MB]
DESTINO: Supabase Storage bucket '[nome]'

COMPORTAMENTO:
1. Usuário seleciona/arrasta arquivo
2. Preview imediato (pra imagem: thumbnail; pra PDF: primeira página; pra áudio: player)
3. Validação: tipo, tamanho
4. Botão 'Upload' envia
5. Progress bar durante upload
6. Sucesso: URL retornada + limpa preview
7. Falha: toast de erro descritivo

Use drag-and-drop com react-dropzone. Entregue componente reutilizável.
```

---

## 🔌 Integração

<a id="integracao"></a>

### 030. Configurar Supabase (modo tutor)

**Ferramenta:** 🔎 Gemini

```
Sou iniciante absoluto. Nunca configurei banco de dados na vida.

Preciso: criar projeto Supabase do zero com as tabelas [liste], configurar RLS em todas, habilitar Google OAuth.

Stack: React + TypeScript + Supabase.

Me guie passo a passo. Regras:
- Pergunte antes de assumir
- Valide cada etapa comigo
- Vou mandar print quando travar
- Evite jargão (se usar, defina em 1 frase)
- Ao final de cada etapa, pergunte 'confirmado?' antes de seguir

Vamos começar pela etapa 1.
```

---

### 031. Configurar DNS e domínio (modo tutor)

**Ferramenta:** 🔎 Gemini

```
Sou iniciante. Nunca configurei DNS.

Preciso apontar [domínio] comprado em [Registro.br / outro] pro site hospedado em Vercel.

Me guie passo a passo. Regras do modo tutor (pergunte, valide, sem jargão).

Antes de começar, explique em 2 frases: o que é DNS, diferença entre registros A e CNAME, tempo de propagação.
```

---

### 032. Configurar Stripe webhook (modo tutor)

**Ferramenta:** 🔎 Gemini

```
Sou iniciante em webhook. Configurar Stripe pra SaaS de assinatura.

Stack: Supabase Edge Functions pra endpoint.
Eventos: checkout.session.completed, customer.subscription.updated, customer.subscription.deleted, invoice.payment_failed.

Me guie passo a passo. Modo tutor.

Antes de começar: explique webhook em 2 frases, por que precisa validar stripe-signature, diferença entre test e live.
```

---

### 033. Configurar Google OAuth (modo tutor)

**Ferramenta:** 🔎 Gemini

```
Sou iniciante no Google Cloud Console. Configurar Sign in with Google integrado ao Supabase Auth.

Domínio produção: [X]
Dev: localhost:3000

Me guie passo a passo. Modo tutor.

Explique antes: OAuth em 2 frases, diferença entre Consent Screen e Credentials, por que redirect URI é onde 90% erra.
```

---

### 034. Deploy no Vercel + leitura de log (modo tutor)

**Ferramenta:** 🔎 Gemini

```
Primeiro deploy no Vercel. Sou iniciante.

Repo no GitHub, variáveis de ambiente: [liste].
Domínio: [X] (se tiver).

Me guie passo a passo. Modo tutor.

Explique antes: o que é deploy, diferença Preview vs Production, por que VITE_ e NEXT_PUBLIC_ vazam pro frontend.

Se build falhar, vou colar log inteiro — você explica e corrige.
```

---

### 035. Implementar Edge Function de webhook Stripe

**Ferramenta:** 💻 Claude Code

```
Crie uma Edge Function do Supabase pra receber webhooks do Stripe.

EVENTOS A TRATAR:
- checkout.session.completed → cria/atualiza subscription
- customer.subscription.updated → atualiza status
- customer.subscription.deleted → marca como canceled
- invoice.payment_failed → marca past_due

REQUISITOS:
- Validar stripe-signature no início (SEMPRE)
- Usar STRIPE_WEBHOOK_SECRET de variável de ambiente
- Salvar log de todo evento recebido na tabela stripe_webhook_logs
- Responder 200 rápido, processar assíncrono se precisar

Entregue o arquivo completo /functions/stripe-webhook/index.ts com comentários.
```

---

### 036. Implementar Checkout Session Stripe

**Ferramenta:** 💻 Claude Code

```
Crie o fluxo de Checkout Session do Stripe pro meu app.

COMPORTAMENTO:
1. Usuário clica em 'Assinar' na UI
2. Frontend chama Edge Function /create-checkout
3. Edge Function cria Checkout Session com dados do usuário
4. Retorna URL do checkout
5. Frontend redireciona pra essa URL
6. Após pagamento, Stripe redireciona pra /app?checkout=success

PriceID: [seu_price_id]
Mode: subscription
Success URL: /app?checkout=success
Cancel URL: /app?checkout=canceled

Entregue: Edge Function + componente do botão + handler do redirect.
```

---

### 037. Integrar envio de email transacional (Resend)

**Ferramenta:** 💻 Claude Code

```
Integre envio de email transacional via Resend.

EMAILS A IMPLEMENTAR:
1. Welcome (após cadastro confirmado)
2. Subscription confirmed (após webhook checkout.session.completed)
3. Subscription canceled
4. Payment failed

REQUISITOS:
- Usar RESEND_API_KEY de variável de ambiente
- From: 'contato@[seudominio.com]' (assumir domínio verificado)
- Templates em arquivos separados em /emails
- HTML simples mas responsivo
- Fallback em texto puro

Entregue templates + função de envio reutilizável.
```

---

### 038. Integrar API da Anthropic

**Ferramenta:** 💻 Claude Code

```
Integre chamadas à API da Anthropic (Claude) no meu app.

CASO DE USO: [descreva, ex: 'destilar nota em resumo']

REQUISITOS:
- API key em ANTHROPIC_API_KEY (Edge Function, NUNCA no frontend)
- Edge Function recebe payload, chama Anthropic, retorna resposta
- Frontend chama a Edge Function (não a Anthropic direto)
- Tratamento de erro robusto (timeouts, rate limits)
- Modelo: claude-sonnet-4-6

Entregue: Edge Function + hook customizado useClaude + exemplo de uso.
```

---

### 039. Adicionar tracking com Plausible

**Ferramenta:** 💻 Claude Code

```
Adicione Plausible Analytics ao meu app.

EVENTOS CUSTOM A TRACKAR:
- signup (com método: email ou google)
- subscription_started (com plan)
- subscription_canceled
- [evento principal do produto]

REQUISITOS:
- Script só em produção (não em dev/preview)
- Privacy-friendly (sem cookies)
- Respeitar Do Not Track

Entregue: script no layout + helpers pra disparar eventos custom.
```

---

### 091. Webhook receiver genérico (qualquer provedor)

**Ferramenta:** 💻 Claude Code

```
Crie um Edge Function genérico pra receber webhook de qualquer provedor (Stripe, Resend, etc).

COMPORTAMENTO:
1. Endpoint único em /webhooks/[provider]
2. Valida assinatura cripto conforme o provider
3. Salva payload cru na tabela webhook_logs (pra debug)
4. Roteia pra handler específico baseado no provider + event_type
5. Responde 200 imediatamente
6. Processamento pesado acontece async

ENTREGUE:
- Estrutura de pastas
- Handler base
- Exemplo concreto pra Stripe e Resend
- Testes mínimos
```

---

### 092. Configurar Sentry pra captura de erro

**Ferramenta:** 💻 Claude Code

```
Integre Sentry pra captura de erros em produção.

AMBIENTE: [React frontend + Supabase Edge Functions]

REQUISITOS:
- Sentry DSN em variável de ambiente
- Ativar só em produção (não em dev)
- Capturar erros não tratados automaticamente
- Permitir captura manual: Sentry.captureException()
- Adicionar user context após login
- Breadcrumbs de navegação
- Source maps pra stack trace legível

Entregue: setup no frontend + Edge Function middleware + exemplo de uso.
```

---

## 🛡️ Auditoria

<a id="auditoria"></a>

### 040. Auditoria 4 níveis do código

**Ferramenta:** 🧠 Claude

```
Vou colar um trecho de código. Faça auditoria em 4 níveis:

1. BUGS: o que vai quebrar
2. SEGURANÇA: RLS, chaves expostas, validação
3. PERFORMANCE: N+1, re-renders, indexes
4. MANUTENIBILIDADE: duplicação, nomes ruins

Pra cada achado: gravidade (crítico/médio/baixo), linha específica, correção em código.

Ordene do mais grave ao menor. Nada de elogiar.

[código]
```

---

### 041. Revisar RLS policies

**Ferramenta:** 🧠 Claude

```
Vou colar as policies de RLS do meu Supabase. Audite quanto a:

1. Alguma tabela sem RLS ativo?
2. Alguma policy com USING mal construída (permitindo acesso indevido)?
3. Alguma operação (SELECT/INSERT/UPDATE/DELETE) sem policy quando deveria ter?
4. Uso de auth.uid() em todos os lugares certos?
5. Policies de INSERT usam WITH CHECK (não USING)?

Pra cada problema: tabela, tipo de operação, o que está errado, SQL corrigido.

[policies]
```

---

### 042. Auditoria pré-produção

**Ferramenta:** 🧠 Claude

```
Vou te dar uma visão geral do meu app. Faça auditoria pré-produção completa antes de eu aceitar pagamento real.

STACK: [descreva]
FEATURES: [liste]
INTEGRAÇÕES: [liste]

Pontos a auditar:
1. Segurança (RLS, chaves, validação, XSS, CSRF)
2. Fluxo de pagamento (Stripe, webhook, validação de assinatura)
3. Tratamento de erro (o que acontece se Supabase cai? E se Stripe cai?)
4. UX em casos extremos (sem rede, sessão expirada, rate limit)
5. LGPD (consentimento, remoção de conta, export de dados)
6. Observabilidade (como sei que algo quebrou em produção?)

Entregue checklist de itens obrigatórios antes de live mode.
```

---

### 043. Revisar UX de formulário

**Ferramenta:** 🧠 Claude

```
Vou descrever um formulário do meu app. Audite quanto a UX.

FORMULÁRIO: [descreva ou anexe screenshot]
FINALIDADE: [ex: cadastro, checkout]

Audite:
1. Quantos campos são realmente necessários?
2. Labels estão claros?
3. Mensagens de erro são específicas?
4. Validação acontece no momento certo (inline, on blur, on submit)?
5. Botão principal está claro?
6. Opção de cancelar/voltar existe?
7. Autofill de navegador está funcionando?
8. Mobile é confortável?

Ranqueie os 5 principais problemas por impacto.
```

---

### 095. Revisar landing antes de publicar

**Ferramenta:** 🧠 Claude

```
Vou te dar o copy da minha landing. Revise quanto a:

1. HEADLINE: tem promessa clara e específica? (teste: 5 segundos, eu entendo?)
2. ABOVE THE FOLD: CTA óbvio? Cliente sabe o próximo passo?
3. PROVA SOCIAL: onde? é crível?
4. COPY: tem jargão? redundâncias? paragrafões?
5. PREÇO: está visível? ou obscurecido?
6. OBJEÇÕES: as 3 principais estão tratadas?
7. CTA FINAL: urgência real? ou FOMO falso?
8. MOBILE: layout aguenta tela pequena?

PRA CADA PONTO: status (bom / aceitável / precisa melhorar) + correção concreta.

[cole o copy]
```

---

## 🐛 Debug

<a id="debug"></a>

### 044. Debug de erro por screenshot

**Ferramenta:** 🔎 Gemini

```
[anexar print da tela com erro]

O que está acontecendo nesse erro?

Contexto:
- Tentando fazer [X]
- Stack: [React + Supabase + etc]
- Começou a acontecer [sempre / após mudança Y]

Me explique:
1. O que o erro significa em português simples
2. As 3 causas mais prováveis, em ordem
3. Como verificar qual é a causa real
4. A correção pra cada causa
```

---

### 045. Investigar bug reportado por usuário

**Ferramenta:** 💻 Claude Code

```
Um usuário relatou o seguinte bug: [descrição exata do que ele relatou]

Investigue seguindo este método:
1. Reproduza mentalmente o fluxo que o usuário descreveu
2. Identifique os arquivos envolvidos
3. Encontre a causa raiz (não o sintoma)
4. Proponha correção com código antes de aplicar
5. Depois de aprovar, aplique e crie teste que previne regressão

Detalhe cada passo. Não pule pro código direto.
```

---

### 046. Interpretar log de build falho

**Ferramenta:** 🔎 Gemini

```
Meu build no [Vercel / Netlify / outro] falhou. Vou colar o log completo abaixo. Me explique em português:

1. O que aconteceu
2. Qual o erro específico
3. Causa provável
4. 3 soluções possíveis em ordem de probabilidade
5. Como prevenir no futuro

Se precisar de mais contexto (como meu package.json ou configuração), me peça.

[cole o log aqui]
```

---

### 047. Resolver bug de race condition

**Ferramenta:** 💻 Claude Code

```
Acho que tem race condition no fluxo [X]. Sintoma: [descreva].

Investigue esse código, identifique se há race, e conserte.

TÉCNICAS QUE PODEM AJUDAR:
- AbortController em requests concorrentes
- Locks simples em estado
- Debounce em ações rápidas
- Optimistic UI com rollback

Explique por que o bug acontece antes de aplicar correção.
```

---

### 048. Validar por que sources não casam

**Ferramenta:** 🔎 Gemini

```
Tenho uma discrepância entre o que meu backend diz e o que meu frontend exibe.

BACKEND (query ou resposta de API): [cole]
FRONTEND (o que aparece na tela): [cole]

Investigue por que não casam. Possíveis causas:
- Transformação de dados no meio do caminho
- Cache antigo
- Tipagem errada
- Timezone
- Formatação de número/moeda

Aponte o mais provável com justificativa.
```

---

## 📝 Conteúdo

<a id="conteudo"></a>

### 049. Produzir batch de conteúdo (posts/reels/emails)

**Ferramenta:** 🤖 Manus

```
Produza um batch de conteúdo.

FORMATO: [posts de blog / roteiros de reel / threads X / emails / carrosséis LinkedIn]
QUANTIDADE: [10 / 20 / 30]
NICHO: [seu nicho]
AUDIÊNCIA: [persona]
TOM: [direto brasileiro anti-hype / acadêmico / descontraído]

Pra cada peça: gancho, corpo completo, CTA, 3 variações de thumbnail/capa (se aplicável), hashtags.

DIRETRIZES:
- Evitar: [clichês que você odeia]
- Incluir: [bordões, posicionamento]
- Priorizar: [listas / histórias pessoais / contraintuitivo]

ENTREGÁVEL: markdown ou planilha com peças numeradas prontas pra publicação.
```

---

### 050. Criar 10 ganchos de conteúdo viral

**Ferramenta:** 💡 Gpt

```
Me dê 10 ganchos (hooks) de conteúdo pro meu nicho.

NICHO: [X]
FORMATO: [Reels / Shorts / Threads X]
OBJETIVO: gerar curiosidade forte nos primeiros 3 segundos

Categorias de gancho (2 cada):
1. Contraintuitivo ('Pare de fazer X')
2. Confissão ('Eu também já fazia Y e estava errado')
3. Número específico ('Os 7 sinais de Z')
4. Pergunta provocativa ('Por que você ainda...?')
5. Promessa específica ('Como dobrei X em 30 dias')

Cada gancho deve ter no máximo 10 palavras. Não use emojis.
```

---

### 051. Transformar capítulo de ebook em 3 reels

**Ferramenta:** 💡 Gpt

```
Vou colar um capítulo do meu ebook abaixo. Transforme em 3 roteiros de reel de 60 segundos pra vender o ebook/curso.

ESTRUTURA PADRÃO DE CADA REEL:
- Segundos 0-3: gancho forte (pergunta, estatística, contraintuitivo)
- Segundos 3-10: problema/contexto
- Segundos 10-40: conteúdo de valor real (prática, específico)
- Segundos 40-50: insight/conclusão
- Segundos 50-60: CTA pro link do ebook

Cada reel deve ser diferente em ângulo. Entregue:
1. Roteiro (texto falado)
2. Descrição de corte/plano visual a cada 5s
3. 3 opções de legenda
4. 5 hashtags

[cole o capítulo]
```

---

### 052. Artigo de blog SEO-friendly (800-1200 palavras)

**Ferramenta:** 🧠 Claude

```
Escreva um artigo de blog.

TÍTULO: [título]
KEYWORD PRINCIPAL: [ex: 'como criar SaaS com IA']
KEYWORDS SECUNDÁRIAS: [liste 3-5]
AUDIÊNCIA: [quem lê]
INTENTO DE BUSCA: [informacional / transacional / navegacional]
TAMANHO: 800-1200 palavras

ESTRUTURA:
- H1 com keyword
- Introdução (100-150 palavras) com gancho
- 3-5 H2s com subseções
- Pelo menos 1 lista numerada
- Pelo menos 1 tabela
- FAQ no final com 3-4 perguntas
- Conclusão com CTA

TOM: autoridade + acessível. Zero fofura.
SEO: keyword no H1, primeiro parágrafo, pelo menos 1 H2, alt text sugerido pra 2 imagens.
```

---

### 053. 50 opções de título/headline

**Ferramenta:** 💡 Gpt

```
Me dê 50 títulos pra [conteúdo: artigo / ebook / curso / vídeo].

TEMA: [sobre o que é]
PÚBLICO: [quem consome]
OBJETIVO: [curiosidade / conversão / autoridade]

Divida em 5 categorias (10 cada):
1. How-to ('Como fazer X sem Y')
2. Número ('7 formas de X')
3. Pergunta ('Por que X acontece?')
4. Contraintuitivo ('X é overrated')
5. Promessa específica ('Dobre X em Z dias')

No final, marque os 5 que mais se destacam e diga por quê.
```

---

### 054. Thread de X/Twitter com 10 tweets

**Ferramenta:** 🧠 Claude

```
Escreva uma thread de 10 tweets.

TEMA: [sobre o que]
TIPO: [ensino prático / storytelling / contraintuitivo / listicle]
PÚBLICO: [quem]

ESTRUTURA:
- Tweet 1: gancho + promessa (máx 250 caracteres, negrito mental)
- Tweets 2-9: desenvolvimento com 1 insight por tweet (cada até 270 caracteres)
- Tweet 10: CTA (pro meu perfil, curso, newsletter — [especifique])

REGRAS:
- Cada tweet vale por si só
- Use parágrafos curtos e quebras de linha
- Zero emoji (ou só 1 muito pontual)
- Português brasileiro casual
```

---

### 055. Newsletter semanal (formato consistente)

**Ferramenta:** 🧠 Claude

```
Escreva 1 edição da minha newsletter.

NICHO: [X]
PÚBLICO: [quem assina]
TOM: [direto brasileiro / técnico / filosófico]
FREQUÊNCIA: semanal

FORMATO PADRÃO (reutilizável):
1. Abertura pessoal (1 parágrafo, toque humano)
2. Insight principal da semana (3-5 parágrafos)
3. 'Pra ler': 2-3 links relevantes da web com 1 frase por link
4. 'Pra pensar': 1 pergunta provocativa
5. Fecho com CTA sutil (link pro meu produto ou próxima edição)

TEMA DESSA EDIÇÃO: [X]

Extensão total: 400-700 palavras.
```

---

## 📣 Marketing

<a id="marketing"></a>

### 056. 15 variações de anúncio (Meta/TikTok)

**Ferramenta:** 💡 Gpt

```
Gere 15 variações de ad pro [Meta Ads / TikTok Ads].

PRODUTO: [1 frase]
PÚBLICO: [persona]
PROMESSA: [resultado prometido]
PREÇO: [R$ X]
FORMATO: [imagem+texto / vídeo+texto / carrossel]

Pra cada ad:
- GANCHO (3-6 palavras, impacto)
- CORPO (3-4 linhas, escaneável)
- CTA (1 linha)

VARIE OS ÂNGULOS:
- 5 ads focados em DOR (o que perde sem)
- 5 ads focados em DESEJO (o que ganha com)
- 5 ads focados em PROVA (caso, número, bastidor)

Português brasileiro casual. Zero 'revolucionário' ou 'transforme sua vida'.
```

---

### 057. Estrutura de funil de lançamento

**Ferramenta:** 🧠 Claude

```
Projete um funil de lançamento pra infoproduto digital.

PRODUTO: [descrição + preço]
DIAS DE LANÇAMENTO: 14
CANAIS DISPONÍVEIS: [ex: Instagram, YouTube, newsletter, X]
BUDGET PRA ADS: R$ [X]

ENTREGUE:
1. Cronograma dia a dia dos 14 dias (o que faço em cada dia)
2. Conteúdo necessário por canal por dia
3. Sequência de emails de lançamento (5-7 emails)
4. Estratégia de ads (criativos, públicos, orçamento)
5. Escassez real a usar (vagas, bônus, lote)
6. Métricas a monitorar cada dia

Seja específico. Nada de 'faça conteúdo de qualidade'.
```

---

### 058. Copy pra landing page de vendas

**Ferramenta:** 💡 Gpt

```
Escreva o copy completo de uma landing page de vendas.

PRODUTO: [nome + 1 frase]
PROMESSA PRINCIPAL: [resultado prometido]
PÚBLICO: [quem]
DOR: [o que sente hoje]
OBJEÇÕES TOP 3: [liste]
PREÇO: [R$ X]

ESTRUTURA:
1. Headline (máx 12 palavras)
2. Subheadline (1-2 frases)
3. 'O problema' (3 parágrafos curtos)
4. 'A solução' (3 bullets)
5. 'O que você leva' (lista entregáveis)
6. 'Pra quem é / Pra quem NÃO é' (2 listas)
7. Objeções (Q&A, 3 pares)
8. CTA final com urgência real

TOM: direto, brasileiro, anti-hype. Sem 'mude sua vida'.
```

---

### 059. Lead magnet que converte

**Ferramenta:** 💡 Gpt

```
Me ajude a criar um lead magnet que converte.

MEU PRODUTO FINAL: [descrição]
AUDIÊNCIA ALVO: [quem]
PROBLEMA QUE O LEAD MAGNET RESOLVE: [pequeno problema específico]

SUGIRA:
1. 3 opções de formato (PDF, checklist, template, workshop, etc)
2. Título irresistível pra cada opção (com promessa específica)
3. Estrutura de conteúdo (o que vai dentro)
4. Como entregar (email automático via ferramenta X)
5. Conexão com o produto principal (bridge natural pra upsell)

CRITÉRIO: resolve a dor pequena em 10-15 min de consumo. Não é amostra do produto — é valor completo pra dor específica.
```

---

### 060. Persuasion framework — AIDA aplicado

**Ferramenta:** 🧠 Claude

```
Aplique o framework AIDA (Atenção, Interesse, Desejo, Ação) pra escrever um texto persuasivo sobre [PRODUTO].

Pra cada etapa:
1. ATENÇÃO: 3 ganchos diferentes em 1 linha cada
2. INTERESSE: 2 parágrafos (um pela dor, um pela solução)
3. DESEJO: 3 bullets de benefícios concretos + 1 prova social
4. AÇÃO: CTA forte com urgência real

TAMANHO FINAL: 300-400 palavras
TOM: [direto brasileiro]
```

---

### 061. Nome e tagline pro produto

**Ferramenta:** 💡 Gpt

```
Gere 30 nomes pro meu produto.

PRODUTO: [descrição]
PÚBLICO: [quem]
SENSAÇÃO: [tecnológica / premium / jovem / sóbria]

CATEGORIAS (6 cada):
1. Nomes inventados (tipo Uber, Kavak, Stripe)
2. Combinações de palavras (DigitalOcean, FreshBooks)
3. Metáforas poéticas (Orbit, Linear, Arc)
4. Nomes em PT que não soam brega
5. Siglas ou abreviações curtas

Pra cada, marque se o .com provavelmente está disponível.

Depois, pegue os 3 finalistas e escreva 3 taglines cada.
```

---

### 062. Estratégia de pricing

**Ferramenta:** 🧠 Claude

```
Me ajude a definir o pricing do meu produto.

PRODUTO: [descrição + proposta de valor]
CUSTO MENSAL DE SERVIR CADA CLIENTE: R$ [X]
CONCORRENTES DIRETOS E PREÇOS: [liste]
PÚBLICO: [persona + ticket médio que aceita]

ENTREGUE:
1. Análise competitiva do mercado (onde estou na régua)
2. 3 opções de modelo de cobrança (monthly, annual, one-time, freemium)
3. Recomendação de tiers (Basic/Pro/Business ou similar) se aplicável
4. Preços sugeridos com racional
5. Estratégia de gatilho pra aumentar ticket ao longo do tempo
6. Cálculo de LTV estimado em cada cenário
```

---

### 063. Análise de concorrente e diferenciação

**Ferramenta:** 🧠 Claude

```
Vou descrever meu produto + 3 concorrentes principais. Me ajude a encontrar posicionamento diferenciado.

MEU PRODUTO: [descrição]
CONCORRENTE 1: [nome + proposta]
CONCORRENTE 2: [nome + proposta]
CONCORRENTE 3: [nome + proposta]

ENTREGUE:
1. Mapa de posicionamento (2 eixos que diferenciam o mercado)
2. Onde cada concorrente está no mapa
3. Espaços não ocupados
4. 3 ângulos de posicionamento pro meu produto ocupar esses espaços
5. Headline e tagline pra cada ângulo
6. Recomendação de qual ângulo perseguir e por quê
```

---

### 093. Pilar de conteúdo pra 30 posts

**Ferramenta:** 💡 Gpt

```
Me ajude a criar 1 pilar de conteúdo que gere 30 posts.

NICHO: [X]
PILAR PRINCIPAL: [escolha um: ex: 'vibe coding', 'automação com IA', 'produtividade de criadores']

ENTREGUE:
1. Subtemas do pilar (5-7)
2. Pra cada subtema, 5-6 ideias de post com:
   - Gancho
   - Ângulo (tutorial / storytelling / listicle / contraintuitivo)
   - Formato ideal (reel curto / carrossel / post estático / thread)
3. Cronograma de publicação (qual post em qual semana)
4. 3 ganchos 'âncora' que você repete em variações pra reforçar posicionamento

Quero material pra 30 dias de publicação.
```

---

## ✉️ Emails

<a id="emails"></a>

### 064. Sequência de 5 emails de lançamento

**Ferramenta:** 🧠 Claude

```
Escreva sequência de 5 emails pra lançamento de infoproduto.

CENÁRIO: lead baixou [lead magnet], recebe emails nos próximos 5 dias antes do carrinho abrir.

PRODUTO FINAL: [nome + 1 frase + preço]
PÚBLICO: [persona]
TOM: próximo, humano, sem gurismo.

ESTRUTURA:
1. Boas-vindas + entrega do lead magnet + história pessoal
2. A DOR com empatia + caso de alguém que passou por isso
3. A SOLUÇÃO (sem vender) + 1 insight forte de autoridade
4. ABRE CARRINHO + oferta clara + primeira chamada
5. ÚLTIMO DIA + objeções + urgência real

Pra cada email:
- 2 opções de assunto
- Pré-header
- Corpo (4-8 parágrafos curtos)
- CTA claro

Escreva como ser humano, não infoproduto.
```

---

### 065. Email de abandono de carrinho

**Ferramenta:** 🧠 Claude

```
Escreva 2 emails de abandono de carrinho.

PRODUTO: [X]
CENÁRIO: pessoa chegou no checkout, não finalizou.

EMAIL 1 (2h depois): abordagem suave, lembrete + FAQ das 2 maiores objeções.
EMAIL 2 (24h depois): último aviso + bônus opcional + escassez real.

Pra cada: assunto (2 opções), pré-header, corpo (3-5 parágrafos), CTA.

Tom: amigo lembrando, não vendedor desesperado.
```

---

### 066. Email de onboarding pós-cadastro

**Ferramenta:** 🧠 Claude

```
Escreva 3 emails de onboarding pra novo usuário.

PRODUTO: [X + funcionalidade central]
CADASTRO: [free trial / freemium / paid]

EMAIL 1 (imediato): boas-vindas + primeiro passo concreto (ação clara pra completar em 2min).
EMAIL 2 (+2 dias): checando progresso + segunda feature valiosa.
EMAIL 3 (+5 dias): caso de uso avançado + convite pra comunidade/suporte.

Objetivo: ativação — fazer o usuário tirar valor real do produto nos primeiros 7 dias.

Cada email: assunto, corpo curto (3-4 parágrafos), 1 CTA.
```

---

### 067. Email de reengajamento (usuário inativo)

**Ferramenta:** 🧠 Claude

```
Escreva email pra usuário que se cadastrou mas não voltou em 14+ dias.

PRODUTO: [X]
HIPÓTESE DE POR QUE SUMIU: [escolha 1: não entendeu valor / teve fricção / testou e não serviu]

Estrutura:
- Assunto pessoal (2 opções)
- Abertura curta perguntando se está tudo bem
- 1 caso prático mostrando valor (ex: 'sabe que o Fulano usa pra X?')
- CTA suave voltando pra ação específica
- P.S. oferecendo ajuda direta

Tom: amigo preocupado, não cobrança de vendedor.
```

---

### 068. Cold email pra parceria ou imprensa

**Ferramenta:** 🧠 Claude

```
Escreva cold email pra [jornalista / influencer / empresa parceira].

DESTINATÁRIO: [quem + o que faz]
RELAÇÃO ATUAL: [nenhuma / já nos seguimos / fulano indicou]
MEU PEDIDO: [parceria / pauta / collab / feedback]
O QUE EU OFEREÇO EM TROCA: [concreto]

ESTRUTURA:
- Assunto: específico, 6-10 palavras
- Linha 1: gancho pessoal (algo que ele(a) fez que você admira — específico)
- Linha 2: quem você é em 1 frase
- Linha 3: por que está escrevendo
- Linha 4: o que propõe (curto, concreto)
- Linha 5: CTA fácil (aceita call 15min? quer que mande mais?)

Tamanho total: 100-150 palavras. Zero formalidade exagerada.
```

---

## 💰 Vendas

<a id="vendas"></a>

### 069. Script de call de vendas (SaaS B2B)

**Ferramenta:** 🧠 Claude

```
Escreva um script pra call de 30 minutos de venda do meu SaaS pra B2B.

PRODUTO: [X + ticket médio]
CLIENTE IDEAL: [descreva]
DESCOBERTA PRINCIPAL NA CALL: [o que preciso descobrir sobre o cliente]

ESTRUTURA:
- Minutos 0-5: rapport + agenda da call
- Minutos 5-15: descoberta (10 perguntas que fazem o cliente falar sobre a dor)
- Minutos 15-22: apresentação (conectando dor descoberta com solução)
- Minutos 22-27: objeções previstas + respostas
- Minutos 27-30: próximos passos claros

Entregue perguntas literais + frases prontas pra momentos críticos.
```

---

### 070. Respostas pras 10 objeções mais comuns

**Ferramenta:** 🧠 Claude

```
Liste as 10 objeções mais comuns que alguém teria pra comprar meu produto, e escreva a resposta ideal pra cada.

PRODUTO: [descrição + preço]
AUDIÊNCIA: [persona]

Pra cada objeção:
- A objeção em palavras do cliente
- Por que ele pensa isso (contexto emocional)
- Resposta ideal (150-200 palavras, empatia primeiro, contraponto depois)
- Prova que apoia (caso, número, social proof)

Tom: confiante mas sem confronto. Ajudar o cliente a enxergar, não empurrar.
```

---

### 071. Proposta comercial formal (PDF)

**Ferramenta:** 🧠 Claude

```
Monte proposta comercial formal pra fechar cliente.

MEU SERVIÇO/PRODUTO: [X]
CLIENTE: [empresa ou pessoa]
VALOR DO CONTRATO: R$ [Y]
DURAÇÃO: [X meses]
ESCOPO ACORDADO: [liste]

ESTRUTURA DA PROPOSTA (formato PDF executivo):
1. Capa + dados
2. Sumário executivo (1 página)
3. Entendimento do problema do cliente
4. Nossa solução proposta
5. Escopo detalhado (entregáveis + prazos + SLA)
6. Fora do escopo (o que NÃO inclui)
7. Investimento (breakdown se fizer sentido)
8. Forma de pagamento
9. Próximos passos pra fechar
10. Termos e condições resumidos

Tom profissional mas caloroso. Nada burocrático demais.
```

---

### 072. Follow-up pós primeira reunião

**Ferramenta:** 🧠 Claude

```
Escreva email de follow-up depois de uma primeira reunião com potencial cliente.

CONTEXTO DA REUNIÃO:
- Participantes: [nomes]
- Principais tópicos discutidos: [liste]
- Próximos passos acordados: [liste]
- Dor específica deles que ficou clara: [descreva]

ESTRUTURA:
1. Abertura agradecendo tempo (1 frase, específica)
2. Resumo em 3 bullets do que foi discutido
3. Próximos passos (quem faz o quê, quando)
4. Material em anexo (se aplicável)
5. Fecho com CTA claro (marcar próxima call / aguardar aprovação / etc)

Tamanho: 150-200 palavras. Tom: profissional mas humano.
```

---

### 094. Automatizar atendimento pré-venda com FAQ

**Ferramenta:** 🧠 Claude

```
Crie automação de atendimento pré-venda com FAQ inteligente.

CANAL: [WhatsApp / chatbot no site / email]
PRODUTO: [X + preço]

CUBRA AS 15 PERGUNTAS MAIS COMUNS DE PRÉ-VENDA:
- Preço + formas de pagamento
- O que está incluído
- Prazo de entrega
- Política de reembolso
- Diferenças entre planos (se houver)
- Pra quem é / não é
- Tempo de aprendizado esperado
- Suporte disponível
- Bônus
- Garantia

Pra cada pergunta: resposta pronta (3-4 frases), variação pra WhatsApp (mais curta), e 'sinal de compra' que indica hora de escalar pro humano.
```

---

### 098. Criar oferta irrecusável (pricing + bônus)

**Ferramenta:** 🧠 Claude

```
Me ajude a montar uma oferta irrecusável.

PRODUTO PRINCIPAL: [X + preço base]
MEU PÚBLICO: [persona]
MOMENTO: [lançamento / relançamento / BF / campanha específica]

ENTREGUE:
1. Estrutura da oferta (produto principal + bônus)
2. 5 bônus de alto valor percebido e baixo custo pra você entregar
3. Cálculo do 'valor percebido' vs. preço cobrado (regra 10:1)
4. Garantia que elimina risco (condicional ou incondicional)
5. Escassez real (vagas limitadas? prazo?)
6. Script pra apresentar a oferta (em landing, vídeo, call)

A oferta deve ser tão boa que 'seria estúpido não aceitar'.
```

---

## ⚙️ Operações

<a id="ops"></a>

### 073. Processo de onboarding de cliente

**Ferramenta:** 🧠 Claude

```
Desenhe o processo de onboarding de um novo cliente do meu SaaS.

PRODUTO: [X]
COMPLEXIDADE DE SETUP: [simples / médio / alto]
TEMPO MÉDIO ATÉ 'AHA MOMENT': [quanto tempo o usuário leva pra perceber valor]

ENTREGUE:
1. Jornada em etapas (dia 0 → dia 7 → dia 30)
2. Touchpoints automáticos (emails, in-app messages, notificações)
3. Touchpoints humanos (se houver — ex: call de kick-off)
4. Métricas de sucesso em cada etapa
5. Pontos de fricção prováveis e como mitigar
6. O que o cliente deve estar FAZENDO no fim de cada etapa

Foque em ativação, não em apresentação de features.
```

---

### 074. Política de reembolso e cancelamento

**Ferramenta:** 🧠 Claude

```
Redija a política de reembolso e cancelamento pro meu SaaS BR.

PRODUTO: [X + modelo de cobrança]
POSICIONAMENTO DESEJADO: [generoso / padrão / restritivo]

COBRIR:
1. Condições pra reembolso (prazo, motivos aceitos)
2. Como solicitar (canal, informações necessárias)
3. Prazo de devolução (regulatório BR: mínimo 7 dias arrependimento)
4. Cancelamento de assinatura recorrente (quando para de cobrar)
5. Casos especiais (uso fraudulento, violação de termos)
6. Retenção de dados pós-cancelamento

Linguagem: clara, sem juridiquês excessivo. Alinhar ao CDC + LGPD BR.
```

---

### 075. Template de bug report interno

**Ferramenta:** 🧠 Claude

```
Crie template de bug report pra equipe pequena.

CAMPOS MÍNIMOS:
1. Título descritivo
2. Passos pra reproduzir (numerados)
3. Comportamento esperado vs. observado
4. Screenshots / vídeo
5. Ambiente (prod, staging, browser, OS)
6. Severidade (crítico / alto / médio / baixo) com critério objetivo
7. Usuários afetados (estimativa)
8. Workaround temporário (se houver)

Entregue o template em Markdown pronto pra copiar.
```

---

### 076. Due diligence técnica de ferramenta

**Ferramenta:** 🤖 Manus

```
Faça due diligence técnica completa da ferramenta.

FERRAMENTA: [nome]
CONTEXTO DE USO: [pra que vou usar]
STACK ATUAL: [o que já uso]
CRITÉRIOS: preço, escalabilidade, suporte, curva de aprendizado, lock-in

Entregue parecer de 5-8 páginas:
1. O que é, versão atual, tempo de mercado
2. Modelo de preço detalhado com cenário real (meu volume)
3. Top 3 concorrentes com comparativo objetivo
4. Riscos: lock-in, licença, estabilidade da empresa
5. Opinião da comunidade (Reddit, HN, X, GitHub issues — com links e datas)
6. Compatibilidade com meu stack
7. Veredito final: adotar/esperar/descartar com justificativa

Seja cético, não apologista. Cite todas fontes.
```

---

### 077. Calendário editorial de 30 dias

**Ferramenta:** 🧠 Claude

```
Crie calendário editorial de 30 dias pros meus canais.

CANAIS: [Instagram / YouTube / newsletter / X]
NICHO: [X]
OBJETIVO: [crescimento / vendas / autoridade]
FREQUÊNCIA ALVO POR CANAL: [ex: IG 5x/semana, YT 2x/mês]

ENTREGUE:
1. Tabela dia a dia do mês com: dia, canal, tipo de conteúdo, tema, gancho em 1 linha
2. 4 temas-pilares rotativos que aparecem ao longo do mês
3. 3 'ganchos de ouro' (conteúdo de maior potencial viral)
4. Dia da semana que publica em cada canal (ritmo)
5. Datas de lançamento/ação comercial (se aplicável)
```

---

### 078. Playbook de respostas no suporte

**Ferramenta:** 🧠 Claude

```
Crie playbook de respostas padrão pro suporte do meu produto.

PRODUTO: [X]
TOP 10 DÚVIDAS/PROBLEMAS QUE CHEGAM:
[liste ou deixe vazio pra eu preencher depois]

PRA CADA, ENTREGUE:
1. Resposta padrão (3-4 frases)
2. Variações conforme contexto (cliente novo / cliente bravo / cliente curioso)
3. Quando escalonar pro humano (critério claro)
4. Assunto do ticket recomendado pra classificar

TOM: empático mas eficiente. Zero 'prezado cliente'.
```

---

### 079. Checklist de LGPD pra SaaS BR

**Ferramenta:** 🔎 Gemini

```
Faça checklist objetivo pra garantir que meu SaaS está em conformidade com LGPD.

PRODUTO: [descrição]
DADOS COLETADOS: [liste]
PÚBLICO: [B2C / B2B / misto]

ENTREGUE CHECKLIST COM:
1. Dados essenciais a coletar consentimento
2. Base legal apropriada pra cada tipo de dado
3. Política de Privacidade — seções obrigatórias
4. Termos de Uso — cláusulas críticas
5. Fluxo de solicitação de remoção/export (portabilidade)
6. Encarregado de dados (DPO) — precisa ter?
7. Minimum viable compliance pra MVP (o que é OK postergar)

Seja prático. Aponte fontes (ANPD, CDC, LGPD).
```

---

### 080. Plano de backup e disaster recovery

**Ferramenta:** 🧠 Claude

```
Desenhe plano simples de backup e recuperação pro meu SaaS.

STACK: [Supabase + Vercel + Stripe]
VOLUME DE DADOS ESTIMADO 1º ANO: [pequeno / médio]
CRITICIDADE: [média / alta]

ENTREGUE:
1. O que deve ter backup (banco, arquivos, configs)
2. Frequência recomendada de cada tipo
3. Onde guardar (Supabase + copia externa? S3?)
4. Retenção (1 semana? 30 dias? 1 ano?)
5. Plano de recuperação: como voltar ao ar em caso de desastre
6. Teste de recuperação: com que frequência validar que o backup funciona
7. RPO (quanto dado posso perder?) e RTO (quanto tempo posso ficar fora?)

Nível esperado: pragmático pra MVP. Nada de enterprise pesado.
```

---

### 096. Auditoria SEO técnica + keywords

**Ferramenta:** 🤖 Manus

```
Faça auditoria SEO completa do meu site e entregue relatório.

URL: [seudominio.com.br]
NICHO: [X]
PÚBLICO: [persona]

COBRIR:
1. Technical SEO: velocidade, mobile-friendly, sitemap, robots.txt, meta tags
2. On-page: estrutura H1-H6, densidade keyword, alt text, internal linking
3. 20 keywords mais relevantes pro nicho (com volume e dificuldade)
4. Gap analysis: o que concorrentes rankeiam e eu não
5. Quick wins (5 coisas pra fazer nos próximos 7 dias)
6. Plano de conteúdo (10 artigos pra rankear)

ENTREGÁVEL: PDF de 10-15 páginas, formatado, com fontes (Ahrefs, SEMrush, Google search console se aplicável).
```

---

## ✨ Skills do Claude

<a id="skills"></a>

### 081. Entender o que é uma Skill do Claude

**Ferramenta:** 🧠 Claude

```
Me explique como se eu fosse iniciante:
1. O que é uma Skill do Claude em 3 parágrafos simples
2. Diferença entre Skill, Prompt solto e Project
3. O que faz uma Skill BOA vs. uma ruim (princípios)
4. Anatomia técnica: SKILL.md, campos name/description, arquivos auxiliares
5. Por que DESCRIÇÃO é o componente mais importante — é o gatilho de ativação
6. 5 casos reais onde Skill vale (análise de contrato, voz de marca, revisão de PRD, etc)

Feche com: 'qual é a primeira Skill que faz sentido você criar dado seu dia a dia?'
```

---

### 082. Criar minha primeira Skill do Claude

**Ferramenta:** 🧠 Claude

```
Vou criar minha primeira Skill. Me guie do zero.

MEU CASO DE USO: [descreva, ex: 'escrever PRDs no meu padrão']

Me ajude a:
1. Validar se vale uma Skill (ou se prompt resolve)
2. Escrever o CAMPO DESCRIPTION ideal — REGRAS:
   - Descreva QUANDO ativar (não o que faz)
   - Use exemplos de triggers concretos
   - Inclua sinônimos e contextos relacionados
3. Escrever o corpo do SKILL.md:
   - Contexto e objetivo
   - Metodologia / checklist de execução
   - Formato do output
   - Exemplos bom e ruim
4. Identificar arquivos auxiliares (templates, referências)
5. Cenários de teste: 3 que DEVEM ativar, 2 que NÃO devem

Seja cirúrgico na descrição. É 80% do sucesso.
```

---

### 083. Biblioteca de Skills pra construtores

**Ferramenta:** 🧠 Claude

```
Projete biblioteca de Skills base pra quem constrói SaaS com IA.

MEU CONTEXTO: [stack, nicho, tipo de produto]

Projete 8 Skills. Pra cada:
1. Nome
2. Descrição de ativação (seguindo as regras de design de skill)
3. O que faz (1 parágrafo)
4. Quando ativa (3 exemplos de mensagem do usuário)
5. Quando NÃO ativa (2 falsos positivos a evitar)
6. Prioridade (alta/média/baixa)

SUGESTÕES OBRIGATÓRIAS:
- Escrever PRD no padrão da casa
- Auditar código gerado
- Criar schema Supabase seguro
- Escrever prompt de scaffold Lovable
- Revisar copy no meu tom
- Checklist de deploy

Ao final, diga qual criar PRIMEIRO e por quê.
```

---

### 084. Testar se uma Skill ativa corretamente

**Ferramenta:** 🧠 Claude

```
Vou te dar a DESCRIÇÃO de uma skill que criei. Me ajude a validar se ela vai ativar no momento certo.

DESCRIÇÃO DA SKILL:
[cole a descrição]

PRA CADA UM DESTES 8 CENÁRIOS, responda com 'SIM, vai ativar' ou 'NÃO, não ativa' + justificativa:

1. [cenário 1]
2. [cenário 2]
3. [cenário 3]
4. [cenário 4]
5. [cenário 5]
6. [cenário 6]
7. [cenário 7]
8. [cenário 8]

Ao final, sugira ajustes específicos na descrição pra resolver falsos positivos ou falsos negativos.
```

---

### 085. Transformar prompt repetitivo em Skill

**Ferramenta:** 🧠 Claude

```
Percebi que uso muito o mesmo prompt pra [ATIVIDADE]. Quero transformar em Skill do Claude.

PROMPT ATUAL QUE USO:
[cole]

AJUDE:
1. Extrair o CORE do que a skill precisa fazer
2. Identificar variáveis (partes que mudam a cada uso)
3. Escrever descrição de ativação (gatilho)
4. Escrever o corpo do SKILL.md limpo e estruturado
5. Sugerir exemplos bom/ruim pra incluir no skill
6. Apontar se algum arquivo auxiliar faria a skill muito melhor

O produto final deve ser mais útil do que copiar/colar o prompt atual.
```

---

### 086. Refinar descrição de Skill que não ativa

**Ferramenta:** 🧠 Claude

```
Criei uma Skill mas ela raramente ativa quando deveria.

DESCRIÇÃO ATUAL:
[cole]

CENÁRIOS EM QUE DEVERIA ATIVAR MAS NÃO ATIVOU:
1. [cenário 1 — mensagem exata do usuário]
2. [cenário 2]
3. [cenário 3]

AUDITE:
1. Por que cada cenário não ativou?
2. Quais palavras-chave estão faltando?
3. A descrição está focada em 'o que faz' em vez de 'quando ativar'? (erro comum)
4. Reescreva a descrição completa, corrigindo esses problemas
5. Valide a nova descrição contra os 3 cenários
```

---

## Como usar esta biblioteca

1. **Localize o prompt** pelo sumário ou via busca (Cmd/Ctrl + F).
2. **Copie o bloco de código** inteiro.
3. **Substitua os [CAMPOS ENTRE COLCHETES]** com os dados do seu projeto.
4. **Cole na ferramenta correta** (indicada em cada prompt).
5. **Ajuste o output** se precisar, itere até ficar bom.

## Importando no Notion

1. No Notion, crie uma página nova.
2. Clique em `...` no canto superior direito → **Import**.
3. Escolha **Markdown & CSV**.
4. Selecione este arquivo.
5. Notion importa mantendo toda a estrutura de títulos e blocos de código.

## Importando no Obsidian

Copie este arquivo pra dentro do seu vault do Obsidian. O índice funcionará automaticamente via links internos.

---

**Do Zero ao SaaS · Biblioteca v1.0**