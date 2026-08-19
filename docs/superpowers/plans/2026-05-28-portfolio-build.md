# Anusri Karmokar Portfolio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page animated portfolio for Anusri Karmokar using Next.js App Router (TypeScript, Tailwind CSS).

**Architecture:** Next.js App Router with a single `app/page.tsx` (client component) that assembles all section components. GSAP + ScrollTrigger drives all scroll animations. `@studio-freight/lenis` handles smooth scrolling. Fonts loaded via `next/font/google`. All styles live in `app/globals.css` (design tokens + section CSS) with minimal Tailwind utility usage.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, GSAP 3 + ScrollTrigger, @studio-freight/lenis, Google Fonts (Playfair Display + Inter) via next/font.

---

## File Map

| File | Responsibility |
|---|---|
| `app/globals.css` | Design tokens (CSS custom properties), reset, grid overlay, all section styles, keyframe animations, responsive breakpoints |
| `app/layout.tsx` | Root layout — loads Playfair Display + Inter via next/font, injects font CSS variables, sets metadata |
| `app/page.tsx` | `'use client'` — assembles all components, runs ALL GSAP ScrollTrigger animations + Lenis smooth scroll in a single `useEffect` |
| `components/GridOverlay.tsx` | Fixed 5-column grid divider overlay |
| `components/Nav.tsx` | Fixed navbar — logo, links, open-to-work status |
| `components/Hero.tsx` | Full-viewport hero — name split into `.char` spans, specialty tag, body grid, watermark, circle, scroll indicator |
| `components/Works.tsx` | Works list rows with hover thumbnail effect, watermark, section header |
| `components/Archive.tsx` | Dark section — watermark, title, 3 archive item cards (initially hidden, revealed by GSAP pin) |
| `components/About.tsx` | Bio text with italic highlights, achievement pills (initially hidden), photo placeholder, resume link |
| `components/Contact.tsx` | Intro text, giant outline text, links row |
| `components/Footer.tsx` | Pulsing dot, headline, animated CSS blob, giant stroke name, footer bar |

---

## Task 1: globals.css — Design System

**Files:**
- Modify: `app/globals.css`

- [ ] **Replace default globals.css with full design system CSS**

