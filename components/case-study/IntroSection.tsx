import type { IntroSectionData } from "./types";
import { sectionClass } from "./types";

export function IntroSection({
  soft,
  index,
  eyebrow,
  heading,
  lead,
  paragraphs,
  sidebarTitle,
  sidebarItems,
}: IntroSectionData) {
  return (
    <section className={sectionClass(soft)}>
      <div className="container py-lg-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <p className="section-eyebrow mb-2">{index} / {eyebrow}</p>
            <h2 className="section-heading fw-bold mb-4">{heading}</h2>
            <p className="lead text-secondary">{lead}</p>
            {paragraphs.map((p, i) => (
              <p className={p.mb0 === false ? "text-secondary" : "text-secondary mb-0"} key={i}>
                {p.text}
              </p>
            ))}
          </div>
          <div className="col-lg-4">
            <div className="info-card">
              <h3>{sidebarTitle}</h3>
              <ul className="mb-0 ps-3">
                {sidebarItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
