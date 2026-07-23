"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const channels = [
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    external: true,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: site.links.github,
    external: true,
    icon: GitHubIcon,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    external: false,
    icon: EmailIcon,
  },
  {
    label: "WhatsApp",
    href: site.whatsapp,
    external: true,
    icon: WhatsAppIcon,
  },
] as const;

const studioLinks = [
  {
    label: "Inventive Lab",
    href: site.links.lab,
    external: true,
    icon: LabIcon,
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    let timeoutId = 0;

    function pulseChannels() {
      setHighlighted(false);
      window.requestAnimationFrame(() => {
        setHighlighted(true);
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => setHighlighted(false), 1800);
      });
    }

    function isConnectLink(anchor: Element) {
      const href = anchor.getAttribute("href");
      return href === "#connect" || href === "/#connect";
    }

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!anchor || !isConnectLink(anchor)) return;
      pulseChannels();
    }

    if (window.location.hash === "#connect") pulseChannels();

    document.addEventListener("click", onClick);

    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <footer className="border-t border-border bg-background-soft py-14">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 px-5 text-center md:px-6">
        <div>
          <p className="text-base font-medium text-foreground">Let&apos;s Connect</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Open to full-stack roles and select product engagements.
          </p>
        </div>

        <ul
          id="connect"
          className={`connect-channels${highlighted ? " is-highlighted" : ""}`}
        >
          {channels.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="connect-channel"
                >
                  <Icon />
                  <span>{link.label}</span>
                </a>
              </li>
            );
          })}
          {studioLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-[0.7rem] py-[0.4rem] text-link"
                >
                  <Icon />
                  <span>{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="text-xs text-muted-foreground">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-.004-4.123 2.062 2.062 0 0 1 .004 4.123zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.093.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.952 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.58.688.481A10.025 10.025 0 0 0 22 12.021C22 6.486 17.523 2 12 2z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function LabIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M10 3v7.5L5.2 19a2 2 0 0 0 1.7 3h10.2a2 2 0 0 0 1.7-3L14 10.5V3" />
      <path d="M8 3h8" />
      <path d="M8.5 14h7" />
    </svg>
  );
}
