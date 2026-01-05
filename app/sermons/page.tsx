import Section from "@/components/layout/Section";

export default function SermonsPage() {
  return (
    <section className="flex flex-col gap-24">
      <Section className="text-center">
        <h1 className="text-3xl font-semibold text-foreground">
          Sermons
        </h1>
        <p className="mt-4 text-foreground/80">
          Watch or listen to recent messages.
        </p>
      </Section>

      <Section>
        <p className="text-foreground/70">
          Sermon archive coming soon.
        </p>
      </Section>
    </section>
  );
}
