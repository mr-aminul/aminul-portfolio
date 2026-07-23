"use client";

import { useEffect, useId, useState } from "react";
import { nav } from "@/data/site";

function navHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="relative mx-auto flex h-14 max-w-[720px] items-center justify-center px-5 md:h-16 md:px-6">
        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-1 md:flex"
        >
          {nav.map((item) => (
            <a key={item.href} href={navHref(item.href)} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="absolute right-5 inline-flex h-11 w-11 items-center justify-center text-muted-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-border bg-background px-5 py-4 md:hidden"
        >
          <nav
            aria-label="Mobile"
            className="flex flex-col items-center gap-1 text-center"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={navHref(item.href)}
                className="w-full border-b border-border py-3 text-base text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
