# Template — Checklist de Pré-Produção

> **Use este checklist antes de colocar seu SaaS no ar pra pagamento real.**
> Cada item não marcado é um risco de você ter dor de cabeça depois do primeiro cliente.

---

## 🔐 Segurança e dados

- [ ] **RLS ativo em TODAS as tabelas** com dados de usuário.
- [ ] Testei com 2 usuários diferentes — um não consegue ver dados do outro.
- [ ] Chave `service_role` do Supabase NÃO está no código, só em variável de ambiente.
- [ ] Chave `STRIPE_SECRET_KEY` NÃO está no código, só em variável de ambiente.
- [ ] Nenhuma variável de ambiente sensível usa prefixo `VITE_`, `NEXT_PUBLIC_` ou equivalente (esses vazam pro frontend).
- [ ] Rotas de `/app/*` estão protegidas — usuário não-logado redireciona pra login.
- [ ] Validação de input no frontend E no backend (nunca confie só no frontend).
- [ ] Webhook do Stripe valida `stripe-signature` (sem isso, qualquer um manda requisição falsa).
- [ ] Senhas seguras: Supabase exige mínimo X caracteres — validei no formulário.
- [ ] HTTPS ativo (Vercel faz automaticamente, mas confira).

---

## 💳 Pagamento (Stripe)

