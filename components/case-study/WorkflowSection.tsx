import type { WorkflowSectionData } from "./types";
import { sectionClass } from "./types";

export function WorkflowSection({ soft, index, eyebrow, heading, intro, steps }: WorkflowSectionData) {
  return (
    <section className={sectionClass(soft)}>
      <div className="container py-lg-4">
        <div className="row g-5">
          <div className="col-lg-5">
            <p className="section-eyebrow mb-2">{index} / {eyebrow}</p>
            <h2 className="section-heading fw-bold mb-4">{heading}</h2>
            <p className="text-secondary">{intro}</p>
          </div>
          <div className="col-lg-7">
            {steps.map((step, i) => (
              <div className="workflow-step" key={i}>
                <span className="step-number">{i + 1}</span>
                <h3 className="h5">{step.title}</h3>
                <p className="mb-0">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
