"use client";

import { useEffect } from "react";
import GridOverlay from "@/components/GridOverlay";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Archive from "@/components/Archive";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenisRef: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gsapRef: any;
    let tickerFn: ((time: number) => void) | undefined;

    async function initAnimations() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const Lenis = (await import("@studio-freight/lenis")).default;

      gsapRef = gsap;
      gsap.registerPlugin(ScrollTrigger);

      // ── Smooth anchor scroll via Lenis ──
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const href = (anchor as HTMLAnchorElement).getAttribute("href");
          if (href && href.length > 1) {
            e.preventDefault();
            lenisRef.scrollTo(href, {
              duration: 1.4,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        });
      });

      // ── Custom cursor ──
      if (window.matchMedia("(pointer: fine)").matches) {
        const cursor = document.getElementById("cursor");
        if (cursor) {
          let mouseX = -60, mouseY = -60;
          let curX = -60, curY = -60;
          let rafId: number;
          const half = () => cursor.offsetWidth / 2;

          const tick = () => {
            curX += (mouseX - curX) * 0.15;
            curY += (mouseY - curY) * 0.15;
            cursor.style.left = `${curX - half()}px`;
            cursor.style.top  = `${curY - half()}px`;
            rafId = requestAnimationFrame(tick);
          };
          rafId = requestAnimationFrame(tick);

          window.addEventListener("mousemove", (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!cursor.style.opacity || cursor.style.opacity === "0") {
              cursor.style.opacity = "1";
            }
          });

          document.querySelectorAll("a, button, [role='button']").forEach(el => {
            el.addEventListener("mouseenter", () => cursor.classList.add("cursor--hover"));
            el.addEventListener("mouseleave", () => cursor.classList.remove("cursor--hover"));
          });

          // store rafId for cleanup
          (cursor as any)._rafId = rafId;
        }
      }

      // ── Lenis smooth scroll ──
      // smoothTouch: false → let iOS/Android handle native touch momentum
      // lerp: 0.1 → responsive enough not to feel laggy on fast scrolls
      lenisRef = new Lenis({ lerp: 0.1, smoothWheel: true, smoothTouch: false });
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

        // ── Archive/footer nav dark ──
        ScrollTrigger.create({
          trigger: "#archive",
          start: "top 56px",
          end: "bottom 56px",
          onEnter: () => {
            document.querySelector(".nav")?.classList.add("nav--dark");
            document.body.classList.add("on-dark");
          },
          onLeave: () => {
            document.querySelector(".nav")?.classList.remove("nav--dark");
            document.body.classList.remove("on-dark");
          },
          onEnterBack: () => {
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
        const isMobile = window.innerWidth < 1024;
        if (!isMobile) {
          // Stagger = 2 units: item 2 starts when item 1 is 50% through (at y≈-5vh, just exiting).
          // Total timeline = 8 units, end = 280% → ~35vh per unit.
          const archiveTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#archive",
              start: "top top",
              end: "+=280%",
              pin: true,
              scrub: 1.5,
              anticipatePin: 1,
            },
          });

          archiveTl
            .to(".archive-item--1", { y: "-120vh", duration: 4, ease: "none" }, 0)
            .to(".archive-item--2", { y: "-120vh", duration: 4, ease: "none" }, 2)
            .to(".archive-item--3", { y: "-120vh", duration: 4, ease: "none" }, 4);
        } else {
          // Mobile: simple scroll-triggered fade+slide (no pin)
          gsap.fromTo(
            ".archive-item",
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".archive-items-layer",
                start: "top 80%",
              },
            }
          );
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

        // ── Footer nav dark ──
        ScrollTrigger.create({
          trigger: ".footer",
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
      if (gsapRef && tickerFn) gsapRef.ticker.remove(tickerFn);
      lenisRef?.destroy();
      ctx?.revert();
      const cursor = document.getElementById("cursor");
      if (cursor && (cursor as any)._rafId) cancelAnimationFrame((cursor as any)._rafId);
    };
  }, []);

  return (
    <>
      <GridOverlay />
      <div className="morph-shape" aria-hidden="true" />
      <div className="cursor" id="cursor" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Works />
        <Archive />
        <About />
      </main>
      <Footer />
    </>
  );
}
