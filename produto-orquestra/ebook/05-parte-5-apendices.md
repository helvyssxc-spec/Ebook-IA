# PARTE 5 — Escalar e Profissionalizar

> *Seu produto está no ar. Agora vem o que ninguém conta: o que fazer depois.*

---

## Capítulo 15 — Troubleshooting dos erros mais comuns

Este capítulo é pra você consultar quando algo quebrar. Não leia de ponta a ponta — leia o erro que está acontecendo com você agora.

São 15 situações que eu sei que vão acontecer, porque acontecem com 90% das pessoas que fazem a trilha. Cada uma com o diagnóstico e a solução específica.

### Erro 1: A IA alucinou e inventou uma função que não existe

**Sintoma:** Claude Code ou Lovable gerou código chamando um método tipo `supabase.auth.magicalSignIn()` e isso não existe na documentação.

**Causa:** Modelos generativos às vezes inventam APIs plausíveis.

**Solução:**
1. Abra o Gemini. Mande print do código gerado.
2. Prompt: "Esse código usa o método X. Verifique se esse método existe na documentação oficial da biblioteca. Se não existir, sugira o método correto."
3. Gemini consulta a doc e te dá o método real.
4. Volte pro Claude Code e peça: "substitua X por Y conforme a doc oficial da biblioteca".

### Erro 2: Sincronização Lovable ↔ GitHub quebrou

**Sintoma:** Você editou no Claude Code e deu push, mas o preview do Lovable não atualizou.

**Causa:** Lovable pode ter dessincronizado, ou você editou direto no Lovable depois que saiu dele.

**Solução:**
1. No painel do Lovable, procure um botão "Sync with GitHub" ou similar.
2. Force a sincronização manual.
3. Se não resolver: faça um commit vazio pra triggar nova sincronização:
   ```bash
   git commit --allow-empty -m "trigger lovable sync"
   git push
   ```
4. Última opção: reconecte o GitHub no Lovable (desconecta e conecta de novo).

### Erro 3: Supabase não conecta ("Failed to fetch")

**Sintoma:** O app carrega, mas qualquer ação que precisa do Supabase falha.

**Causa (90% das vezes):** variáveis de ambiente erradas ou ausentes.

**Solução:**
1. Abra o console do navegador (F12 → Console).
2. Digite: `console.log(import.meta.env)` e aperte Enter.
3. Confirme que `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` aparecem com valores.
4. Se não aparecem: as variáveis não foram configuradas no Vercel (ou Lovable).
5. Vá em Settings → Environment Variables e adicione. Redeploy.

### Erro 4: "CORS error" no console

**Sintoma:** Erro vermelho no console falando em CORS quando tenta acessar API externa.

**Causa:** A API que você está chamando não permite requisição do seu domínio.

**Solução:** NUNCA chame APIs de terceiros direto do frontend com chaves secretas. Crie uma Edge Function no Supabase que faz a chamada (o backend não tem problema de CORS) e o frontend chama a Edge Function.

Prompt pro Claude Code:
```
Essa chamada à API X está dando CORS error no frontend.
Mova a chamada pra uma Edge Function do Supabase e faça o
frontend chamar a Edge Function em vez da API direto.
```

### Erro 5: RLS bloqueando queries que deveriam funcionar

**Sintoma:** Usuário logado tenta ler dados próprios e recebe array vazio. Ou inserir dá erro.

**Causa:** Policy de RLS mal configurada.

**Solução:**
1. No Supabase, vá na tabela afetada → Policies.
2. Confirme que existe policy pra SELECT (ou INSERT, conforme o caso).
3. A policy deve usar `auth.uid()` pra comparar com `user_id`.
4. Exemplo correto:
   ```sql
   create policy "users read own data"
   on items for select
   using (auth.uid() = user_id);
   ```
5. Se a policy existe mas não funciona, teste no SQL Editor rodando a query diretamente — o erro retornado é mais claro.

### Erro 6: Webhook do Stripe não dispara

**Sintoma:** Usuário pagou no Stripe, mas a assinatura não apareceu no Supabase.

