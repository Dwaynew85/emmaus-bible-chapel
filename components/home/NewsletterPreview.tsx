"use client";

import { useState } from "react";

export default function NewsletterPreview() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Placeholder for actual submission logic
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="page-section bg-gradient-accent">
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="icon-badge mx-auto mb-6">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-bold">Stay Connected</h2>
          <div className="mx-auto mt-4 accent-line" />
          <p className="mt-4 text-muted-foreground">
            Subscribe for weekly updates, event announcements, and biblical encouragement delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 rounded-full border border-border bg-background px-6 py-3 text-sm 
                         transition-colors focus:border-primary focus:outline-none focus:ring-2 
                         focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn btn-primary whitespace-nowrap disabled:opacity-50"
              >
                {status === "loading" && "Subscribing..."}
                {status === "success" && "Subscribed!"}
                {status !== "loading" && status !== "success" && "Subscribe"}
              </button>
            </div>

            {status === "success" && (
              <p className="mt-4 text-sm font-medium text-secondary">
                Thank you for subscribing! Check your inbox for confirmation.
              </p>
            )}
            
            <p className="mt-4 text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
