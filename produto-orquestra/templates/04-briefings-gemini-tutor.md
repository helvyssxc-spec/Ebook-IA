# Template — Briefings prontos pro Gemini em modo tutor

> **Como usar:**
> Cada bloco abaixo é um prompt completo pronto pra copiar e colar no Gemini.
> Abra chat novo no Gemini pra cada tutorial (contexto limpo ajuda).
> Depois de colar, responda às perguntas do Gemini e avance passo a passo.
> Quando travar em algum campo do painel, tire print e cole — Gemini lê e ajuda.

---

## 🗂️ Tutorial 1 — Configurar Supabase do zero

```
Sou iniciante absoluto. Nunca configurei banco de dados na vida.

Preciso: criar projeto no Supabase do zero com estas tabelas:
- profiles (usuários)
- subscriptions (assinaturas Stripe)
- [NOME DA SUA TABELA PRINCIPAL] — descrição: [O QUE ARMAZENA]

Também preciso:
- Configurar Row Level Security (RLS) em todas as tabelas.
- Ativar Google OAuth no Supabase Auth.
- Criar um trigger que cria profile automaticamente quando usuário se cadastra.

Stack: React + TypeScript + Supabase.

Me guie passo a passo. Regras:
- Pergunte antes de assumir qualquer coisa.
- Valide cada etapa comigo antes de passar pra próxima.
- Quando eu tiver dúvida, vou mandar print da tela.
- Se eu errar algo, me diga como desfazer.
- Evite jargão técnico. Se precisar usar, defina em 1 frase.
- Ao final de cada etapa, me diga "confirmado?" antes de seguir.

Explique em 2 frases o que é RLS antes de usar.

Vamos começar pela etapa 1.
```

**O que esperar do Gemini:**
- Etapa 1: criar conta, projeto, escolher região (SP pra BR).
- Etapa 2: criar tabelas via SQL Editor.
- Etapa 3: configurar RLS em cada tabela.
- Etapa 4: criar trigger de novo usuário.
- Etapa 5: habilitar Google OAuth (vai pedir pra você criar credenciais no Google Cloud — é o Tutorial 4).
- Etapa 6: testar com usuário de teste.

**Tempo estimado:** 45-60 min na primeira vez.

---

## 🌐 Tutorial 2 — Apontar domínio e configurar DNS

```
Sou iniciante absoluto. Nunca configurei DNS na vida.

Preciso: apontar meu domínio [SEUDOMINIO.COM.BR] (comprado em
[Registro.br / GoDaddy / Namecheap]) pro meu site hospedado em
[Vercel / Netlify / Lovable Deploy].

Preciso configurar:
- Domínio raiz (seudominio.com.br)
- Subdomínio www (www.seudominio.com.br)

Me guie passo a passo. Regras:
- Pergunte antes de assumir qualquer coisa.
- Valide cada etapa comigo antes de passar pra próxima.
- Quando eu tiver dúvida, vou mandar print do painel.
- Se eu errar algo, me diga como desfazer.
- Evite jargão. Se precisar usar, defina em 1 frase.

Antes de começar, explique em 2 frases cada um destes conceitos:
- O que é DNS.
- Qual a diferença entre registro A, CNAME e TXT.
- O que é propagação e quanto tempo pode levar.
- Quando vale a pena migrar pra Cloudflare.

Vamos começar pela etapa 1.
```

**O que esperar do Gemini:**
- Explica os conceitos (DNS, tipos de registro).
- Te guia no painel do Vercel pra adicionar o domínio.
- Te mostra quais registros DNS o Vercel quer que você aponte.
- Te guia no painel do Registro.br pra adicionar os registros.
- Te ensina a testar propagação em dnschecker.org.
- Se falhar, te ajuda a investigar.

**Tempo estimado:** 20-30 min + até 24h de propagação (geralmente 15min).

**Dica importante:** tire print do painel do Registro.br ANTES de mexer, pra poder reverter se algo der errado.

---