```css
@import "tailwindcss";

/* ─── Design Tokens ─── */
:root {
  --bg: #F0ECE6;
  --bg-dark: #1A1208;
  --bg-footer: #0D0A07;
  --text: #1A1208;
  --text-muted: #6B5B45;
  --text-light: #F0ECE6;
  --grid-line: rgba(26, 18, 8, 0.07);
  --grid-line-dark: rgba(240, 236, 230, 0.07);
  --accent-green: #5CDB6A;
  --font-serif: var(--font-playfair);
  --font-sans: var(--font-inter);
}

/* ─── Reset ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: auto; } /* lenis handles smooth scroll */
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans), sans-serif;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }

/* ─── Grid Overlay ─── */
.grid-overlay {
  position: fixed;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  pointer-events: none;
  z-index: 0;
}
.grid-col {
  border-right: 1px solid var(--grid-line);
  transition: border-color 0.4s;
}
.grid-col:last-child { border-right: none; }
body.on-dark .grid-col { border-color: var(--grid-line-dark); }

/* ─── Morph Shape ─── */
.morph-shape {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-dark);
  transform: translate(-50%, -50%) scale(0);
  z-index: 10;
  pointer-events: none;
}

/* ─── Nav ─── */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  border-bottom: 1px solid var(--grid-line);
  z-index: 1000;
  background: var(--bg);
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}
.nav--dark {
  background: var(--bg-dark);
  color: var(--text-light);
  border-color: var(--grid-line-dark);
}
.nav-logo {
  font-family: var(--font-sans);
  font-size: 14px;
  letter-spacing: 0.02em;
}
.nav-logo em {
  font-family: var(--font-serif);
  font-style: italic;
}
.nav-links {
  display: flex;
  gap: 32px;
  font-size: 13px;
  letter-spacing: 0.04em;
}
.nav-links a { opacity: 0.7; transition: opacity 0.2s; }
.nav-links a:hover { opacity: 1; }
.nav-status {
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0.7;
}
.nav-asterisk { color: var(--accent-green); }

/* ─── Hero ─── */
.hero {
  min-height: 100vh;
  padding: 120px 32px 60px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.hero-name {
  line-height: 1;
  margin-bottom: 40px;
}
.hero-name-serif {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(72px, 10vw, 140px);
  color: var(--text);
  display: inline-block;
  margin-right: 0.1em;
}
.hero-name-sans {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: clamp(72px, 10vw, 140px);
  color: var(--text);
  display: inline-block;
}
.hero-name .char {
  display: inline-block;
  will-change: transform, opacity;
}
.hero-specialty {
  position: absolute;
  top: 80px;
  right: 32px;
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.hero-body {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 32px;
  margin-top: 40px;
}
.hero-desc {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.hero-plus {
  font-size: 20px;
  font-weight: 300;
  color: var(--text-muted);
}
.hero-desc p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted);
}
.hero-image-placeholder {
  width: 100%;
  aspect-ratio: 4/3;
  background: rgba(26, 18, 8, 0.06);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--text-muted);
}
.hero-location {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-muted);
  text-align: right;
}
.hero-watermark {
  position: absolute;
  bottom: -40px;
  left: 24px;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(100px, 16vw, 200px);
  color: transparent;
  -webkit-text-stroke: 1px rgba(26, 18, 8, 0.08);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  will-change: transform;
}
.hero-circle {
  position: absolute;
  bottom: 60px;
  right: 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-dark);
}
.scroll-indicator {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: var(--text);
  border-radius: 2px;
  opacity: 0.3;
}

/* ─── Works ─── */
.works {
  padding: 80px 32px 120px;
  position: relative;
  overflow: hidden;
}
.works-watermark {
  position: absolute;
  top: -20px;
  left: 24px;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(100px, 16vw, 200px);
  color: transparent;
  -webkit-text-stroke: 1px rgba(26, 18, 8, 0.06);
  pointer-events: none;
  user-select: none;
  will-change: transform;
}
.works-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;
  position: relative;
  z-index: 1;
}
.works-year {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.06em;
}
.works-title {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: 52px;
  line-height: 1;
}
.works-list { position: relative; z-index: 1; }
.works-row {
  display: grid;
  grid-template-columns: 48px 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 28px 0;
  border-bottom: 1px solid var(--grid-line);
  cursor: pointer;
  position: relative;
  transition: padding-left 0.3s;
}
.works-row:first-child { border-top: 1px solid var(--grid-line); }
.works-row:hover { padding-left: 8px; }
.works-row-num {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 13px;
  color: var(--text-muted);
}
.works-row-name {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: clamp(28px, 3vw, 40px);
  color: var(--text);
  transition: opacity 0.2s;
}
.works-row-tag {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  text-align: right;
}
.works-row-thumb {
  position: absolute;
  right: 120px;
  top: 50%;
  transform: translateY(-50%);
  width: 180px;
  height: 100px;
  border-radius: 4px;
  background: rgba(26, 18, 8, 0.08);
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: var(--text-muted);
  overflow: hidden;
}
.works-row:hover .works-row-thumb { opacity: 1; }

/* ─── Archive ─── */
#archive {
  background: var(--bg-dark);
  color: var(--text-light);
  min-height: 100vh;
  padding: 80px 32px;
  position: relative;
  overflow: hidden;
}
.archive-watermark {
  position: absolute;
  top: -20px;
  left: 24px;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(100px, 16vw, 200px);
  color: transparent;
  -webkit-text-stroke: 1px rgba(240, 236, 230, 0.06);
  pointer-events: none;
  user-select: none;
}
.archive-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}
.archive-label {
  font-size: 12px;
  color: rgba(240, 236, 230, 0.4);
  letter-spacing: 0.06em;
}
.archive-title {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: 52px;
  line-height: 1;
  color: var(--text-light);
}
.archive-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  position: relative;
  z-index: 1;
}
.archive-item {
  background: rgba(240, 236, 230, 0.04);
  border-radius: 8px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(60px);
}
.archive-item-img {
  width: 100%;
  aspect-ratio: 16/9;
  background: rgba(240, 236, 230, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: rgba(240, 236, 230, 0.3);
}
.archive-item-body { padding: 20px; }
.archive-item-title {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: 8px;
}
.archive-item-desc {
  font-size: 13px;
  line-height: 1.6;
  color: rgba(240, 236, 230, 0.5);
}
.archive-item-badge {
  display: inline-block;
  margin-top: 10px;
  font-size: 11px;
  color: rgba(240, 236, 230, 0.4);
  border: 1px solid rgba(240, 236, 230, 0.15);
  padding: 2px 8px;
  border-radius: 20px;
}
.archive-circle {
  position: absolute;
  bottom: 60px;
  right: 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(240, 236, 230, 0.15);
}

/* ─── About ─── */
.about {
  padding: 100px 32px;
  position: relative;
  overflow: hidden;
}
.about-watermark {
  position: absolute;
  top: 20px;
  left: 24px;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(100px, 16vw, 200px);
  color: transparent;
  -webkit-text-stroke: 1px rgba(26, 18, 8, 0.06);
  pointer-events: none;
  user-select: none;
  will-change: transform;
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 64px;
  position: relative;
  z-index: 1;
  margin-top: 60px;
}
.about-photo {
  width: 100%;
  aspect-ratio: 3/4;
  background: rgba(26, 18, 8, 0.06);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--text-muted);
}
.about-bio {
  font-size: 17px;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 40px;
}
.about-bio em {
  font-family: var(--font-serif);
  font-style: italic;
}
.about-achievements {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
}
.achievement-pill {
  font-size: 12px;
  padding: 6px 14px;
  border: 1px solid var(--grid-line);
  border-radius: 20px;
  color: var(--text-muted);
  opacity: 0;
  transform: translateX(-10px);
}
.about-resume {
  font-size: 14px;
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 3px;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.about-resume:hover { opacity: 1; }

/* ─── Contact ─── */
.contact {
  padding: 80px 32px 100px;
  position: relative;
  overflow: hidden;
}
.contact-intro {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 15px;
  color: var(--text-muted);
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}
.contact-giant {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(48px, 7vw, 90px);
  color: transparent;
  -webkit-text-stroke: 1px rgba(26, 18, 8, 0.18);
  line-height: 1.1;
  margin: 0 -20px 48px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  position: relative;
  z-index: 1;
}
.contact-links {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}
.contact-links a {
  font-size: 14px;
  color: var(--text);
  opacity: 0.7;
  transition: opacity 0.2s;
}
.contact-links a:hover { opacity: 1; }
.contact-circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text);
  opacity: 0.3;
}
.contact-resume-pill {
  font-size: 13px;
  padding: 8px 20px;
  border: 1px solid var(--text);
  border-radius: 20px;
  color: var(--text);
  opacity: 0.7;
  transition: opacity 0.2s, background 0.2s;
}
.contact-resume-pill:hover {
  opacity: 1;
  background: var(--text);
  color: var(--bg);
}

/* ─── Footer ─── */
.footer {
  background: var(--bg-footer);
  color: var(--text-light);
  padding: 60px 32px 0;
  position: relative;
  overflow: hidden;
}
.footer-top {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(240, 236, 230, 0.08);
}
.footer-available {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: rgba(240, 236, 230, 0.5);
  letter-spacing: 0.04em;
}
.footer-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-green);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}
.footer-headline {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(52px, 7vw, 80px);
  line-height: 1.1;
  color: var(--text-light);
}
.footer-sub {
  font-size: 12px;
  color: rgba(240, 236, 230, 0.3);
  letter-spacing: 0.06em;
}
.footer-links {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.footer-links a {
  font-size: 13px;
  color: rgba(240, 236, 230, 0.6);
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--text-light); }
.footer-character-wrap {
  display: flex;
  justify-content: flex-end;
  margin-top: -20px;
}
.footer-character {
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-blob {
  width: 80px;
  height: 80px;
  background: rgba(240, 236, 230, 0.08);
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: blob-morph 4s ease-in-out infinite, blob-float 3s ease-in-out infinite;
}
@keyframes blob-morph {
  0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
  25% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
  50% { border-radius: 30% 70% 30% 70% / 60% 40% 60% 40%; }
  75% { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
}
@keyframes blob-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.footer-giant-name {
  display: block;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(80px, 12vw, 150px);
  color: transparent;
  -webkit-text-stroke: 1px rgba(240, 236, 230, 0.1);
  white-space: nowrap;
  margin: 0 -40px;
  line-height: 1;
  will-change: letter-spacing;
  letter-spacing: -4px;
}
.footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 24px;
  font-size: 11px;
  color: rgba(240, 236, 230, 0.25);
  letter-spacing: 0.04em;
  border-top: 1px solid rgba(240, 236, 230, 0.06);
  margin-top: 8px;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .hero-body { grid-template-columns: 1fr; gap: 24px; }
  .hero-specialty { position: static; margin-bottom: 12px; }
  .works-row { grid-template-columns: 40px 1fr; }
  .works-row-tag { display: none; }
  .works-row-thumb { display: none; }
  .archive-grid { grid-template-columns: 1fr; }
  .about-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .contact-giant { font-size: 36px; white-space: normal; }
}

@media (max-width: 480px) {
  .nav { padding: 0 16px; }
  .hero { padding: 100px 16px 48px; }
  .works { padding: 60px 16px 80px; }
  #archive { padding: 60px 16px; }
  .about { padding: 60px 16px; }
  .contact { padding: 60px 16px; }
  .footer { padding: 40px 16px 0; }
}
```

