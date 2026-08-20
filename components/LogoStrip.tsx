const logos = [
  { name: "Winvesta", role: "UI/UX Lead" },
  { name: "LetsUpgrade", role: "UX Revamp" },
  { name: "Momentum Health Club", role: "Brand & UX" },
  { name: "JavaScript Mumbai", role: "Lead Designer" },
];

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="logo-strip-label">Worked with</div>
      <div className="logo-strip-row">
        {logos.map((l, i) => (
          <div key={i} className="logo-strip-item">
            <div className="logo-strip-name">{l.name}</div>
            <div className="logo-strip-role">{l.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
