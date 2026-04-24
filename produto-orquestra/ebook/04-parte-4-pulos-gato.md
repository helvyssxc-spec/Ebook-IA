# PARTE 4 — Os Dois Pulos do Gato

> *Este é o centro gravitacional do método. Se você lê só uma parte deste ebook, que seja esta. Os dois pulos do gato pagam o livro cem vezes.*

---

## Capítulo 11 — Pulo do Gato #1: Gemini como Tutor

Todo iniciante trava em algum momento. Sempre. O momento é sempre o mesmo: quando precisa configurar algo que nunca configurou.

Configurar banco de dados. Apontar DNS. Ativar webhook. Configurar OAuth. Deploy em Vercel. Essas são as cinco paredes em que 90% dos iniciantes batem e desistem.

Este capítulo é sobre derrubar essas cinco paredes com uma única técnica.

### O problema é psicológico antes de técnico

Quando você abre o painel do Supabase pela primeira vez, você vê 18 abas laterais, 40 botões, jargão por todo lado. Sua reação natural é travar. Porque o painel assume que você sabe o que é "RLS", "PostgREST", "Realtime", "Storage". Você não sabe. Nada ali faz sentido.

A solução popular é péssima: ler documentação. A doc do Supabase assume o mesmo nível de conhecimento que o painel. Você ia abrir, ler 10 páginas, não entender nada, fechar.

Outra solução popular também é ruim: vídeo no YouTube. Vídeo de 2023 mostra um painel que mudou em 2026. Você segue os passos, botão está em outro lugar, você trava, fecha.

A solução que funciona: **conversar com uma IA que olha o painel junto com você**.

É isso que o Gemini faz, e faz melhor que qualquer outra ferramenta. Você manda print do painel, diz "estou aqui, meu objetivo é esse, o que clico agora?". Ele responde explicando o que aparece na tela e qual botão apertar.

É como ter um professor particular de tecnologia, disponível 24h, que nunca se irrita, nunca julga sua pergunta e nunca te faz sentir burro.

### A técnica "Me Guie Passo a Passo"

O prompt matriz — este é literalmente o único prompt que você precisa memorizar pra destravar qualquer configuração técnica:

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
- Ao final de cada etapa, me diga "confirmado?" antes de seguir.

Vamos começar pela etapa 1.
```

Decore isso. Cola num arquivo. Use sempre que travar.

Esse prompt faz 5 coisas importantes:
1. Desliga o "modo intelectual" do Gemini e liga o "modo tutor".
2. Força ele a ir devagar em vez de despejar 10 passos.
3. Obriga ele a validar entendimento antes de avançar.
4. Abre canal pra você mandar print da tela.
5. Define a responsabilidade: ele explica, você executa, ele valida.

---

### Tutorial 1 — Configurar Supabase do zero

Vamos passar em detalhe pela primeira aplicação prática. Este é o cenário: você acabou de criar conta no Supabase, abriu o painel, e está paralisado.

**Seu prompt inicial:**
```
Sou iniciante absoluto. Nunca configurei banco de dados na vida.

Preciso: criar projeto no Supabase com as tabelas profiles,
subscriptions, items. Preciso também configurar Row Level
Security (RLS) e integrar Google OAuth.

Stack: React + TypeScript + Supabase.

Me guie passo a passo. [resto do prompt matriz]

