import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-accent py-12 sm:py-16 lg:py-20">
      {/* Decorative Background Elements - smaller on mobile */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-primary/5 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-secondary/5 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="page-container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Accent Line */}
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-primary" />

          {/* Main Heading - tighter on mobile */}
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Welcome to{" "}
            <span className="mt-1 block">Emmaus Bible Chapel</span>
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A Christ-centered community growing together in faith, fellowship, and service.
          </p>

          {/* Scripture Reference */}
          <div className="mt-4 text-sm font-medium italic text-muted">
            &quot;We preach Christ crucified&quot; — 1 Corinthians 1:23
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="#service-times" className="btn btn-primary">
              Service Times
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Learn More
            </Link>
            <Link href="/calendar" className="btn btn-outline">
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}