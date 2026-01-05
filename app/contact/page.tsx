import Section from "@/components/layout/Section";

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-24">
      <Section className="text-center">
        <h1 className="text-3xl font-semibold text-foreground">
          Contact Us
        </h1>
        <p className="mt-4 text-foreground/80">
          We’d love to hear from you.
        </p>
      </Section>

      <Section containerSize="narrow">
        <p className="text-foreground/70">
          Contact form coming soon.
        </p>
      </Section>
    </section>
  );
}
