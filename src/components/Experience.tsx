"use client";

import { useState } from "react";
import { experience, type ExperienceRole } from "@/data/site";

const COLLAPSED_COUNT = 4;

type ExperienceProps = {
  /** Show every role (no More/Less control). Use on resume / print. */
  showAll?: boolean;
  /** Render body only — parent owns section chrome. */
  embedded?: boolean;
};

export function Experience({ showAll = false, embedded = false }: ExperienceProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = experience.slice(0, COLLAPSED_COUNT);
  const hidden = experience.slice(COLLAPSED_COUNT);
  const shown = showAll || expanded ? experience : visible;

  const body = (
    <>
      <h2 className="section-title">Work Experience</h2>

      <ol className="experience-timeline">
        {shown.map((job) => (
          <ExperienceItem key={`${job.company}-${job.period}-${job.role}`} job={job} />
        ))}
      </ol>

      {!showAll && hidden.length > 0 ? (
        <div className="experience-more">
          <button
            type="button"
            className="experience-more__summary"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Less" : "More"}
          </button>
        </div>
      ) : null}
    </>
  );

  if (embedded) {
    return <div className="reveal">{body}</div>;
  }

  return (
    <section id="experience" className="section border-t border-border px-5 md:px-6">
      <div className="reveal mx-auto max-w-[720px]">{body}</div>
    </section>
  );
}

function ExperienceItem({ job }: { job: ExperienceRole }) {
  return (
    <li className="experience-item">
      <span className="experience-item__marker" aria-hidden="true">
        <BriefcaseIcon />
      </span>

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-base font-medium text-foreground">{job.company}</h3>
        <p className="meta">{job.period}</p>
      </div>
      <p className="mt-1 text-sm font-medium text-primary">{job.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {job.summary}
      </p>

      <ul className="mt-4 space-y-2">
        {job.contributions
          .flatMap((item) => item.contributions)
          .slice(0, 4)
          .map((point) => (
            <li key={point} className="bullet">
              {point}
            </li>
          ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {[
          ...new Set(
            job.contributions.flatMap((item) => item.stack).slice(0, 6),
          ),
        ].map((tech) => (
          <span key={tech} className="stack-chip">
            {tech}
          </span>
        ))}
      </div>
    </li>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 12h18" />
    </svg>
  );
}
