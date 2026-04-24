# PARTE 2 — As cinco ferramentas e seus papéis

> *Você vai reger cinco instrumentos. Cada um com função específica. Saber o papel de cada um é 80% do método.*

---

## Capítulo 3 — Claude, o Arquiteto

Claude é a ferramenta que você usa quando precisa **pensar bem**. Não rapidamente — bem.

Se você pudesse resumir a personalidade do Claude em uma frase, seria: "aquele amigo engenheiro que responde devagar mas responde certo". Ele é construído pra contexto longo, raciocínio estruturado e saída técnica de qualidade. É o melhor da categoria em código, escrita técnica e análise que exige cuidado.

### O que Claude faz melhor que os outros

**Escrever PRDs e documentação técnica.**
Você descreve o projeto, Claude entrega um documento estruturado, coerente, com seções bem definidas. Ele não inventa bullet points aleatórios — ele raciocina sobre o que o PRD precisa cobrir e entrega o que falta.

**Projetar arquitetura e schema de banco.**
Se você precisa decidir como as tabelas do seu Supabase vão se relacionar, Claude pensa em normalização, em índices, em segurança (RLS), e te entrega o schema como código SQL pronto pra colar. Mais importante: ele explica as decisões por baixo do schema, pra você aprender.

**Auditar código gerado por outra IA.**
Quando o Lovable gera um código e você tem medo de subir em produção, Claude é quem audita. Ele enxerga bugs, brechas de segurança, queries ineficientes, e te mostra linha por linha o que precisa arrumar.

**Resolver problema complexo em contexto longo.**
Quando você tem um problema que envolve vários arquivos, várias camadas, várias decisões interconectadas, Claude aguenta o contexto inteiro sem perder o fio. GPT ia confundir. Gemini ia alucinar. Claude mantém a linha.

**Escrita técnica ou editorial de qualidade.**
Se você precisa de um texto que soe inteligente sem soar chato, Claude é a melhor opção. Para escrita de marketing puro (copy de venda), GPT ganha. Mas pra tudo que envolve técnica + texto, Claude é o padrão.

### O que Claude NÃO faz bem

- **Brainstorm rápido e criativo.** Ele pensa demais antes de responder. Se você quer 50 ideias em 2 minutos, use GPT.
- **Gerar imagens.** Ele não faz. Use GPT (DALL-E) ou ferramenta específica.
- **Pesquisa web profunda com entregável pronto.** Ele pesquisa, mas entrega em formato conversa. Se você quer relatório formatado em PDF, use Manus.
- **Código de 300 linhas num único prompt sem contexto.** Ele tenta, mas vai alucinar em partes. Prefira sessões iterativas menores.

### Como Claude espera ser tratado

Claude funciona melhor quando você:

1. **Dá contexto antes da tarefa.** Em vez de "escreve um PRD", use "Sou empreendedor solo, stack Lovable+Supabase, quero construir [X]. Escreva o PRD."
2. **Pede uma coisa de cada vez.** "Gere o PRD" → recebe → "agora o schema" → recebe → "agora critique tudo". É mais produtivo que "faça o PRD, o schema e critique tudo de uma vez".
3. **Usa Projects quando o assunto vai durar dias.** Projects permitem que o Claude mantenha contexto entre sessões. Perfeito pro projeto da sua trilha.
4. **Pede para ele discordar.** Se você fala "concorda?" ele tende a concordar. Se você fala "seja cético, aponte falhas no meu raciocínio", ele muda de postura.

### Artifacts, Projects, Memory — o que importa

Três recursos do Claude que você vai usar bastante:

- **Artifacts**: quando Claude entrega código ou documento longo, ele abre um painel lateral que você pode copiar, editar, reutilizar. Perfeito pra PRDs e schemas.
- **Projects**: uma "pasta" dentro do Claude que mantém contexto entre conversas. Crie um Project chamado "SaaS Equipe Do Zero ao SaaS" e todas as conversas sobre seu produto acontecem lá. Ele lembra do que você falou sem você precisar repetir.
- **Memory**: ele lembra de fatos seus entre conversas (seu nome, seu projeto, suas preferências). Você pode pedir explicitamente pra ele lembrar de algo: "lembre que meu stack é Lovable + Supabase".

### Prompts-chave pra Claude (use estes literalmente)

