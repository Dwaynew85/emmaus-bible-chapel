export default function Home() {
  return (
    <section className="flex flex-col gap-24">
      {/* Hero */}
      <section className="bg-surface py-28 text-center px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Emmaus Bible Chapel
        </h1>
        <p className="mt-5 text-lg text-foreground/80">
          A Christ-centered community growing together in faith
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#service-times"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
              bg-primary text-background hover:opacity-90 transition"
          >
            Service Times
          </a>
          <a
            href="#events"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
              border border-border bg-background text-foreground hover:bg-surface transition"
          >
            Upcoming Events
          </a>
        </div>
      </section>

      {/* Service Times */}
      <section id="service-times" className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-semibold">Service Times</h2>
        <p className="mt-4 text-foreground/80">
          Sundays at 10:00 AM · Wednesdays at 7:00 PM
        </p>
      </section>

      {/* Upcoming Events (placeholder) */}
      <section id="events" className="bg-surface py-20 text-center px-6">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        <p className="mt-4 text-foreground/80">
          Events calendar coming soon.
        </p>
      </section>
    </section>
  );
}
