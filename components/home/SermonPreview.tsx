import Link from "next/link";

export default function SermonPreview() {
  return (
    <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          Latest Sermon
        </h2>

        <p className="mt-4 text-foreground/80">
          Watch or listen to our most recent message.
        </p>

        <div className="mt-8 rounded-lg border border-border bg-background p-8">
          <p className="text-sm text-foreground/70">
            Sermon content will appear here once YouTube integration is enabled.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/sermons"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
              bg-primary text-background hover:opacity-90 transition"
          >
            Browse Sermons
          </Link>
        </div>
      </div>
    </section>
  );
}
