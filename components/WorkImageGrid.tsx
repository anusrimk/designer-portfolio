"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function WorkImageGrid({ images }: { images: string[] }) {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <div className="work-detail-images">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            className="work-detail-image-btn"
            onClick={() => setOpen(src)}
            aria-label="View larger image"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="work-detail-image"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="lightbox"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="lightbox-image-wrap" onClick={(e) => e.stopPropagation()}>
            <Image
              src={open}
              alt=""
              fill
              sizes="90vw"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
