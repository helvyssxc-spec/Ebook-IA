# 📋 Planejamento de Publicação — Do Zero ao SaaS

> **Do ZIP baixado à primeira venda real.**
> Siga fase por fase. Marque cada checkbox conforme for completando.
> Sem pular etapas — cada uma existe por um motivo.

---

## ⏱ Tempo total realista

| Fase | Tempo |
|---|---|
| 1 — Recebimento e organização | 15 min |
| 2 — Leitura completa | 3 horas |
| 3 — Personalização | 3-5 horas |
| 4 — Infraestrutura de vendas | 1-2 dias |
| 5 — Automações | 4-6 horas |
| 6 — Testes | 2 horas |
| **Total pré-lançamento** | **3-5 dias intenso OU 2 semanas confortável** |
| 7 — Lançamento | 14 dias |
| 8 — Pós-lançamento | 30 dias |

---

## 📥 FASE 1 — Recebimento e organização (15 minutos)

**Objetivo:** ter tudo em ordem no seu computador.

- [ ] Baixar o ZIP no computador (pasta Downloads).
- [ ] Descompactar o arquivo (duplo-clique no Mac, botão direito → Extract no Windows).
- [ ] Mover a pasta `produto-orquestra/` pra um lugar permanente. Sugestão: `~/Documentos/produtos/do-zero-ao-saas/`
- [ ] Abrir a pasta inteira no Cursor, VS Code ou editor de texto — será seu ambiente de trabalho.
- [ ] Fazer backup no Google Drive (subir a pasta inteira).
- [ ] Fazer backup no GitHub (criar repo privado `do-zero-ao-saas-produto`).

> **Por que isso importa:** perder esses arquivos agora é perder 5 sessões de trabalho. Backup não é neurose, é higiene.

---

## 📖 FASE 2 — Leitura completa (2-3 horas, num dia só)

**Objetivo:** você conhecer o próprio produto tão bem quanto qualquer comprador.

- [ ] Ler o `README-pacote-completo.md` de ponta a ponta (20 min)
- [ ] Ler o ebook completo — as 6 partes, na ordem (90-120 min)
- [ ] Abrir `dashboard-do-zero-ao-saas.html` no navegador e navegar como comprador (20 min)
- [ ] Passar pelos 8 templates, mesmo que em diagonal (30 min)

**Enquanto lê, anote num arquivo separado:**
- [ ] Partes onde o tom soa estranho
- [ ] Exemplos que parecem artificiais
- [ ] Seções que o comprador pode não entender

> **O que fazer com as anotações:** ajustar o que for crítico agora; o resto vai pra v1.1 depois das primeiras vendas.

---

## 🎨 FASE 3 — Personalização (3-5 horas)

**Objetivo:** substituir placeholders e dar sua cara ao produto.

### 3.1 Decisões iniciais

- [ ] Escolher email de suporte: `contato@seudominio.com.br` OU `suporte@seudominio.com.br`
- [x] Domínio `dozeroaosaas.com.br` comprado em Registro.br ✅
- [x] Nome decidido: **Do Zero ao SaaS** (rebrand feito 2026-04-24) ✅

### 3.2 Placeholders em `landing/index.html`

- [ ] Substituir `[LINK_CHECKOUT_KIWIFY]` pelo link real (após criar checkout)
- [ ] Substituir `suporte@seudominio.com.br` pelo email real
- [ ] Criar páginas `/termos.html` e `/privacidade.html` (ou apontar pra links válidos)

### 3.3 Placeholders em `landing/obrigado.html`

- [ ] Substituir `[LINK_EBOOK_PDF]`
- [ ] Substituir `[LINK_DASHBOARD]`
- [ ] Substituir `[LINK_TEMPLATES]`
- [ ] Substituir `[LINK_BIBLIOTECA]`
- [ ] Substituir `[LINK_DISCORD]`
- [ ] Substituir `[URL_LANDING]`
- [ ] Substituir email de suporte

### 3.4 Placeholders em `emails/sequencia-5-emails.md`

- [ ] Substituir `[seu nome]` nas assinaturas dos 5 emails
- [ ] Substituir `[LINK_CHECKOUT]` em todos os emails que citam
- [ ] Substituir `[LINK_LEAD_MAGNET]` no Email 1

### 3.5 Placeholders em outros arquivos

- [ ] `templates/07-manual-do-produto.md` — adicionar links reais de comunidade e suporte
- [ ] `landing/copy-da-oferta.md` — personalizar nome, data, link em todas as peças

