import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="A community seeking to follow Christ according to the Scriptures."
        action={{
          label: "Explore Our History",
          href: "/about/history",
        }}
      />

      {/* WHO WE ARE */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2>Who We Are</h2>
          <div className="mx-auto mt-4 accent-line" />
          <p className="mt-6 text-muted-foreground">
            We are simply a group of persons who have accepted the Lord Jesus Christ as
            our personal Saviour. We endeavor to follow Him according to the Holy
            Scriptures. We make no claim to be a denomination, although we are sometimes
            called the &quot;Brethren Movement&quot; or &quot;Christian Brethren.&quot;
          </p>
        </div>
      </Section>

      {/* MISSION & VISION */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2>Mission & Vision</h2>
          <div className="mx-auto mt-4 accent-line" />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Our mission is to preach Christ and Him crucified to our immediate
              community, the Northeast Bronx, and the world at large. Our vision is
              to present every man perfect in Christ.
            </p>
            <p>
              We believe this is accomplished through worship, fellowship, evangelism, 
              discipleship, and service. As such, we are committed to:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Weekly observance of the Lord&apos;s Supper</li>
              <li>Systematic exposition of the Scriptures</li>
              <li>Fellowship and mutual encouragement</li>
              <li>Prayer and dependence on the Holy Spirit</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* WHAT WE BELIEVE */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2>What We Believe</h2>
          <div className="mx-auto mt-4 accent-line" />

          <div className="mt-8 space-y-6">
            <div className="feature-card">
              <h3 className="text-lg font-semibold">The Holy Scriptures</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The Bible is the Divinely inspired, inerrant Word of God—the
                revelation of His mind and will to man, our infallible and
                all-sufficient guide for salvation and Christian life.
              </p>
              <p className="mt-2 text-xs italic text-muted">
                2 Timothy 3:16-17; 2 Peter 1:20-21
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-semibold">The Triune God</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We believe in one God, the Creator of all, eternally existing in three
                persons: Father, Son, and Holy Spirit.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-semibold">Jesus Christ</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We believe in the deity of the Lord Jesus Christ—that He is true God and
                true man, begotten of the Holy Spirit, born of a virgin, possessing
                perfect and sinless humanity.
              </p>
              <p className="mt-2 text-xs italic text-muted">
                John 1:1; Philippians 2:6; Matthew 1:23-25; 1 John 3:5
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-semibold">Salvation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We believe in the substitutionary death of Christ for our sins, His
                bodily resurrection, ascension to the Father&apos;s right hand, and His
                personal return.
              </p>
              <p className="mt-2 text-xs italic text-muted">
                1 Corinthians 15:3-4; Acts 1:9-11
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-semibold">Eternal Destinies</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We believe in the bodily resurrection of both the just and the unjust—the
                everlasting blessedness of the saved and the everlasting conscious
                punishment of the lost.
              </p>
              <p className="mt-2 text-xs italic text-muted">
                1 Thessalonians 4:17; Revelation 20:11-15
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
