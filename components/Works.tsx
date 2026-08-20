import { works } from "@/lib/works";

export default function Works() {
  return (
    <section className="works" id="works">
      <div className="works-watermark" aria-hidden="true">Selected</div>
      <div className="works-header">
        <span className="works-year">2022 – 2025</span>
        <h2 className="works-title">Works</h2>
      </div>
      <div className="works-list">
        {works.map((w) => (
          <a key={w.slug} href={`/works/${w.slug}`} className="works-row">
            <span className="works-row-num">{w.num}</span>
            <span className="works-row-name">{w.name}</span>
            <span className="works-row-tag">{w.tag}</span>
            {w.thumb && (
              <div className="works-row-thumb">
                <img src={w.thumb} alt="" aria-hidden="true" />
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
