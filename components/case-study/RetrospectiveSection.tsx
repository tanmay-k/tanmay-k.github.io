import type { RetrospectiveSectionData } from "./types";
import { sectionClass } from "./types";

export function RetrospectiveSection({ soft, index, eyebrow, heading, columns, disclaimer }: RetrospectiveSectionData) {
  return (
    <section className={sectionClass(soft)}>
      <div className="container py-lg-4">
        <p className="section-eyebrow mb-2">{index} / {eyebrow}</p>
        <h2 className="section-heading fw-bold mb-4">{heading}</h2>
        <div className="row g-4">
          {columns.map((column) => (
            <div className="col-md-4" key={column.title}>
              <div className="content-card">
                <h3 className="h5">{column.title}</h3>
                <ul className="mb-0 ps-3">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
