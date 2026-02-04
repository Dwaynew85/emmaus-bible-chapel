import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="page-container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Accent Line */}
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-gradient-primary" />

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">
            Welcome to{" "}
            <span className="block mt-2">
              Emmaus Bible Chapel
            </span>
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A Christ-centered community growing together in faith, fellowship, and service.
          </p>

          {/* Scripture Reference */}
          <div className="mt-6 text-sm font-medium italic text-muted">
            &quot;We preach Christ crucified&quot; — 1 Corinthians 1:23
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