- [ ] **Verify dev server starts with no CSS errors**

```bash
npm run dev
```

Expected: Compiles successfully, no errors in terminal.

---

## Task 2: layout.tsx — Fonts + Metadata

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Replace layout.tsx with Playfair Display + Inter fonts**

```tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Anusri Karmokar — UI/UX & Graphic Designer",
  description:
    "Portfolio of Anusri Karmokar — UI/UX Designer, Graphic Designer, and Developer based in Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

## Task 3: GridOverlay component

**Files:**
- Create: `components/GridOverlay.tsx`

- [ ] **Create GridOverlay.tsx**

```tsx
export default function GridOverlay() {
  return (
    <div className="grid-overlay" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="grid-col" />
      ))}
    </div>
  );
}
```

---

## Task 4: Nav component

**Files:**
- Create: `components/Nav.tsx`

- [ ] **Create Nav.tsx**

```tsx
export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <a href="#" className="nav-logo">
        <em>anusri</em>.k
      </a>
      <div className="nav-links">
        <a href="#works">(Works)</a>
        <a href="#about">(About)</a>
        <a href="#contact">(Contact)</a>
      </div>
      <div className="nav-status">
        <span className="nav-asterisk">✳</span> Open to work
      </div>
    </nav>
  );
}
```

---

## Task 5: Hero component

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Create Hero.tsx with char-split name spans**

The name is pre-split into `.char` spans so GSAP can stagger each letter on load.

```tsx
function splitChars(text: string, className: string) {
  return text.split("").map((ch, i) => (
    <span key={i} className={`char ${className}-char`} style={{ display: "inline-block" }}>
      {ch === " " ? " " : ch}
    </span>
  ));
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-specialty">UI/UX · Graphic Design</div>

      <div className="hero-name">
        <span className="hero-name-serif">
          {splitChars("Anusri", "serif")}
        </span>
        <span className="hero-name-sans">
          {splitChars("Karmokar", "sans")}
        </span>
      </div>

      <div className="hero-body">
        <div className="hero-desc">
          <span className="hero-plus">+</span>
          <p>Designer. Developer. Professional &ldquo;this could look cooler&rdquo; person.</p>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder"><span>[ hero image ]</span></div>
        </div>
        <div className="hero-location">
          Mumbai, India<br />
          <em>Building since 2019.</em><br />
          Currently navigating<br />
          design &amp; 47 Figma drafts.
        </div>
      </div>

      <div className="hero-watermark" aria-hidden="true">Selected</div>
      <div className="hero-circle" aria-hidden="true" />
      <div className="scroll-indicator" aria-hidden="true" />
    </section>
  );
}
```

---

## Task 6: Works component

**Files:**
- Create: `components/Works.tsx`

- [ ] **Create Works.tsx with 5 projects**

```tsx
const projects = [
  { num: "01", name: "Winvesta", tag: "UI/UX Lead" },
  { num: "02", name: "Let's Upgrade", tag: "UX Revamp" },
  { num: "03", name: "12thClass.com", tag: "Product Design" },
  { num: "04", name: "BharatXR", tag: "UX Design" },
  { num: "05", name: "Momentum Health Club", tag: "Brand & UX" },
];

