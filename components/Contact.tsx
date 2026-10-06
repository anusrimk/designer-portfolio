export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact-intro">
        Whether it&apos;s a product, startup, community, campaign, or just an
        idea scribbled in Notes at 2AM — I&apos;d love to hear about it.
      </p>
      <div className="contact-giant">Let&apos;s build something cool.</div>
      <div className="contact-links">
        <a href="mailto:anusrikarmokar@gmail.com">(Email)</a>
        <a
          href="https://linkedin.com/in/anusrikarmokar"
          target="_blank"
          rel="noopener noreferrer"
        >
          (LinkedIn)
        </a>
        <span className="contact-circle" aria-hidden="true" />
        <a
          href="https://figma.com/@anusri"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Figma)
        </a>
        <a href="/Anusri-Karmokar-Resume.pdf" className="contact-resume-pill" download>
          Download Resume ↓
        </a>
      </div>
    </section>
  );
}
