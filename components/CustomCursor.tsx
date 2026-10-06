"use client";

import { useEffect } from "react";

const HOVER_SELECTOR = "a, button, [role='button']";

export default function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    // Eases toward the pointer, closing 15% of the gap per 60Hz frame. Scaled
    // by elapsed time so it feels the same on 120Hz screens, and the loop
    // stops once the wand has caught up instead of running while idle.
    let mouseX = -60, mouseY = -60;
    let curX = -60, curY = -60;
    let rafId = 0;
    let lastTime = 0;

    const render = (time: number) => {
      const dt = lastTime ? Math.min(time - lastTime, 100) : 16.67;
      lastTime = time;
      const t = 1 - Math.pow(1 - 0.15, dt / 16.67);
      curX += (mouseX - curX) * t;
      curY += (mouseY - curY) * t;

      const settled = Math.abs(mouseX - curX) < 0.1 && Math.abs(mouseY - curY) < 0.1;
      if (settled) {
        curX = mouseX;
        curY = mouseY;
      }
      cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;

      if (settled) {
        rafId = 0;
        lastTime = 0;
      } else {
        rafId = requestAnimationFrame(render);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(render);
      if (!cursor.style.opacity || cursor.style.opacity === "0") {
        cursor.style.opacity = "1";
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    // Delegated so elements mounted later (e.g. the lightbox close button)
    // still swap the wand for the snitch.
    const onMouseOver = (e: MouseEvent) => {
      const overTarget = (e.target as Element | null)?.closest?.(HOVER_SELECTOR);
      cursor.classList.toggle("cursor--hover", Boolean(overTarget));
    };
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <div className="cursor" id="cursor" aria-hidden="true">
      <img className="cursor-wand" src="/cursors/cursor.png" alt="" draggable={false} />
      <img className="cursor-snitch" src="/cursors/pointer.png" alt="" draggable={false} />
    </div>
  );
}
