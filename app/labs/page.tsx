import Link from "next/link";
import { labs, labsCopy, labPath, labPoster, labUrl, t, withCount } from "@/lib/labs";
import { LabPreview } from "./LabPreview";
import "./labs.css";

export default function LabsPage() {
  return (
    <main className="labs-page">
      <div className="labs-wrap">
        <Link className="labs-back" href="/">
          <span aria-hidden="true">←</span> {t(labsCopy.back)}
        </Link>

        <header className="labs-head">
          <p className="labs-eyebrow">{t(labsCopy.eyebrow)}</p>
          <h1 className="labs-title">
            {t(labsCopy.titleLead)} <em>{t(labsCopy.titleAccent)}</em>
          </h1>
          <p className="labs-lede">{withCount(labsCopy.lede)}</p>
          <p className="labs-note">{t(labsCopy.note)}</p>
        </header>

        <div className="labs-grid">
          {labs.map((lab, i) => (
            <a
              key={lab.slug}
              className={`labs-card labs-rise${lab.featured ? " is-featured" : ""}`}
              style={{ animationDelay: `${i * 90}ms` }}
              href={labUrl(lab)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="labs-bar">
                <span className="labs-path">{labPath(lab)}</span>
                <span className="labs-open">
                  {t(labsCopy.open)} <span aria-hidden="true">→</span>
                </span>
              </div>

              <LabPreview
                src={labUrl(lab)}
                poster={labPoster(lab)}
                title={`${t(labsCopy.previewAlt)} ${lab.name}`}
                eager={lab.featured}
              />

              <div className="labs-body">
                <span className="labs-segline">
                  <span className="labs-seg">{t(lab.segment)}</span>
                  {lab.client && (
                    <span className="labs-client">{t(labsCopy.clientTag)}</span>
                  )}
                </span>
                <h2 className="labs-name">{lab.name}</h2>
                <p className="labs-blurb">{t(lab.blurb)}</p>
              </div>
            </a>
          ))}
        </div>

        <p className="labs-foot">{withCount(labsCopy.foot)}</p>
      </div>
    </main>
  );
}