**Causa:** várias possíveis. Vamos por ordem de probabilidade:

**Solução:**
1. **Checa no painel Stripe** (Events tab): o evento foi entregue? Qual status?
2. Se status é "Failed" e retorna 500: há bug na sua Edge Function. Vá nos logs.
3. Se status é "Failed" e retorna 401: a validação de `stripe-signature` está falhando. Confira o `STRIPE_WEBHOOK_SECRET` na sua Edge Function.
4. Se status é "Succeeded" mas o Supabase não atualizou: a Edge Function rodou mas tem bug na lógica de atualização. Confira os logs da Edge Function no painel Supabase.

### Erro 7: Build falha no Vercel

**Sintoma:** Você faz push, Vercel tenta deploy, aparece "Build Failed".

**Causa:** várias, sempre no log.

**Solução:**
1. Clique no deploy falho no painel Vercel.
2. Copie o log de erro completo.
3. Cole no Gemini: "Meu build falhou no Vercel com esse log. Explique em português o que aconteceu e como corrigir." Anexe o log.
4. Gemini interpreta e te diz o que fazer.

Erros comuns encontrados aqui:
- Variável de ambiente faltando.
- Erro de TypeScript (tipo esperado X, recebeu Y).
- Import de pacote que não está no package.json.
- Case-sensitivity (nome de arquivo no Mac funciona, no Linux do Vercel não).

### Erro 8: "Your branch is behind by X commits"

**Sintoma:** Tenta fazer `git push` e aparece esse erro.

**Causa:** Alguém (ou o Lovable) alterou no GitHub e você não baixou ainda.

**Solução:**
```bash
git pull
# depois
git push
```

Se aparecer conflito de merge:
1. Abra os arquivos que o terminal marcou.
2. Decida manualmente qual versão fica.
3. Ou melhor: mande pro Claude Code resolver: "tem conflito de merge nesses arquivos, resolva mantendo [a versão X]".

### Erro 9: Domínio não resolve ("Site can't be reached")

**Sintoma:** Você apontou DNS mas o domínio não abre o site.

**Causa:** 3 possibilidades.

**Solução:**
1. **DNS ainda propagando.** Espere até 24h. Teste em https://dnschecker.org — se aparecer em várias regiões, já propagou.
2. **Registro errado.** Volte no Vercel → Domains e confira EXATAMENTE os valores que eles pediram. Compare com o que está no Registro.br.
3. **Conflito com outros registros.** Se você tinha o domínio apontando pra outro lugar antes, remova os registros antigos conflitantes.

### Erro 10: Email vai pra spam

**Sintoma:** Você testa o email de boas-vindas, chega no spam (ou nem chega).

**Causa:** Domínio não verificado, DKIM/SPF não configurado, reputação do domínio ruim.

**Solução:**
1. No Resend, confirme que seu domínio está verificado (status "Verified").
2. Se não: siga o guia do Resend pra adicionar os registros DKIM/SPF no DNS do seu domínio.
3. Nunca envie de `@gmail.com` ou similares — use `@seudominio.com`.
4. Se o domínio é novo (< 1 mês), aqueça gradualmente: não mande 500 emails no primeiro dia.

### Erro 11: Login com Google não redireciona de volta

**Sintoma:** Usuário clica em "Login com Google", autoriza, e fica numa página de erro ou em branco.

**Causa (99% das vezes):** redirect URI mal configurado.

**Solução:**
1. Google Cloud Console → Credentials → seu OAuth client.
2. Em "Authorized redirect URIs", tenha ESSAS três:
   ```
   https://<seu-projeto>.supabase.co/auth/v1/callback
   http://localhost:3000       (ou sua porta de dev)
   https://seusite.com.br   (produção)
   ```
3. Salvar. Pode demorar até 5 min pra valer.
4. Teste de novo em aba anônima.

### Erro 12: Gemini/Claude/GPT para de responder no meio

**Sintoma:** Você manda prompt, ele começa a responder, e trunca no meio.

**Causa:** limite de tokens da conversa atingido, ou erro temporário do serviço.