Vamos começar pela etapa 1.
```

**Gemini responde:**
> Beleza. Etapa 1: criar o projeto.
>
> 1. Acesse https://supabase.com/dashboard
> 2. Faça login (use GitHub se já tem conta — é mais rápido).
> 3. Clique em "New project" no canto superior direito.
> 4. Preencha:
>    - Organization: deixe o default ou crie uma nova.
>    - Name: dê um nome (ex: "meu-saas-v1").
>    - Database password: gere uma senha forte e SALVE num
>      gerenciador de senhas (você vai precisar depois).
>    - Region: escolha a mais próxima de você. Pra Brasil,
>      "South America (São Paulo)".
>    - Plano: deixe Free (você pode mudar depois).
>
> Clique em "Create new project" e espere 2 minutos enquanto
> o projeto é provisionado.
>
> Confirmado? Me avisa quando estiver pronto e vamos pra etapa 2.

Você faz exatamente isso. Se trava em algo, tira print e cola. Gemini explica. Você destravra.

**Etapa 2 (depois da confirmação):**
> Agora vamos criar as tabelas. Abre o painel do seu projeto e
> clica em "SQL Editor" no menu lateral.
>
> Vou te passar o SQL completo, comentado, pra você colar e rodar.
> Copia o bloco abaixo:
>
> [SQL com comentários explicativos]
>
> Cola no editor, clica em "Run" no canto inferior direito.
> Se aparecer "Success. No rows returned", funcionou.
> Se aparecer erro, manda print.
>
> Confirmado?

E assim por diante. Etapa a etapa. Quando precisar fazer algo no painel (não no SQL), Gemini explica qual botão, em qual menu, qual campo preencher.

**Tempo total pra configurar Supabase completo com Gemini:** 45 minutos a 1 hora, na primeira vez. Depois que você fez uma vez, as próximas levam 15 minutos.

**Tempo pra configurar lendo doc sozinho:** desiste no minuto 30 e vira "vou aprender programação primeiro".

---

### Tutorial 2 — Apontar domínio e configurar DNS

Segunda parede clássica. Você comprou `meuproduto.com.br` no Registro.br, hospedou o site no Vercel, e agora precisa "apontar" o domínio. Não faz ideia do que isso significa.

**Prompt:**
```
Sou iniciante absoluto. Nunca configurei DNS na vida.

Preciso: apontar meu domínio meuproduto.com.br, comprado no
Registro.br, pro meu site hospedado no Vercel.

[resto do prompt matriz]

Explique também o que cada tipo de registro DNS (A, CNAME, MX, TXT)
significa antes de usar. Vamos começar pela etapa 1.
```

Gemini vai começar explicando:
- O que é DNS (em 2 frases).
- Por que existem vários tipos de registro.
- Qual você vai usar (normalmente A ou CNAME pra Vercel).
- Quanto tempo demora pra propagar.

Depois te guia:
1. No painel do Vercel: adiciona o domínio, copia os valores DNS que o Vercel mostra.
2. No painel do Registro.br: entra em "Configurações DNS" → "Editar zona".
3. Adiciona os registros exatamente como o Vercel pediu.
4. Salva.
5. Testa propagação em https://dnschecker.org.

Quando você trava em algum campo ("o que coloco no campo 'TTL'?"), tira print, manda, ele explica.

---

### Tutorial 3 — Configurar webhook do Stripe

Terceira parede. Você integrou Stripe Checkout, o pagamento processa, mas... nada acontece depois. A assinatura não aparece no Supabase. O usuário paga e continua sem acesso premium.

O problema: falta configurar o webhook que avisa seu app que o pagamento foi feito.

**Prompt:**
```
Sou iniciante absoluto. Nunca configurei webhook de pagamento.

Preciso: configurar webhook do Stripe pra que, quando alguém
assinar, meu app saiba e atualize a tabela `subscriptions` no
Supabase.

Stack: Supabase Edge Functions, React, Stripe.

[resto do prompt matriz]

Explique também o que é webhook e por que eu preciso validar a
assinatura cripto (stripe-signature) antes de confiar no payload.
```

Gemini vai:
1. Explicar o conceito de webhook em 2 frases.
2. Te guiar a criar uma Edge Function no Supabase.
3. Te dar o código completo da Edge Function (já com validação de assinatura).
4. Te guiar a criar o endpoint webhook no painel do Stripe.
5. Te ensinar a testar em sandbox com cartão de teste.
6. Te mostrar como checar logs de evento no painel do Stripe.

Esse é talvez o tutorial mais valioso dos cinco. Webhook mal configurado é onde 80% dos SaaS novos perdem dinheiro silenciosamente.

---

### Tutorial 4 — Configurar OAuth com Google

Quarta parede. Você quer login com Google no seu app. Abre o Google Cloud Console pela primeira vez. Trava.

**Prompt:**
```
Sou iniciante absoluto. Nunca mexi no Google Cloud Console.

Preciso: configurar "Sign in with Google" no meu app, integrado
com Supabase Auth.

Domínio: meuproduto.com.br
Ambiente dev: localhost:3000

[resto do prompt matriz]

