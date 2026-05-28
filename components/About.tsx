const achievements = [
  "Top 10 — PIWOT PanIIT 2025",
  "Top 4 — ISTD Hackathon",
  "Figma Contest Winner",
  "Best MERN Stack Website",
  "National Athlete — Archery & Taekwondo",
  "600+ hackathon participants",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-watermark" aria-hidden="true">About</div>
      <div className="about-grid">
        <div className="about-photo"><span>[ photo ]</span></div>
        <div className="about-content">
          <p className="about-bio">
            I&apos;m Anusri — a designer who codes, a developer who cares{" "}
            <em>way too much about spacing</em>, and someone who genuinely
            enjoys turning chaotic ideas into things people actually want to
            use. Currently with <em>JavaScript Mumbai</em> and{" "}
            <em>Momentum Health Club</em>. Previously: BharatXR, Winvesta,
            Let&apos;s Upgrade, 12thclass.com. I&apos;ve managed hackathons
            with <em>600+ participants</em> across 5 cities. And yes, I
            probably still have <em>47 untitled Figma drafts</em> open.
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
    </section>
  );
}
