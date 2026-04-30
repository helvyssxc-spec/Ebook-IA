# Plano de Reposicionamento — Vibe Coding com Método

> **Status:** ✅ Reposicionamento aplicado · 🚀 Produto lançado em 2026-04-30
>
> Este arquivo agora é **registro histórico + status final**, não mais checklist em aberto.

---

## 🎯 Tese (registrada pra referência futura)

A landing e o Kiwify vendiam "Do Zero ao SaaS / Sem saber programar". O termo **"vibe coding"** estava em pico de busca no Brasil (2026), mas o mercado tava saturado de cursos rasos do tipo "manda no Lovable e reza".

**Ângulo escolhido (Opção B aprovada 2026-04-29):** posicionar o produto como **vibe coding feito direito** — versão séria, com método, prompts, auditoria. Manter o "método/orquestração" como espinha dorsal e usar "vibe coding" como isca de SEO + identificação inicial.

---

## ✅ Status final (2026-04-30)

### Landing pública (`https://dozeroaosaas.com.br`)

Repo: `landing-dozeroaosaas` (separado do Ebook-IA desde 2026-04-29)

- [x] `<title>` com "Vibe Coding com Método" no início
- [x] `<meta name="description">` reescrita com "vibe coding" + 5 IAs corretas
- [x] OG tags atualizadas
- [x] Hero reposicionado com termo
- [x] Tools-row já listava as 5 IAs corretas (Claude, Gemini, GPT, Lovable, Manus)
- [x] Vercel Analytics ativado (commit `02d9a65`, 2026-04-30)
- [x] Discord placeholder substituído por mailto seguro (mesmo commit)

### Kiwify

- [x] Copy completa preparada em [copy-kiwify.md](copy-kiwify.md):
  - Subtítulo
  - Descrição longa
  - Renomeação dos 5 módulos
  - Email de boas-vindas
  - Sugestão de banner (`og-image.png`)
- 🟡 **Aplicação manual pendente** — só Helvys, no painel Kiwify. Tudo pronto pra colar.

### Dashboard (`dashboard.dozeroaosaas.com.br`)

- [x] Vercel Analytics ativado no source (commit `f149fdc`, 2026-04-30)
- [x] `deploy-dashboard/` está no GitHub, pronto pra Vercel importar
- [x] `vercel.json` configurado com noindex/nofollow + cleanUrls
- 🟡 **Deploy + DNS pendente** — só Helvys, browsers (Vercel + Registro.br)

### Decisões fiscais

- [x] **CPF no 1º lançamento** (decisão 2026-04-30) — não esperar CNAE.
- 🟡 CNAE no CNPJ continua em andamento com o contador, mas **não bloqueia mais** o lançamento. Vira otimização tributária pra fase posterior.

---

## 🟡 Pendências manuais (só Helvys, browsers)

Em ordem de prioridade pra começar a vender hoje:

### 1. Deploy do Dashboard no Vercel (~15 min)

