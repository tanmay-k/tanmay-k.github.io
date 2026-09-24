import type { TechSectionData } from "./types";
import { sectionClass } from "./types";

export function TechSection({ soft, index, eyebrow, heading, cards, tags }: TechSectionData) {
  return (
    <section className={sectionClass(soft)}>
      <div className="container py-lg-4">
        <p className="section-eyebrow mb-2">{index} / {eyebrow}</p>
        <h2 className="section-heading fw-bold mb-4">{heading}</h2>
        <div className={tags ? "row g-3 mb-4" : "row g-3"}>
          {cards.map((card) => (
            <div className="col-sm-6 col-lg-3" key={card.title}>
              <div className="content-card">
                <h3 className="h6">{card.title}</h3>
                <p className="mb-0">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
        {tags && (
          <div className="d-flex flex-wrap gap-2" aria-label="Technology tags">
            {tags.map((tag) => (
              <span className="badge badge-tech" key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
