# Plano de Trabalho Semanal — Trilha Do Zero ao SaaS

> **30 dias organizados em 4 semanas com marcos concretos.**
> Imprima. Cole na parede. Marque o que conclui. A sensação de avanço é parte do método.

---

## 📅 Semana 0 — Preparação (1-3 dias antes da trilha)

Antes de começar o dia 1 da trilha, feche estas etapas:

- [ ] Li o Manual do Produto (Template 07)
- [ ] Li a Parte 1 do ebook (Capítulos 1-2)
- [ ] Li a Parte 2 do ebook (Capítulos 3-7)
- [ ] Abri o Dashboard e explorei as 4 seções
- [ ] Conta criada no Claude (plano pago recomendado)
- [ ] Conta criada no Gemini
- [ ] Conta criada no ChatGPT (Plus recomendado)
- [ ] Conta criada no Lovable
- [ ] Conta criada no Manus (opcional, mas recomendado)
- [ ] Conta criada no GitHub
- [ ] Conta criada no Vercel
- [ ] Conta criada no Supabase
- [ ] Reservei 30 dias consecutivos no calendário (1-2h/dia)
- [ ] Defini ONDE vou trabalhar (home office, café, co-working — escolha)
- [ ] Avisei parceiro/família da "temporada de construção"

**Meta psicológica da Semana 0:** chegar no dia 1 com o playground pronto e sem fricção operacional.

---

## 📅 Semana 1 — Fundação

> **Objetivo da semana:** transformar ideia vaga em plano concreto com PRD e schema prontos.

### Fase 1 — Idear (Dias 1-3)

**Checkpoint ao final da fase:**
*Você terá: problema escrito em 1 parágrafo, nome do produto registrado, 3-5 concorrentes mapeados, ângulo de posicionamento definido.*

#### Dia 1 — Terça (ou seu dia 1)
- [ ] Ler Capítulo 8 do ebook (Ciclo dos 5 Passos)
- [ ] Rodar prompt 001 (Pressionar ideia como investidor) no Claude
- [ ] Anotar reformulações no arquivo `ideia.md`
- [ ] Reservar 30min pra decantar antes de seguir

#### Dia 2
- [ ] Ler Capítulo 9 do ebook (Estudo de Caso 1)
- [ ] Rodar prompt 002 (Proposta de valor em 1 frase)
- [ ] Rodar prompt 006 (Mapear concorrentes) no Gemini
- [ ] Validar manualmente top 3 concorrentes (abre URLs)

#### Dia 3
- [ ] Rodar prompt 008 (Pesquisa profunda) no Manus **(opcional)**
- [ ] Ler relatório, destacar 3 insights
- [ ] Rodar prompt 061 (Nome + tagline) no GPT
- [ ] Registrar domínio do nome escolhido no Registro.br
- [ ] **CHECKPOINT:** marcar se os 4 itens estão fechados

---

### Fase 2 — Especificar (Dias 4-7)

**Checkpoint ao final da fase:**
*Você terá: PRD.md completo, schema Supabase em SQL, lista de 10-15 tarefas em ordem.*

#### Dia 4
- [ ] Ler Capítulo 10 do ebook (Estudo de Caso 2)
- [ ] Abrir Template 01 (PRD) em branco
- [ ] Preencher seções 1-4 do PRD manualmente
- [ ] Rodar prompt 010 (PRD completo) no Claude dentro de um Project novo

#### Dia 5
- [ ] Revisar PRD gerado, ajustar onde precisa
- [ ] Rodar prompt 003 (Escopo MVP) pra cortar features
- [ ] Rodar prompt 004 (Personas detalhadas) se o PRD ficou vago
- [ ] Rodar prompt 005 (Métricas de sucesso)

#### Dia 6
- [ ] Abrir Template 02 (Schema Supabase)
- [ ] Rodar prompt 011 (Schema completo) no mesmo Project Claude
- [ ] Revisar schema — RLS em todas as tabelas?
- [ ] Criar projeto no Supabase (sem rodar o SQL ainda)

#### Dia 7
- [ ] Listar as 10-15 tarefas principais de construção em ordem
- [ ] Revisar PRD + Schema uma última vez
- [ ] Rodar prompt 013 (Validar stack) se ainda estiver em dúvida
- [ ] **CHECKPOINT:** PRD finalizado, schema SQL pronto, lista de tarefas escrita
- [ ] **Descanso:** dia extra se tiver. Construção começa na Semana 2.

---

## 📅 Semana 2 — Construção

> **Objetivo da semana:** MVP navegável no ar, fora do Lovable, editado no Claude Code.

### Fase 3 — Construir (Dias 8-14)

**Checkpoint ao final da fase:**
*Projeto no GitHub, edições no Claude Code (economizando crédito), preview navegável em URL pública.*

#### Dia 8
- [ ] Ler Parte 4 do ebook INTEIRA (Capítulos 11-14 — cruciais)
- [ ] Abrir Template 06 (Prompt de Scaffold Premium)
- [ ] Preencher todos os campos com dados do seu PRD
- [ ] Abrir Lovable, criar projeto novo