**Pra validar uma ideia:**
```
Aja como um investidor cético. Vou descrever uma ideia de SaaS.
Sua tarefa: listar os 5 maiores riscos em ordem de gravidade,
identificar 3 suposições que estou assumindo como verdade, e
sugerir o menor experimento possível para validar a suposição
mais crítica. Se a ideia for fraca, fale sem rodeios.

IDEIA: [descreva em 2-3 frases]
PÚBLICO: [quem usaria]
MODELO DE RECEITA: [como ganha dinheiro]
```

**Pra escrever um PRD:**
```
Atue como Product Manager experiente. Gere um PRD completo para:

PROJETO: [nome + 1 parágrafo]
PROBLEMA: [a dor que resolve]
USUÁRIO-ALVO: [persona]
STACK: Lovable (React/TS) + Supabase + Stripe

Estrutura:
1. Visão e objetivo
2. Problema e contexto
3. Personas detalhadas
4. Proposta de valor
5. Escopo do MVP (o que ENTRA e o que FICA DE FORA)
6. Fluxos de usuário principais
7. Schema de banco (tabelas e relações em SQL)
8. Autenticação e segurança (RLS)
9. Integrações externas
10. Métricas de sucesso
11. Riscos e mitigações

Seja específico. Liste em vez de parafrasear. Onde houver decisão,
recomende UMA opção com 1 frase de justificativa.
```

**Pra auditar código:**
```
Vou colar um trecho de código gerado por outra IA. Faça auditoria
em 4 níveis:

1. BUGS: o que vai quebrar
2. SEGURANÇA: RLS ausente, credenciais expostas, validação
3. PERFORMANCE: queries N+1, re-renders, missing indexes
4. MANUTENIBILIDADE: código duplicado, nomes ruins

Pra cada achado: gravidade (crítico/médio/baixo), linha específica,
correção em código. Ordene do mais grave ao menor. Nada de elogiar.

[cole o código]
```

**Pro ciclo da trilha inteira, crie um Project.** Chame de "Do Zero ao SaaS — [seu projeto]". Coloque lá: o PRD, o schema, as decisões-chave. Toda conversa nova dentro do Project já entra com esse contexto.

---

## Capítulo 4 — Gemini, o Tutor e Leitor

Gemini é a ferramenta que você abre quando **não sabe como fazer alguma coisa**.

Se Claude é o engenheiro que planeja, Gemini é o professor que te guia. Ele é multimodal, tem contexto gigantesco, e tem um tom didático que as outras IAs não conseguem. Quando você manda um screenshot do painel do Supabase perguntando "o que clico agora?", Gemini olha a imagem, entende o que aparece, e te diz qual botão apertar.

Essa habilidade específica — **ler print e explicar** — faz dele insubstituível no fluxo de um iniciante.

### O que Gemini faz melhor que os outros

**Ler screenshots e explicar.**
Você tira print do painel do Stripe, do erro do console, do painel do Supabase, do DNS da Cloudflare. Gemini olha, entende, e te explica o que cada campo significa. Claude também lê imagem, mas é menos paciente em "me ensine". Gemini tem a vocação de tutor.

**Aguentar contexto gigantesco.**
Gemini tem a maior janela de contexto do mercado (milhões de tokens). Isso significa que você pode mandar a documentação INTEIRA de uma ferramenta junto do prompt, e ele responde com base naquilo. Ninguém mais faz isso na escala dele.

**Guiar passo a passo com paciência.**
Você diz "sou iniciante, me guie", e ele realmente segue. Para. Explica. Espera confirmação. As outras IAs tendem a "adiantar" e te dar 10 passos de uma vez. Gemini aceita ir devagar quando você pede.

**Analisar planilhas e documentos longos.**
Jogou um CSV de 10.000 linhas? Ele analisa. Jogou um PDF de 200 páginas? Ele resume, extrai, responde perguntas. Pra isso, não tem igual.

**Integração com Google (Drive, Docs, Sheets, Gmail).**
Se você vive dentro do ecossistema Google, Gemini é a escolha natural. Ele entende seus arquivos sem você precisar fazer upload manual toda vez.

### O que Gemini NÃO faz tão bem

- **Escrita técnica de longa forma.** Ele escreve, mas o estilo não tem o mesmo peso editorial do Claude.
- **Código complexo multi-arquivo.** Ele tenta, mas se confunde mais que Claude em projetos grandes.
- **Criatividade livre.** Ele tende a ser mais "wikipedia" que "artista". Pra brainstorm criativo, use GPT.
- **Tarefas autônomas de ponta a ponta.** Ele responde, mas não "faz pra você". Pra isso você precisa de Manus.

