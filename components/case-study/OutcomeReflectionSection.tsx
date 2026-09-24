import type { OutcomeReflectionSectionData } from "./types";
import { sectionClass } from "./types";

export function OutcomeReflectionSection({
  soft,
  index,
  eyebrow,
  heading,
  paragraphs,
  sideTitle,
  sideBody,
  disclaimer,
}: OutcomeReflectionSectionData) {
  return (
    <section className={sectionClass(soft)}>
      <div className="container py-lg-4">
        <div className="row g-4">
          <div className="col-lg-7">
            <p className="section-eyebrow mb-2">{index} / {eyebrow}</p>
            <h2 className="section-heading fw-bold mb-4">{heading}</h2>
            {paragraphs.map((p, i) => (
              <p className={p.mb0 === false ? "text-secondary" : "text-secondary mb-0"} key={i}>
                {p.text}
              </p>
            ))}
          </div>
          <div className="col-lg-5">
            <div className="content-card">
              <h3 className="h5">{sideTitle}</h3>
              <p className="mb-0">{sideBody}</p>
            </div>
          </div>
        </div>
        {disclaimer && (
          <p className="disclaimer rounded p-3 mt-5 mb-0">
            <strong>Scope note:</strong> {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
