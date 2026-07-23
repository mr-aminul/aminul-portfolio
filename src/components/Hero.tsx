import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative px-5 pb-16 pt-28 md:px-6 md:pb-24 md:pt-36"
      aria-label="Introduction"
    >
      <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
        <div className="rise mb-6">
          <Image
            src={site.avatar}
            alt={`${site.name} portrait`}
            width={96}
            height={96}
            priority
            className="h-20 w-20 rounded-full border border-border object-cover md:h-24 md:w-24"
          />
        </div>

        <p className="rise rise-delay-1 role-badge mb-4">
          <span className="role-badge__dot" aria-hidden="true" />
          {site.role}
        </p>

        <h1 className="rise rise-delay-1 text-[2.5rem] font-light leading-[1.15] tracking-[-0.03em] text-foreground md:text-5xl md:leading-[1.2]">
          {site.name}
        </h1>

        <p className="rise rise-delay-2 mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
          Co-founder of{" "}
          <a
            href={site.links.lab}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Inventive Lab
          </a>{" "}
          and the engineer behind{" "}
          <a
            href={site.links.onesign}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            OneSign
          </a>
          . I build platforms hundreds of
          employees rely on — and products that live on web, mobile, and TV.
        </p>

        <div className="rise rise-delay-3 mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a href={site.resumePath} className="btn-outline">
                        View Resume
          </a>
          <a href="#connect" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.093.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.952 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.58.688.481A10.025 10.025 0 0 0 22 12.021C22 6.486 17.523 2 12 2z" />
    </svg>
  );
}
