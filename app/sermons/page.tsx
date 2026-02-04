import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";

export default function SermonsPage() {
  return (
    <>
      <PageHeader
        title="Sermons"
        description="Listen to recent messages from our Sunday gatherings."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="feature-card text-center">
            <div className="icon-badge mx-auto mb-6">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            </div>
            <h2 className="text-2xl">Sermon Archive Coming Soon</h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re working on adding our sermon archive with audio and video recordings
              of recent messages. Check back soon to listen or watch.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-xl font-semibold">Join Us in Person</h3>
          <p className="mt-4 text-muted-foreground">
            The best way to hear God&apos;s Word taught is to join us for worship.
          </p>
          <div className="mt-6 space-y-4">
            <div className="content-card">
              <p className="font-semibold">Sunday Worship</p>
              <p className="text-2xl font-bold text-primary">10:00 AM</p>
              <p className="text-sm text-muted-foreground">
                Breaking of Bread & Ministry of the Word
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