Aviso especial sobre redirect URIs — explique em detalhe porque é
onde quase todo mundo erra.
```

Gemini vai:
1. Explicar a diferença entre Consent Screen e OAuth Credentials.
2. Te guiar a criar projeto no Google Cloud.
3. Te guiar a habilitar as APIs certas.
4. Criar credenciais OAuth Web Application.
5. Configurar redirect URIs (o ponto traiçoeiro — você precisa dos URIs de dev E produção).
6. Pegar client_id e client_secret.
7. Colar essas credenciais no painel do Supabase Auth.
8. Testar fluxo de login em dev.
9. Publicar consent screen pra usuários externos (sem isso, só suas contas internas conseguem logar).

---

### Tutorial 5 — Deploy no Vercel e interpretação de logs

Quinta parede. Você tentou fazer deploy no Vercel, o build falhou, você olhou 400 linhas de log vermelho e fechou a aba.

**Prompt:**
```
Sou iniciante absoluto. Primeiro deploy no Vercel.

Preciso: fazer deploy de produção do meu app React/TS hospedado
no GitHub. Também preciso configurar variáveis de ambiente
(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, STRIPE_SECRET_KEY).

[resto do prompt matriz]

Se o build falhar, vou colar o log inteiro e você me explica
o que significa e como corrigir.
```

Gemini vai:
1. Explicar o que é deploy e o que acontece nos bastidores.
2. Te guiar a conectar repositório GitHub ao Vercel.
3. Explicar cada campo na tela de configuração inicial.
4. Ensinar a diferença entre Preview e Production.
5. Cadastrar as variáveis de ambiente com o contexto certo (dev, preview, production).
6. Rodar primeiro deploy.

**Quando o build falhar** (e vai falhar na primeira vez, quase sempre), você cola o log inteiro no chat. Gemini lê, explica o que quebrou, te diz o que ajustar. Geralmente 2-3 iterações até o build passar.

---

### Uma observação crítica sobre o Gemini

Em todos esses tutoriais, você está tratando o Gemini como tutor — não como solucionador automático. A diferença é sutil mas importante.

**Tutor:** explica, valida, ensina enquanto executa. Você entende o que está fazendo.
**Solucionador automático:** faz pra você, você não aprende nada.

Você quer o primeiro. O Gemini faz bem o primeiro porque o prompt matriz força ele a esse comportamento. Sem o prompt matriz, ele cai no segundo modo, e aí você termina o processo com o DNS apontado mas sem ter entendido por quê.

Entender é valioso. Da próxima vez que precisar fazer algo parecido, você faz sozinho em 10 minutos.

---

## Capítulo 12 — Pulo do Gato #2: Parte 1 — O Fluxo Econômico

Hora de falar sobre dinheiro.

Lovable é uma ferramenta maravilhosa. É também uma ferramenta cara. Não pelo preço de assinatura — mas pelo custo por edição.

Todo prompt que você manda dentro do Lovable queima créditos. Esses créditos são reais e acabam. Se você usa o Lovable da forma que parece natural (pedir, refinar, ajustar, iterar), você vai queimar dezenas de dólares numa semana, e possivelmente não vai ter produto publicado.

Este capítulo é sobre entender exatamente o tamanho do problema.

### O que significa "edição iterativa"

Quando você constrói algo no Lovable, o fluxo natural é este:

1. "Crie um app de notas com login."
2. "Deixa o header mais escuro."
3. "Adiciona um botão no canto."
4. "Muda a fonte pra Inter."
5. "Move esse botão mais pra direita."
6. "Ah, e também quero que salve as notas no Supabase."
7. "Esqueci, adiciona autenticação com Google."
8. ...

Cada um desses 8 prompts queima crédito. Projeto real médio passa dos 60-80 prompts facilmente.

Cada prompt, em cima disso, regenera grandes porções do código. Lovable não é um editor de código — é um gerador de código. Cada prompt é uma nova geração quase completa.

### A matemática do desastre

Vamos fazer uma simulação realista.

**Cenário A — Iniciante sem método (100% Lovable):**
- Scaffold inicial: 1 prompt.
- Ajustes visuais: 15 prompts.
- Adição de features: 25 prompts.
- Correções de bugs: 20 prompts.
- Integrações (Supabase, Stripe, Resend): 15 prompts.
- Ajustes finais pré-deploy: 10 prompts.

**Total:** cerca de 86 prompts no Lovable.

Pelo pricing do Lovable (que varia de plano, mas estima-se em USD 0.20 a USD 0.35 por prompt em projetos médios), isso gasta entre **USD 17 e USD 30** por semana de trabalho. Se o projeto demora 3 semanas, está falando em **USD 50 a USD 90** só em crédito Lovable.

Adiciona a assinatura mensal (USD 20-30) e você passou de USD 100 no projeto.

**Cenário B — Iniciante com método (Lovable + GitHub + Claude Code):**
- Scaffold inicial: 1 prompt no Lovable.
- Ajustes triviais visuais: 2 prompts no Lovable.
- **Tudo mais:** Claude Code.

**Total no Lovable:** 3 prompts. USD 1 a USD 1,50.
**Total no Claude Code:** USD 20 por mês de assinatura (cobertura ampla).

Custo total do projeto no Cenário B: **USD 22**.

Diferença: **USD 80 economizados**. Isso é 400% mais barato.

Multiplique por vários projetos por ano. É o valor de um computador novo, ou uma viagem, ou o orçamento de ads pra lançar o produto.

### Por que iterar no Lovable custa caro mesmo sendo "só um prompt"

Três razões técnicas:

**1. Lovable regenera muito código a cada prompt.**
Ao pedir pra mudar a cor de um botão, Lovable pode regenerar o componente inteiro, o arquivo inteiro, ou até arquivos relacionados. Isso consome muito "token" por baixo — e custo sobe.

**2. Lovable incorpora contexto longo.**
A cada prompt, Lovable lê o projeto inteiro (ou parte grande dele) pra entender o contexto. Projeto cresce, custo cresce.

**3. Lovable é otimizado pra velocidade de criação, não eficiência de iteração.**
É um gerador de UI que virou editor de projeto. A arquitetura é boa pra gerar do zero, menos boa pra iterar.

### Por que iterar no Claude Code custa muito menos

Claude Code é um CLI conversacional. Você roda no terminal, e ele edita arquivos do seu projeto local com base em prompts. Três vantagens:

**1. Contexto controlado.**
Você (ou a IA) escolhe quais arquivos entram no contexto. Não carrega o projeto inteiro a cada prompt. Custa menos token por chamada.

**2. Tarefas cirúrgicas.**
Você pode dizer "ajuste só a cor desse botão no arquivo X". Claude Code edita 1 linha. Custo: centavos.

**3. Assinatura fixa vs. pay-per-prompt.**
O Claude Code Plan da Anthropic é uma assinatura mensal (a partir de USD 20/mês). Você usa bastante sem surpresa no cartão.

### A única dúvida legítima: "mas Claude Code não é programar?"

Não. Ou melhor: é — mas no sentido "conversar com o código", não "digitar código".

No Claude Code você:
- Abre o terminal na pasta do projeto.
- Digita `claude` pra entrar no chat.
- Escreve em português: "ajuste a cor do botão principal pra bege" ou "adicione uma página de perfil com edição de dados".
- Claude Code edita os arquivos diretos.
- Você vê o diff (mudança), aprova ou pede ajuste.
- Commit + push, Lovable sincroniza o preview.

Você nunca escreveu uma linha de código "no dedo". Você só conversou.

É tão acessível quanto o Lovable. E 30x mais barato.

### Matriz de decisão — quando usar o quê

| Tarefa | Lovable | Claude Code |
|---|---|---|
| Scaffold inicial do projeto | ✅ | ❌ |
| Preview visual rápido | ✅ | ❌ |
| Mostrar progresso pra cliente | ✅ | ❌ |
| Edição de componente existente | ❌ | ✅ |
| Adicionar feature nova | ❌ | ✅ |
| Corrigir bug | ❌ | ✅ |
| Integração com API externa | ❌ | ✅ |
| Configurar Edge Function Supabase | ❌ | ✅ |
| Ajuste de copy/texto estático | ❌ | ✅ |
| Mudança trivial de CSS (1 cor, 1 padding) | ⚠️ (ok rápido) | ✅ |
| Refatoração estrutural | ❌ | ✅ |

Olha essa tabela. Lovable ganha em 3 cenários. Claude Code ganha em 9. Essa é a proporção real de tempo gasto num projeto.

Se você passa 90% do tempo usando a ferramenta errada pra 90% das tarefas, claro que queima crédito. Simples assim.

---

## Capítulo 13 — Pulo do Gato #2: Parte 2 — Executando o Fluxo

Agora o passo a passo operacional do fluxo econômico. Vou cobrir cada etapa em detalhe, incluindo os comandos exatos de terminal.

### Etapa 1 — Scaffold no Lovable (1 a 3 prompts)

Já cobrimos no capítulo 6. Resumo: um prompt grande, bem estruturado, que cria o projeto inteiro de uma vez. No máximo 2-3 prompts de refinamento depois. Então: sai do Lovable.

### Etapa 2 — Conectar o projeto ao GitHub

No painel do Lovable, você vai encontrar um botão de "GitHub integration" (varia de posição conforme a versão, mas sempre está presente).

1. Clique nele.
2. Autorize o Lovable a acessar seu GitHub.
3. Escolha "criar novo repositório" (ou vincular a um existente).
4. Nome do repo: geralmente o nome do seu projeto.
5. Público ou privado: pra plano grátis do Vercel, público é mais simples. Pra projetos reais, privado é seguro.
6. Confirma.

Em 30 segundos, o Lovable cria o repo no seu GitHub e faz o primeiro push. O código do seu projeto está agora no GitHub.

### Etapa 3 — Clonar o repositório localmente

Abra o terminal no seu computador.

> **Se você nunca abriu terminal:** não se assuste. É uma caixa preta onde você digita comandos. No Mac, procura "Terminal" no Spotlight. No Windows, procura "PowerShell". Linux você já sabe.

Comando pra clonar (substitua pela URL do seu repo):
```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

