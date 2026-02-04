import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";

const upcomingEvents = [
  {
    title: "Sunday Worship",
    date: "Every Sunday",
    time: "10:00 AM",
    description: "Breaking of Bread and Ministry of the Word",
    type: "Recurring",
  },
  {
    title: "Bible Study & Prayer",
    date: "Every Wednesday",
    time: "7:00 PM",
    description: "Midweek fellowship and study",
    type: "Recurring",
  },
  {
    title: "Men's Fellowship Breakfast",
    date: "1st Sunday of the month",
    time: "After service",
    description: "Monthly gathering for encouragement",
    type: "Monthly",
  },
  {
    title: "Sisters' Meeting",
    date: "1st Sunday of the month",
    time: "After service",
    description: "Prayer, study, and mutual support",
    type: "Monthly",
  },
  {
    title: "Youth Group",
    date: "Every Friday",
    time: "6:30 PM",
    description: "Games, Bible study, and fellowship for teens",
    type: "Recurring",
  },
];

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        title="Calendar"
        description="Regular gatherings, special events, and opportunities to connect."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6">Regular Events</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="icon-badge flex-shrink-0">
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
                  <div className="flex-1">
                    <h3 className="font-bold">{event.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {event.date}
                    </p>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="content-card mx-auto max-w-2xl text-center">
          <h2 className="text-2xl">Special Events</h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;re working on integrating a live calendar to show special events,
            conferences, and community gatherings. Check back soon!
          </p>
        </div>
      </Section>
    </>
  );
}
