# PARTE 3 — O Método em Ação

> *Até aqui, você tem as ferramentas e o mindset. Agora vem o fluxo operacional. Esta parte é a receita.*

---

## Capítulo 8 — O Ciclo dos 5 Passos

Antes de entrar nos estudos de caso, precisamos apresentar o núcleo operacional do método: o **Ciclo dos 5 Passos**.

Este ciclo é a sequência que você vai rodar dentro de cada fase da trilha. Não é "a ordem das fases" (essa é a trilha, capítulo 15 em diante). É o padrão de pensamento dentro de qualquer tarefa não-trivial que você for fazer.

Depois que você internaliza o ciclo, ele vira automático. Toda tarefa nova, você pensa: "em qual passo estou agora?". Isso sozinho já resolve 80% do caos que a gente discutiu no Capítulo 1.

### Os 5 Passos

```
  1. IDEIA       →  Claude
  2. PESQUISA    →  Gemini ou Manus
  3. PLANO       →  Claude
  4. EXECUÇÃO    →  Lovable, Claude Code, GPT
  5. AUDITORIA   →  Claude
```

Cada passo tem uma ferramenta principal. Cada passo tem um entregável concreto. E cada passo só pode começar depois que o anterior está fechado.

Vou explicar um a um.

---

### Passo 1 — IDEIA (Claude)

**Objetivo:** sair de "tenho uma ideia vaga" pra "tenho um problema definido, com persona e proposta de valor clara".

**Ferramenta principal:** Claude.

**Por que Claude:** porque ideia vaga precisa de raciocínio estruturado pra virar algo concreto. Claude pressiona a ideia, aponta falhas, sugere variações. Ele é o "investidor cético" que você precisa nessa hora.

**Entregável:** um parágrafo único, de no máximo 5 frases, que responde:
- O que é.
- Pra quem é.
- Que problema resolve.
- Qual é o diferencial.
- Como ganha dinheiro.

Se você não consegue condensar sua ideia em 5 frases, você não tem ideia ainda — tem desejo. Volta pro Claude e pressiona mais.

---

### Passo 2 — PESQUISA (Gemini ou Manus)

**Objetivo:** descobrir o que já existe, o que o mercado precisa e o que falta.

**Ferramenta principal:** Gemini pra pesquisa rápida + leitura de dados. Manus pra pesquisa profunda com relatório formatado.

**Por que dividir:** Gemini é ótimo pra "vasculhada rápida" em 15-30 minutos. Manus é pra "mergulho profundo de 40-60 minutos com PDF pronto no final". Você escolhe a profundidade conforme o momento.

**Entregável:** uma tabela de concorrentes (mínimo 10), um parágrafo sobre o tamanho de mercado, e 3 ângulos de diferenciação que você pode explorar.

**Regra de ouro:** não pule este passo achando que "já conhece o mercado". Você sempre acha que conhece. Sempre tem algo que escapou. Em 2 horas de pesquisa bem feita, você descobre que uma ferramenta que já resolve seu problema existe há 4 anos e fatura 2 milhões. Melhor descobrir agora do que depois de 30 dias construindo.

---

### Passo 3 — PLANO (Claude)

**Objetivo:** transformar a ideia + pesquisa em um plano de execução detalhado. Isso é o PRD + o schema + a lista de tarefas.

**Ferramenta principal:** Claude (em um Project, pra manter contexto).

**Por que Claude:** porque plano bom precisa de coerência interna e raciocínio técnico. É onde Claude mais brilha.

**Entregável:** três documentos — PRD preenchido, schema Supabase em SQL, e lista das 10-15 tarefas principais pra construir o MVP em ordem de execução.

**Regra:** você não passa pro passo 4 sem os três documentos prontos. Construir sem plano é construir em círculos. Vai gastar dinheiro, queimar crédito e não chegar em lugar nenhum.

---

### Passo 4 — EXECUÇÃO (Lovable + Claude Code + GPT)

**Objetivo:** transformar o plano em código rodando.

**Ferramentas principais:**
- **Lovable** pro scaffold inicial (1 a 3 prompts).
- **Claude Code** (via terminal, no seu computador) pra todas as edições depois do scaffold.
- **GPT** pontualmente pra gerar imagens e copy.

**Por que essa divisão:** é o "pulo do gato" completo — você aproveita o melhor do Lovable (scaffold rápido) sem cair na armadilha do Lovable (edição cara). Claude Code faz o que Lovable faria, mas com uma fração do custo. GPT entra só pra tarefas criativas rápidas.

