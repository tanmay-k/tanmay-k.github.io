import type { ReflectionSectionData } from "./types";
import { sectionClass } from "./types";

export function ReflectionSection({ soft, index, paragraphs }: ReflectionSectionData) {
  return (
    <section className={sectionClass(soft)}>
      <div className="container text-center py-4">
        <p className="section-eyebrow mb-2">{index} / Reflection</p>
        <h2 className="section-heading fw-bold mb-3">What I learned</h2>
        {paragraphs.map((text, i) => {
          const isFirst = i === 0;
          const isLast = i === paragraphs.length - 1;
          const className = isFirst
            ? "lead text-secondary mx-auto"
            : isLast
              ? "text-secondary mx-auto mb-0"
              : "text-secondary mx-auto";
          return (
            <p className={className} style={{ maxWidth: "760px" }} key={i}>
              {text}
            </p>
          );
        })}
      </div>
    </section>
  );
}
