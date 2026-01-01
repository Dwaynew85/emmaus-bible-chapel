export default function Hero() {
  return (
    <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center">
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
        </div>
    </section>
  );
}