**Entregável:** MVP funcional, no preview do Lovable, conectado ao GitHub, com o código sendo editado fora do Lovable. Auth funcionando. Telas principais navegáveis.

---

### Passo 5 — AUDITORIA (Claude)

**Objetivo:** revisar o que foi construído antes de subir pra produção.

**Ferramenta principal:** Claude, em auditoria estruturada.

**Por que Claude:** porque auditoria exige olhar crítico, identificar bug sutil, encontrar brecha de segurança, apontar código duplicado. Claude enxerga esses problemas que o iniciante não vê.

**Entregável:** lista de achados em 4 categorias (bugs / segurança / performance / manutenibilidade), com correções sugeridas. Depois: versão corrigida.

**Regra:** nenhum código vai pra produção sem passar por este passo. É inegociável. Se você pular, vai ter brecha de RLS, senha exposta, bug no fluxo de pagamento. E aí você processa reembolso.

---

### O ciclo dentro da trilha

Este ciclo de 5 passos se repete em cada fase da trilha. Nem sempre você passa pelos 5 — às vezes a fase só precisa de Execução + Auditoria (ex: Fase 6 Publicar). Mas o padrão está sempre ali.

Pense assim:

- **Fase 1 (Idear)** = rodar os passos 1 e 2 intensamente.
- **Fase 2 (Especificar)** = rodar o passo 3.
- **Fase 3 (Construir)** = primeira rodada dos passos 4 e 5.
- **Fase 4 (Integrar)** = segunda rodada dos passos 4 e 5, com foco em auth e pagamento.
- **Fase 5 (Polir)** = auditoria pesada (passo 5) + correções (passo 4).
- **Fase 6 (Publicar)** = execução final (passo 4).
- **Fase 7 (Vender)** = novo ciclo começando — mas agora pra marketing, não produto.

O ciclo é uma lente. A trilha é o caminho. Você usa a lente pra enxergar cada pedaço do caminho.

---

### O erro mais comum: pular o passo 3

Iniciantes fazem isso o tempo todo. Tem uma ideia, dá uma pesquisada rápida, e já abre o Lovable. Pula o PRD, pula o schema, pula o plano.

O que acontece: você prompta no Lovable sem saber exatamente o que quer. Lovable entrega algo. Você vê e percebe que não era bem aquilo. Prompta de novo. Queima crédito. Itera. Itera. 30 dólares depois, o que você tem é uma tela sem rumo e um saldo no cartão.

Com o plano, você entra no Lovable sabendo exatamente: "quero 5 telas específicas, com esses componentes, conectadas a esse schema, com essa estética". Lovable entrega certeiro. 1-2 prompts e o scaffold está pronto.

A diferença entre "gastei 3 dólares e tenho o MVP" e "gastei 60 dólares e não tenho nada" é **uma hora de plano com Claude**.

Dedique essa hora. Sempre.

---

## Capítulo 9 — Estudo de Caso 1: Do zero ao PRD

Vamos ver o ciclo funcionando na prática. Pra este estudo de caso, vou usar um exemplo concreto — um produto hipotético chamado "Foconote". Observe o padrão mais do que os detalhes do produto em si.

### Contexto

**Ideia inicial (vaga):** "Acho que existe espaço pra um app de notas que ajuda pessoas com TDAH a focar."

Note que essa ideia tem tudo de errado: é vaga, assume mercado sem verificar, não tem diferencial, não tem modelo de receita. É o ponto de partida realista de quase todo empreendedor.

### Passo 1 — Ideia (Claude)

Prompt enviado ao Claude:

> Aja como investidor cético. Vou descrever uma ideia de SaaS.
> Sua tarefa: listar os 5 maiores riscos em ordem de gravidade,
> identificar 3 suposições que estou assumindo como verdade, e
> sugerir o menor experimento possível para validar a suposição
> mais crítica. Se a ideia for fraca, fale sem rodeios.
>
> IDEIA: Um app de notas feito pra pessoas com TDAH, com
> features específicas pra ajudar a focar.
> PÚBLICO: Pessoas com TDAH diagnosticado ou suspeita, 22-45 anos,
> que trabalham com atividade intelectual e têm dificuldade de
> produtividade.
> MODELO DE RECEITA: Assinatura mensal R$ 19,90.

Claude respondeu com os 5 riscos, as suposições e um experimento. Resumidamente:

