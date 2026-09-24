import { projects, type ProjectGroup } from "../lib/projects";

function formatIndex(i: number) {
  return String(i + 1).padStart(2, "0");
}

export function ProjectList({ group }: { group: ProjectGroup }) {
  const items = projects.filter((project) => project.group === group);
  const isProfessional = group === "professional";

  return (
    <div className="project-list">
      {items.map((project, i) => (
        <article className="project-item row g-3 align-items-start" key={project.slug}>
          <div className="col-auto project-index">{formatIndex(i)}</div>
          <div className="col">
            <h3 className="project-title h4 mb-2">{project.homeTitle}</h3>
            <p className="project-meta mb-2">{project.homeMeta}</p>
            <p className={isProfessional ? "mb-3" : "mb-0"}>{project.homeDescription}</p>
            {isProfessional && (
              <div aria-label="Technologies used">
                {project.homeBadges.map((badge, bi) => (
                  <span
                    className={`badge text-bg-secondary${bi < project.homeBadges.length - 1 ? " me-1" : ""}`}
                    key={badge}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="col-12 col-md-auto">
            <a href={`/projects/${project.slug}/`} className="project-link">
              {project.linkLabel} <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
