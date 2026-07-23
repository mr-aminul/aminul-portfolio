import Image from "next/image";
import { TechBadge } from "@/components/TechBadge";
import { projects, type Project } from "@/data/site";

function ProjectThumb({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  if (!project.image) {
    return (
      <div className="project-card__media flex items-center justify-center">
        <span className="meta">{project.subtitle}</span>
      </div>
    );
  }

  return (
    <div className="project-card__media">
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        quality={75}
        className="object-cover object-top"
      />
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

function ProjectCard({
  project,
  priority = false,
  compact = false,
}: {
  project: Project;
  priority?: boolean;
  compact?: boolean;
}) {
  const liveHref = project.live;

  return (
    <article
      className={`project-card group relative h-full ${liveHref ? "project-card--live" : ""}`}
    >
      {liveHref ? (
        <a
          href={liveHref}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__hit"
          aria-label={`Open live demo of ${project.title}`}
        />
      ) : null}

      <ProjectThumb project={project} priority={priority} />

      <div
        className={`pointer-events-none relative z-[1] flex flex-1 flex-col ${compact ? "gap-2 p-4" : "gap-3 p-4"}`}
      >
        <div className="flex items-start justify-between gap-2">
          <h3
            className={
              compact
                ? "text-sm font-medium text-foreground"
                : "text-base font-medium text-foreground"
            }
          >
            {project.title}
          </h3>
          {liveHref ? (
            <span
              className="mt-0.5 text-muted-foreground transition-colors group-hover:text-primary"
              aria-hidden="true"
            >
              <ExternalIcon />
            </span>
          ) : null}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {!compact ? (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {project.stack.slice(0, 4).map((item) => (
              <TechBadge key={item} label={item} size="sm" />
            ))}
          </div>
        ) : null}

        <div className={`flex flex-wrap gap-x-4 gap-y-1 text-sm ${compact ? "mt-auto pt-1" : ""}`}>
          {liveHref ? (
            <span className="inline-flex items-center gap-1 text-link">
              Live <ExternalIcon />
            </span>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto relative z-[2] inline-flex items-center gap-1 text-link"
            >
              Code <ExternalIcon />
            </a>
          ) : null}
          {!liveHref && !project.repo ? (
            <span className="text-sm text-muted-foreground">Private</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured && p.image);

  return (
    <section id="work" className="section border-t border-border px-5 md:px-6">
      <div className="mx-auto max-w-[720px]">
        <div className="reveal">
          <h2 className="section-title">Projects</h2>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {featured.map((project, index) => (
            <li key={`${project.title}-${project.year}`} className="reveal">
              <ProjectCard project={project} priority={index < 2} />
            </li>
          ))}
        </ul>

        {more.length > 0 ? (
          <div className="reveal mt-10">
            <p className="section-label mb-4">More work</p>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {more.map((project) => (
                <li key={`${project.title}-${project.year}-${project.subtitle}`}>
                  <ProjectCard project={project} compact />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