### 3.6 Se decidir mudar o nome do produto

- [x] Find & Replace global feito ("Orquestra IA" → "Do Zero ao SaaS") ✅
- [ ] Trocar o favicon (letra "O" no SVG inline) pela nova letra
- [ ] Revisar se o tom e copy ainda fazem sentido com novo nome

---

## 🏗 FASE 4 — Infraestrutura de vendas (1-2 dias)

**Objetivo:** tudo pronto pra receber dinheiro.

### 4.1 Domínio (15 minutos)

- [x] Comprar `dozeroaosaas.com.br` em Registro.br ✅
- [ ] Confirmar que recebeu o email de ativação
- [ ] Acessar o painel DNS do Registro.br (vai precisar depois)

### 4.2 Kiwify — conta e produto (1 hora)

- [ ] Criar conta em **kiwify.com.br**
- [ ] Completar cadastro completo (CPF/CNPJ + dados bancários)
- [ ] Aguardar aprovação da conta (pode levar 1-2 dias)
- [x] Criar produto novo: "Do Zero ao SaaS" ✅ (em modo rascunho, aguardando CNAE)
- [ ] Configurar preço: R$ 147 (venda única, sem recorrência)
- [ ] Habilitar Pix à vista
- [ ] Habilitar cartão em até 12x
- [ ] Habilitar boleto (opcional)
- [ ] Copiar o link de checkout gerado
- [ ] Voltar na landing e colar no placeholder `[LINK_CHECKOUT_KIWIFY]`

### 4.3 Área de membros no Kiwify (1 hora)

Na aba "Conteúdo" do produto no Kiwify, criar módulos nesta ordem:

- [ ] Módulo 1: "Comece aqui" → upload do Manual do Produto em PDF
- [ ] Módulo 2: "Ebook" → upload do Ebook completo em PDF
- [ ] Módulo 3: "Dashboard" → adicionar link externo pra URL do dashboard hospedado
- [ ] Módulo 4: "Templates" → upload de ZIP com os 8 templates em Markdown
- [ ] Módulo 5: "Biblioteca de Prompts" → upload de MD + JSON

### 4.4 Gerar os PDFs (30 minutos)

**Ebook (combinar 6 arquivos .md num PDF único):**

- [ ] Opção fácil: usar markdowntopdf.com (online, gratuito)
- [ ] Opção melhor: rodar Pandoc local (instruções no `README-pacote-completo.md`)
- [ ] Opção premium: importar pro Canva/Figma e diagramar bonito (faça depois das primeiras vendas)

**Manual do Produto:**

- [ ] Converter `07-manual-do-produto.md` pra PDF
- [ ] Capricha nesse — é o primeiro arquivo que o aluno vai abrir

### 4.5 Dashboard hospedado (30 minutos)

- [ ] Criar repositório privado no GitHub: `do-zero-ao-saas-dashboard` (ou usar `deploy-dashboard/` do repo Ebook-IA)
- [ ] Subir `dashboard-do-zero-ao-saas.html` renomeado pra `index.html`
- [ ] Subir `vercel.json` (da pasta raiz do outputs)
- [ ] Criar conta no Vercel (se ainda não tem)
- [ ] Importar o repo no Vercel
- [ ] Fazer deploy
- [ ] Copiar a URL gerada (tipo `do-zero-ao-saas-dashboard.vercel.app`)
- [ ] Cola essa URL no Módulo 3 da área de membros Kiwify
- [ ] Cola no placeholder `[LINK_DASHBOARD]` da página obrigado.html

### 4.6 Landing publicada (30 minutos)

- [ ] Criar repo `do-zero-ao-saas-landing` (ou usar `deploy-landing/` do repo Ebook-IA)
- [ ] Subir `landing/index.html` como `index.html`
- [ ] Subir `landing/obrigado.html` como `obrigado.html`
- [ ] Deploy no Vercel
- [ ] Apontar domínio `dozeroaosaas.com.br` nas configurações do Vercel
- [ ] No painel Registro.br, adicionar os registros DNS que o Vercel pediu
- [ ] Aguardar propagação (pode levar algumas horas)
- [ ] Testar acesso via `https://dozeroaosaas.com.br`
- [ ] Confirmar que SSL está ativo (cadeado verde)

---

## ⚙ FASE 5 — Automações (4-6 horas)

**Objetivo:** emails e entregas automáticas.