**Solução:**
1. Abra conversa nova. Copie o que precisa de contexto. Recomece com o essencial.
2. Se estiver trabalhando em algo longo no Claude, use **Projects** — contexto persiste entre conversas.
3. Evite colar 5000 linhas de código num prompt — pedaços menores são mais eficientes.

### Erro 13: Supabase Storage não aceita upload

**Sintoma:** Você tenta fazer upload de imagem e dá erro.

**Causa:** bucket não existe, ou RLS do Storage não permite.

**Solução:**
1. Confirme que o bucket existe (painel Supabase → Storage).
2. Se o bucket é privado, confirme que as policies permitem upload pro user autenticado:
   ```sql
   create policy "authenticated users upload"
   on storage.objects for insert
   to authenticated
   with check (bucket_id = 'avatars');
   ```
3. No código, confirme que está usando o client autenticado (não o service_role no frontend).

### Erro 14: "Crédito esgotado" no Lovable no meio do projeto

**Sintoma:** Você queimou o crédito do mês antes de terminar.

**Causa:** você não seguiu o Pulo do Gato #2.

**Solução (imediata):**
1. Pare de editar no Lovable AGORA.
2. Conecte ao GitHub se ainda não conectou.
3. Passa tudo pro Claude Code.
4. Espere o próximo ciclo de crédito pra usar Lovable só como preview.

**Solução (definitiva):** relê o Capítulo 12 e segue à risca.

### Erro 15: A assinatura não libera acesso premium

**Sintoma:** Usuário pagou, webhook atualizou tabela, mas a UI continua tratando ele como free.

**Causa:** lógica de verificação de status não está lendo corretamente.

**Solução:**
1. No frontend, adicione log temporário: `console.log('subscription:', subscription)`.
2. Reload. Olhe no console: o objeto subscription veio?
3. Se veio null: a query não está rodando ou está filtrando errado.
4. Se veio com status 'active': o bloqueio está na lógica de permissão, revise a condicional.
5. Pro Claude Code: "quando subscription.status é 'active' ou 'trialing', liberar acesso premium. Revise o componente X."

---

## Capítulo 16 — Depois de publicar: o que fazer

Você chegou no dia 30. Seu produto está no ar. Primeira venda aconteceu. E agora?

Este capítulo é curto mas importante. Porque o pior que pode acontecer é você tratar o lançamento como fim, e não como começo.

### Os primeiros 7 dias pós-lançamento

Não adicione features novas. Não redesenhe nada. Não brinque com o código.

Faça apenas 3 coisas:

**1. Converse com cada cliente novo pessoalmente.**
Manda email ou WhatsApp pra cada um dos primeiros 10-20 clientes pagantes. Pergunte:
- Como você chegou até aqui?
- O que te convenceu a pagar?
- Tem alguma parte confusa do produto?
- Qual a próxima coisa mais urgente que você precisa?

Essas conversas valem mais do que qualquer pesquisa de mercado. Eu garanto.

**2. Monitore ativamente.**
Deixe abertos em abas:
- Dashboard do Stripe (Events tab).
- Dashboard do Supabase (Logs).
- Dashboard do Vercel (Functions + Analytics).
- Email da conta que recebe alertas.

Qualquer erro em produção, você vê em segundos e pode reagir rápido.

**3. Documente o que aprendeu.**
Num arquivo `.md` no seu projeto, anote:
- Bugs que apareceram nos primeiros dias.
- Feedback recorrente.
- Métricas iniciais (conversão, churn precoce, tempo médio de uso).
- Decisões que você precisa tomar em breve.

Esse arquivo vai ser ouro em 60 dias.

### Os 30 dias seguintes

Com base no feedback dos primeiros 7 dias, você identifica:
- **Fricção número 1** que está afastando cliente.
- **Feature número 1** que todo mundo pede.
- **Feature número 1** que ninguém usa (e que você pode remover).

Foque TODO o seu tempo nesses 3 pontos. Nada mais.

Não adicione features inventadas. Não reescreva o site porque você não gostou mais. Não mude o preço 3 vezes. Foco é o que separa o produto que sobrevive do produto que morre.

