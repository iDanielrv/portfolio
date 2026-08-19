/**
 * Gera os posters estáticos das prévias de /labs.
 *
 *   node scripts/make-posters.mjs http://localhost:3120
 *
 * Cada poster é um retrato da demo **emoldurada** — dentro de um iframe do
 * mesmo tamanho lógico que a galeria usa. Isso importa: emoldurada, a demo
 * roda o script que esconde o selo, revela o conteúdo e pausa as animações.
 * Fotografar a página solta produziria uma imagem diferente do que a prévia
 * ao vivo mostra, e a troca no hover saltaria.
 *
 * O harness (public/_shot.html) precisa existir ANTES do servidor subir:
 * `next start` tira um snapshot da pasta public no boot e ignora arquivos
 * criados depois.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = process.argv[2] || "http://localhost:3000";

const CHROME =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

/** Largura lógica da prévia nos cards de 2 colunas: 486px de moldura / 0.44 */
const W = 1105;
/** Altura suficiente para a fatia visível mais o deslocamento do hover. */
const H = 760;
const QUALITY = 74;

const HARNESS = "public/_shot.html";
const OUT_DIR = join(ROOT, "public/labs/posters");
const TMP = join(ROOT, ".poster-tmp");

/** Lê os slugs (e urls próprias) direto de lib/labs.ts, para não duplicar a lista. */
function lerLabs() {
  const src = readFileSync(join(ROOT, "lib/labs.ts"), "utf8");
  const inicio = src.indexOf("export const labs");
  const fim = src.indexOf("export const labsCopy");
  const bloco = src.slice(inicio, fim);
  return bloco
    .split(/\n  \{/)
    .slice(1)
    .map((b) => {
      const slug = (b.match(/slug:\s*"([^"]+)"/) || [])[1];
      const url = (b.match(/url:\s*"([^"]+)"/) || [])[1];
      return slug ? { slug, url: url || `/labs/${slug}/index.html` } : null;
    })
    .filter(Boolean);
}

function escreverHarness() {
  writeFileSync(
    join(ROOT, HARNESS),
    `<!doctype html><html><head><meta charset="utf-8"><title>shot</title>
<style>html,body{margin:0;padding:0;overflow:hidden}iframe{width:${W}px;height:${H}px;border:0;display:block}</style>
</head><body><iframe id="f"></iframe>
<script>
  var u = new URLSearchParams(location.search).get('u');
  if (u) document.getElementById('f').src = u;
</script></body></html>\n`
  );
}

const labs = lerLabs();
console.log(`labs encontrados: ${labs.length}`);
mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(TMP, { recursive: true });
escreverHarness();

let total = 0;
for (const lab of labs) {
  const png = join(TMP, `${lab.slug}.png`);
  const webp = join(OUT_DIR, `${lab.slug}.webp`);
  const alvo = `${BASE}/_shot.html?u=${encodeURIComponent(lab.url)}`;

  execFileSync(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--no-first-run",
    `--user-data-dir=${join(TMP, "profile")}`,
    "--hide-scrollbars",
    `--window-size=${W},${H}`,
    "--virtual-time-budget=25000",
    `--screenshot=${png}`,
    alvo,
  ], { stdio: "ignore" });

  if (!existsSync(png)) {
    console.log(`  ${lab.slug.padEnd(20)} FALHOU (sem png)`);
    continue;
  }
  await sharp(png).webp({ quality: QUALITY }).toFile(webp);
  const kb = Math.round(readFileSync(webp).length / 1024);
  total += kb;
  console.log(`  ${lab.slug.padEnd(20)} ${String(kb).padStart(4)} KB`);
}

rmSync(join(ROOT, HARNESS), { force: true });
rmSync(TMP, { recursive: true, force: true });
console.log(`total: ${total} KB em ${labs.length} posters`);
