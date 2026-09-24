import type { CardGridSectionData } from "./types";
import { sectionClass } from "./types";

export function CardGridSection({ soft, index, eyebrow, heading, colClass = "col-md-4", cards }: CardGridSectionData) {
  return (
    <section className={sectionClass(soft)}>
      <div className="container py-lg-4">
        <p className="section-eyebrow mb-2">{index} / {eyebrow}</p>
        <h2 className="section-heading fw-bold mb-4">{heading}</h2>
        <div className="row g-4">
          {cards.map((card) => (
            <div className={colClass} key={card.title}>
              <div className="content-card">
                <h3 className="h5">{card.title}</h3>
                <p className="mb-0">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
