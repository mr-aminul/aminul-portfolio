import { education } from "@/data/site";

type EducationProps = {
  /** Render body only — parent owns section chrome. */
  embedded?: boolean;
};

export function Education({ embedded = false }: EducationProps) {
  const body = (
    <>
      <h2 className="section-title">Education</h2>

      <ul className="space-y-6">
        {education.map((item) => (
          <li key={item.institution} className="flex gap-3">
            <span
              className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary"
              aria-hidden="true"
            >
              <GraduationIcon />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-sm font-medium text-foreground">
                  {item.institution}
                </h3>
                <p className="meta">{item.year}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.credential}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {item.result}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );

  if (embedded) {
    return <div className="reveal">{body}</div>;
  }

  return (
    <section id="education" className="section border-t border-border px-5 md:px-6">
      <div className="reveal mx-auto max-w-[720px]">{body}</div>
    </section>
  );
}

function GraduationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12.5v4.2c0 .4.7 1.3 6 2.3 5.3-1 6-1.9 6-2.3v-4.2" />
      <path d="M22 10v6" />
    </svg>
  );
}
