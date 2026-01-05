import Section from "@/components/layout/Section";

export default function ServiceTimes() {
  return (
    <Section containerSize="narrow" className="text-center">
      <h2 className="text-2xl font-semibold text-foreground">
        Service Times
      </h2>

      <p className="mt-4 text-foreground/80">
        Sundays at 10:00 AM · Wednesdays at 7:00 PM
      </p>
    </Section>
  );
}
