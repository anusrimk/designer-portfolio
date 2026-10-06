"use client";

import { useEffect } from "react";
import GridOverlay from "@/components/GridOverlay";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Archive from "@/components/Archive";
import About from "@/components/About";
import LogoStrip from "@/components/LogoStrip";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    let disposed = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenisRef: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gsapRef: any;
    let tickerFn: ((time: number) => void) | undefined;
    const cleanupFns: Array<() => void> = [];

    async function initAnimations() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const Lenis = (await import("lenis")).default;
      if (disposed) return;

      gsapRef = gsap;
      gsap.registerPlugin(ScrollTrigger);

      // Reduced motion: native scrolling, no parallax/pin travel/morph, and
      // entrances fade without moving. The Archive switches to its stacked
      // layout via the matching media query in globals.css.
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // ── Smooth anchor scroll via Lenis ──
      if (!reduceMotion) document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        const onClick = (e: Event) => {
          const href = (anchor as HTMLAnchorElement).getAttribute("href");
          if (href && href.length > 1) {
            e.preventDefault();
            lenisRef?.scrollTo(href, {
              duration: 1.4,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        };
        anchor.addEventListener("click", onClick);
        cleanupFns.push(() => anchor.removeEventListener("click", onClick));
      });

      // ── Lenis smooth scroll ──
      // smoothTouch: false → let iOS/Android handle native touch momentum
      // lerp: 0.1 → responsive enough not to feel laggy on fast scrolls
      if (!reduceMotion) {
        lenisRef = new Lenis({ lerp: 0.1, smoothWheel: true });
        lenisRef.on("scroll", ScrollTrigger.update);
        tickerFn = (time: number) => lenisRef.raf(time * 1000);
        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);
      }

      ctx = gsap.context(() => {
        // Hero name stagger is a CSS animation (globals.css, .hero-name .char)
        // so it runs from first paint instead of after this chunk loads.

        // ── Works rows stagger in ──
        gsap.fromTo(
          ".works-row",
          { y: reduceMotion ? 0 : 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".works-list",
              start: "top 80%",
            },
          }
        );

        // ── Dark zone: Archive through Footer ──
        ScrollTrigger.create({
          trigger: "#archive",
          start: "top 56px",
          onEnter: () => {
            document.querySelector(".nav")?.classList.add("nav--dark");
            document.body.classList.add("on-dark");
          },
          onLeaveBack: () => {
            document.querySelector(".nav")?.classList.remove("nav--dark");
            document.body.classList.remove("on-dark");
          },
        });

        // ── Logo strip fade ──
        gsap.fromTo(
          ".logo-strip",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".logo-strip",
              start: "top 80%",
            },
          }
        );

        // ── Achievement pills stagger ──
        // (reduced motion: globals.css drops the pills' initial offset)
        gsap.to(".achievement-pill", {
          opacity: 1,
          x: 0,
          stagger: 0.07,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-achievements",
            start: "top 80%",
          },
        });

        if (reduceMotion) return;

        // ── Works watermark parallax ──
        gsap.to(".works-watermark", {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: ".works",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // ── Morph shape: circle erupts covering screen ──
        const morphTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".works",
            start: "bottom 80%",
            end: "bottom top",
            scrub: 0.5,
          },
        });
        morphTl.to(".morph-shape", { scale: 80, ease: "power2.inOut" });

        // ── Archive title entrance ──
        gsap.fromTo(
          ".archive-title-wrap",
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#archive",
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );

        // ── Archive: pin + parallax scroll-up items ──
        // Query is the exact complement of the `max-width: 1024px` /
        // `prefers-reduced-motion: reduce` block in globals.css that swaps
        // Archive to the stacked layout (reduced motion never reaches this
        // point — see the early return above). They must stay in sync: if
        // both apply at once, CSS `transform: none !important` wins
        // and the section pins with nothing animating. matchMedia (not a
        // one-time check) re-evaluates on resize, so dragging the viewport
        // across the breakpoint rebuilds or tears down the timeline.
        const mm = gsap.matchMedia();
        cleanupFns.push(() => mm.revert());

        mm.add("(min-width: 1025px)", () => {
          // Pin length is derived from how far the cards travel, so their speed
          // stays tied to the scroll instead of to a fixed pin distance. (A flat
          // +=50% made each card cross ~1.2 screens in ~0.2 screens of scroll,
          // about 6.5x the page's speed, so they were gone before you could read
          // them.) CARD_SPEED is card px per scrolled px: 1 = moves with the
          // page; a little above 1 keeps a hint of parallax.
          const CARD_SPEED = 1.25;
          const CARD_DURATION = 4;
          // Next card starts when the previous one is ~3/8 of the way up, so
          // about two cards are on screen at once, on alternating sides.
          const CARD_STAGGER = 1.5;
          const cards = gsap.utils.toArray<HTMLElement>(".archive-item");
          const pinDistance = () => {
            const tallest = Math.max(...cards.map((c) => c.offsetHeight));
            const travel = window.innerHeight + tallest + 24;
            const units = CARD_DURATION + CARD_STAGGER * (cards.length - 1);
            return Math.round(((units / CARD_DURATION) * travel) / CARD_SPEED);
          };

          const archiveTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#archive",
              start: "top top",
              end: () => `+=${pinDistance()}`,
              pin: true,
              scrub: 0.3,
              anticipatePin: 1,
              // The item tweens below travel in `vh`, which GSAP resolves to
              // pixels once at creation. Without this, resizing the window
              // (or a mobile URL bar collapsing) leaves the cards animating to
              // a stale distance and they stop clearing the viewport. It also
              // re-runs pinDistance() so the pin tracks the new travel.
              invalidateOnRefresh: true,
            },
          });

          // Cards start at translateY(100vh) (see globals.css), so they only
          // need to travel one viewport plus their own height to clear the top
          // edge. Travelling a flat -100vh sent them ~36% further than that,
          // all of it off-screen above, which burned scroll budget and made the
          // visible pass feel too fast. Function-based so each card uses its
          // own height, and so the value recomputes on refresh via
          // invalidateOnRefresh above (a vh constant would fall short on short
          // viewports, where card height is a bigger share of the screen).
          const exitY = (i: number, target: HTMLElement) =>
            -(target.offsetHeight + 24);

          cards.forEach((card, i) => {
            archiveTl.to(
              card,
              { y: exitY, duration: CARD_DURATION, ease: "none" },
              i * CARD_STAGGER
            );
          });
        });



        // ── About watermark parallax ──
        gsap.to(".about-watermark", {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: ".about",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // ── Footer giant name letter-spacing on scroll ──
        const nameProxy = { letterSpacing: -4 };
        gsap.to(nameProxy, {
          letterSpacing: 2,
          ease: "none",
          scrollTrigger: {
            trigger: ".footer",
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: () => {
              const el = document.getElementById("footer-giant-name");
              if (el) el.style.letterSpacing = `${nameProxy.letterSpacing}px`;
            },
          },
        });
      });
    }

    initAnimations();

    return () => {
      disposed = true;
      if (gsapRef && tickerFn) gsapRef.ticker.remove(tickerFn);
      lenisRef?.destroy();
      ctx?.revert();
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <GridOverlay />
      <div className="morph-shape" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Works />
        <Archive />
        <About />
        <LogoStrip />
      </main>
      <Footer />
    </>
  );
}
