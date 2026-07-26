const items = [
  {
    num: "01",
    title: "Hackathon Branding",
    detail: "5 cities / 600+ participants / 2022–2024",
    desc: "Event visuals, identity system, and assets for hackathons across 5 cities. Logo variants, stage backdrops, social media kits, and branded merch — each event got its own visual identity while staying within a cohesive system.",
    badge: null,
    images: ["poster", "stage", "social kit", "merch"],
  },
  {
    num: "02",
    title: "Social & Marketing Creatives",
    detail: "Momentum Health Club / ongoing",
    desc: "Posters, motion graphics, and campaign assets for Momentum Health Club and other brands. Instagram carousels, event banners, ad creatives — visual content that converts.",
    badge: "WIP",
    images: ["carousel", "banner", "motion", "ad set"],
  },
  {
    num: "03",
    title: "UI Experiments & Component Systems",
    detail: "ongoing / personal",
    desc: "Component systems, UI experiments, and explorations that pushed creative boundaries. Design tokens, interaction patterns, and visual R&D — the lab work that doesn't ship but sharpens the craft.",
    badge: null,
    images: ["tokens", "components", "interactions", "dark mode"],
  },
];

export default function Archive() {
  return (
    <section id="archive">
      <div className="archive-watermark" aria-hidden="true">Digital</div>

      <div className="archive-title-wrap">
        <h2 className="archive-title">Archive</h2>
      </div>

      <div className="archive-items-layer">
        {items.map((item, i) => (
          <div key={i} className={`archive-item archive-item--${i + 1}`}>
            <div className="archive-item-body">
              <div className="archive-item-num">{item.num}</div>
              <div className="archive-item-title">{item.title}</div>
              <div className="archive-item-detail">{item.detail}</div>
              <div className="archive-item-desc">{item.desc}</div>
              {item.badge && (
                <span className="archive-item-badge">{item.badge}</span>
              )}
              <div className="archive-item-grid">
                {item.images.map((img, j) => (
                  <div key={j} className="archive-item-thumb">
                    <span>[ {img} ]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