### 5.1 Email de entrega automática (Kiwify)

- [ ] Configurar: ao comprar, disparar email automático com:
  - [ ] Link pra área de membros
  - [ ] Link pra `obrigado.html` (pode ser o redirect pós-pagamento)
  - [ ] Link pro Discord
- [ ] Testar enviando compra de teste

### 5.2 Sequência de 5 emails pra leads

**Escolha UMA ferramenta:**

**Caminho simples — Kiwify nativo:**
- [ ] Criar formulário de captura no Kiwify
- [ ] Configurar automação "pós opt-in" com os 5 emails
- [ ] Colar o texto de cada email extraído de `emails/sequencia-5-emails.md`

**Caminho mais poderoso — ActiveCampaign ou ConvertKit:**
- [ ] Só escolher se já usa uma dessas ferramentas
- [ ] Caso contrário, ficar com Kiwify por simplicidade

### 5.3 Lead magnet

- [ ] Escolher 1 capítulo do ebook pra virar lead magnet (sugestão: o "Pulo do Gato #2")
- [ ] Gerar PDF de 5-10 páginas desse trecho
- [ ] Publicar página de captura em `dozeroaosaas.com.br/guia-gratis`
- [ ] Configurar captura de email antes do download
- [ ] Conectar captura à sequência de 5 emails

### 5.4 Comunidade Discord (30 minutos)

- [ ] Criar servidor Discord gratuito
- [ ] Criar canais iniciais:
  - [ ] `#boas-vindas`
  - [ ] `#fase-1-idear`
  - [ ] `#fase-2-especificar`
  - [ ] `#fase-3-construir`
  - [ ] `#fase-4-integrar`
  - [ ] `#fase-5-polir`
  - [ ] `#fase-6-publicar`
  - [ ] `#fase-7-vender`
  - [ ] `#cases`
  - [ ] `#duvidas`
  - [ ] `#off-topic`
- [ ] Configurar regras do servidor (canal de boas-vindas)
- [ ] Gerar link de convite permanente
- [ ] Colar o link no `obrigado.html` e no email de boas-vindas

---

## 🧪 FASE 6 — Testes (2 horas)

**Objetivo:** provar que tudo funciona ANTES de gastar 1 real em ads.

### 6.1 Teste de compra real

- [ ] Usar seu próprio cartão, comprar o produto por R$ 147
- [ ] Confirmar que chegou o email automático de boas-vindas
- [ ] Confirmar que o link da área de membros funciona
- [ ] Confirmar que todos os arquivos estão acessíveis na área
- [ ] Confirmar que o link do Discord aceita sua entrada
- [ ] Após confirmação, estornar a compra pelo Kiwify
- [ ] Confirmar que o estorno funcionou e removeu acesso

### 6.2 Teste da sequência de emails

- [ ] Cadastrar email fake (ou outro email seu) no lead magnet
- [ ] Confirmar que chega o Email 1 em poucos minutos
- [ ] Aguardar 24h e confirmar que chega o Email 2
- [ ] Confirmar que todos os 5 chegam nos intervalos corretos

### 6.3 Teste multiplataforma

- [ ] Abrir landing no celular (Android + iOS se possível)
- [ ] Abrir landing em Chrome, Safari, Firefox
- [ ] Abrir `obrigado.html` em múltiplos navegadores
- [ ] Testar dashboard no celular
- [ ] Confirmar que os FAQs da landing abrem/fecham corretamente

### 6.4 Validação final

- [ ] Visitar `dozeroaosaas.com.br` como se fosse visitante em ambiente anônimo
- [ ] Ler a landing em 5 segundos — a promessa tá clara?
- [ ] Clicar em CTA e fazer fluxo inteiro de compra simulada
- [ ] Se algo parecer estranho, ajustar antes de lançar

> **Regra sagrada:** se QUALQUER teste falhar, NÃO LANÇAR. Corrige primeiro. Lançar com bug é queimar reputação.

---

## 🚀 FASE 7 — Lançamento (14 dias)

**Objetivo:** vender.

- [ ] Abrir `lancamento/plano-14-dias.md` e seguir dia a dia
- [ ] Pegar textos prontos de `landing/copy-da-oferta.md` e adaptar aos canais
- [ ] Seguir FASE 1 do plano (Aquecimento — Dias 1-5)
- [ ] Seguir FASE 2 do plano (Lançamento — Dias 6-10)
- [ ] Seguir FASE 3 do plano (Fechamento — Dias 11-14)
- [ ] Fechar o carrinho literalmente no dia 14 às 23h59 (sem prorrogação!)

