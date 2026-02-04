import Link from "next/link";

export default function SermonPreview() {
  return (
    <section className="page-section bg-surface">
      <div className="page-container">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Recent Teachings</h2>
          <div className="mx-auto mt-4 accent-line" />
          <p className="mt-4 text-muted-foreground">
            Listen to recent messages from our Sunday gatherings.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {/* Featured Sermon Card */}
          <div className="content-card overflow-hidden">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Placeholder for sermon thumbnail/image */}
              <div className="flex-shrink-0">
                <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gradient-accent sm:h-28 sm:w-40">
                  <svg
                    className="h-12 w-12 text-accent-foreground/40"
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
              </div>

              {/* Sermon Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted">
                  <span>Latest Sermon</span>
                  <span className="accent-dot" />
                  <span>Coming Soon</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">
                  Sermon content will be available soon
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;re working on adding our sermon archive. Check back soon to watch or listen to recent messages.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/sermons" className="btn btn-primary">
              Browse All Sermons
            </Link>
            <Link href="/sermons/series" className="btn btn-outline">
              View Sermon Series
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