Entra na pasta:
```bash
cd seu-projeto
```

Pronto. Agora o código do seu projeto está no seu computador também.

### Etapa 4 — Abrir o projeto no Claude Code

Se você nunca instalou o Claude Code, é rápido. Vai no site oficial da Anthropic, segue o guia (leva uns 5 minutos). Precisa de conta Anthropic com plano ativo.

Com ele instalado, dentro da pasta do projeto, basta rodar:
```bash
claude
```

Abre um chat. Você está dentro do Claude Code, ele está vendo os arquivos da sua pasta.

**Primeiro prompt de teste:**
```
Liste os arquivos do projeto e me faça um resumo rápido
da estrutura.
```

Claude responde descrevendo o que ele vê: componentes, páginas, arquivos de configuração. Você está na cabine de comando.

### Etapa 5 — Editando no Claude Code

A partir daqui, você usa o Claude Code pra tudo. Algumas formas comuns:

**Adicionar uma feature:**
```
Preciso adicionar uma página de /perfil onde o usuário pode:
- Ver seu nome e email.
- Editar seu nome.
- Fazer upload de uma foto de perfil (usando Supabase Storage).
- Cancelar assinatura Stripe.

Antes de editar, me diga quais arquivos vai mexer e peça aprovação.
```

**Corrigir bug:**
```
Tem um bug: quando o usuário clica em "salvar nota", às vezes
o salvamento dá erro mas a UI não mostra. Investigue a causa e
proponha correção. Antes de aplicar, me explique.
```