### Sub-tarefas diárias durante o lançamento

- [ ] Diariamente: responder DMs e comentários em menos de 2h
- [ ] Diariamente: anotar vendas + métricas em planilha
- [ ] Diariamente: publicar o conteúdo programado nos canais
- [ ] A cada 2 dias: checar ads (se estiver rodando) e ajustar criativos

---

## 📊 FASE 8 — Pós-lançamento (primeiros 30 dias)

**Objetivo:** transformar compradores em prova social.

### 8.1 Relacionamento com primeiros clientes

- [ ] Responder PESSOALMENTE cada mensagem dos primeiros 20 clientes
- [ ] Perguntar a cada um: "como você chegou até aqui?" e "o que te convenceu?"
- [ ] Criar arquivo `feedback-clientes.md` e documentar respostas
- [ ] Mandar WhatsApp/email pessoal em 7 e 15 dias checando progresso

### 8.2 Coleta de cases

- [ ] Identificar os 5-10 alunos mais engajados
- [ ] Quando publicarem seus SaaS, pedir:
  - [ ] Print do produto no ar
  - [ ] Print do Stripe mostrando primeira venda
  - [ ] Depoimento escrito de 2-3 linhas com a transformação
  - [ ] Autorização pra divulgar (nome, foto, projeto)

### 8.3 Atualização da landing com prova social

- [ ] Adicionar seção "Alunos que publicaram" na landing
- [ ] Incluir 3-5 cases reais com foto + depoimento + link do produto
- [ ] Atualizar headline se aparecer ângulo mais forte nos feedbacks
- [ ] A/B test da nova versão vs antiga se tiver tráfego suficiente

### 8.4 Preparação para próximo lançamento

- [ ] Documentar aprendizados: o que funcionou, o que falhou
- [ ] Identificar o melhor canal de aquisição do primeiro lançamento
- [ ] Planejar segundo lançamento em 60-90 dias com preço ajustado
- [ ] Considerar criar upsell (versão Pro ou mentoria)

---

## ❗ Três regras de ouro pra não cair em armadilha

1. **Não fica "melhorando infinitamente" antes de publicar.**
   Em algum momento vai parecer que "ainda falta isso e aquilo". Sempre vai faltar. Publica a v1.0 imperfeita.

2. **Não faz tudo no fim de semana sem parar.**
   Intenso por 3 dias seguidos quebra qualquer um. Divide em 2 semanas confortáveis.

3. **Testes antes de ads.**
   Se você gasta R$ 500 em tráfego pago antes de confirmar que o fluxo de compra funciona, você vai perder R$ 500.

---

## 🎯 Próximo passo concreto (hoje, agora)

Se você só tem 30 minutos disponíveis hoje, faça exatamente isto:

- [ ] Baixar o ZIP
- [ ] Descompactar
- [ ] Abrir `README-pacote-completo.md`
- [ ] Ler 20 minutos

Nos próximos dias, volte a este arquivo e siga a FASE 2.

---

## 📈 Metas objetivas por fase

### Fase 1-3 (pré-infraestrutura):
- [ ] Pasta organizada no computador
- [ ] Produto conhecido de cabo a rabo
- [ ] Todos os placeholders preenchidos

### Fase 4-6 (infraestrutura pronta):
- [ ] Compra de teste rodou ponta-a-ponta sem erro
- [ ] Email chegando corretamente
- [ ] URL oficial no ar com SSL

### Fase 7 (lançamento):
- [ ] Mínimo aceitável do primeiro lançamento:
  - [ ] **10+ vendas** se começa do zero (sem audiência)
  - [ ] **30+ vendas** se já tem audiência pequena
  - [ ] **100+ vendas** se já tem audiência média-grande
- [ ] Taxa de reembolso abaixo de 10%

### Fase 8 (pós-lançamento):
- [ ] 5 depoimentos coletados
- [ ] 3 cases documentados
- [ ] Feedback consolidado em documento
- [ ] Plano do próximo lançamento rascunhado

---

## 💪 Marcos psicológicos a esperar