## 💳 Tutorial 3 — Configurar webhook do Stripe

```
Sou iniciante absoluto. Nunca configurei webhook de pagamento.

Preciso: configurar webhook do Stripe pra que, quando alguém
assinar, meu app saiba e atualize a tabela `subscriptions` no
Supabase.

Stack: Supabase Edge Functions (onde vai rodar o webhook), React,
Stripe com Checkout Session hospedado.

Eventos que preciso escutar:
- checkout.session.completed
- customer.subscription.updated
- customer.subscription.deleted
- invoice.payment_failed

Me guie passo a passo. Regras:
- Pergunte antes de assumir qualquer coisa.
- Valide cada etapa comigo antes de passar pra próxima.
- Me explique cada campo antes de eu preencher.
- Quando eu tiver dúvida, vou mandar print.

Antes de começar, me explique em 2 frases:
- O que é webhook e por que eu preciso dele.
- O que é stripe-signature e por que eu OBRIGATORIAMENTE preciso
  validar (a consequência de não validar).
- A diferença entre modo test e modo live do Stripe.

Plano do tutorial:
1. Criar Edge Function no Supabase (com código completo validando
   a assinatura).
2. Configurar o webhook endpoint no painel do Stripe (test mode).
3. Testar com cartão 4242 4242 4242 4242.
4. Validar que a tabela subscriptions atualiza corretamente.
5. Checklist final antes de migrar pra live mode.

Vamos começar pela etapa 1.
```

**O que esperar:**
- Edge Function completa com código validando `stripe-signature`.
- Guia pra criar webhook no painel Stripe (test mode).
- Cartão de teste + CVC fake + data futura qualquer.
- Verificação no Supabase Table Editor que a tabela atualizou.
- Como mudar pra live mode quando estiver pronto.

**Tempo estimado:** 1h-1h30min (é o mais complexo dos 5).

**Aviso crítico:** NUNCA ative live mode sem testar 3 vezes no test mode. Pagamento quebrado em produção = reembolso + cliente zangado.

---

## 🔐 Tutorial 4 — Configurar OAuth com Google

```
Sou iniciante absoluto. Nunca mexi no Google Cloud Console.

Preciso: configurar "Sign in with Google" no meu app, integrado
com Supabase Auth.

Domínio de produção: [seudominio.com.br]
Ambiente dev: http://localhost:3000 (ou porta que você usa)

Me guie passo a passo. Regras:
- Pergunte antes de assumir qualquer coisa.
- Valide cada etapa comigo antes de passar pra próxima.
- Me explique cada campo antes de eu preencher.
- Vou mandar print quando travar.

Antes de começar, me explique em 2 frases:
- O que é OAuth em linguagem simples.
- A diferença entre OAuth Consent Screen e OAuth Credentials.
- Por que o redirect URI é onde 90% das pessoas erram.

Plano do tutorial:
1. Criar projeto no Google Cloud Console.
2. Configurar OAuth Consent Screen (External, campos mínimos).
3. Criar credenciais OAuth 2.0 Web Application.
4. Configurar os redirect URIs (dev + produção + Supabase callback).
5. Copiar client_id e client_secret.
6. Ativar provider Google no Supabase Auth e colar as credenciais.
7. Testar login em dev com minha própria conta Google.
8. Publicar o Consent Screen pra aceitar qualquer conta Google.

Vamos começar pela etapa 1.
```

**O que esperar:**
- Passeio guiado pelo Google Cloud Console (labirinto, mas guiado é suave).
- Explicação de cada campo (Application type, redirect URIs, scopes).
- Muito cuidado com redirect URIs — é o que mais quebra.
- Colagem das credenciais no Supabase.
- Teste end-to-end.

**Tempo estimado:** 45min-1h.

**Armadilha comum:** esquecer de adicionar `http://localhost:3000/auth/callback` (ou equivalente) nos Authorized Redirect URIs. Sem isso, login em dev NÃO funciona.