export default function Works() {
  return (
    <section className="works" id="works">
      <div className="works-watermark" aria-hidden="true">Selected</div>
      <div className="works-header">
        <span className="works-year">2022 – 2025</span>
        <h2 className="works-title">Works</h2>
      </div>
      <div className="works-list">
        {projects.map((p) => (
          <a key={p.num} href="#" className="works-row">
            <span className="works-row-num">{p.num}</span>
            <span className="works-row-name">{p.name}</span>
            <span className="works-row-tag">{p.tag}</span>
            <div className="works-row-thumb">
              <span>[ {p.name} ]</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
```

---

## Task 7: Archive component

**Files:**
- Create: `components/Archive.tsx`

- [ ] **Create Archive.tsx with 3 items**

Items start with `opacity: 0; transform: translateY(60px)` via CSS — GSAP reveals them on scroll.

```tsx
const items = [
  {
    title: "Hackathon Branding",
    desc: "Event visuals, identity system, and assets for hackathons across 5 cities with 600+ participants.",
    badge: null,
  },
  {
    title: "Social & Marketing Creatives",
    desc: "Posters, motion graphics, and campaign assets for Momentum Health Club and other brands.",
    badge: "WIP",
  },
  {
    title: "Figma Explorations",
    desc: "Component systems, UI experiments, and the 47 untitled drafts that never saw daylight.",
    badge: null,
  },
];

export default function Archive() {
  return (
    <section id="archive">
      <div className="archive-watermark" aria-hidden="true">Digital</div>
      <div className="archive-header">
        <span className="archive-label">Digital</span>
        <h2 className="archive-title">Archive</h2>
      </div>
      <div className="archive-grid">
        {items.map((item, i) => (
          <div key={i} className="archive-item">
            <div className="archive-item-img"><span>[ image ]</span></div>
            <div className="archive-item-body">
              <div className="archive-item-title">{item.title}</div>
              <div className="archive-item-desc">{item.desc}</div>
              {item.badge && (
                <span className="archive-item-badge">{item.badge}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="archive-circle" aria-hidden="true" />
    </section>
  );
}
```

---

## Task 8: About component

**Files:**
- Create: `components/About.tsx`

- [ ] **Create About.tsx with bio, achievements, resume link**

Achievement pills start hidden via CSS `opacity: 0` — GSAP staggers them in.

```tsx
const achievements = [
  "Top 10 — PIWOT PanIIT 2025",
  "Top 4 — ISTD Hackathon",
  "Figma Contest Winner",
  "Best MERN Stack Website",
  "National Athlete — Archery & Taekwondo",
  "600+ hackathon participants",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-watermark" aria-hidden="true">About</div>
      <div className="about-grid">
        <div className="about-photo"><span>[ photo ]</span></div>
        <div className="about-content">
          <p className="about-bio">
            I&apos;m Anusri — a designer who codes, a developer who cares{" "}
            <em>way too much about spacing</em>, and someone who genuinely
            enjoys turning chaotic ideas into things people actually want to
            use. Currently with <em>JavaScript Mumbai</em> and{" "}
            <em>Momentum Health Club</em>. Previously: BharatXR, Winvesta,
            Let&apos;s Upgrade, 12thclass.com. I&apos;ve managed hackathons
            with <em>600+ participants</em> across 5 cities. And yes, I
            probably still have <em>47 untitled Figma drafts</em> open.
          </p>
          <div className="about-achievements">
            {achievements.map((a, i) => (
              <span key={i} className="achievement-pill">{a}</span>
            ))}
          </div>
          <a
            href="#"
            className="about-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Download Resume)
          </a>
        </div>
      </div>
    </section>
  );
}
```

---

## Task 9: Contact component

**Files:**
- Create: `components/Contact.tsx`

- [ ] **Create Contact.tsx**

```tsx
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact-intro">
        Whether it&apos;s a product, startup, community, campaign, or just an
        idea scribbled in Notes at 2AM — I&apos;d love to hear about it.
      </p>
      <div className="contact-giant">Let&apos;s build something cool.</div>
      <div className="contact-links">
        <a href="mailto:anusrikarmokar@gmail.com">(Email)</a>
        <a
          href="https://linkedin.com/in/anusrikarmokar"
          target="_blank"
          rel="noopener noreferrer"
        >
          (LinkedIn)
        </a>
        <span className="contact-circle" aria-hidden="true" />
        <a
          href="https://figma.com/@anusri"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Figma)
        </a>
        <a
          href="https://github.com/anusrikarmokar"
          target="_blank"
          rel="noopener noreferrer"
        >
          (GitHub)
        </a>
        <a href="#" className="contact-resume-pill">
          Download Resume ↓
        </a>
      </div>
    </section>
  );
}
```

---

## Task 10: Footer component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Create Footer.tsx with animated blob + giant name**

```tsx
export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-available">
          <span className="footer-pulse" />
          Currently available for projects
        </div>
        <div className="footer-headline">
          Let&apos;s build<br />something cool.
        </div>
        <div className="footer-sub">Mumbai · UI/UX · Graphic Design</div>
        <div className="footer-links">
          <a href="mailto:anusrikarmokar@gmail.com">(Email)</a>
          <a href="https://linkedin.com/in/anusrikarmokar" target="_blank" rel="noopener noreferrer">(LinkedIn)</a>
          <a href="https://figma.com/@anusri" target="_blank" rel="noopener noreferrer">(Figma)</a>
          <a href="https://github.com/anusrikarmokar" target="_blank" rel="noopener noreferrer">(GitHub)</a>
          <a href="#">Resume ↓</a>
        </div>
      </div>

      <div className="footer-character-wrap">
        <div className="footer-character">
          <div className="footer-blob" />
        </div>
      </div>

      <div className="footer-giant-name" id="footer-giant-name">
        Anusri Karmokar
      </div>

      <div className="footer-bar">
        <span>© 2025 Anusri Karmokar</span>
        <span>WIP 2019–Present ✳</span>
      </div>
    </footer>
  );
}
```

---

## Task 11: page.tsx — Assembly + All GSAP Animations

**Files:**
- Modify: `app/page.tsx`

- [ ] **Write page.tsx — 'use client', assemble components, run all GSAP in useEffect**

This is the main animation hub. All GSAP ScrollTrigger code lives in one `useEffect` with a single cleanup.

```tsx
"use client";

import { useEffect } from "react";
import GridOverlay from "@/components/GridOverlay";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Archive from "@/components/Archive";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    let ctx: any;

    async function initAnimations() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const Lenis = (await import("@studio-freight/lenis")).default;

      gsap.registerPlugin(ScrollTrigger);

      // ── Lenis smooth scroll ──
      const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      ctx = gsap.context(() => {
        // ── Hero name stagger ──
        const chars = document.querySelectorAll(".hero-name .char");
        gsap.fromTo(
          chars,
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

        // ── Hero watermark parallax ──
        gsap.to(".hero-watermark", {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

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
            start: "bottom 60%",
            end: "bottom top",
            scrub: 0.5,
          },
        });
        morphTl
          .to(".morph-shape", {
            scale: 80,
            ease: "power2.inOut",
          })
          .to(
            ".works",
            { opacity: 0, duration: 0.3 },
            "<"
          );

        // ── Archive: nav dark ──
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

        // ── Archive sticky scroll: pin + reveal items ──
        const isMobile = window.innerWidth < 768;
        if (!isMobile) {
          const archiveTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#archive",
              start: "top top",
              end: "+=200%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });
          archiveTl
            .to(".archive-item:nth-child(1)", {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            })
            .to(
              ".archive-item:nth-child(2)",
              { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
              "-=0.5"
            )
            .to(
              ".archive-item:nth-child(3)",
              { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
              "-=0.5"
            );
        } else {
          gsap.to(".archive-item", {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".archive-grid",
              start: "top 80%",
            },
          });
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

        // ── About: nav light (leaving archive) handled above ──

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

        // ── Footer giant name letter-spacing ──
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
      ctx?.revert();
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Verify dev server compiles with no TypeScript errors**

```bash
npm run dev
```

Expected: Page loads at `http://localhost:3000`, all sections visible, name stagger plays on load, morph transition fires on scroll, archive pins on desktop.

---

## Task 12: Verify + Polish

- [ ] **Check all sections render correctly in browser**

Open `http://localhost:3000` and visually verify:
  - Grid overlay visible as faint vertical lines
  - Nav fixed at top, correct fonts
  - Hero name stagger animation plays
  - Works rows visible with hover thumbnails
  - Morph transition: scrolling past Works reveals dark Archive
  - Archive section pins and reveals items one-by-one
  - About section loads with bio and pills
  - Contact section shows giant outline text
  - Footer shows headline, blob animation, giant name

- [ ] **Verify mobile layout at 375px width**

In DevTools, set viewport to 375px. Verify:
  - Archive is not pinned (falls back to normal scroll)
  - Nav links hidden
  - Hero body stacks vertically
  - Contact text wraps correctly

- [ ] **Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: No type errors.
