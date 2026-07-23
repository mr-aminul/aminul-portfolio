import Image from "next/image";
import { achievements, site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="relative border-t border-[#262626] px-6 py-24">
      <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="reveal overflow-hidden rounded-lg border border-[#262626]">
          <Image
            src={site.avatar}
            alt={`${site.name} portrait`}
            width={640}
            height={640}
            className="aspect-square w-full object-cover grayscale-[25%]"
          />
        </div>

        <div className="reveal flex flex-col justify-center">
          <h2 className="section-title flex items-center">
            <span className="section-rule" aria-hidden="true" />
            About
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fog md:text-lg">
            {site.bioShort}
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="meta">Studio</dt>
              <dd className="mt-2 font-display text-base font-semibold text-paper">
                Inventive Lab Inc
              </dd>
            </div>
            <div>
              <dt className="meta">Based in</dt>
              <dd className="mt-2 font-display text-base font-semibold text-paper">
                {site.location}
              </dd>
            </div>
            <div>
              <dt className="meta">Focus</dt>
              <dd className="mt-2 font-display text-base font-semibold text-paper">
                Platforms & automation
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm uppercase tracking-widest">
            <a href={site.resumePath} className="text-link">
              Resume
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              LinkedIn
            </a>
          </div>

          <details className="deep-dive max-w-xl">
            <summary>More about me</summary>
            <div className="deep-dive-body">
              <p className="text-sm leading-relaxed text-fog">{site.bio}</p>
              <ul className="mt-5 space-y-2">
                {achievements.map((item) => (
                  <li key={item} className="bullet">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