**Refatoração:**
```
A lógica de chamar a API do Stripe está duplicada em 3 componentes.
Extraia pra um hook customizado reutilizável. Mantenha o
comportamento idêntico.
```

Claude Code sempre pede aprovação antes de editar arquivos. Você vê o diff, aprova ou ajusta.

### Etapa 6 — Commit e push

Depois de cada bloco de mudanças (ou no final da sessão), você faz commit e push. Isso envia as mudanças de volta pro GitHub, e o Lovable sincroniza o preview.

Você pode pedir pro próprio Claude Code fazer isso:
```
Faça commit dessas mudanças com uma mensagem clara descrevendo
o que foi feito, e faça push pro GitHub.
```

Claude Code executa os comandos Git no terminal. Pronto. Em 30 segundos o Lovable atualiza o preview, e você vê o resultado.

### Etapa 7 — Lovable como visualizador

De agora em diante, Lovable é basicamente um navegador com preview do seu projeto. Você abre pra:
- Testar visualmente depois de edições.
- Compartilhar preview com cliente.
- Mostrar pra amigos.

Você NÃO edita mais no Lovable. Sua casa é o Claude Code.

### Resumo em 3 frases

1. **Lovable começa, Claude Code continua, GitHub sincroniza.**
2. **Você só volta pro Lovable pra visualizar, nunca pra editar.**
3. **O custo cai de USD 80 pra USD 22 por projeto, e você ganha controle real do código.**

