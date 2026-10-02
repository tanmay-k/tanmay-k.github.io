import type { SequenceSectionData } from "./types";
import { sectionClass } from "./types";

export function SequenceSection({ soft, index, eyebrow, heading, intro, steps, caption }: SequenceSectionData) {
  return (
    <section className={sectionClass(soft)}>
      <div className="container py-lg-4">
        <p className="section-eyebrow mb-2">{index} / {eyebrow}</p>
        <h2 className="section-heading fw-bold mb-4">{heading}</h2>
        <p className="text-secondary mb-4">{intro}</p>
        <ol className="cs-sequence" aria-label="Order of work">
          {steps.map((step, i) => (
            <li className="cs-sequence-step" key={step.title}>
              <div className="content-card">
                <span className="cs-sequence-number">{i + 1}</span>
                <h3 className="h5">{step.title}</h3>
                <p className="mb-0">{step.note}</p>
                {step.decision && <p className="cs-sequence-decision mb-0">{step.decision}</p>}
              </div>
            </li>
          ))}
        </ol>
        {caption && <p className="cs-sequence-caption text-secondary mt-3 mb-0">{caption}</p>}
      </div>
    </section>
  );
}
