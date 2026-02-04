"use client";

import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Placeholder for actual form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1000);
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Reach out with questions, prayer requests, or to learn more about our community."
      />

      <Section>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2>Get in Touch</h2>
              <div className="mx-auto mt-4 accent-line" />
            </div>

            <div className="feature-card">
              <div className="icon-badge mb-4">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Visit Us</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                [Church Address]<br />
                Bronx, New York
              </p>
            </div>

            <div className="feature-card">
              <div className="icon-badge mb-4">
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
              <h3 className="font-bold">Email</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                [Contact Email]
              </p>
            </div>

            <div className="feature-card">
              <div className="icon-badge mb-4">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Service Times</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Sundays:</strong> 10:00 AM<br />
                <strong>Wednesdays:</strong> 7:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="feature-card">
              <h3 className="text-xl font-bold">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={formStatus === "sending" || formStatus === "success"}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={formStatus === "sending" || formStatus === "success"}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    disabled={formStatus === "sending" || formStatus === "success"}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={formStatus === "sending" || formStatus === "success"}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending" || formStatus === "success"}
                  className="btn btn-primary w-full disabled:opacity-50"
                >
                  {formStatus === "sending" && "Sending..."}
                  {formStatus === "success" && "Message Sent!"}
                  {formStatus !== "sending" && formStatus !== "success" && "Send Message"}
                </button>

                {formStatus === "success" && (
                  <p className="text-center text-sm font-medium text-secondary">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
