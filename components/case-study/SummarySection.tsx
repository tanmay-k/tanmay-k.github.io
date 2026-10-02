import type { SummarySectionData } from "./types";

export function SummarySection({ items }: SummarySectionData) {
  return (
    <section className="py-4">
      <div className="container">
        <dl className="cs-summary mb-0">
          {items.map((item) => (
            <div className="cs-summary-row" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
