"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "@/lib/smooth-scroll";

// Smooth wheel scrolling on every page. Lives in the root layout so case
// studies get it too, not just the homepage. Pages that need to react to it
// (e.g. ScrollTrigger on the homepage) read the instance via getLenis().
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      // lerp: 0.1 → responsive enough not to feel laggy on fast scrolls.
      // Touch keeps native momentum (Lenis only smooths wheel by default).
      lerp: 0.1,
      smoothWheel: true,
      autoRaf: true,
      // Same-page "#section" links glide instead of jumping
      anchors: {
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      },
    });
    setLenis(lenis);

    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