**Riscos apontados:**
1. Notion e Obsidian já dominam — diferenciação insuficiente.
2. Suposição de que TDAH precisa de "features específicas" pode ser ilusão.
3. Ticket baixo (R$ 19,90) exige escala pra ser viável — CAC vai comer margem.
4. Público fragmentado: "TDAH" é diagnóstico, não segmento comercial.
5. Barreira técnica baixa — qualquer concorrente replica em 3 meses.

**Suposições não validadas:**
1. Pessoas com TDAH abandonam ferramentas genéricas *por falta de features específicas* (pode ser por outro motivo).
2. Existe disposição a pagar por feature vertical quando Notion é grátis.
3. O volume de pessoas com TDAH buscando solução é grande o suficiente.

**Experimento sugerido:** Landing simples explicando o produto imaginado. Anúncio no Instagram/TikTok segmentando palavras-chave de TDAH. Observar CTR e cadastros em waitlist. Meta: 3% de CTR e 100 cadastros em 7 dias com R$ 200 de budget. Se bater, valida desejo. Se não, a ideia precisa ser repensada.

**O que fizemos com essa resposta:**
Não seguimos cegamente. Fizemos o experimento. Bateu 1.2% de CTR (metade do esperado) e 30 cadastros (um terço). Resultado: reformulação.

**Nova ideia refinada:**
> Ferramenta de captura rápida de ideias fragmentadas pra
> profissionais criativos (designers, escritores, devs) que
> trabalham em sprints curtos de foco e precisam despejar
> pensamentos sem organizar. Diferente de Notion porque não tem
> estrutura — é como um "caderninho digital sempre aberto".

Note: a persona mudou. O problema mudou. O ângulo mudou. O formato do produto ficou mais específico. Isso é validação funcionando.

---

### Passo 2 — Pesquisa (Gemini + Manus)

**Pesquisa rápida com Gemini:**
> Faça uma varredura rápida dos concorrentes de capturadores
> rápidos de ideias pra pessoas criativas. Foco em:
> - Drafts (iOS)
> - Bear
> - Apple Notes
> - Google Keep
> - Apps de "second brain" tipo Capacities, Tana.
> Entregue: tabela com proposta de valor, público, preço, ponto
> fraco. Só entregue dados que tiverem fonte verificável.

Gemini retornou tabela com 8 concorrentes. Principais achados:
- Drafts é o mais similar — mas é só iOS.
- Bear tem foco em escrita, não captura rápida.
- Google Keep é grátis — barreira de preço enorme.
- Nenhum deles tem integração com IA pra "destilação" da ideia depois.

**Insight:** o ângulo "captura rápida + IA organiza depois" era lacuna real.

**Pesquisa profunda com Manus** (delegada, voltou 45 min depois com PDF):
> Faça pesquisa profunda do mercado brasileiro de ferramentas
> de produtividade pessoal. Entrega: relatório de 20 páginas
> cobrindo tamanho, concorrentes (BR e global), tendências
> 2024-2026, ticket médio disposto, canais de aquisição dominantes
> neste nicho. Todas as afirmações com fonte linkada.

Manus entregou PDF com:
- Mercado BR de produtividade pessoal: USD 340M, crescendo 18% aa.
- 15 concorrentes BR (vários desconhecidos até então).
- Canal dominante de aquisição: YouTube (via influenciadores de produtividade).
- Ticket médio do nicho: R$ 29/mês. R$ 19,90 estava subprecificado.
- Tendência forte: "AI-powered" é diferencial ativo em 2026, mas em 12 meses vira commodity.

**Entregável do passo 2:** arquivo `pesquisa-mercado.md` com as duas análises consolidadas.

---

### Passo 3 — Plano (Claude em Project)

Criado Project no Claude chamado "Foconote". Upload do PRD template e da pesquisa de mercado no contexto do projeto.

Prompt:
> Com base no template PRD e na pesquisa anexada, escreva o PRD
> completo pra versão 1.0 do Foconote. Stack: Lovable + Supabase
> + Stripe + Resend. Preço: R$ 29/mês. Público: profissionais
> criativos. Foco do MVP em captura rápida + destilação via IA.
> Seja específico, use o template como guia, mas corte features
> que não são essenciais pro MVP.

Claude entregou PRD de 14 páginas. Principais decisões de escopo:

**ENTRA no MVP:**
- Captura rápida via atalho de teclado (universal no app).
- 3 tipos de "destilação" via IA: resumo, lista de ações, expansão.
- Tag automática (IA sugere).
- Busca full-text.
- Conta e assinatura Stripe.