- [ ] Conta Stripe completa (documentos aprovados, conta bancária ligada).
- [ ] Produto e preço criados no painel do Stripe.
- [ ] Webhook endpoint criado e apontando pra URL de produção.
- [ ] Webhook assinado (`stripe-signature` validada no código).
- [ ] Eventos escutados: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`.
- [ ] Tabela `subscriptions` sincronizando corretamente via webhook.
- [ ] Testei em modo test com cartão `4242 4242 4242 4242` — assinatura criada no Supabase.
- [ ] Testei cancelamento em modo test — status atualiza pra `canceled`.
- [ ] Testei falha de pagamento em modo test — status atualiza pra `past_due`.
- [ ] Alterei as chaves pra live mode no Vercel (variáveis de produção).
- [ ] Atualizei o webhook endpoint no Stripe pra live mode.
- [ ] Notificação de pagamento bem-sucedido configurada (email, Slack ou Discord).

---

## 📧 Email transacional

- [ ] Domínio verificado no Resend (ou provedor equivalente).
- [ ] Email de boas-vindas configurado e testado.
- [ ] Email de recuperação de senha configurado e testado.
- [ ] Email de confirmação de pagamento configurado (via webhook Stripe).
- [ ] `from` address profissional (ex: `nao-responda@seudominio.com`, não Gmail).
- [ ] DKIM e SPF configurados (o Resend te mostra no painel).
- [ ] Testei envio pro Gmail, Hotmail, Outlook — não caiu no spam.

---

## 🌐 Domínio e DNS

- [ ] Domínio próprio apontado pro Vercel.
- [ ] SSL ativo (cadeado verde no navegador).
- [ ] `www.seudominio.com` redireciona pra `seudominio.com` (ou vice-versa — escolha um).
- [ ] Subdomínios necessários configurados (ex: `app.seudominio.com`, `acesso.seudominio.com`).
- [ ] Domain propagation verificada em https://dnschecker.org (deve aparecer em várias regiões).

---

## 🧪 QA e testes manuais

### Fluxo de cadastro
- [ ] Cadastro com email/senha funciona.
- [ ] Cadastro com Google funciona.
- [ ] Email de confirmação chega.
- [ ] Link de confirmação funciona.
- [ ] Tentativa de cadastro com email já existente mostra erro claro.

### Fluxo de login
- [ ] Login com email/senha funciona.
- [ ] Login com Google funciona.
- [ ] "Esqueci senha" envia email.
- [ ] Link de redefinição funciona.
- [ ] Login com senha errada mostra erro claro.

### Fluxo de uso
- [ ] Ação principal do produto funciona end-to-end.
- [ ] Dados salvam no Supabase corretamente.
- [ ] Dados aparecem na tela depois de salvar.
- [ ] Edição de dados funciona.
- [ ] Exclusão de dados funciona.

### Fluxo de assinatura
- [ ] Botão "Assinar" leva pro Stripe Checkout.
- [ ] Pagamento em modo live com cartão real funciona.
- [ ] Usuário volta pro app com status premium.
- [ ] Funcionalidades premium liberadas corretamente.
- [ ] Cancelamento de assinatura pelo portal Stripe funciona.
- [ ] Após cancelar, acesso premium expira no fim do período.

### Responsividade
- [ ] Testei no celular (Android + iOS).
- [ ] Testei no tablet.
- [ ] Testei em tela pequena de notebook (13").
- [ ] Testei em tela grande (27"+).
- [ ] Fontes legíveis em todos os tamanhos.
- [ ] Botões clicáveis com dedo (mínimo 44x44px de área clicável).

### Navegadores
- [ ] Chrome (Windows + Mac).
- [ ] Safari (Mac + iOS).
- [ ] Firefox.
- [ ] Edge.
- [ ] Brave (bônus — mostra se bloqueia algo sensível).

---

## ⚡ Performance

- [ ] Tempo de carregamento da landing abaixo de 2 segundos (teste em https://pagespeed.web.dev).
- [ ] Imagens otimizadas (TinyPNG, WebP, lazy loading).
- [ ] Fontes carregando com `font-display: swap` pra não travar render.
- [ ] Nenhum console.log em produção (remove do código final).
- [ ] Lighthouse score acima de 80 em todas as métricas (Performance, Accessibility, Best Practices, SEO).

---

## 📊 Analytics e tracking

- [ ] Google Analytics 4 OU Plausible instalado.
- [ ] Meta Pixel instalado (se for rodar ads no Facebook/Instagram).
- [ ] TikTok Pixel instalado (se for rodar ads no TikTok).
- [ ] Evento de conversão (compra) disparando corretamente após pagamento.
- [ ] Eventos de funil mapeados: visita → cadastro → uso → compra.

---

## 🚨 Monitoramento e alertas

- [ ] Vercel notifications ligadas pra builds falhos (Slack/Discord/Email).
- [ ] Sentry OU alternativa configurada pra capturar erros em produção.
- [ ] Logs do Stripe monitorados na primeira semana pós-lançamento.
- [ ] Dashboard do Supabase checado diariamente nos primeiros 7 dias.
- [ ] Plano de rollback definido: "se der problema, como volto pra versão anterior?".

---

## 📜 Legal e conformidade (Brasil)

- [ ] Política de Privacidade publicada em `/politica-privacidade`.
- [ ] Termos de Uso publicados em `/termos`.
- [ ] LGPD: campo de consentimento explícito no cadastro (checkbox "li e aceito").
- [ ] Canal de contato claro (email) pra exclusão de conta / dados.
- [ ] CNPJ ou CPF emitindo nota fiscal (se já for cobrar).
- [ ] Regime tributário definido (Simples Nacional, MEI, Lucro Presumido).

---

## 🎨 Copy e branding

- [ ] Nome do produto consistente em todos os lugares (email, landing, app, redes).
- [ ] Logo (pode ser texto simples) consistente.
- [ ] Favicon configurado.
- [ ] Metadados OG (Open Graph) configurados — link no WhatsApp mostra preview bonito.
- [ ] Sem lorem ipsum ou texto placeholder em produção.
- [ ] Sem erros de português (use corretor).

---

## 🎯 Go-live checklist (1 hora antes de lançar)

- [ ] Faça 1 assinatura de teste com cartão real (seu próprio, R$ 1 ou valor mínimo). Confirma que tudo flui.
- [ ] Cancele essa assinatura imediatamente depois pra confirmar cancelamento também.
- [ ] Envie o link pra 3 pessoas diferentes e peça pra elas tentarem se cadastrar.
- [ ] Confira se os 3 cadastros aparecem no Supabase.
- [ ] Deixe o Stripe Dashboard aberto na aba "Events" pra monitorar live.
- [ ] Deixe o Vercel Dashboard aberto na aba "Functions" pra ver erros.
- [ ] Respira fundo. Publica o link.

---

## Depois do primeiro cliente

- [ ] Agradecer pessoalmente (email ou WhatsApp).
- [ ] Pedir feedback direto.
- [ ] Monitorar o uso real dele por 48h.
- [ ] Ajustar bug/fricção que aparecer.
- [ ] Comemorar.

---

**Se você está no item "respira fundo" e ainda tem 30+ itens em branco:** pare. Volta pros pontos críticos (RLS, Stripe, email transacional) antes de lançar. Melhor atrasar 3 dias do que processar reembolso em lote depois.
