import Section from "@/components/layout/Section";

export default function AboutPage() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold">About Us</h1>

      {/* WHO WE ARE */}
      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Who We Are</h2>
        <p className="text-foreground/80">
          Simply a group of persons who have accepted the Lord Jesus Christ as
          our personal Saviour. We endeavor to follow Him according to the Holy
          Scriptures. We make no claim to be a denomination, although we are
          called one “Brethren Movement/Christian Brethren.”
        </p>
      </div>

      {/* MISSION / VISION */}
      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Mission & Vision</h2>
        <p className="text-foreground/80">
          Our mission is to preach Christ and Him crucified to our immediate
          community, the Northeast Bronx, and the world at large. Our vision is
          to present every man perfect in Christ. We believe that this can be
          accomplished through worship, fellowship, evangelism, discipleship,
          and service.
        </p>
        <p className="text-foreground/80">
          As such, we are committed to the weekly observance of the Lord’s
          Supper, systematic exposition of the Scriptures, fellowship, and
          prayer.
        </p>
      </div>

      {/* WHAT WE BELIEVE */}
      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold">What We Believe</h2>

        <ul className="list-disc space-y-4 pl-6 text-foreground/80">
          <li>
            The Bible is the Divinely inspired inerrant Word of God, the
            revelation of His mind and will to man, our infallible,
            all-sufficient guide for salvation and for Christian life
            (2 Timothy 3:16-17; 2 Peter 1:20-21).
          </li>

          <li>
            In one God, the Creator of all, eternally existing in three persons:
            Father, Son, and Holy Spirit.
          </li>

          <li>
            In the deity of the Lord Jesus Christ, that He is true God and true
            man begotten of the Holy Spirit, born of a virgin, and that He has a
            perfect and sinless humanity (John 1:1; Philippians 2:6; Matthew
            1:23-25; 1 John 3:5).
          </li>

          <li>
            In the substitutionary death of Christ, His bodily resurrection,
            ascension, and personal return (1 Corinthians 15:3-4; Acts 1:9-11).
          </li>

          <li>
            In the bodily resurrection of the just and the unjust, the
            everlasting blessedness of the saved (1 Thessalonians 4:17); in the
            everlasting conscious punishment of the lost (Revelation
            20:11-15).
          </li>
        </ul>
      </div>
    </Section>
  );
}
