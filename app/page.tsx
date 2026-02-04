import EventsPreview from "@/components/home/EventsPreview";
import Hero from "@/components/home/Hero";
import MinistriesPreview from "@/components/home/MinistriesPreview";
import NewsletterPreview from "@/components/home/NewsletterPreview";
import SermonPreview from "@/components/home/SermonPreview";
import ServiceTimes from "@/components/home/ServiceTimes";

export default function Home() {
  return (
    <section className="flex flex-col">
      <Hero />
      <ServiceTimes />
      <EventsPreview />
      <MinistriesPreview />
      <SermonPreview />
      <NewsletterPreview />
    </section>
  );
}
