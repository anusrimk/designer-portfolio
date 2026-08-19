import WorkImageGrid from "@/components/WorkImageGrid";
import type { WorkBlock } from "@/lib/case-study";

export default function CaseStudyBlock({ block }: { block: WorkBlock }) {
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
