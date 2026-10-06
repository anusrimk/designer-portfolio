import Image from "next/image";

const achievements = [
  "Top 10 — PIWOT PanIIT 2025",
  "Top 4 — ISTD Hackathon",
  // TODO(copy): name the contest, e.g. "Figma Contest Winner — [contest]".
  "Figma Contest Winner",
  "National Athlete — Archery & Taekwondo",
  "600+ hackathon participants",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-watermark" aria-hidden="true">About</div>
      <div className="about-grid">
        <div className="about-photo">
          <Image
            src="/anusri-1.png"
            alt="Anusri Karmokar"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="about-photo-img"
          />
        </div>
        <div className="about-content">
          <p className="about-bio">
            I&apos;m Anusri — a developer turned product designer. I made the
            switch once I realised I cared <em>way too much about spacing</em>,
            and I genuinely enjoy turning chaotic ideas into things people
            actually want to use. I do my best work where the stakes are real, like moving
            money across borders at <em>Winvesta</em>, or getting{" "}
            <em>700+ people</em> to sign up for a meetup in one week.
            Currently with <em>JavaScript Mumbai</em>; previously Winvesta,
            LetsUpgrade, and Momentum Health Club. And yes, I probably still have{" "}
            <em>47 untitled Figma drafts</em> open.
          </p>
          <div className="about-achievements">
            {achievements.map((a, i) => (
              <span key={i} className="achievement-pill">{a}</span>
            ))}
          </div>
          <a
            href="#"
            className="about-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Download Resume)
          </a>
        </div>
      </div>
      <Image
        src="/harryp4.png"
        alt=""
        aria-hidden="true"
        width={643}
        height={322}
        className="about-mark"
      />
    </section>
  );
}
