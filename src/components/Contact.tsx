"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    // Form kept in codebase; hidden from the live page for now.
    <section
      id="contact"
      hidden
      className="section border-t border-border px-5 md:px-6"
      aria-hidden="true"
    >
      <div className="reveal mx-auto max-w-[720px]">
        <h2 className="section-title">Contact</h2>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground">
          {site.availability}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder="Tell me about the role, product, or problem…"
            />
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>

          {status === "ready" ? (
            <p className="text-sm text-muted-foreground">
              Opening your email client…
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
