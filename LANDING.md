# Landing — Onde editar

A landing pública (`https://dozeroaosaas.com.br`) **NÃO está mais neste repo**.

Foi extraída em **2026-04-29** para o repositório dedicado:

👉 **https://github.com/helvyssxc-spec/landing-dozeroaosaas**

## Por quê

Antes dessa data tínhamos 3 cópias divergentes:

- `landing-dozeroaosaas/index.html` (repo separado, **deploya em produção**)
- `produto-orquestra/landing/index.html` (cópia interna)
- `deploy-landing/index.html` (mais uma cópia + preview "vibe coding")

Cada edição obrigava a sincronizar 3 arquivos e gerava bugs (versões fora do ar, links errados). Centralizamos tudo no repo próprio da landing.

## Onde editar a landing agora

```bash
cd ../landing-dozeroaosaas
# editar index.html, termos.html, privacidade.html, etc.
git add . && git commit -m "..." && git push
# Vercel deploya automático em ~30s
```

## O que sobrou neste repo

| Pasta | O que é | Editar? |
|---|---|---|
| `produto-orquestra/` | Source markdown do produto (ebook, prompts, templates) | ✅ Sim |
| `pdf-build/` | PDFs e ZIPs prontos pra Kiwify | ✅ Quando regenerar |
| `videos_curso/` | Roteiros e gravações de vídeo | ✅ Sim |
| `PLANO-VIBE-CODING.md` | Plano estratégico ativo | ✅ Sim |
| `PLANEJAMENTO-PUBLICACAO.md` | Plano mestre de fases 1-8 | ✅ Sim |

Pastas removidas em 2026-04-29:
- ❌ `produto-orquestra/landing/` → veja `landing-dozeroaosaas`
- ❌ `deploy-landing/` → veja `landing-dozeroaosaas`
