import Image from "next/image";

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
      <div className="hero-specialty">Product Designer · UX Strategist</div>

      <div className="hero-name">
        <span className="hero-name-serif">{splitChars("Anusri")}</span>
        {" "}
        <span className="hero-name-sans">{splitChars("Karmokar")}</span>
      </div>

      <div className="hero-body">
        <div className="hero-desc">
          <span className="hero-plus">+</span>
          <p>Designer with strengths in UI/UX, product thinking, and web experiences. Building at the intersection of design, development, and AI.</p>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <Image
              src="/asciinator_20Aug_001.png"
              alt="Anusri Karmokar"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="hero-image-img"
              priority
            />
          </div>
        </div>
        <div className="hero-location">
          Based in Mumbai, making things since 2023.<br />
          Currently somewhere between Figma, code, caffeine,<br />
          and &ldquo;wait, I have a better idea.&rdquo;
        </div>
      </div>

    </section>
  );
}