**FICA DE FORA:**
- Colaboração em equipe.
- App mobile nativo (só web responsivo na v1).
- Integrações com outros apps (só export em markdown).
- Categorias manuais (só tags automáticas).

**Schema Supabase gerado:**
Tabelas `profiles`, `subscriptions`, `notes`, `distillations`, `tags`. Total 5 tabelas. RLS configurado em todas.

**Entregáveis finais do passo 3:**
- `prd-foconote-v1.md` (14 pág)
- `schema-foconote.sql` (pronto pra colar no Supabase)
- `tarefas-construcao.md` (12 tarefas em ordem)

---

### Por que parar por aqui neste capítulo

Este estudo de caso foca nos passos 1 a 3 — da ideia ao PRD. É a parte **estratégica**. O próximo capítulo mostra os passos 4 e 5 do mesmo exemplo: construir o MVP e auditar antes de subir.

A lição central deste capítulo: **a primeira ideia quase nunca é a ideia que vai pra produção**. O ciclo de 5 passos força você a pressionar a ideia, pesquisar o mercado, e replanejar antes de escrever qualquer linha de código.

Isso é o oposto do que o iniciante típico faz (ideia → código). E é por isso que o iniciante típico não lança.

---

## Capítulo 10 — Estudo de Caso 2: Do PRD ao MVP no ar

Continuamos com o Foconote. PRD pronto, schema pronto, tarefas listadas. Vamos construir.

### Passo 4 — Execução (parte 1: scaffold no Lovable)

Com o PRD em mãos, o prompt enviado ao Lovable foi UM SÓ, bem calibrado:

