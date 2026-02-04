import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";

const ministries = [
  {
    title: "Sunday School",
    description: "Age-appropriate biblical teaching for children and young believers.",
    schedule: "Sundays at 9:00 AM",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
        />
      </svg>
    ),
  },
  {
    title: "Youth Ministry",
    description: "Building faith and community for the next generation through Bible study, fellowship, and outreach.",
    schedule: "Fridays at 6:30 PM",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Bible Study",
    description: "Growing deeper through systematic Scripture study and Spirit-led discussion.",
    schedule: "Wednesdays at 7:00 PM",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Men's Fellowship",
    description: "Monthly gathering for encouragement, accountability, and spiritual growth.",
    schedule: "1st Sunday after service",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Sisters' Meeting",
    description: "Time of prayer, Bible study, and mutual support among women in the assembly.",
    schedule: "1st Sunday after service",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Community Outreach",
    description: "Serving others with compassion, demonstrating Christ's love in practical ways.",
    schedule: "Various opportunities",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function MinistriesPage() {
  return (
    <>
      <PageHeader
        title="Ministries"
        description="Opportunities to grow in faith, serve others, and build meaningful community."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <div key={ministry.title} className="feature-card group">
              <div className="icon-badge mb-4 transition-transform group-hover:scale-110">
                {ministry.icon}
              </div>
              <h3 className="text-lg font-bold">{ministry.title}</h3>
              <p className="mt-2 text-sm font-medium text-primary">
                {ministry.schedule}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="content-card mx-auto max-w-2xl text-center">
          <h2 className="text-2xl">Get Involved</h2>
          <p className="mt-4 text-muted-foreground">
            Interested in learning more about our ministries or getting involved? 
            We&apos;d love to connect with you.
          </p>
          <div className="mt-6">
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
