"use client";

import { useState } from "react";

type Props = {
  /** Página que a prévia mostra. */
  src: string;
  /** Retrato estático, exibido até o iframe ser acordado. */
  poster: string;
  title: string;
  /** O card em destaque carrega ao vivo de saída; os demais esperam o hover. */
  eager?: boolean;
};

/**
 * Mostra um poster estático e só cria o iframe quando o ponteiro chega.
 *
 * Sem isso a galeria abre oito documentos completos de uma vez. O poster
 * pesa uma imagem; o iframe pesa um documento com fontes e fotos externas.
 *
 * O deslocamento do hover só é liberado depois do `load`: se o iframe já
 * nascesse com o transform final, não haveria quadro anterior para animar
 * e ele saltaria em vez de deslizar.
 */
export function LabPreview({ src, poster, title, eager }: Props) {
  const [live, setLive] = useState(Boolean(eager));
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="labs-frame" onPointerEnter={() => setLive(true)}>
      {/* eslint-disable-next-line @next/next/no-img-element --
          o poster ja sai de scripts/make-posters.mjs no tamanho exato da
          previa e em webp; passar pelo otimizador do Next so acrescentaria
          uma volta de rede e custo medido, sem ganho de peso relevante. */}
      <img
        className="labs-poster"
        src={poster}
        alt=""
        loading="lazy"
        decoding="async"
      />
      {live && (
        <iframe
          className={`labs-live${loaded ? " is-loaded" : ""}`}
          src={src}
          title={title}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          sandbox="allow-scripts"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