### A técnica "Me Guie Passo a Passo" — o pulo do gato #1

Aqui está a razão pela qual Gemini vai ser seu melhor amigo nos próximos 30 dias.

Existe um formato de prompt que transforma Gemini em tutor paciente, passo a passo. Vou te dar o template exato agora. Decore. Este prompt vai te salvar dezenas de vezes durante a trilha:

```
Sou iniciante absoluto. Nunca configurei [ASSUNTO] na vida.

Preciso: [OBJETIVO CONCRETO]

Stack que estou usando: [LISTA]

Me guie passo a passo. Regras:
- Pergunte antes de assumir qualquer coisa.
- Valide cada etapa comigo antes de passar pra próxima.
- Quando eu tiver dúvida, vou mandar print da tela.
- Se eu errar algo, me diga como desfazer.
- Evite jargão técnico. Se precisar usar, defina em 1 frase.

Vamos começar pela etapa 1.
```

Esse prompt ativa o modo tutor. Gemini para de despejar 10 passos e vai com você um a um.

Quando você travar em alguma etapa, **tire um print da tela inteira** (janela do navegador + mensagens de erro, se houver) e cole direto na conversa. Gemini olha a imagem, entende onde você está, e te diz exatamente o que fazer em seguida.

### 5 situações em que Gemini vai salvar sua pele

Durante a trilha de 30 dias, você vai precisar do "me guie passo a passo" do Gemini em pelo menos estas situações:

1. **Configurar Supabase do zero** — criar projeto, tabelas, RLS, auth.
2. **Apontar domínio e configurar DNS** — o campo mais traumático do iniciante.
3. **Ativar webhook do Stripe** — crítico, sem isso pagamento não processa.
4. **Configurar OAuth com Google** — labirinto no Google Cloud Console.
5. **Fazer deploy no Vercel e ler logs de erro** — interpretar build falho.

Cada uma dessas situações é um capítulo da Parte 4. Mas o prompt-chave é o mesmo. Varia só o objetivo.

### Uma sacada extra: Gemini dentro do Antigravity

Se você usa Antigravity (ferramenta desktop do Google que integra Claude Code + Gemini num único lugar), você tem um bônus: o Gemini enxerga o ambiente do seu projeto. Ele pode ler seus arquivos locais, seus logs, seu terminal, e te guiar com o contexto inteiro do projeto à mão.

Não é pré-requisito. Mas se você gosta de ter tudo num lugar só, vale instalar.

---

## Capítulo 5 — GPT, o Sparring Criativo

GPT (ChatGPT da OpenAI) é a ferramenta que você usa quando precisa **pensar rápido, criar em volume, e iterar sem peso**.

Se Claude é o engenheiro introvertido e Gemini é o professor paciente, GPT é aquele colega hiperativo que solta 40 ideias por minuto. Nem todas são boas. Mas é com ele que você destrava o bloqueio criativo.

### O que GPT faz melhor que os outros

**Brainstorm de volume.**
"Me dá 50 opções de nome pro meu produto." GPT entrega sem reclamar. Claude provavelmente entrega 10 com uma dissertação. Gemini entrega 30 genéricas. GPT consegue ser solto, ousado, variado.

**Copy punchy.**
Pra headline de landing, legenda de ad, roteiro de reel, thread de X — GPT tem ritmo. Claude é mais "correto". GPT é mais "vende". Em marketing, vender ganha de correto.

**Imagens com DALL-E.**
Essa é exclusividade. Nem Claude nem Gemini (pelo menos não da mesma forma integrada) geram imagens. GPT + DALL-E te entrega assets visuais direto no chat.

**GPTs customizados.**
Você pode criar seu próprio GPT especializado (ex: "Copywriter da minha marca") e reusar sempre. Claude tem Projects pra coisa parecida, mas o sistema de GPTs customizados é mais maduro e tem marketplace próprio.

**Ações rápidas.**
Você joga uma pergunta, ele responde em segundos. Pra ajustes rápidos de texto, renomeações, variações criativas — GPT é mais ágil.

### O que GPT NÃO faz tão bem