1. [vercel.com/dashboard](https://vercel.com/dashboard) → Add New → Project
2. Importar `helvyssxc-spec/Ebook-IA`
3. Configure: Framework `Other`, Root Directory `deploy-dashboard`
4. Deploy
5. Settings → Domains → adicionar `dashboard.dozeroaosaas.com.br`
6. Vercel mostra valor CNAME — copiar
7. [registro.br](https://registro.br) → DNS de `dozeroaosaas.com.br` → adicionar registro CNAME `dashboard` apontando pra `cname.vercel-dns.com.`
8. Aguardar 5-15min DNS propagar
9. Habilitar Web Analytics na aba Analytics do projeto

### 2. Aplicar copy no Kiwify (~25 min)

Abrir [copy-kiwify.md](copy-kiwify.md) e [dashboard.kiwify.com.br](https://dashboard.kiwify.com.br) lado a lado:

- A1 — Subtítulo (aba Geral)
- A2 — Descrição longa (aba Geral)
- A3 — Renomear 5 módulos (aba Área de membros)
- A4 — Email pós-compra (Configurações)
- A5 — Cover/banner (upload `og-image.png` que está em `~/landing-dozeroaosaas/og-image.png`)

### 3. Upload dos arquivos no Kiwify (~15 min)

Em cada módulo da área de membros, arrastar:

| Módulo | Arquivo |
|---|---|
| 1 — Boas-vindas | `pdf-build/Do-Zero-ao-SaaS-Manual.pdf` |
| 2 — Manual | `pdf-build/Do-Zero-ao-SaaS-Ebook.pdf` |
| 3 — Dashboard interativo | link `https://dashboard.dozeroaosaas.com.br` |
| 4 — Templates | `pdf-build/templates-Do-Zero-ao-SaaS.zip` |
| 5 — Biblioteca | `pdf-build/biblioteca-Do-Zero-ao-SaaS.zip` |

### 4. Habilitar Vercel Analytics na landing (~30s)

[vercel.com/dashboard](https://vercel.com/dashboard) → projeto `landing-dozeroaosaas` → Analytics → Enable.

### 5. Ativar produto no Kiwify (~1 min)

Painel Kiwify → produto → botão **Ativar**.

### 6. Divulgar

Compartilhar `https://dozeroaosaas.com.br` em todos os canais (WhatsApp, IG, LinkedIn, X).

---

## 🟢 Pode esperar (não bloqueia vendas)

| Tarefa | Quando |
|---|---|
| Criar Discord + link real (substituir mailto que está hoje em `obrigado.html:364`) | Quando 1ª venda chegar |
| Email Zoho `suporte@dozeroaosaas.com.br` | Esta semana |
| Pixel Meta + Ads pagos | Quando quiser escalar com tráfego pago |
| Vídeos do curso editados/publicados | Próximas 2 semanas |
| CNAE no CNPJ + migrar fiscal de CPF pra CNPJ | Quando contador entregar |

---

## 🔍 Auditoria de funcionamento (2026-04-30)

Auditoria full feita após o reposicionamento. Resultado:

| Item | Status |
|---|---|
| Domínio + SSL + redirect www | ✅ |
| Landing pública renderiza | ✅ |
| 3 botões de checkout apontam pra `pay.kiwify.com.br/bpadvLg` | ✅ |
| Vercel Analytics no HTML deployado | ✅ |
| Title + meta description + OG tags | ✅ atualizados |
| Páginas legais (`/termos`, `/privacidade`, `/obrigado`) | ✅ 200 |
| `robots.txt` + `sitemap.xml` | ✅ |
| OG image servida | ✅ |
| Pixel Meta dentro de comentário HTML (não executa) | ✅ inerte |
| Form de captura de email no hero | ✅ existe |
| Chat bônus (`chat.dozeroaosaas.com.br`) | ✅ 200 |
| **Dashboard (`dashboard.dozeroaosaas.com.br`)** | 🔴 **DNS não configurado — deploy pendente** |
| PDFs e ZIPs prontos localmente pra upload Kiwify | ✅ todos |

---

## 📁 Arquivos relevantes

| Arquivo | O que é |
|---|---|
| `PLANO-VIBE-CODING.md` | Este arquivo |
| `copy-kiwify.md` | 5 blocos de copy prontos pra colar no Kiwify |
| `LANDING.md` | Aponta pro repo separado da landing |
| `DEPLOY.md` | Instruções de deploy Vercel (landing + dashboard) |
| `pdf-build/*.pdf`, `*.zip` | Arquivos do produto pra upload no Kiwify |
| `deploy-dashboard/index.html` | Source do dashboard, pronto pra Vercel |
| `videos_curso/` | Roteiros e gravações brutas (pendente edição) |
| `produto-orquestra/` | Sources markdown do produto |

Repos relacionados:
- `helvyssxc-spec/Ebook-IA` (este, conteúdo + dashboard)
- `helvyssxc-spec/landing-dozeroaosaas` (landing pública)
- `helvyssxc-spec/chat-dozeroaosaas` (chat bônus, em produção)

---

## 📌 Notas de retomada

Se outro Claude precisar continuar este projeto:

1. Ler este arquivo + `copy-kiwify.md` + `LANDING.md`
2. Verificar git: `cd Ebook-IA && git fetch origin && git log -5` — Helvys trabalha em múltiplas máquinas (memória `feedback_multiple_machines.md`)
3. Verificar se dashboard subiu: `curl -sI https://dashboard.dozeroaosaas.com.br`
4. Se ainda 🔴 — instruir Helvys conforme seção "Pendências manuais" acima
5. Se ✅ — partir pra próximas frentes (Discord real, Pixel Meta, vídeos)