| Momento | Emoção provável | Realidade |
|---|---|---|
| Fase 2 (lendo tudo) | Ansiedade, "é muita coisa" | Normal. Continua. |
| Fase 3 (personalizando) | "Tá ficando minha cara" | Bom sinal. |
| Fase 4 (infraestrutura) | Frustração com ferramentas | Gemini como tutor resolve. |
| Fase 6 (testes) | Medo de publicar | Natural. Publica mesmo assim. |
| Fase 7 dia 6 (carrinho abre) | Euforia + pânico | É assim mesmo. |
| Fase 7 dia 10 (meio) | Desânimo se vendas fracas | Normal. Não desiste. |
| Fase 7 dia 14 (fecha) | Alívio | Celebra o que veio. |
| Fase 8 semana 1 | Cansaço | Descansa 3 dias. |
| Fase 8 semana 4 | Clareza do que vem | Planeja próximo. |

---

**Imprima esse arquivo e cola na parede. Marca cada item conforme completa.**

**A sensação de avanço é parte do método.**

---

*Planejamento de Publicação · Do Zero ao SaaS · v1.0*

---

## 📌 Apêndice — Avaliação pré-lançamento (2026-04-24)

Revisão de produto feita antes da Fase 7. Decidir antes de abrir o carrinho se essas ações entram no escopo do 1º lançamento ou ficam pro 2º.

### Público-alvo confirmado
- **Persona:** profissional de outra área (direito, marketing, engenharia, financeiro) com ideia de SaaS travada há ≥3 meses, já frustrou com Lovable/Cursor, consegue 1–2h/dia por 30 dias.
- **Nível:** iniciante absoluto em programação, usuário intermediário de computador. Não sabe git/função/HTTP; sabe copiar/colar e seguir tutorial.
- **Capacidade financeira:** consegue bancar ~USD 40–80/mês em ferramentas de IA.
- **NÃO é pra:** dev sênior (raso), quem quer aprender programação a fundo, quem larga no 1º obstáculo, quem acredita em "milhão em 30 dias".

### 4 pontos que reduzem conversão no 1º lançamento

- [ ] **1. Zero prova social.** É primeiro lançamento — sem depoimento, case, print de aluno publicado.
  **Solução:** beta grátis pra 5–10 pessoas (2 semanas) em troca de depoimento + print do SaaS publicado. **Ação pendente: decidir se faz beta antes do lançamento.**

- [ ] **2. Sem vídeo na landing.** Mercado de infoproduto consome vídeo; landing 100% textual converte menos.
  **Solução:** gravar vídeo curto (60–90s) no celular explicando a promessa e colocar no hero. Autenticidade > produção.

- [ ] **3. Autoria genérica.** Prefácio assina "Equipe Do Zero ao SaaS". Pessoa compra pessoa, não marca.
  **Solução:** assinar como **Helvys Xavier** (nome real) com uma linha de credencial no ebook e landing.

- [ ] **4. Promessa "30 dias" pode ser agressiva.** Pra iniciante absoluto, pode gerar reembolso alto.
  **Solução:** suavizar copy pra "30 a 60 dias dedicando 1–2h/dia". Reduz reembolso sem perder gatilho de urgência.

### Expectativa realista de 1º lançamento

**15–40 unidades** se houver rede mínima (LinkedIn + WhatsApp + 1 canal). Conversão baixa é normal pela falta de prova social. O 2º lançamento (60–90 dias depois, com cases reais) é onde o produto **escala**.

### Audiobook — adiado pro 2º lançamento (decisão 2026-04-24)

Tentamos com **edge-tts (Microsoft, grátis)** e as 3 vozes pt-BR (Francisca, Antonio, Thalita Multilingual) — todas soaram robóticas/GPS, inclusive com roteiro reescrito em tom conversacional.

Conclusão honesta: **não existe TTS pt-BR grátis com qualidade publicável**. As alternativas eram:
- ElevenLabs ($5/mês, premium) — recusado por não querer custo agora
- Voice cloning local — sem GPU
- Voice cloning via Colab — risco de complexidade/instabilidade
- Gravar de verdade — 4-6h de trabalho da autora, exige ambiente silencioso

Decisão: **não inclui audiobook no 1º lançamento**. Produto vai com PDF + dashboard + templates + prompts + chat IA bônus — já é pacote completo. Audiobook entra no 2º lançamento (60-90 dias) usando ElevenLabs (~R$ 90 pra 3 meses cobre o ebook inteiro).

Toda a infra de geração ficou pronta em [audiobook-build/](audiobook-build/) — script Python, dicionário de pronúncia, roteiro do prefácio. Reaproveitável pro 2º lançamento, basta trocar a engine TTS.