---

## Capítulo 14 — Claude Code na prática pra não-devs

Este capítulo é pra quem nunca abriu terminal. Pra quem tem medo de código. Pra quem acha que "Git" é uma tacada no golfe.

Boa notícia: você não precisa virar programador. Você precisa aprender 6 comandos de terminal e entender 3 conceitos básicos de Git. Total de tempo de aprendizado: 30-40 minutos.

### Os 3 conceitos de Git que você precisa

**1. Repositório (repo)**
Um repositório é a pasta do seu projeto, versionada. Todo arquivo do projeto mora ali. Pense numa pasta mágica que lembra todas as versões anteriores de cada arquivo.

**2. Commit**
Um commit é um "snapshot" da pasta num momento do tempo. Você salva uma versão do projeto dizendo "aqui, nesse estado". Depois pode voltar pra esse estado se der problema.

**3. Push**
Push é quando você envia seus commits locais (do seu computador) pro GitHub (na nuvem). É como um backup na nuvem, mas com todo o histórico.

É isso. Repositório = pasta com histórico. Commit = salvar uma versão. Push = mandar pra nuvem.

### Os 6 comandos de terminal

Vou listar cada um com o que faz, quando usar, exemplo.

**1. `cd [pasta]` — entrar numa pasta**
```bash
cd ~/Documents/meu-projeto
```
Te leva pra pasta do projeto. Você precisa estar dentro dela pra rodar os outros comandos.

**2. `git clone [URL]` — baixar um repositório do GitHub**
```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```
Usa isso uma vez, no começo, pra baixar o projeto do GitHub pro seu computador.

**3. `git status` — ver o que mudou**
```bash
git status
```
Mostra quais arquivos você alterou desde o último commit. Útil pra saber o que você vai commitar.

**4. `git add .` — marcar todos os arquivos alterados pra commit**
```bash
git add .
```
O ponto no final significa "todos". Use antes de commit.

**5. `git commit -m "mensagem"` — salvar uma versão**
```bash
git commit -m "adiciona página de perfil"
```
A mensagem descreve o que mudou. Seja claro. Você vai agradecer depois.

**6. `git push` — enviar pro GitHub**
```bash
git push
```
Manda seus commits pro GitHub. O Lovable vai sincronizar automaticamente.

### O fluxo padrão de trabalho

Depois de cada bloco de mudanças no Claude Code:

```bash
git status          # confere o que mudou
git add .           # marca tudo
git commit -m "o que você mudou, em português"
git push            # envia pro GitHub
```

Em 95% dos casos, é isso. Esses 4 comandos resolvem seu dia a dia inteiro.

### Deixa o Claude Code rodar esses comandos por você

A parte linda: você não precisa digitar esses comandos sozinho. Claude Code faz pra você.

Depois de uma edição, simplesmente escreva:
```
Faça commit dessas mudanças e push pro GitHub. Mensagem:
"[descrição do que mudou]".
```

Claude Code executa os 4 comandos automaticamente. Você só aprova a execução.

Você literalmente nunca precisa digitar `git` no terminal se não quiser. Mas é bom saber o que está acontecendo por baixo.

### Erros comuns do iniciante (e como resolver)

**"git command not found"**
Git não está instalado. No Mac, vem com as "Command Line Tools" do Xcode. Pode instalar rodando `xcode-select --install`. No Windows, baixa em git-scm.com.

**"permission denied" no push**
Você não está autenticado no GitHub. Configura usando GitHub CLI (`gh auth login`) ou SSH key. Claude Code pode te guiar nisso se acontecer.

**"merge conflict"**
Duas versões do mesmo arquivo divergem. Raro acontecer se você é a única pessoa no projeto. Se acontecer, tira print e manda pro Gemini ou Claude Code — eles resolvem.

**"your branch is behind"**
Significa que o Lovable alterou algo no GitHub que você ainda não baixou. Roda `git pull` pra baixar antes de dar push.

### A frase pra se lembrar

*"Eu não programo. Eu conversa com a ferramenta que programa."*

Cola num papel. Te lembra sempre que sentir impostor.

Na Parte 5, fechamos o ciclo: troubleshooting de problemas comuns e o que fazer depois que seu produto está no ar.

---
