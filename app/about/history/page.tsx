import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        title="Our History"
        description="The story of Emmaus Bible Chapel and God's faithfulness through the years."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="feature-card">
            <h2 className="text-xl">Coming Soon</h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re gathering historical information, photos, and testimonies to share
              the story of how God has worked through Emmaus Bible Chapel over the years.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              If you have historical information, photos, or memories to share, please
              contact us.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