#### Dia 9
- [ ] Colar o prompt de scaffold no Lovable
- [ ] Aguardar scaffold (2-5 min)
- [ ] Segundo prompt (refinamento), se necessário
- [ ] Conectar projeto ao GitHub (botão no Lovable)

#### Dia 10
- [ ] Instalar Git no computador (se ainda não tem)
- [ ] Instalar Claude Code
- [ ] Clonar repo localmente (`git clone ...`)
- [ ] Abrir Claude Code no projeto (`claude`)
- [ ] Primeiro prompt: "Liste os arquivos e descreva a estrutura"

#### Dia 11
- [ ] Rodar prompt 021 (Adicionar feature) pra primeira feature central
- [ ] Aprovar diffs do Claude Code
- [ ] Fazer primeiro commit + push
- [ ] Confirmar que preview do Lovable atualizou

#### Dia 12
- [ ] Segunda feature central
- [ ] Ajustes de empty states (prompt 019)
- [ ] Commit + push
- [ ] Teste ponta a ponta no preview

#### Dia 13
- [ ] Terceira feature (se aplicável)
- [ ] Primeira passada em acessibilidade (prompt 025)
- [ ] Dark mode se fizer sentido (prompt 026)
- [ ] Commit + push

#### Dia 14
- [ ] Revisar tudo no preview
- [ ] Listar bugs/ajustes pra próxima semana
- [ ] Rodar schema SQL no Supabase (se ainda não rodou)
- [ ] **CHECKPOINT:** scaffold no ar, Claude Code funcionando, commits múltiplos no GitHub
- [ ] **Descanso:** fim de semana livre ou uso pra polir visual

---

## 📅 Semana 3 — Integrações

> **Objetivo da semana:** cérebro do sistema funcionando — auth, pagamento, email.

### Fase 4 — Integrar (Dias 15-18)

**Checkpoint ao final da fase:**
*Usuário cadastra, loga, assina plano (test mode), recebe email, RLS validado.*

#### Dia 15
- [ ] Abrir Template 04 (Briefings Gemini) no Tutorial 1 (Supabase)
- [ ] Configurar Supabase Auth seguindo o tutorial
- [ ] Validar cadastro + login por email
- [ ] Testar recuperação de senha

#### Dia 16
- [ ] Tutorial 4 do Template 04 (Google OAuth)
- [ ] Configurar Google Cloud Console
- [ ] Ativar Google Sign-in no Supabase
- [ ] Testar login com Google

#### Dia 17
- [ ] Tutorial 3 do Template 04 (Stripe Webhook)
- [ ] Criar produto + price no Stripe
- [ ] Implementar Edge Function (prompt 035)
- [ ] Implementar Checkout Session (prompt 036)

#### Dia 18
- [ ] Testar assinatura com cartão 4242 4242 4242 4242
- [ ] Validar que tabela subscriptions atualiza
- [ ] Integrar Resend pra emails transacionais (prompt 037)
- [ ] Teste email de boas-vindas + confirmação de assinatura
- [ ] **CHECKPOINT:** fluxo completo funcionando em test mode

---

### Fase 5 — Polir (Dias 19-21)

**Checkpoint ao final da fase:**
*Auditoria de código com 0 achados críticos, 3+ bugs resolvidos, aplicação estável.*

#### Dia 19
- [ ] Rodar prompt 040 (Auditoria 4 níveis) nos arquivos principais
- [ ] Rodar prompt 041 (Revisar RLS policies) nas tabelas do Supabase
- [ ] Listar TODOS os achados críticos
- [ ] Aplicar correções críticas no Claude Code

#### Dia 20
- [ ] Rodar prompt 042 (Auditoria pré-produção)
- [ ] Aplicar correções médias
- [ ] Testar fluxos completos em múltiplos navegadores
- [ ] Testar responsividade (mobile + desktop)

#### Dia 21
- [ ] Adicionar Error Boundary (prompt 028)
- [ ] Adicionar loading states (prompt 027)
- [ ] Deploy preview no Vercel (teste antes do deploy final)
- [ ] Teste completo no preview Vercel
- [ ] **CHECKPOINT:** auditoria passada, aplicação estável

---

## 📅 Semana 4 — Lançamento

> **Objetivo da semana:** do teste à venda real. URL própria, Stripe live, primeiro cliente.

### Fase 6 — Publicar (Dias 22-25)

**Checkpoint ao final da fase:**
*URL própria (seudominio.com.br), SSL ativo, Stripe em live mode, primeira transação real possível.*

#### Dia 22
- [ ] Tutorial 5 do Template 04 (Deploy Vercel)
- [ ] Deploy em produção (sem domínio customizado ainda)
- [ ] Configurar TODAS as variáveis de ambiente em production
- [ ] Teste completo na URL vercel.app
- [ ] Logs checados — nada quebrando?

#### Dia 23
- [ ] Tutorial 2 do Template 04 (DNS e domínio)
- [ ] Apontar domínio customizado no Vercel
- [ ] Esperar propagação DNS (até 24h)
- [ ] Testar acesso via domínio próprio + SSL funcionando

