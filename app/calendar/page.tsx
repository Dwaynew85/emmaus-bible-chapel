import Section from "@/components/layout/Section";

export default function CalendarPage() {
  return (
    <section className="flex flex-col gap-24">
      <Section className="text-center">
        <h1 className="text-3xl font-semibold text-foreground">
          Calendar
        </h1>
        <p className="mt-4 text-foreground/80">
          Upcoming events and gatherings.
        </p>
      </Section>

      <Section>
        <p className="text-foreground/70">
          Events calendar integration coming soon.
        </p>
      </Section>
    </section>
  );
}
