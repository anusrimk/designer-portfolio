const projects = [
  { num: "01", name: "Winvesta", tag: "UI/UX Lead" },
  { num: "02", name: "Let's Upgrade", tag: "UX Revamp" },
  { num: "03", name: "12thClass.com", tag: "Product Design" },
  { num: "04", name: "BharatXR", tag: "UX Design" },
  { num: "05", name: "Momentum Health Club", tag: "Brand & UX" },
];

export default function Works() {
  return (
    <section className="works" id="works">
      <div className="works-watermark" aria-hidden="true">Selected</div>
      <div className="works-header">
        <span className="works-year">2022 – 2025</span>
        <h2 className="works-title">Works</h2>
      </div>
      <div className="works-list">
        {projects.map((p) => (
          <a key={p.num} href="#" className="works-row">
            <span className="works-row-num">{p.num}</span>
            <span className="works-row-name">{p.name}</span>
            <span className="works-row-tag">{p.tag}</span>
            <div className="works-row-thumb">
              <span>[ {p.name} ]</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