### Quando buscar crescimento agressivo

A hora de apertar o acelerador de marketing é depois que você tem:
- **Pelo menos 20 clientes pagantes.**
- **Churn mensal abaixo de 15%.**
- **NPS acima de 30.**
- **Você mesmo recomendaria pro seu melhor amigo.**

Antes disso, gastar em tráfego é jogar dinheiro num balde furado. Consertos de produto vêm primeiro.

Quando chegar a hora, o Pulo do Gato #1 + #2 continuam te servindo. Você vai precisar de:
- Landing com variações A/B.
- Criativos de ad em volume.
- Sequências de email mais sofisticadas.
- SEO de verdade.

Tudo isso é GPT e Manus delegando trabalho pesado. Você continua orquestrando.

### Quando sair do stack no-code

Em algum momento você vai ouvir: "ih, isso aí não escala, você precisa migrar pra AWS/K8s/microserviços".

95% das vezes isso é bobagem. Supabase + Vercel + Stripe aguenta fluxos de milhões de reais/ano tranquilamente. Empresas listadas usam essa stack.

Só considere migrar se:
- Custo mensal de Supabase passa de USD 500 (aí é hora de conversar com eles pra plano customizado).
- Você tem caso de uso bem específico (ex: ML pesado, processamento de vídeo).
- Você contratou time de 3+ devs experientes.

Antes disso: fica onde está. Resolve o problema do cliente. Fatura.

### Virando autoridade no seu nicho

Algo que acontece depois que o produto está rodando: você percebe que sabe MUITO sobre o nicho. Mais do que a maioria. E começa a ser procurado:
- "Como você fez?"
- "Consegue construir algo parecido pra mim?"
- "Dá uma consultoria?"

Três caminhos se abrem:

**1. Continuar focado no produto.** Ignora as solicitações. Fatura mais.

**2. Fazer consultoria de alto ticket.** Cobrar R$ 5-15k por projeto entregue a clientes. Exige tempo, mas margem altíssima.

**3. Ensinar o método.** Se você se interessar por ensinar, crie seu próprio curso, ebook, mentoria. O mercado brasileiro em 2026 paga bem por esse tipo de conhecimento prático.

Escolha um. Os três dão certo. O segredo é não tentar fazer os três ao mesmo tempo.

---

## Encerramento do ebook

Você chegou até aqui. Parabéns.

Se você está lendo isso sem ter começado ainda, entendi. Feche o PDF. Abre o Dashboard interativo. Começa a Fase 1. Volta aqui quando travar.

Se você está lendo isso tendo feito alguma parte da trilha, você já sabe algo que 99% das pessoas não vão saber nunca: **método vence talento, consistência vence intensidade, e entregar imperfeito vence não entregar**.

A IA não é mágica. Ela é alavanca. Sem ponto de apoio (seu cérebro, sua clareza, seu critério), alavanca não levanta nada.

Este ebook foi o ponto de apoio. A alavanca agora é sua.

Construa coisas. Publique mesmo imperfeitas. Conversa com clientes de verdade. Ajusta. Repete.

Em 12 meses, você vai ler sua primeira versão deste ebook e achar que era só o começo.

Boa obra.

---

# APÊNDICES

## Apêndice A — Glossário técnico sem vergonha

Termos que aparecem o tempo todo. Cada um em 1-2 frases, sem jargão.

**API**
Um jeito padronizado de um programa pedir informação ou ação pra outro programa. Tipo um cardápio: você escolhe o prato (endpoint), passa detalhes (parâmetros), e recebe o prato (resposta).

**Auth (autenticação)**
Processo de provar quem você é no sistema. Login e senha, Google OAuth, etc. Diferente de autorização (que define o que você pode fazer depois de logado).

**Backend**
A parte do sistema que roda no servidor, longe do usuário. Onde ficam os dados seguros, as regras de negócio, as chaves secretas. Oposto de frontend.

**Bucket (Storage)**
Uma "pasta" no Supabase Storage onde você guarda arquivos (imagens, PDFs). Cada bucket tem suas regras de quem pode ler/escrever.

