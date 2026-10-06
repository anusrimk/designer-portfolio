import type Lenis from "lenis";

// The site-wide Lenis instance, created by <SmoothScroll /> in the root
// layout. Null under prefers-reduced-motion (native scrolling) and on the server.
let instance: Lenis | null = null;

export function getLenis(): Lenis | null {
  return instance;
}

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}
