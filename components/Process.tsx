const phases = [
  {
    num: "01",
    title: "Understand",
    quote: "Design starts before Figma opens.",
    desc: "Research, stakeholder conversations, and problem framing. I dig into who this is for, what success looks like, and what constraints actually matter before touching a tool.",
  },
  {
    num: "02",
    title: "Explore",
    quote: "Thirty bad ideas before one good one.",
    desc: "Sketches, wireframes, rapid prototyping. I work through multiple directions fast — discarding more than I keep — because the first idea is almost never the best one.",
  },
  {
    num: "03",
    title: "Ship",
    quote: "If it doesn't ship, it's not design.",
    desc: "Handoff, iteration, and collaboration with engineering. I stay involved through implementation because the gap between mockup and production is where good design dies.",
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-watermark" aria-hidden="true">Method</div>
      <div className="process-header">
        <span className="process-year">Method</span>
        <h2 className="process-title">Process</h2>
      </div>
      <div className="process-list">
        {phases.map((p, i) => (
          <div key={i} className="process-phase">
            <div className="process-phase-num">{p.num}</div>
            <div className="process-phase-content">
              <div className="process-phase-title">{p.title}</div>
              <div className="process-phase-quote">{p.quote}</div>
              <p className="process-phase-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
