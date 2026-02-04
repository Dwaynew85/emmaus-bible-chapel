export default function ServiceTimes() {
  return (
    <section id="service-times" className="page-section bg-surface">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Join Us for Worship</h2>
          <div className="mx-auto mt-4 accent-line" />
          
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {/* Sunday Service */}
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Sunday Worship</h3>
              <p className="mt-2 text-3xl font-bold text-primary">10:00 AM</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Breaking of Bread & Ministry of the Word
              </p>
            </div>

            {/* Wednesday Service */}
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Bible Study & Prayer</h3>
              <p className="mt-2 text-3xl font-bold text-primary">7:00 PM</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Midweek fellowship and study
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            All are welcome to join us. No registration required.
          </p>
        </div>
      </div>
    </section>
  );
}