> Crie um aplicativo web com as seguintes especificações.
>
> NOME: Foconote
> DESCRIÇÃO: Ferramenta de captura rápida de ideias com destilação
> via IA.
> STACK: React + TypeScript + Tailwind + shadcn/ui + Supabase.
>
> TELAS OBRIGATÓRIAS:
> 1. Landing pública (hero, features, pricing, CTA)
> 2. Login / Signup via Supabase Auth (email + Google)
> 3. /app — editor principal com sidebar de notas + área de texto
> 4. /app/settings — perfil e assinatura
>
> SCHEMA SUPABASE:
> [colado aqui o SQL completo do passo 3]
>
> ESTÉTICA: dark minimal, tipografia sóbria, ênfase em tipografia
> (Fraunces + Inter), paleta bege/grafite. Inspiração: Linear, Arc.
>
> Configure Supabase Auth, proteja /app/* e /app/settings/*,
> integre o schema. DEPOIS disso vou mover o projeto pro GitHub
> e editar fora do Lovable via Claude Code.

Resultado: scaffold em 3 minutos. 4 telas navegáveis. Auth funcionando com placeholder. Schema conectado. Custo: 1 prompt, cerca de 25 centavos de crédito.

Um segundo prompt pra refinar:
> Ajuste o editor principal: remova a sidebar de categorias,
> adiciona atalho global Cmd+N pra nova nota, e adiciona dropdown
> "destilar" com 3 opções (resumir, extrair ações, expandir).

Pronto. Segundo e último prompt no Lovable. Daqui pra frente, tudo foi no Claude Code.

**Passo imediato depois:**
1. Conectar Lovable ao GitHub (botão no próprio Lovable).
2. Clonar repo localmente.
3. Abrir terminal na pasta, rodar `claude` pra abrir Claude Code.

**Status:** projeto rodando, scaffold completo, saindo do Lovable.

---

### Passo 4 — Execução (parte 2: edições no Claude Code)

Aqui começa a economia real. Todas as edições a partir daqui acontecem no Claude Code, não no Lovable.

Exemplo de prompt dentro do Claude Code:

> Este projeto é um capturador de notas. Quero implementar a
> função "destilar". O fluxo é:
> 1. Usuário seleciona uma nota.
> 2. Clica em "destilar" e escolhe o tipo (resumir, ações, expandir).
> 3. Frontend manda POST pra Edge Function do Supabase.
> 4. Edge Function chama API da Anthropic (Claude Sonnet) com o
>    prompt específico do tipo.
> 5. Resposta volta e é salva na tabela `distillations`.
> 6. Frontend exibe a destilação ao lado da nota original.
>
> Preciso da Edge Function completa, o código do frontend pra
> chamar, e as tipagens TypeScript. Antes de mexer nos arquivos,
> me liste o que vai alterar e peça aprovação.

Claude Code listou 4 arquivos a editar, pediu aprovação, editou, commitou. Preview no Lovable atualizou em 30 segundos.

**Custo estimado dessa tarefa:** 1-2 centavos de uso de API da Anthropic. A mesma tarefa no Lovable teria custado 8-15 prompts (pedir, ajustar, testar, corrigir), ou seja, cerca de 2-4 dólares.

Esse é o tamanho da economia. Por tarefa. Multiplicado por 40-60 tarefas ao longo de 30 dias.

---

### Passo 4 — Execução (parte 3: assets visuais com GPT)

Pra landing, precisávamos de 3 elementos visuais: hero illustration, ícones pras 3 features principais, e uma imagem OG pra compartilhamento em redes sociais.

Prompt pro GPT + DALL-E:
> Gere uma ilustração hero pra landing de um app chamado Foconote.
> Estilo: isométrico minimalista, paleta bege e grafite, foco numa
> folha de caderno flutuante com pontos de luz sugerindo ideias
> sendo capturadas. Dimensão 16:9. Sem texto. Estética: Linear,
> Notion.

3 iterações. Imagem aprovada. Otimizada no TinyPNG. Subida pro projeto.

Total de tempo no GPT: 15 minutos. 3 assets prontos.

---

### Passo 5 — Auditoria (Claude)

Antes de publicar em produção, rodamos o passo 5: auditoria profunda do código gerado.

Prompt no Claude (com arquivos anexados):
> Audite estes 4 arquivos do projeto Foconote. Use estrutura:
> 1. BUGS que vão quebrar
> 2. SEGURANÇA (RLS, inputs, chaves expostas)
> 3. PERFORMANCE (queries N+1, re-renders, missing indexes)
> 4. MANUTENIBILIDADE
>
> Ordene do mais crítico ao menor. Para cada achado: gravidade,
> linha, correção em código.

Claude encontrou:

**Críticos (3):**
- Edge Function não valida se user está autenticado antes de chamar API da Anthropic. Qualquer requisição HTTP externa poderia consumir crédito.
- `stripe-signature` não está sendo validado no webhook — brecha grave.
- Campo `email` do profile não tem unique constraint — possível duplicata.

**Médios (5):**
- Queries na tela principal fazem N+1 (5 requests separados pra pegar tags).
- Re-render em cascata no editor principal ao digitar.
- Sem tratamento de erro na chamada da destilação — trava a UI.
- Chave pública do Supabase exposta no bundle (OK, é pública, mas não documentado).
- Tempo médio de carregamento: 3.1s. Meta 2.0s.

**Baixos (4):** detalhes de código.

Com essa lista, voltamos pro Claude Code e corrigimos um por um. Cada correção era um prompt específico ("aplicar correção 1", "aplicar correção 2", etc). Commits separados pra cada correção, pra ser fácil reverter se algo quebrar.

**Depois das correções:** segunda auditoria. 0 críticos. 1 médio (performance residual). Aceito.

---

### Resultado final

- MVP funcionando em URL pública do Lovable.
- Auth funcionando (email + Google).
- Schema no Supabase com RLS validado.
- Edge Function de destilação funcionando com Claude Sonnet.
- Stripe integrado em test mode (ainda não live).
- Auditoria aprovada.

**Custo total do Lovable:** cerca de 40 centavos (2 prompts de scaffold + uns 3 ajustes triviais depois).
**Custo total do Claude Code (API Anthropic):** cerca de 12 dólares em 3 semanas de edição.
**Custo comparativo se tivesse feito tudo no Lovable:** estimados 150-200 dólares em créditos.

Economia real do método: **~90%**.

### Lição do estudo de caso

O que separa quem publica de quem não publica não é habilidade técnica. É seguir o ciclo. O Foconote hipotético fez:

1. Ideia → pressionada com Claude → reformulada.
2. Pesquisa → concorrentes mapeados, oportunidade validada.
3. Plano → PRD, schema, tarefas — tudo antes de código.
4. Execução → scaffold rápido no Lovable, edição barata no Claude Code, assets no GPT.
5. Auditoria → erros críticos pegos antes de produção.

Tudo isso em 3 semanas de trabalho não-integral, por uma única pessoa, sem saber programar no sentido tradicional.

A Parte 4 agora vai aprofundar os **dois pulos do gato** que tornam esse fluxo possível — o Gemini como tutor e a arquitetura Lovable + GitHub + Claude Code.

---
