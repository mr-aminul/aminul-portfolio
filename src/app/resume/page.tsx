import type { Metadata } from "next";
import Link from "next/link";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { PrintButton } from "@/components/PrintButton";
import {
  achievements,
  certifications,
  projects,
  site,
  stack,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name} — full-stack engineer and automation specialist.`,
};

const featured = projects.filter((project) => project.featured);

export default function ResumePage() {
  return (
    <main className="min-h-full bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link href="/" className="text-sm text-link">
            ← Back to portfolio
          </Link>
          <PrintButton />
        </div>

        <header className="border-b border-border pb-8">
          <p className="text-4xl font-light tracking-[-0.03em] text-foreground md:text-5xl">
            {site.name}
          </p>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            {site.role}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {site.location} ·{" "}
            <a href={`mailto:${site.email}`} className="text-link">
              {site.email}
            </a>{" "}
            ·{" "}
            <a href={site.phoneHref} className="text-link">
              {site.phone}
            </a>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              LinkedIn
            </a>
          </p>
          <p className="mt-5 text-sm leading-[1.7] text-muted-foreground md:text-base">
            {site.bio}
          </p>
        </header>

        <section className="border-b border-border py-9">
          <Experience showAll embedded />
        </section>

        <section className="border-b border-border py-9">
          <h2 className="section-label !mb-0">Selected projects</h2>
          <ul className="mt-7 space-y-6">
            {featured.map((project) => (
              <li key={`${project.title}-${project.year}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                  <p className="meta">{project.year}</p>
                </div>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-2 text-[0.8rem] tracking-[0.04em] text-muted-foreground">
                  {project.stack.join("  ·  ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b border-border py-9">
          <h2 className="section-label !mb-0">Skills</h2>
          <dl className="mt-7 grid gap-5 sm:grid-cols-2">
            {(
              [
                ["Languages", stack.languages],
                ["Frontend", stack.frontend],
                ["Backend", stack.backend],
                ["Data", stack.data],
                ["Cloud", stack.cloud],
                ["Platforms", stack.platforms],
                ["AI & automation", stack.automation],
              ] as const
            ).map(([label, items]) => (
              <div key={label}>
                <dt className="meta">{label}</dt>
                <dd className="mt-2 text-sm leading-[1.65] text-muted-foreground">
                  {items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-b border-border py-9">
          <Education embedded />
        </section>

        <section className="border-b border-border py-9">
          <h2 className="section-label !mb-0">Certifications</h2>
          <ul className="mt-7 space-y-2">
            {certifications.map((item) => (
              <li key={item} className="bullet">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-9">
          <h2 className="section-label !mb-0">Achievements</h2>
          <ul className="mt-7 space-y-2">
            {achievements.map((item) => (
              <li key={item} className="bullet">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
