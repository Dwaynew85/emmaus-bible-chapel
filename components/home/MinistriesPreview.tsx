import Link from "next/link";
import Section from "../layout/Section";

const ministries = [
  {
    title: "Youth Ministry",
    description: "Building faith and community for the next generation.",
  },
  {
    title: "Bible Study",
    description: "Growing deeper through Scripture and discussion.",
  },
  {
    title: "Community Outreach",
    description: "Serving others with compassion and purpose.",
  },
];

export default function MinistriesPreview() {
  return (
    <Section className="text-center">
      <h2 className="text-2xl font-semibold text-foreground">
        Our Ministries
      </h2>

      <p className="mt-4 text-foreground/80">
        Opportunities to grow, serve, and connect.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {ministries.map((ministry) => (
          <div
            key={ministry.title}
            className="rounded-lg border border-border bg-surface p-6 text-left"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {ministry.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/80">
              {ministry.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/ministries"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
            border border-border bg-background text-foreground hover:bg-surface transition"
        >
          View All Ministries
        </Link>
      </div>
    </Section>
  );
}
