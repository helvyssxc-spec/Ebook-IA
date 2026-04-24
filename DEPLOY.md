# Deploy — Do Zero ao SaaS

Guia rápido pra publicar landing e dashboard no Vercel.

## Estrutura de deploy

Duas pastas autocontidas no repo, cada uma vira um projeto Vercel:

| Pasta | O que é | Domínio sugerido |
|---|---|---|
| `deploy-landing/` | Site público de vendas (index + obrigado) | `dozeroaosaas.com.br` |
| `deploy-dashboard/` | Dashboard interativo dos alunos (privado, noindex) | `dashboard.dozeroaosaas.com.br` |

> ⚠️ **Importante:** os arquivos nessas pastas são **snapshots** dos originais em `produto-orquestra/`. Se você editar a landing/dashboard original, atualize o deploy:
>
> ```bash
> # Da raiz do repo Ebook-IA
> cp produto-orquestra/landing/index.html deploy-landing/index.html
> cp produto-orquestra/landing/obrigado.html deploy-landing/obrigado.html
> cp produto-orquestra/dashboard-do-zero-ao-saas.html deploy-dashboard/index.html
> ```

## Passo a passo no Vercel

### 1. Garantir que o repo está no GitHub
Se ainda não estiver, push o repo `Ebook-IA` pro seu GitHub (já existe em `github.com/helvyssxc-spec/Ebook-IA`).

### 2. Deploy da Landing
1. Em **vercel.com** → **Add New Project**
2. Importar o repo `Ebook-IA`
3. Em **Configure Project** → **Root Directory** → clica em "Edit" → seleciona **`deploy-landing`**
4. Framework Preset: **Other**
5. **Deploy** — primeira URL fica tipo `do-zero-ao-saas-landing.vercel.app`

### 3. Domínio personalizado pra Landing
1. No projeto da landing → **Settings** → **Domains**
2. Adicionar `dozeroaosaas.com.br` e `www.dozeroaosaas.com.br`
3. Vercel vai mostrar 2 registros DNS pra adicionar no **Registro.br**:
   - Tipo `A` → `76.76.21.21` (apex)
   - Tipo `CNAME` → `cname.vercel-dns.com.` (www)
4. Adicionar esses registros no painel DNS do Registro.br
5. Aguardar verificação (~5–30 min). Vercel emite SSL automático.

### 4. Deploy do Dashboard
1. Em **vercel.com** → **Add New Project**
2. Importar o **mesmo repo** `Ebook-IA` (Vercel permite múltiplos projetos do mesmo repo)
3. Em **Configure Project** → **Root Directory** → seleciona **`deploy-dashboard`**
4. Framework Preset: **Other**
5. **Deploy**

### 5. Domínio personalizado pro Dashboard (opcional)
- Adicionar `dashboard.dozeroaosaas.com.br` no projeto
- DNS: tipo `CNAME` → `cname.vercel-dns.com.`
- O `vercel.json` do dashboard já vem com `noindex, nofollow` — não vai aparecer no Google.

## Auto-deploy

Cada push pra branch `main` re-deploya automaticamente os dois projetos.

## Como adicionar este link no Kiwify e na obrigado.html

Depois que a URL final do dashboard estiver no ar:

1. **Kiwify** → área de membros → módulo "Dashboard" → adicionar link externo pra `https://dashboard.dozeroaosaas.com.br`
2. **obrigado.html** → linha 345 → trocar `[LINK_DASHBOARD]` pra `https://dashboard.dozeroaosaas.com.br`

## Checklist final

- [ ] `deploy-landing/` deploy OK e SSL ativo em `dozeroaosaas.com.br`
- [ ] `deploy-dashboard/` deploy OK
- [ ] Link do dashboard adicionado no Kiwify
- [ ] Link do dashboard adicionado na obrigado.html (substituir `[LINK_DASHBOARD]`)
- [ ] Testar fluxo completo em modo anônimo: landing → checkout Kiwify → obrigado → dashboard