**Build**
O processo de transformar o código fonte em arquivos otimizados prontos pra rodar em produção. Onde erros aparecem antes do usuário ver.

**CORS**
Uma regra de segurança do navegador que impede um site de chamar APIs de outros domínios sem permissão. Causa o erro mais comum pra iniciante.

**CRUD**
Sigla de Create, Read, Update, Delete — as 4 operações básicas em dados. Todo SaaS é CRUD + regras de negócio.

**DNS**
Sistema que traduz nome de domínio (seudominio.com) pra endereço IP (192.168.1.1). Quando você compra domínio, precisa configurar DNS pra apontar pro seu site.

**Edge Function**
Código backend que roda perto do usuário (em servidor "na borda" da rede). Perfeito pra webhooks e APIs rápidas.

**Endpoint**
Uma URL específica de uma API que faz uma coisa específica. Tipo "/api/users" pra listar usuários.

**Environment Variables**
Chaves e configurações que mudam entre ambientes (dev, prod). Você não coloca no código — coloca em variáveis que o servidor lê.

**Frontend**
A parte do sistema que o usuário vê no navegador. HTML, CSS, JS, React. Oposto de backend.

**Hook (React)**
Função especial do React que te dá acesso a capacidades (estado, efeitos, contexto). useState, useEffect, etc. Você não precisa entender a fundo — só usar.

**HTTPS**
Versão segura do HTTP (os dados trafegam criptografados). Todo site profissional usa HTTPS. Vercel faz automático.

**JSON**
Formato de dados estruturados usado em APIs. Parece objeto JavaScript. Tipo: `{"nome": "João", "idade": 30}`.

**OAuth**
Protocolo que permite "Login com Google/Facebook/etc". Você autoriza o outro sistema a confirmar sua identidade.

**ORM**
Ferramenta que faz queries no banco usando código em vez de SQL direto. Supabase cliente é uma espécie de ORM.

**PRD (Product Requirements Document)**
Documento que descreve o que o produto faz, pra quem, por quê, como. Primeira entrega antes de qualquer código.

**Push (Git)**
Enviar seus commits locais pro repositório remoto (GitHub).

**React**
Biblioteca de JavaScript pra construir interfaces. Base do Lovable, do Next.js, de quase tudo moderno.

**Repository (repo)**
Uma pasta versionada com histórico. Normalmente hospedada no GitHub.

**RLS (Row Level Security)**
Recurso do PostgreSQL (e Supabase) que filtra automaticamente quais linhas cada usuário pode ver/editar. Obrigatório pra segurança em SaaS multi-tenant.

**Schema**
Estrutura do banco de dados — quais tabelas existem, quais colunas, quais tipos, quais relações.

**SSR (Server-Side Rendering)**
Gerar o HTML no servidor antes de mandar pro navegador. Melhor pra SEO e performance inicial.

**SSL/TLS**
Protocolos de criptografia que tornam o HTTPS seguro. Vercel gerencia automaticamente.

**TypeScript**
JavaScript com tipos. Ajuda a pegar bugs antes do usuário ver. Todo SaaS profissional usa.

**Webhook**
Um endpoint que RECEBE notificações de outros sistemas. Tipo: Stripe te manda um webhook quando alguém pagou.

---

## Apêndice B — Stack Map Visual

Referência rápida: qual ferramenta faz o quê no seu projeto.

```
┌──────────────────────────────────────────────────────┐
│                   FRONTEND                            │
│                                                       │
│   React + TypeScript + Tailwind + shadcn/ui          │
│   (scaffold feito no Lovable, depois editado em      │
│    Claude Code)                                       │
│                                                       │
│   Hospedagem: Vercel                                  │
│   Domínio: seusite.com.br                          │
└────────────────┬─────────────────────────────────────┘
                 │
                 │ API calls
                 ▼
┌──────────────────────────────────────────────────────┐
│                   BACKEND                             │
│                                                       │
│   Supabase                                            │
│   ├── Auth (email, Google, reset)                     │
│   ├── Database (PostgreSQL + RLS)                     │
│   ├── Storage (arquivos, imagens)                     │
│   └── Edge Functions (webhooks, APIs custom)          │
└────────────────┬─────────────────────────────────────┘
                 │
                 ├────────────► Stripe (pagamento)
                 │
                 ├────────────► Resend (email)
                 │
                 └────────────► APIs de IA
                                (Anthropic, OpenAI, etc)
```

