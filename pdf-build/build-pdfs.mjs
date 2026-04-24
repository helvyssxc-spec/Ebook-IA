import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BRAND = {
  primary: '#0b1437',
  accent: '#4f46e5',
  accentLight: '#818cf8',
  ink: '#1a1a1a',
  muted: '#555',
  rule: '#d4d4d8',
  codeBg: '#0f172a',
  codeFg: '#e2e8f0',
  calloutBg: '#f5f3ff',
  calloutBorder: '#6d28d9',
};

const STYLES = `
  @page {
    size: A4;
    margin: 22mm 20mm 24mm 20mm;
  }
  @page :first {
    margin: 0;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: "Georgia", "Times New Roman", serif;
    font-size: 11pt;
    line-height: 1.6;
    color: ${BRAND.ink};
    -webkit-font-smoothing: antialiased;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ---------- CAPA ---------- */
  .cover {
    page-break-after: always;
    position: relative;
    width: 210mm;
    height: 297mm;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: #fff;
    background:
      radial-gradient(1200px 800px at 80% 10%, rgba(129,140,248,0.35), transparent 60%),
      radial-gradient(900px 700px at 10% 90%, rgba(79,70,229,0.45), transparent 60%),
      linear-gradient(160deg, #070c24 0%, ${BRAND.primary} 55%, #1e1b4b 100%);
  }
  .cover::before {
    content: "";
    position: absolute;
    inset: 18mm;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 2mm;
    pointer-events: none;
  }
  .cover-inner {
    position: absolute;
    left: 28mm;
    right: 28mm;
    top: 50mm;
    bottom: 50mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cover-eyebrow {
    font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
    font-size: 10pt;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: ${BRAND.accentLight};
    font-weight: 600;
  }
  .cover-title {
    font-family: "Georgia", serif;
    font-size: 68pt;
    line-height: 1.02;
    font-weight: 700;
    letter-spacing: -2px;
    margin: 20mm 0 14mm;
    color: #fff;
  }
  .cover-title em {
    font-style: normal;
    color: ${BRAND.accentLight};
  }
  .cover-subtitle {
    font-family: "Georgia", serif;
    font-size: 18pt;
    line-height: 1.35;
    font-style: italic;
    color: rgba(255,255,255,0.88);
    max-width: 140mm;
  }
  .cover-divider {
    width: 32mm;
    height: 2px;
    background: ${BRAND.accentLight};
    margin: 10mm 0 6mm;
  }
  .cover-meta {
    font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
    font-size: 10pt;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.65);
  }
  .cover-footer {
    position: absolute;
    left: 28mm;
    right: 28mm;
    bottom: 22mm;
    display: flex;
    justify-content: space-between;
    font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
    font-size: 9pt;
    color: rgba(255,255,255,0.55);
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  /* ---------- MIOLO ---------- */
  main.content {
    max-width: 170mm;
    margin: 0 auto;
    padding: 0;
  }

  /* Page break before each PARTE */
  main.content h1 {
    page-break-before: always;
    break-before: page;
    font-size: 30pt;
    line-height: 1.1;
    letter-spacing: -0.5px;
    margin: 10mm 0 6mm;
    color: ${BRAND.primary};
    border-bottom: 3px solid ${BRAND.accent};
    padding-bottom: 6mm;
  }
  main.content h1:first-of-type { page-break-before: avoid; break-before: avoid; }

  main.content h2 {
    font-size: 18pt;
    line-height: 1.25;
    margin: 14mm 0 4mm;
    color: ${BRAND.primary};
    letter-spacing: -0.2px;
    page-break-after: avoid;
    break-after: avoid;
  }
  main.content h3 {
    font-size: 14pt;
    margin: 8mm 0 3mm;
    color: ${BRAND.primary};
    page-break-after: avoid;
    break-after: avoid;
  }
  main.content h4 {
    font-size: 11pt;
    margin: 6mm 0 2mm;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${BRAND.muted};
    page-break-after: avoid;
    break-after: avoid;
  }
  main.content p {
    margin: 0 0 3mm;
    text-align: justify;
    hyphens: auto;
    orphans: 3;
    widows: 3;
  }
  main.content a {
    color: ${BRAND.accent};
    text-decoration: none;
    border-bottom: 1px dotted ${BRAND.accent};
  }
  main.content strong { color: #000; font-weight: 700; }
  main.content em { font-style: italic; }

  main.content hr {
    border: 0;
    height: 1px;
    background: ${BRAND.rule};
    margin: 8mm 0;
  }

  main.content ul, main.content ol {
    margin: 0 0 4mm 6mm;
    padding: 0;
  }
  main.content li {
    margin: 1.5mm 0;
    padding-left: 1mm;
  }
  main.content ul li::marker { color: ${BRAND.accent}; }

  main.content blockquote {
    margin: 5mm 0;
    padding: 4mm 6mm;
    border-left: 3px solid ${BRAND.calloutBorder};
    background: ${BRAND.calloutBg};
    border-radius: 0 2mm 2mm 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  main.content blockquote p {
    margin: 0 0 2mm;
    color: #3730a3;
    font-style: italic;
  }
  main.content blockquote p:last-child { margin-bottom: 0; }

  main.content code {
    font-family: "SF Mono", "Consolas", "Courier New", monospace;
    font-size: 9.5pt;
    background: #f1f5f9;
    color: #1e293b;
    padding: 0.5mm 1.5mm;
    border-radius: 1mm;
  }
  main.content pre {
    background: ${BRAND.codeBg};
    color: ${BRAND.codeFg};
    padding: 4mm 5mm;
    border-radius: 1.5mm;
    font-size: 8.5pt;
    line-height: 1.5;
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    page-break-inside: avoid;
    break-inside: avoid;
    margin: 4mm 0;
  }
  main.content pre code {
    background: transparent;
    color: inherit;
    padding: 0;
    font-size: 8.5pt;
  }

  main.content table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10pt;
    margin: 5mm 0;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  main.content th {
    background: ${BRAND.primary};
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 2.5mm 3mm;
    border: 1px solid ${BRAND.primary};
  }
  main.content td {
    padding: 2.5mm 3mm;
    border: 1px solid ${BRAND.rule};
    vertical-align: top;
  }
  main.content tr:nth-child(even) td { background: #fafafa; }

  main.content img { max-width: 100%; height: auto; }
`;