- **Código em projeto longo.** Alucina mais que Claude quando o contexto cresce.
- **Análise técnica profunda.** Tende a "performar inteligência" sem de fato raciocinar até o fim.
- **Escrita editorial de peso.** O texto tem energia, mas falta densidade.
- **Tutoriais passo a passo pacientes.** Ele adianta. Pra iniciante, pode assustar.
- **Contexto ultra longo.** Se você joga 50 páginas de doc, ele começa a esquecer partes.

### Quando chamar GPT no método

Durante a trilha, você vai abrir o GPT principalmente em três momentos:

1. **Fase 1 — Idear.** Brainstorm de nome, ângulos de posicionamento, variações criativas.
2. **Fase 3 — Construir.** Gerar imagens pra landing, ícones, assets visuais.
3. **Fase 7 — Vender.** Copy de landing, variações de anúncio, emails.

Nas outras fases, GPT pode ser útil também, mas o protagonismo fica com Claude (arquitetura) e Gemini (configuração).

### Prompt-chave pra GPT em brainstorm

```
Gere 30 opções de [NOME / HEADLINE / ÂNGULO] pro seguinte produto.

PRODUTO: [1 frase]
PÚBLICO: [quem compra]
SENSAÇÃO DESEJADA: [premium / jovem / sóbrio / descontraído]

Divida em 5 categorias, 6 opções cada:
1. [categoria 1 - ex: nomes inventados tipo Uber, Kavak]
2. [categoria 2 - ex: combinações de palavras tipo DigitalOcean]
3. [categoria 3 - ex: metáforas poéticas tipo Arc, Linear]
4. [categoria 4 - ex: nomes em português que não soam brega]
5. [categoria 5 - ex: siglas ou abreviações curtas]
```

Note que o prompt impõe estrutura. Sem estrutura, GPT dispara em todas as direções. Com estrutura, ele dispara onde você quer.

### Sobre os GPTs customizados

Se você usa ChatGPT Plus, considere criar um GPT customizado chamado "Copywriter [seu produto]" com instruções tipo:

```
Você é copywriter especializado em infoprodutos BR.
Tom: direto, brasileiro, anti-hype. Zero "transforme sua vida".
Sempre que eu pedir copy, entregue 3 variações diferentes em
ângulo (dor / desejo / prova). Max 4 linhas cada.
```

Aí toda vez que você precisa de copy, abre esse GPT. Consistência sem copiar e colar regras.

---

## Capítulo 6 — Lovable, o Executor Visual

Lovable é a ferramenta que tira seu projeto do papel em minutos. Você escreve um prompt descrevendo o que quer, e ele te entrega um aplicativo React rodando, com interface, rotas, componentes — tudo funcional.

É o instrumento mais espetacular das cinco. E também o mais perigoso, se usado errado.

### O que Lovable faz melhor que os outros

**Scaffold visual imediato.**
Você descreve um app e em 2 minutos tem um app. Com telas, navegação, design decente. Nenhuma outra ferramenta te dá esse "pulo" inicial com tão pouco atrito.

**Preview em tempo real.**
Toda vez que você muda algo, o preview atualiza. Você vê o que está construindo enquanto constrói. Isso elimina a "cegueira" de programar sem ver o resultado.

**Deploy automático.**
Lovable hospeda seu app numa URL pública automaticamente. Você pode mandar o link pra alguém testar em 5 minutos de projeto.

**Integração com Supabase nativa.**
Com 2-3 cliques, você conecta Lovable ao Supabase, e ele já gera código pra auth, queries, inserts, etc. Não é magia — é integração bem feita.

**GitHub sync.**
Ele sincroniza automaticamente com um repositório GitHub. Isso abre o "pulo do gato" que você vai ver na Parte 4.

### O que Lovable NÃO faz bem

Aqui está a parte que quase ninguém fala:

- **Edição iterativa é cara.** Cada prompt que você manda dentro do Lovable queima crédito. Projeto médio com muitas iterações pode queimar 50-100 dólares facilmente.
- **Refatorações complexas.** Quando o projeto cresce, pedir mudanças estruturais dentro do Lovable fica lento e caro.
- **Debugging profundo.** Se o código gerado tem bug, corrigir dentro do Lovable é exaustivo. Melhor tirar do Lovable e corrigir fora.
- **Customizações muito específicas.** Às vezes você quer mudar algo pequeno e Lovable insiste em mudar coisas adjacentes também.

### A regra sagrada do Lovable

Esta é a frase mais importante deste capítulo:

**Lovable é pra COMEÇAR, não pra continuar.**

