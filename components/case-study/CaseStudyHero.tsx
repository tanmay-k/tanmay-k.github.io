import type { HeroData } from "./types";

export function CaseStudyHero({ eyebrow, title, summary, meta, metaColClass = "col-6 col-md-3" }: HeroData) {
  return (
    <header className="hero py-5">
      <div className="container py-lg-5">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="fw-bold mb-4">{title}</h1>
        <p className="hero-summary mb-5">{summary}</p>
        <div className="hero-meta row g-4 pt-4">
          {meta.map((item) => (
            <div className={metaColClass} key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
