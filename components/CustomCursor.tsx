"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    let mouseX = -60, mouseY = -60;
    let curX = -60, curY = -60;
    let rafId: number;

    // transform-only: no layout reads/writes, compositor-driven
    const tick = () => {
      curX += (mouseX - curX) * 0.15;
      curY += (mouseY - curY) * 0.15;
      cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!cursor.style.opacity || cursor.style.opacity === "0") {
        cursor.style.opacity = "1";
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    const hoverEls = document.querySelectorAll("a, button, [role='button']");
    const onEnter = () => cursor.classList.add("cursor--hover");
    const onLeave = () => cursor.classList.remove("cursor--hover");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return <div className="cursor" id="cursor" aria-hidden="true" />;
}
