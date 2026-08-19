import { archiveItems } from "@/lib/archive";

export default function Archive() {
  return (
    <section id="archive">
      <div className="archive-watermark" aria-hidden="true">Digital</div>

      <div className="archive-title-wrap">
        <h2 className="archive-title">Archive</h2>
      </div>

      <div className="archive-items-layer">
        {archiveItems.map((item, i) => (
          <a
            key={item.slug}
            href={`/project/${item.slug}`}
            className={`archive-item archive-item--${i + 1}`}
          >
            <div className="archive-item-body">
              <div className="archive-item-num">{item.num}</div>
              <div className="archive-item-title">{item.name}</div>
              <div className="archive-item-detail">{item.metaLine2}</div>
              <div className="archive-item-desc">
                {item.intro[0]?.type === "p" ? item.intro[0].text : ""}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
