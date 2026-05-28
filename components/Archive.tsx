const items = [
  {
    title: "Hackathon Branding",
    desc: "Event visuals, identity system, and assets for hackathons across 5 cities with 600+ participants.",
    badge: null,
  },
  {
    title: "Social & Marketing Creatives",
    desc: "Posters, motion graphics, and campaign assets for Momentum Health Club and other brands.",
    badge: "WIP",
  },
  {
    title: "Figma Explorations",
    desc: "Component systems, UI experiments, and the 47 untitled drafts that never saw daylight.",
    badge: null,
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
            <div className="archive-item-img"><span>[ image ]</span></div>
            <div className="archive-item-body">
              <div className="archive-item-title">{item.title}</div>
              <div className="archive-item-desc">{item.desc}</div>
              {item.badge && (
                <span className="archive-item-badge">{item.badge}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
