import Section from "@/components/layout/Section";

export default function EventsPreview() {
  return (
    <Section variant="emphasis">
      <h2 className="text-2xl font-semibold text-foreground">
        Upcoming Events
      </h2>

      <p className="mt-4 text-foreground/80">
        Events calendar coming soon.
      </p>
    </Section>
  );
}
