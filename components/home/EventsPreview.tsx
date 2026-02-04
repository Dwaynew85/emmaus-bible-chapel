import Link from "next/link";

const upcomingEvents = [
  {
    title: "Men's Fellowship Breakfast",
    date: "1st Sunday after service",
    description: "Monthly gathering for encouragement and fellowship.",
  },
  {
    title: "Sisters' Meeting",
    date: "1st Sunday after service",
    description: "Time of prayer, study, and mutual support.",
  },
  {
    title: "Youth Group",
    date: "Fridays at 6:30 PM",
    description: "Games, Bible study, and fellowship for teens.",
  },
];

export default function EventsPreview() {
  return (
    <section className="page-section">
      <div className="page-container">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <div className="mx-auto mt-4 accent-line" />
          <p className="mt-4 text-muted-foreground">
            Stay connected with gatherings, special events, and opportunities to serve.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="feature-card text-center">
                <div className="icon-badge mx-auto mb-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold">{event.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {event.date}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/calendar" className="btn btn-secondary">
              View Full Calendar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
