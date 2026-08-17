import Link from "next/link";
import "./design.css";

/** Página interna de comparação — escrita em pt-BR porque o leitor é você. */
type Direction = {
  num: string;
  slug: string;
  name: string;
  /** Como esta versão constrói a sensação de "clean". */
  mechanism: string;
  thesis: string;
  type: string;
  risk: string;
  verdict: string;
};

const directions: Direction[] = [
  {
    num: "01",
    slug: "case-first",
    name: "Case-first",
    mechanism: "Clean por hierarquia",
    thesis:
      "A que você escolheu. Trabalho antes de credencial, cada caso com o número de resultado isolado numa coluna à direita. O currículo desce para uma faixa comprimida no fim. Fios de 1px, papel frio, azul-sinal usado só em três lugares.",
    type: "Instrument Serif no display, IBM Plex Sans no corpo, IBM Plex Mono nos dados",
    risk:
      "O azul é a cor mais forte das quatro. Se o objetivo é máxima sobriedade, ele é o primeiro elemento a questionar.",
    verdict:
      "A mais equilibrada. Tem hierarquia clara sem abrir mão de personalidade — é a que eu levaria para produção.",
  },
  {
    num: "02",
    slug: "monochrome",
    name: "Monochrome",
    mechanism: "Clean por ausência",
    thesis:
      "Zero cor. Preto, branco e dois cinzas — nada mais. Uma família serifada faz display e corpo; a sans aparece só em rótulos de 10px. A métrica não vira bloco grande: ela mora dentro da frase, em itálico. Medida de leitura estreita e margens largas.",
    type: "Newsreader em tudo, Inter apenas nos micro-rótulos",
    risk:
      "Sem accent, não há nada para o olho fixar. Se o texto não for bom, a página fica sem graça — esta direção não perdoa copy fraca.",
    verdict:
      "A mais elegante e a mais sóbria das quatro. É a que mais parece consultoria e a que menos parece dev. Também a mais difícil de sustentar.",
  },
  {
    num: "03",
    slug: "editorial",
    name: "Editorial",
    mechanism: "Clean por assimetria",
    thesis:
      "Coluna marginal fixa à esquerda com nome, disponibilidade e contatos, que acompanha a rolagem; conteúdo à direita. Serifa didone de alto contraste no display, numeração romana nos casos, navy como única cor. A proporção entre as duas colunas é a assinatura.",
    type: "Bodoni Moda no display, Work Sans no corpo",
    risk:
      "Didone só funciona grande. E a coluna fixa some no mobile, onde a assinatura da direção deixa de existir.",
    verdict:
      "A mais sofisticada visualmente. O contato fica sempre visível no desktop, o que é uma vantagem prática real.",
  },
  {
    num: "04",
    slug: "studio",
    name: "Studio",
    mechanism: "Clean por estrutura",
    thesis:
      "Sem serifa nenhuma. O trabalho vira grade de cards com um bloco tonal no topo de cada um, e o número de resultado ocupa esse bloco. A cor não vem do tema — vem de tintas suaves diferentes por projeto. Currículo comprimido em três colunas no rodapé.",
    type: "Manrope em tudo, um só peso variando de 400 a 800",
    risk:
      "Cards com cantos arredondados é a linguagem de produto SaaS. Fica clean, mas é a menos memorável — parece landing de startup.",
    verdict:
      "A mais fácil de manter e de crescer: projeto novo é só mais um card. Se você planeja publicar muito trabalho, ganha das outras.",
  },
];

export const metadata = {
  title: "Design lab — quatro versões clean | Daniel RV",
};

export default function DesignPage() {
  return (
    <main className="dz-page">
      <div className="dz-wrap">
        <Link className="dz-back" href="/">
          <span aria-hidden="true">←</span> Portfolio
        </Link>

        <header className="dz-head">
          <p className="dz-eyebrow">Design lab</p>
          <h1 className="dz-title">
            Quatro versões <em>clean</em>
          </h1>
          <p className="dz-lede">
            Todas na mesma faixa que você escolheu — clara, profissional,
            elegante — mas cada uma constrói a sensação de limpo por um
            mecanismo diferente: hierarquia, ausência, assimetria e estrutura.
            Conteúdo idêntico nas quatro, para a única variável ser o design.
          </p>
        </header>

        <div className="dz-verdict">
          <h2>O que mudou</h2>
          <p>
            As direções <strong>Two doors</strong>, <strong>Systems</strong> e a
            variante escura foram descartadas, como você pediu. O que sobrou é a{" "}
            <strong>Case-first</strong> mais três formas de chegar no mesmo
            lugar por caminhos diferentes.
          </p>
          <p>
            Em todas as quatro, o caso do Hyundai aparece com um marcador
            amarelo de <strong>métrica faltando</strong>. Não é descuido — é o
            único dado que você ainda não me passou, e deixá-lo visível mostra o
            tamanho do buraco em cada layout. Note que ele incomoda mais na 04 e
            menos na 02: isso também é informação sobre qual direção perdoa a
            falta de números.
          </p>
        </div>

        {directions.map((d) => (
          <section className="dz-item" key={d.slug}>
            <div className="dz-item-head">
              <span className="dz-num">{d.num}</span>
              <h2 className="dz-name">{d.name}</h2>
              <span className="dz-mech">{d.mechanism}</span>
            </div>
            <p className="dz-thesis">{d.thesis}</p>

            <a
              className="dz-card"
              href={`/design/${d.slug}/index.html`}
              target="_blank"
              rel="noopener"
            >
              <div className="dz-bar">
                <span className="dz-path">/design/{d.slug}</span>
                <span className="dz-open">Abrir em tela cheia →</span>
              </div>
              <div className="dz-frame">
                <iframe
                  src={`/design/${d.slug}/index.html`}
                  title={`Prévia da direção ${d.name}`}
                  loading="lazy"
                  tabIndex={-1}
                  aria-hidden="true"
                  sandbox="allow-scripts"
                />
              </div>
            </a>

            <dl className="dz-read">
              <div>
                <dt>Tipografia</dt>
                <dd>{d.type}</dd>
              </div>
              <div>
                <dt>O risco</dt>
                <dd>{d.risk}</dd>
              </div>
              <div className="is-verdict">
                <dt>Meu veredito</dt>
                <dd>{d.verdict}</dd>
              </div>
            </dl>
          </section>
        ))}

        <p className="dz-foot">
          Documentos estáticos isolados em <code>public/design/</code>, todos com{" "}
          <code>noindex</code> — quatro sistemas de design não convivem numa
          página React sem o CSS de um vazar no outro. Passe o mouse na prévia
          para percorrer a página; clique para abrir em tela cheia.
        </p>
      </div>
    </main>
  );
}