Use Lovable pra gerar o scaffold inicial (1 a 3 prompts). Depois disso, saia dele. Continue o desenvolvimento no Cursor ou Claude Code (Parte 4 explica). Use Lovable só como visualizador do progresso.

Essa regra sozinha pode te economizar 300 dólares nos próximos 30 dias. Não é exagero.

### O prompt de scaffold que economiza 80% de crédito

A maioria das pessoas perde crédito no Lovable porque manda prompts curtos e vai refinando. Dez prompts pequenos queimam mais crédito que um prompt bem feito grande.

Template do prompt de scaffold perfeito:

```
Crie um aplicativo web com as seguintes especificações.

NOME: [nome]
DESCRIÇÃO: [1 frase do que faz]
STACK: React + TypeScript + Tailwind + shadcn/ui + Supabase

TELAS OBRIGATÓRIAS:
1. Landing pública (hero, features, pricing, footer)
2. Login / Signup via Supabase Auth (email + Google)
3. Dashboard protegido em /app
4. [tela principal 1]
5. [tela principal 2]

SCHEMA SUPABASE INICIAL:
[cole o schema que Claude te deu antes]

ESTÉTICA: [descreva em 3 palavras — ex: "dark, minimal, tipografia sóbria"]
INSPIRAÇÃO VISUAL: [cite 1-2 marcas]

Quero o scaffold completo funcional. Configure Supabase Auth,
proteja as rotas, integre o schema. DEPOIS disso vou mover o
projeto pro GitHub e editar fora do Lovable via Cursor/Claude Code.
```

Note o último parágrafo. Você está informando o Lovable que vai sair dele. Isso ajuda ele a não superproduzir.

### Os 3 únicos momentos em que você volta pro Lovable

Depois do scaffold inicial, você volta ao Lovable só em três situações:

1. **Pra visualizar o preview.** Depois que você editou no Cursor/Claude Code e fez push, o Lovable atualiza o preview. Você vê o resultado no navegador dele.
2. **Mudanças triviais de UI puramente visuais.** Trocar a cor de um botão, ajustar padding — às vezes é mais rápido no Lovable do que abrir o editor.
3. **Compartilhar preview com cliente ou stakeholder.** A URL do Lovable é pública e fácil de compartilhar.

Tudo fora disso: fica no editor.

### O que o Lovable te ensina (sem querer)

Mesmo que você não saiba programar, só de ler o código que o Lovable gera você começa a pegar padrões:

- Estrutura de componentes React.
- Como hooks funcionam na prática.
- Como queries do Supabase são escritas.
- Como routes são protegidas.

Você não precisa dominar isso. Mas depois de 30 dias usando o método, você vai **entender** o que está acontecendo. E isso é mais do que 90% das pessoas que "aprenderam React" na marra.

---

## Capítulo 7 — Manus, o Operário Autônomo

Manus é a ferramenta mais diferente das cinco. Porque com ela você não **prompta** — você **delega**.

As outras quatro são assistentes: você pergunta, elas respondem. Manus é agente: você define uma tarefa, ele sai, executa, volta com o resultado pronto. A diferença operacional é gigante.

### O que Manus faz melhor que os outros

**Executar tarefas de longa duração autonomamente.**
Você diz "faça uma pesquisa de mercado profunda sobre [nicho] e me entregue um relatório executivo em PDF". Manus sai. Pesquisa. Cruza fontes. Gera gráficos. Formata. Entrega PDF pronto depois de 30-60 minutos. Você não supervisiona cada passo.

**Produzir entregáveis finais, não rascunhos.**
Quando Manus termina, você tem um arquivo pronto. Um PDF, uma apresentação, uma planilha, um blog post completo. Não é "base pra você trabalhar em cima" — é entregável.

**Tarefas multi-passo complexas.**
Operações que envolvem vários "subtarefas" encadeadas (pesquisar → analisar → comparar → compilar → formatar) são onde Manus brilha. Nas outras ferramentas, você teria que orquestrar cada passo manualmente.

**Processar grandes volumes.**
Produzir 30 posts de blog em batch. Analisar uma planilha de 50.000 linhas. Fazer due diligence técnica profunda de uma ferramenta. Tudo isso Manus faz bem.

### O que Manus NÃO faz bem

