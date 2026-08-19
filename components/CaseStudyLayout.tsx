import GridOverlay from "@/components/GridOverlay";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseStudyBlock from "@/components/CaseStudyBlock";
import type { CaseStudy } from "@/lib/case-study";

export default function CaseStudyLayout({
  item,
  backHref,
  backLabel,
}: {
  item: CaseStudy;
  backHref: string;
  backLabel: string;
}) {
  return (
    <>
      <GridOverlay />
      <Nav />
      <main>
        <section className="work-detail">
          <a href={backHref} className="work-detail-back">
            {backLabel}
          </a>

          <div className="work-detail-header">
            <span className="work-detail-num">{item.num}</span>
            <h1 className="work-detail-title">{item.name}</h1>
            <div className="work-detail-meta">
              <span>{item.metaLine1}</span>
              <span>{item.metaLine2}</span>
            </div>
          </div>

          <div className="work-detail-intro">
            {item.intro.map((block, i) => (
              <CaseStudyBlock key={i} block={block} />
            ))}
          </div>

          <div className="work-detail-sections">
            {item.sections.map((section, i) => (
              <div key={i} className="work-detail-section">
                <div className="work-detail-section-label">{section.heading}</div>
                <div className="work-detail-section-content">
                  {section.blocks.map((block, j) => (
                    <CaseStudyBlock key={j} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
