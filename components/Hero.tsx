function splitChars(text: string) {
  return text.split("").map((ch, i) => (
    <span key={i} className="char" style={{ display: "inline-block" }}>
      {ch}
    </span>
  ));
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-specialty">UI/UX · Graphic Design</div>

      <div className="hero-name">
        <span className="hero-name-serif">{splitChars("Anusri")}</span>
        {" "}
        <span className="hero-name-sans">{splitChars("Karmokar")}</span>
      </div>

      <div className="hero-body">
        <div className="hero-desc">
          <span className="hero-plus">+</span>
          <p>Designer. Developer. Professional &ldquo;this could look cooler&rdquo; person.</p>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder"><span>[ hero image ]</span></div>
        </div>
        <div className="hero-location">
          Mumbai, India<br />
          <em>Building since 2019.</em><br />
          Currently navigating<br />
          design &amp; 47 Figma drafts.
        </div>
      </div>

    </section>
  );
}