- **Decisões estratégicas finas.** Ele executa bem, mas decidir "fazer X ou Y" é melhor pro Claude.
- **Iteração criativa rápida.** Cada rodada do Manus é lenta. Pra brainstorm ágil, use GPT.
- **Trabalho que exige você no loop.** Se é coisa que muda a cada 5 minutos com o feedback, delegar pro Manus é frustrante.
- **Precisão matemática de cálculos complexos.** Ele tenta, mas pode errar em contas delicadas. Valide.

### A mudança de mentalidade: delegar vs. promptar

Pra usar Manus bem, você precisa virar a chave no cérebro.

**Promptar** é: você está presente, conversando, iterando. "Escreva isso, agora aquilo, agora ajuste aquilo."

**Delegar** é: você descreve o resultado final esperado com o máximo de detalhe, manda, e volta depois. "Faça X, com essas características, no formato Y, entregue em Z."

A qualidade do que Manus entrega é **proporcional à qualidade do briefing**. Briefing ruim → entrega ruim. Briefing bem feito → entrega de 8 horas humanas em 40 minutos.

### Quando chamar Manus no método

As tarefas que se beneficiam de Manus durante a trilha:

1. **Fase 1 — Idear.** Pesquisa profunda de mercado com relatório pronto. Análise de dados se você tem planilha.
2. **Fase 2 — Especificar.** Due diligence técnica da stack (esperado vs. realidade de cada ferramenta).
3. **Fase 7 — Vender.** Produção de conteúdo em batch (30 posts, 15 reels, sequência de email).

Fora disso, use as outras ferramentas.

### O briefing perfeito pro Manus

Um briefing bem feito pro Manus tem 4 partes:

**1. Objetivo final.** Não "faça pesquisa" — "entregue relatório de 15-25 páginas sobre [X]".

**2. Contexto.** Quem é você, pra que vai usar isso, quem vai ler.

**3. Formato do entregável.** PDF executivo? Planilha? Markdown? Quantas páginas/linhas/posts?

**4. Restrições e critérios.** Todas as afirmações com fonte linkada. Fontes primárias preferidas. Tom executivo. Sem jargão. Etc.

Exemplo concreto de briefing bem feito:

```
Faça pesquisa de mercado completa. Entregue relatório em PDF.

NICHO: SaaS de gestão financeira pra micro empreendedores BR.
REGIÃO: Brasil.
AUDIÊNCIA DO RELATÓRIO: eu + 2 sócios técnicos.

FORMATO: PDF de 20 páginas, design executivo, tabelas e gráficos.

CONTEÚDO OBRIGATÓRIO:
1. Tamanho do mercado (dados com fonte)
2. 30 concorrentes com URL, preço, proposta de valor
3. Matriz SWOT dos top 5
4. 5 tendências dos últimos 12 meses com evidência
5. 3 lacunas não atendidas
6. 5 ângulos de posicionamento diferenciado
7. Apêndice com fontes linkadas

TOM: executivo, direto, sem floreio.
FONTES: priorizar dados primários (Statista, reports setoriais,
relatórios de empresas listadas). Nada de blog genérico.
```

Esse briefing produz um PDF que 3 consultorias cobrariam 15.000 reais pra entregar em 3 semanas. Manus faz em 40 minutos.

### A validação obrigatória

Uma coisa crítica: **Manus alucina**. Às vezes inventa URLs que não existem, atribui quotes a pessoas que não disseram aquilo, cita dados com precisão falsa.

Regra: **antes de usar qualquer dado do relatório dele em algo público, valide 3-5 fontes críticas manualmente**. Abre os links. Confere os números.

Manus é um acelerador brutal, mas não é infalível. Seu papel como maestro continua: validar o que chega.

---

## Síntese da Parte 2 — A partitura das cinco ferramentas

Se você memorizar uma única coisa da Parte 2, seja esta tabela:

| Ferramenta | Papel | Use quando |
|---|---|---|
| **Claude** | Arquiteto | Planejar, especificar, auditar, decidir |
| **Gemini** | Tutor | Configurar coisas que você não sabe fazer |
| **GPT** | Sparring | Brainstorm rápido, copy, imagem |
| **Lovable** | Executor visual | Scaffold inicial e preview |
| **Manus** | Operário autônomo | Delegar tarefas longas com entregável pronto |

Cole isso num papel. Deixa do lado do computador. Nos próximos 30 dias, toda vez que você for abrir uma aba, olhe a tabela primeiro.

Na Parte 3, vamos juntar tudo: o ciclo dos 5 passos que você vai rodar a cada fase da trilha.

---
