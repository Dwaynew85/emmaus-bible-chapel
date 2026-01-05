"use client";

import Section from "../layout/Section";

export default function NewsletterPreview() {
  return (
    <Section className="text-center">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">
            Stay Connected
        </h2>
        <p className="mt-4 text-foreground/80">
            Subscribe to our newsletter for updates, events, and encouragement.
        </p>

        <form
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
            type="email"
            placeholder="Your email address"
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm
                text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2
                focus:ring-primary sm:max-w-xs"
            />

            <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md px-6 py-3
                text-sm font-semibold bg-primary text-background hover:opacity-90 transition"
            >
            Subscribe
            </button>
        </form>

        <p className="mt-4 text-xs text-foreground/60">
            Newsletter integration coming soon.
        </p>
      </div>
    </Section>
  );
}