**Armadilha 2:** esquecer de publicar o Consent Screen (deixar em modo "Testing"). Se esquecer, só suas contas cadastradas como testers conseguem logar.

---

## 🚀 Tutorial 5 — Deploy no Vercel + leitura de logs

```
Sou iniciante absoluto. Primeiro deploy no Vercel.

Preciso: fazer deploy de produção do meu app [React + TypeScript]
que está hospedado no GitHub.

Repositório: [github.com/seu-user/seu-repo]
Domínio customizado: [seudominio.com.br] (se tiver)

Variáveis de ambiente necessárias:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- RESEND_API_KEY
- [OUTRAS QUE VOCÊ USA]

Me guie passo a passo. Regras:
- Pergunte antes de assumir qualquer coisa.
- Valide cada etapa comigo antes de passar pra próxima.
- Me explique cada variável de ambiente antes de eu preencher
  (se é secreta, se deve ter prefixo VITE_, etc).
- Se o build der erro, vou colar o log inteiro e você me explica.

Antes de começar, me explique em 2 frases:
- O que é "deploy" em termos simples.
- A diferença entre Preview e Production no Vercel.
- Por que variáveis com prefixo VITE_ ou NEXT_PUBLIC_ vazam pro
  frontend (e quais NUNCA devem ter esses prefixos).

Plano do tutorial:
1. Criar conta Vercel (via GitHub login).
2. Importar repositório do GitHub.
3. Configurar variáveis de ambiente (diferenciar Preview x Production).
4. Primeiro deploy em Preview (expectativa realista: pode falhar
   na primeira vez).
5. Interpretar build log se falhar, iterar até passar.
6. Adicionar domínio customizado (se aplicável).
7. Configurar DNS (pode reusar Tutorial 2).
8. Promover pra Production.
9. Checklist final antes de divulgar a URL.

Vamos começar pela etapa 1.
```

**O que esperar:**
- Tela inicial do Vercel importando do GitHub.
- Explicação de "framework preset" (geralmente detecta automático).
- Build log se falhar — Gemini lê e traduz o erro.
- Iteração até passar.
- Domínio + SSL automático.

**Tempo estimado:** 30min-2h (depende de quantos erros de build aparecem).

**Dica de ouro:** NUNCA aponte o domínio customizado ANTES do Preview funcionar. Se o build quebrar, o site fica fora do ar publicamente.

---

## Usando os 5 tutoriais em sequência na trilha

Ordem recomendada dentro da trilha de 30 dias:

| Fase da trilha | Tutoriais necessários |
|---|---|
| Fase 4 — Integrar (dias 15-18) | Tutorial 1 (Supabase) + Tutorial 4 (OAuth) + Tutorial 3 (Stripe) |
| Fase 6 — Publicar (dias 22-25) | Tutorial 5 (Deploy) + Tutorial 2 (DNS) |

Conclua cada tutorial antes de começar o próximo. Não tente paralelizar — iniciante que tenta paralelizar se perde e desanima.

---

## Dicas gerais pra usar Gemini como tutor

**1. Contexto limpo sempre.**
Abra chat novo pra cada tutorial. Gemini responde melhor sem o histórico acumulado.

**2. Tire print da tela inteira.**
Não só do erro. O painel inteiro, a URL, o estado visual. Gemini lê tudo.

**3. Não pule validação.**
Se ele perguntar "confirmado?", só avance depois de realmente validar. Pular = acumular erro.

**4. Guarde o chat.**
Quando terminar, salva o link do chat. Se precisar lembrar em 3 meses, volta nele.

**5. Revise sua compreensão no final.**
Após cada tutorial, peça: "me faça um quiz de 5 perguntas sobre o que fizemos pra eu fixar o conhecimento". Reforça memória.

---

**Lembrete final:** esses tutoriais vão te salvar dezenas de horas de cabeçada. Use-os. Não tente fazer "na raça" pra "aprender mais". O tempo de cabeçada não te ensina mais — te frustra mais.
