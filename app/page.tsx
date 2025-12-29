import EventsPreview from "@/components/home/EventsPreview";
import Hero from "@/components/home/Hero";
import ServiceTimes from "@/components/home/ServiceTimes";

export default function Home() {
  return (
    <section className="flex flex-col gap-24">
      <Hero />
      <ServiceTimes />
      <EventsPreview />
    </section>
  );
}