function wrap({ title, cover, body }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>${STYLES}</style>
</head>
<body>
${cover}
<main class="content">
${body}
</main>
</body>
</html>`;
}

const COVER_EBOOK = `
<section class="cover">
  <div class="cover-inner">
    <div>
      <div class="cover-eyebrow">Ebook · 1ª edição · 2026</div>
      <h1 class="cover-title">Do Zero<br>ao <em>SaaS</em>.</h1>
    </div>
    <div>
      <div class="cover-divider"></div>
      <p class="cover-subtitle">Do zero ao primeiro SaaS<br>faturando em 30 dias —<br>sem saber programar.</p>
      <p class="cover-meta" style="margin-top: 12mm;">5 IAs · 7 fases · 1 produto em produção</p>
    </div>
  </div>
  <div class="cover-footer">
    <span>Método completo</span>
    <span>dozeroaosaas.com.br</span>
  </div>
</section>
`;

const COVER_MANUAL = `
<section class="cover">
  <div class="cover-inner">
    <div>
      <div class="cover-eyebrow">Manual do produto · 2026</div>
      <h1 class="cover-title">Comece<br><em>por aqui.</em></h1>
    </div>
    <div>
      <div class="cover-divider"></div>
      <p class="cover-subtitle">10 minutos de leitura agora<br>te economizam dias depois.</p>
      <p class="cover-meta" style="margin-top: 12mm;">Guia rápido · Do Zero ao SaaS</p>
    </div>
  </div>
  <div class="cover-footer">
    <span>Leia antes de abrir os outros arquivos</span>
    <span>dozeroaosaas.com.br</span>
  </div>
</section>
`;

async function buildPdf({ bodyPath, cover, title, outputName }) {
  const body = await fs.readFile(path.join(__dirname, bodyPath), 'utf-8');
  const html = wrap({ title, cover, body });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.emulateMediaType('print');

  const outputPath = path.join(__dirname, outputName);
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '22mm', right: '20mm', bottom: '24mm', left: '20mm' },
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `<div style="width:100%;font-family:Georgia,serif;font-size:9pt;color:#9ca3af;display:flex;justify-content:space-between;padding:0 20mm;">
      <span style="letter-spacing:1px;text-transform:uppercase;font-size:8pt;">${title}</span>
      <span class="pageNumber"></span>
    </div>`,
  });

  await browser.close();
  const stat = await fs.stat(outputPath);
  console.log(`  ✓ ${outputName}  (${(stat.size / 1024).toFixed(0)} KB)`);
}

console.log('Gerando PDFs...');
await buildPdf({
  bodyPath: 'ebook-body.html',
  cover: COVER_EBOOK,
  title: 'Do Zero ao SaaS — Ebook',
  outputName: 'Do-Zero-ao-SaaS-Ebook.pdf',
});
await buildPdf({
  bodyPath: 'manual-body.html',
  cover: COVER_MANUAL,
  title: 'Do Zero ao SaaS — Manual',
  outputName: 'Do-Zero-ao-SaaS-Manual.pdf',
});
console.log('Pronto.');