**Fluxo de desenvolvimento:**

```
Lovable → GitHub → Claude Code → GitHub → Vercel
 (scaffold)       (edições)    (push)   (deploy)

    ↓                                      ↓
  Preview                              Produção
  público                              (seu domínio)
```

**Fluxo de dinheiro:**

```
Cliente → Stripe Checkout → Stripe → Webhook → Supabase
         (cartão ou Pix)            (Edge Fn)  (subscriptions)
                                                    │
                                                    ▼
                                            Frontend libera
                                            acesso premium
```

---

## Apêndice C — Cheat sheet Git pra não-devs

### Fluxo padrão diário
```bash
cd caminho/do/projeto     # entrar na pasta
git pull                  # baixar alterações
# ... edita com Claude Code ...
git add .                 # marcar tudo
git commit -m "mensagem"  # salvar versão
git push                  # enviar pro GitHub
```

### Consultas
```bash
git status                # o que mudou
git log --oneline -10     # últimos 10 commits
git diff                  # diferenças desde último commit
```

### Desfazer coisas
```bash
git checkout arquivo      # restaurar arquivo
git reset --soft HEAD~1   # desfazer último commit, manter mudanças
git reset --hard HEAD~1   # desfazer último commit, descartar (cuidado!)
```

### Situações especiais
```bash
git pull --rebase         # sincronizar mantendo linha do tempo linear
git stash                 # guardar mudanças sem commit
git stash pop             # trazer de volta
```

---

## Apêndice D — Cheat sheet de comandos Claude Code

Dentro da sessão do Claude Code, você pode usar esses prompts-padrão:

### Exploração
```
Liste os arquivos do projeto e me faça um resumo da estrutura.
```
```
Leia o arquivo X e me explique o que ele faz em 3 bullets.
```

### Implementação
```
Adicione a feature [X]. Antes de editar, liste os arquivos que
vai mexer e peça aprovação.
```

### Debug
```
Tem um bug: [descreva sintoma]. Investigue a causa e proponha
correção.
```

### Refatoração
```
A lógica X está duplicada em vários lugares. Extraia pra um
[hook/função/módulo] reutilizável. Mantenha o comportamento
idêntico.
```

### Auditoria
```
Audite o arquivo X quanto a:
1. Bugs
2. Segurança (chaves, validação, RLS)
3. Performance
4. Manutenibilidade

Ordene do mais crítico ao menor.
```

### Git
```
Faça commit dessas mudanças com uma mensagem clara descrevendo
o que foi alterado. Depois push pro GitHub.
```

### Perguntas
```
Por que você fez X dessa forma? Explique a decisão.
```
```
Tem uma forma mais simples de fazer isso?
```

---

## Apêndice E — Sinais de que você está fazendo certo (e de que está fazendo errado)

### Você está fazendo CERTO se:
- Tem PRD antes de ter código.
- Faz commit várias vezes por dia com mensagens claras.
- Consulta este ebook quando trava (em vez de tentar na raça).
- Conversa com potenciais clientes antes e depois de publicar.
- Mede coisas (cadastros, conversão, uso).
- Decide feature com base em dor real, não em "acho legal".
- Reserva tempo pra auditoria antes de cada deploy.

### Você está fazendo ERRADO se:
- Pula o PRD achando que "ideia é simples".
- Fica 2 horas tentando "descobrir sozinho" em vez de perguntar pra IA certa.
- Edita tudo no Lovable e queima crédito.
- Reescreve o projeto inteiro porque "não gostou mais".
- Adiciona features sem consultar cliente.
- Não tem Stripe em test mode antes de live.
- Posta landing sem auditoria nem testes responsivos.
- Publica sem RLS configurado.

---
