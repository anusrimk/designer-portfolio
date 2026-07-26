const services = [
  {
    title: "UI/UX Design",
    desc: "Product interfaces, user research, and interaction design. From wireframes to polished prototypes that ship.",
  },
  {
    title: "Graphic Design",
    desc: "Visual identity, event branding, and marketing creatives. Systems that scale across formats and platforms.",
  },
  {
    title: "Design Systems",
    desc: "Component libraries, design tokens, and documentation. Consistent UI that teams can build from.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-watermark" aria-hidden="true">Capabilities</div>
      <div className="services-list">
        {services.map((s, i) => (
          <div key={i} className="services-card">
            <div className="services-card-title">{s.title}</div>
            <div className="services-card-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
