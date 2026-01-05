import Section from "@/components/layout/Section";

export default function MinistriesPage() {
  return (
    <section className="flex flex-col gap-24">
      <Section className="text-center">
        <h1 className="text-3xl font-semibold text-foreground">
          Ministries
        </h1>
        <p className="mt-4 text-foreground/80">
          Learn more about the ways to grow, serve, and connect.
        </p>
      </Section>

      <Section>
        <p className="text-foreground/70">
          Ministry details will be added here.
        </p>
      </Section>
    </section>
  );
}
