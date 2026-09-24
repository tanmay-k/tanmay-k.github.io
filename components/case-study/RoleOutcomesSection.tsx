import type { RoleOutcomesSectionData } from "./types";
import { sectionClass } from "./types";

export function RoleOutcomesSection({
  soft,
  roleIndex,
  roleHeading,
  roleIntro,
  roleBullets,
  outcomesIndex,
  outcomesHeading,
  outcomesIntro,
  stats,
}: RoleOutcomesSectionData) {
  return (
    <section className={sectionClass(soft)}>
      <div className="container py-lg-4">
        <div className="row g-5">
          <div className="col-lg-6">
            <p className="section-eyebrow mb-2">{roleIndex} / My role</p>
            <h2 className="section-heading fw-bold mb-4">{roleHeading}</h2>
            <p className="text-secondary">{roleIntro}</p>
            <ul className="text-secondary lh-lg">
              {roleBullets.map((bullet, i) => (
                <li key={i}>
                  {typeof bullet === "string" ? (
                    bullet
                  ) : (
                    <>
                      <strong>{bullet.bold}</strong> {bullet.text}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="content-card">
              <p className="section-eyebrow mb-2">{outcomesIndex} / Outcomes</p>
              <h2 className="section-heading h3 fw-bold mb-4">{outcomesHeading}</h2>
              <p>{outcomesIntro}</p>
              <div className="row g-3 mt-2">
                {stats.map((stat, i) => (
                  <div className="col-6" key={i}>
                    <strong className="d-block fs-4 text-primary">{stat.value}</strong>
                    <span className="text-secondary">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
