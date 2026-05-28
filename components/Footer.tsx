export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-available">
          <span className="footer-pulse" />
          Currently available for projects
        </div>
        <p className="footer-intro">
          Whether it&apos;s a product, startup, community, campaign, or just an idea scribbled in Notes at 2AM — I&apos;d love to hear about it.
        </p>
        <div className="footer-headline">
          Let&apos;s build<br />something cool.
        </div>
        <div className="footer-sub">Mumbai · UI/UX · Graphic Design</div>
        <div className="footer-links">
          <a href="mailto:anusrikarmokar@gmail.com">(Email)</a>
          <a href="https://linkedin.com/in/anusrikarmokar" target="_blank" rel="noopener noreferrer">(LinkedIn)</a>
          <a href="https://figma.com/@anusri" target="_blank" rel="noopener noreferrer">(Figma)</a>
          <a href="https://github.com/anusrikarmokar" target="_blank" rel="noopener noreferrer">(GitHub)</a>
          <a href="#">Resume ↓</a>
        </div>
      </div>

      <div className="footer-character-wrap">
        <div className="footer-character">
          <div className="footer-blob" />
        </div>
      </div>

      <div className="footer-giant-name" id="footer-giant-name">
        Anusri Karmokar
      </div>

      <div className="footer-bar">
        <span>© 2025 Anusri Karmokar</span>
        <span>WIP 2019–Present ✳</span>
      </div>
    </footer>
  );
}
