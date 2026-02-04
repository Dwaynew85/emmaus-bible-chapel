import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title="Give"
        description="Supporting the ministry and mission of Emmaus Bible Chapel."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="feature-card text-center">
            <div className="icon-badge mx-auto mb-6">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl">Thank You for Your Generosity</h2>
            <p className="mt-4 text-muted-foreground">
              Your giving helps support the preaching of God&apos;s Word, fellowship,
              outreach, and the various ministries of Emmaus Bible Chapel.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center">Ways to Give</h2>
          <div className="mx-auto mt-4 accent-line" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="feature-card">
              <h3 className="text-lg font-bold">In Person</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You can give during our Sunday worship service. Offering boxes are
                available for your convenience.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-bold">By Mail</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Checks can be mailed to:<br />
                <span className="mt-2 block font-medium">
                  Emmaus Bible Chapel<br />
                  [Church Address]<br />
                  Bronx, New York [ZIP]
                </span>
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-bold">Online Giving</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;re working on setting up secure online giving. Check back soon for
                digital payment options.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-bold">Designated Giving</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                If you&apos;d like to designate your gift for a specific ministry or
                missionary, please note this with your donation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <div className="content-card">
            <h3 className="text-lg font-semibold">Questions About Giving?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              If you have questions about giving or would like to discuss supporting
              specific ministries, please don&apos;t hesitate to reach out.
            </p>
            <div className="mt-6">
              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
