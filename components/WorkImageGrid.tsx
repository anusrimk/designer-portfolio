"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getLenis } from "@/lib/smooth-scroll";

export default function WorkImageGrid({ images }: { images: string[] }) {
  const [open, setOpen] = useState<string | null>(null);
  // Keeps the lightbox mounted while its exit animation plays
  const [closing, setClosing] = useState(false);

  const close = () => setClosing(true);

  // Unmount once the 150ms exit (globals.css, .lightbox--closing) has played.
  // A timer rather than animationend, so the overlay can never get stuck
  // covering the page if the event doesn't fire.
  useEffect(() => {
    if (!closing) return;
    const t = setTimeout(() => {
      setOpen(null);
      setClosing(false);
    }, 150);
    return () => clearTimeout(t);
  }, [closing]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setClosing(true);
    };
    window.addEventListener("keydown", onKey);

    // Lock the page behind the lightbox. Lenis scrolls on wheel input
    // regardless of overflow, so it has to be paused as well.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const lenis = getLenis();
    lenis?.stop();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
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
            onClick={() => {
              setClosing(false);
              setOpen(src);
            }}
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
          className={`lightbox${closing ? " lightbox--closing" : ""}`}
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
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