#### Dia 24
- [ ] **Mudar Stripe pra live mode**:
  - [ ] Trocar chaves Stripe no Vercel (live secret + webhook secret)
  - [ ] Atualizar webhook endpoint no painel Stripe pra URL de produção
  - [ ] Testar webhook live (Stripe tem "Send test event")
- [ ] Domínio verificado no Resend + DKIM/SPF configurados

#### Dia 25
- [ ] Abrir Template 03 (Checklist pré-produção)
- [ ] Marcar TODOS os itens críticos (não publique se algo crítico em aberto)
- [ ] Fazer compra de teste com cartão REAL (seu próprio, R$ 1-valor mínimo)
- [ ] Cancelar imediatamente pra confirmar fluxo completo
- [ ] **CHECKPOINT:** produto 100% funcional em produção live

---

### Fase 7 — Vender (Dias 26-30)

**Checkpoint ao final da fase:**
*Landing publicada, anúncios rodando, primeira venda registrada no Stripe live.*

#### Dia 26
- [ ] Rodar prompt 058 (Copy landing) no GPT
- [ ] Implementar landing no Vercel (pode ser página / do seu domínio)
- [ ] Integrar Meta Pixel + TikTok Pixel + Plausible (prompt 039)
- [ ] Publicar landing

#### Dia 27
- [ ] Rodar prompt 056 (15 variações de ad) no GPT
- [ ] Criar criativos visuais (use prompt 016 ou 017 pra ilustrações)
- [ ] Configurar campanha Meta/TikTok com budget diário de R$ 20-50 inicial
- [ ] Rodar 3-5 ads variados em teste

#### Dia 28
- [ ] Rodar prompt 064 (Sequência 5 emails) no Claude
- [ ] Configurar automação no Resend (ou sua ferramenta de email)
- [ ] Criar lead magnet (prompt 059) pra capturar emails
- [ ] Integrar formulário de captura na landing

#### Dia 29
- [ ] Postar em seus canais (Instagram, X, LinkedIn, WhatsApp):
  - [ ] "Acabei de lançar..." com link pra landing
  - [ ] Responder DMs com empenho
- [ ] Avisar 10 pessoas do seu círculo direto pessoalmente
- [ ] Monitorar: Stripe Events + Vercel Logs + Plausible

#### Dia 30
- [ ] Primeira venda? **Celebre!**
- [ ] Mande mensagem pessoal agradecendo ao primeiro cliente
- [ ] Ler Capítulo 16 do ebook (Depois de publicar)
- [ ] Rodar prompt 100 (Retrospectiva dos 30 dias)
- [ ] **CHECKPOINT FINAL:** produto no ar + primeira venda + retrospectiva feita
- [ ] **Commemorar com algo concreto.** Sério. Comemora.

---

## 🎁 Bônus — Pós dia 30

Se quiser continuar evoluindo:

- [ ] Ler prompts 081-086 (Skills) e criar sua primeira Skill do Claude
- [ ] Rodar prompt 097 (Plano V2) com feedback dos primeiros clientes
- [ ] Rodar prompt 099 (Roadmap trimestral)
- [ ] Criar conteúdo orgânico com os prompts 051-055
- [ ] Começar a construir em torno do produto (comunidade, curso, etc)

---

## 📊 Tabela de auto-avaliação

A cada domingo (final de semana), marque:

| Semana | Concluída | Cumpri 80%+ do plano? | Estou no ritmo? |
|---|---|---|---|
| Semana 0 | [ ] | [ ] | [ ] |
| Semana 1 | [ ] | [ ] | [ ] |
| Semana 2 | [ ] | [ ] | [ ] |
| Semana 3 | [ ] | [ ] | [ ] |
| Semana 4 | [ ] | [ ] | [ ] |

**Se falhou em uma semana:** não desista. Ajuste. Reduza o escopo se precisar. O objetivo é TER O PRODUTO NO AR, não cumprir perfeitamente o cronograma.

**Se atrasou 2+ semanas:** pare e revise. Algo no escopo do seu projeto está grande demais. Volte à Fase 2 e corte.

---

## 💪 Regras psicológicas das 4 semanas

1. **Semana 1:** "Parece muito planejamento. Não parece que estou fazendo nada." — **isso é sinal de que está no caminho certo.** Planejamento é construir.

2. **Semana 2:** "Eureka! Tem coisa na tela!" — **não se empolgue demais.** Scaffold é 10% do caminho. Mantenha o ritmo.

3. **Semana 3:** "Integrações são um inferno." — **verdade.** É a semana mais frustrante. Gemini é seu melhor amigo aqui. Não desista.

4. **Semana 4:** "Tô publicando? Não pode estar pronto ainda." — **pode. Publique mesmo imperfeito.** O mundo não para pra julgar seu MVP.

---

**Fim do plano. Começa sua obra.**

*Plano de Trabalho Semanal · Do Zero ao SaaS · v1.0*
