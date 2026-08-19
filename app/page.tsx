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

      // ── Smooth anchor scroll via Lenis ──
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
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
      lenisRef = new Lenis({ lerp: 0.1, smoothWheel: true });
      lenisRef.on("scroll", ScrollTrigger.update);
      tickerFn = (time: number) => lenisRef.raf(time * 1000);
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);

      ctx = gsap.context(() => {
        // ── Hero name stagger ──
        gsap.fromTo(
          ".hero-name .char",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.04,
            ease: "power3.out",
            delay: 0.2,
          }
        );

        // ── Works rows stagger in ──
        gsap.fromTo(
          ".works-row",
          { y: 40, opacity: 0 },
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
        const isMobile = window.matchMedia("(max-width: 1023px)").matches;
        if (!isMobile) {
          // Stagger = 1.5 units, total timeline = 7 units, end = 245%.
          const archiveTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#archive",
              start: "top top",
              end: "+=160%",
              pin: true,
              scrub: 1.5,
              anticipatePin: 1,
            },
          });

          archiveTl
            .to(".archive-item--1", { y: "-120vh", duration: 4, ease: "none" }, 0)
            .to(".archive-item--2", { y: "-120vh", duration: 4, ease: "none" }, 2)
            .to(".archive-item--3", { y: "-120vh", duration: 4, ease: "none" }, 4);
        }



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

        // ── Achievement pills stagger ──
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
