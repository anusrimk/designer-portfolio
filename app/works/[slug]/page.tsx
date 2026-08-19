import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GridOverlay from "@/components/GridOverlay";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WorkImageGrid from "@/components/WorkImageGrid";
import { works, getWork, type WorkBlock } from "@/lib/works";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: `${work.name} — Anusri Karmokar`,
    description: work.role,
  };
}

function Block({ block }: { block: WorkBlock }) {
  switch (block.type) {
    case "p":
      return <p className="work-detail-p">{block.text}</p>;
    case "quote":
      return <p className="work-detail-quote">&ldquo;{block.text}&rdquo;</p>;
    case "list":
      return (
        <ul className="work-detail-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "flow":
      return (
        <div className="work-detail-flow">
          {block.steps.map((step, i) => (
            <span key={i} className="work-detail-flow-step">
              {step}
              {i < block.steps.length - 1 && <span className="work-detail-flow-arrow">→</span>}
            </span>
          ))}
        </div>
      );
    case "images":
      return <WorkImageGrid images={block.images} />;
    case "placeholders":
      return (
        <div className="work-detail-placeholders">
          {block.items.map((item, i) => (
            <div key={i} className="work-detail-placeholder">
              <div className="work-detail-placeholder-box">
                <span>[ {item.label} ]</span>
              </div>
              {item.caption && <p className="work-detail-caption">{item.caption}</p>}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  return (
    <>
      <GridOverlay />
      <Nav />
      <main>
        <section className="work-detail">
          <a href="/#works" className="work-detail-back">
            ← Works
          </a>

          <div className="work-detail-header">
            <span className="work-detail-num">{work.num}</span>
            <h1 className="work-detail-title">{work.name}</h1>
            <div className="work-detail-meta">
              <span>{work.role}</span>
              <span>{work.period}</span>
            </div>
          </div>

          <div className="work-detail-intro">
            {work.intro.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="work-detail-sections">
            {work.sections.map((section, i) => (
              <div key={i} className="work-detail-section">
                <div className="work-detail-section-label">{section.heading}</div>
                <div className="work-detail-section-content">
                  {section.blocks.map((block, j) => (
                    <Block key={j} block={block} />
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
