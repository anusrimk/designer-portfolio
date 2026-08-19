# Portfolio Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 4 new sections (Services, Process, Archive expansion, Logo Strip) and modify 2 existing sections (Works, About) to strengthen the design portfolio.

**Architecture:** Single-page scroll with GSAP animations. New components follow existing patterns: single default export, data arrays at top of file, all CSS in globals.css using custom property tokens. Services takes over the "covering Hero" effect from Works.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, GSAP 3.15 + ScrollTrigger, Tailwind CSS v4 (PostCSS), Lenis smooth scroll.

## Global Constraints

- All CSS must use existing design tokens (`--sp-*`, `--type-*`, `--font-*`, `--bg-*`, `--text-*`, `--accent-green`, `--grid-line*`)
- No invented CSS properties or values — match existing patterns exactly
- Components: single default export, no `"use client"` (only page.tsx has it)
- Data: hardcoded inline in component files (array at top of file)
- Responsive breakpoints: 1024px (tablet), 768px (mobile)
- Dark sections use `--bg-footer` background, `--text-light` color, `rgba(240, 236, 230, *)` for muted text
- Watermarks: `var(--font-serif)`, italic, `color: transparent`, `-webkit-text-stroke: 1px rgba(...)`, `will-change: transform`
- GSAP: dynamically imported in page.tsx `useEffect`, uses `gsap.context()` for cleanup
- Section padding: `--pad-y-sm` (short) or `--pad-y-md` (tall), `--pad-x` (horizontal)

---

## Task 1: CSS — Add new section styles, modify Works and About

**Files:**
- Modify: `app/globals.css` (append new sections, modify `.works` and `.about`)

**Interfaces:**
- Consumes: existing design tokens from `:root`
- Produces: CSS classes for `.services`, `.process`, `.logo-strip`, modified `.works`, modified `.about`

- [ ] **Step 1: Modify `.works` CSS — remove covering behavior**

In `app/globals.css`, replace the `.works` rule (lines 301-310):

```css
.works {
  padding: var(--pad-y-sm) var(--pad-x) var(--pad-y-md);
  position: relative;
  overflow: hidden;
  background: var(--bg);
}
```

This removes `z-index: 2`, `margin-top: -60px`, `border-radius: 24px 24px 0 0`, and `box-shadow`.

- [ ] **Step 2: Add `.services` CSS — covering Hero section**

Append after the `.works-row:hover .works-row-thumb` rule (after line 396):

```css
/* ─── Services ─── */
.services {
  padding: var(--pad-y-sm) var(--pad-x) var(--pad-y-md);
  position: relative;
  z-index: 2;
  overflow: hidden;
  margin-top: -60px;
  border-radius: 24px 24px 0 0;
  box-shadow: 0 -16px 48px rgba(26, 18, 8, 0.08);
  background: var(--bg);
}
.services-watermark {
  position: absolute;
  top: -20px;
  left: var(--pad-x);
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: var(--type-watermark);
  color: transparent;
  -webkit-text-stroke: 1px rgba(26, 18, 8, 0.06);
  pointer-events: none;
  user-select: none;
  will-change: transform;
}
.services-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--sp-8);
  position: relative;
  z-index: 1;
}
.services-card {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}
.services-card-title {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: var(--type-md);
  color: var(--text);
}
.services-card-desc {
  font-size: var(--type-base);
  line-height: 1.6;
  color: var(--text-muted);
}
```

- [ ] **Step 3: Add `.process` CSS — light section after Works**

Append after the `.services` rules:

```css
/* ─── Process ─── */
.process {
  padding: var(--pad-y-md) var(--pad-x);
  position: relative;
  overflow: hidden;
  background: var(--bg);
}
.process-watermark {
  position: absolute;
  top: 20px;
  left: var(--pad-x);
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: var(--type-watermark);
  color: transparent;
  -webkit-text-stroke: 1px rgba(26, 18, 8, 0.06);
  pointer-events: none;
  user-select: none;
  will-change: transform;
}
.process-header {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
  margin-bottom: var(--sp-12);
  position: relative;
  z-index: 1;
}
.process-year {
  font-size: var(--type-xs);
  color: var(--text-muted);
  letter-spacing: 0.06em;
}
.process-title {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: var(--type-2xl);
  line-height: 1;
}
.process-list {
  display: flex;
  flex-direction: column;
  gap: var(--sp-12);
  position: relative;
  z-index: 1;
}
.process-phase {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: var(--sp-6);
  align-items: start;
}
.process-phase-num {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: var(--type-sm);
  color: var(--accent-green);
  padding-top: var(--sp-1);
}
.process-phase-content {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}
.process-phase-title {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: var(--type-xl);
  color: var(--text);
}
.process-phase-quote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: var(--type-md);
  color: var(--text-muted);
}
.process-phase-desc {
  font-size: var(--type-base);
  line-height: 1.8;
  color: var(--text-muted);
  max-width: 560px;
}
```

- [ ] **Step 4: Modify `.about` CSS — dark theme**

Replace the `.about` rule (lines 494-500):

```css
.about {
  padding: var(--pad-y-md) var(--pad-x);
  position: relative;
  overflow: hidden;
  z-index: 11;
  background: var(--bg-footer);
  color: var(--text-light);
}
```

Replace the `.about-watermark` rule (lines 501-514):

```css
.about-watermark {
  position: absolute;
  top: 20px;
  left: var(--pad-x);
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: var(--type-watermark);
  color: transparent;
  -webkit-text-stroke: 1px rgba(240, 236, 230, 0.06);
  pointer-events: none;
  user-select: none;
  will-change: transform;
}
```

Replace `.about-photo` (line 523-533):

```css
.about-photo {
  width: 100%;
  aspect-ratio: 3/4;
  background: rgba(240, 236, 230, 0.06);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--type-sm);
  color: rgba(240, 236, 230, 0.4);
}
```

Replace `.about-bio` (lines 534-539):

```css
.about-bio {
  font-size: var(--type-md);
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: var(--sp-8);
}
```

Replace `.about-bio em` (lines 540-543):

```css
.about-bio em {
  font-family: var(--font-serif);
  font-style: italic;
}
```

Replace `.achievement-pill` (lines 550-558):

```css
.achievement-pill {
  font-size: var(--type-xs);
  padding: var(--sp-1) var(--sp-3);
  border: 1px solid rgba(240, 236, 230, 0.15);
  border-radius: 20px;
  color: rgba(240, 236, 230, 0.5);
  opacity: 0;
  transform: translateX(-10px);
}
```

Replace `.about-resume` (lines 559-567):

```css
.about-resume {
  font-size: var(--type-base);
  color: var(--text-light);
  text-decoration: underline;
  text-underline-offset: 3px;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.about-resume:hover { opacity: 1; }
```

- [ ] **Step 5: Add `.logo-strip` CSS — dark section before Footer**

Append before the `/* ─── Responsive ─── */` comment:

```css
/* ─── Logo Strip ─── */
.logo-strip {
  padding: var(--pad-y-sm) var(--pad-x);
  background: var(--bg-footer);
  color: var(--text-light);
  position: relative;
}
.logo-strip-label {
  font-size: var(--type-xs);
  color: rgba(240, 236, 230, 0.3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: var(--sp-6);
}
.logo-strip-row {
  display: flex;
  align-items: baseline;
  gap: var(--sp-8);
  flex-wrap: wrap;
}
.logo-strip-item {
  display: flex;
  flex-direction: column;
  gap: var(--sp-1);
}
.logo-strip-name {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--type-base);
  color: rgba(240, 236, 230, 0.7);
}
.logo-strip-role {
  font-size: var(--type-xs);
  color: rgba(240, 236, 230, 0.3);
}
```

- [ ] **Step 6: Add responsive rules for new sections**

Append inside the `@media (max-width: 768px)` block:

```css
  .services-list { grid-template-columns: 1fr; }
  .process-phase { grid-template-columns: 1fr; gap: var(--sp-3); }
  .logo-strip-row { flex-direction: column; gap: var(--sp-4); }
```

- [ ] **Step 7: Verify CSS**

Run: `npm run build` (or `next build`)
Expected: No CSS errors. New classes are available. Works section no longer has covering behavior. About section renders with dark background.

- [ ] **Step 8: Commit**

```bash
git add app/globals.css
git commit -m "feat: add CSS for services, process, logo-strip sections; modify works and about for dark theme"
```

---

## Task 2: Services Component

**Files:**
- Create: `components/Services.tsx`

**Interfaces:**
- Consumes: none (standalone component)
- Produces: `<Services />` component with class `.services` for CSS and GSAP targeting

- [ ] **Step 1: Create `components/Services.tsx`**

```tsx
const services = [
  {
    title: "UI/UX Design",
    desc: "Product interfaces, user research, and interaction design. From wireframes to polished prototypes that ship.",
  },
  {
    title: "Graphic Design",
    desc: "Visual identity, event branding, and marketing creatives. Systems that scale across formats and platforms.",
  },
  {
    title: "Design Systems",
    desc: "Component libraries, design tokens, and documentation. Consistent UI that teams can build from.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-watermark" aria-hidden="true">Capabilities</div>
      <div className="services-list">
        {services.map((s, i) => (
          <div key={i} className="services-card">
            <div className="services-card-title">{s.title}</div>
            <div className="services-card-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component renders**

Run: `npm run dev`
Expected: Services section appears between Hero and Works. Covers Hero with rounded top corners. 3 cards in a row. "Capabilities" watermark visible behind.

- [ ] **Step 3: Commit**

```bash
git add components/Services.tsx
git commit -m "feat: add Services component with 3 service cards"
```

---

## Task 3: Process Component

**Files:**
- Create: `components/Process.tsx`

**Interfaces:**
- Consumes: none (standalone component)
- Produces: `<Process />` component with class `.process` for CSS and GSAP targeting

- [ ] **Step 1: Create `components/Process.tsx`**

```tsx
const phases = [
  {
    num: "01",
    title: "Understand",
    quote: "Design starts before Figma opens.",
    desc: "Research, stakeholder conversations, and problem framing. I dig into who this is for, what success looks like, and what constraints actually matter before touching a tool.",
  },
  {
    num: "02",
    title: "Explore",
    quote: "Thirty bad ideas before one good one.",
    desc: "Sketches, wireframes, rapid prototyping. I work through multiple directions fast — discarding more than I keep — because the first idea is almost never the best one.",
  },
  {
    num: "03",
    title: "Ship",
    quote: "If it doesn't ship, it's not design.",
    desc: "Handoff, iteration, and collaboration with engineering. I stay involved through implementation because the gap between mockup and production is where good design dies.",
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-watermark" aria-hidden="true">Process</div>
      <div className="process-header">
        <span className="process-year">Method</span>
        <h2 className="process-title">Process</h2>
      </div>
      <div className="process-list">
        {phases.map((p, i) => (
          <div key={i} className="process-phase">
            <div className="process-phase-num">{p.num}</div>
            <div className="process-phase-content">
              <div className="process-phase-title">{p.title}</div>
              <div className="process-phase-quote">{p.quote}</div>
              <p className="process-phase-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component renders**

Run: `npm run dev`
Expected: Process section appears between Works and Archive. Light background. 3 numbered phases with green numbers, italic quotes, description paragraphs. "Process" watermark visible.

- [ ] **Step 3: Commit**

```bash
git add components/Process.tsx
git commit -m "feat: add Process component with 3 phases"
```

---

## Task 4: Archive Expansion

**Files:**
- Modify: `components/Archive.tsx`

**Interfaces:**
- Consumes: existing Archive CSS classes (`.archive-item`, `.archive-item-img`, `.archive-item-body`, etc.)
- Produces: expanded Archive with numbered headings, detail lines, image grids

- [ ] **Step 1: Update Archive data and component**

Replace the entire content of `components/Archive.tsx`:

```tsx
const items = [
  {
    num: "01",
    title: "Hackathon Branding",
    detail: "5 cities / 600+ participants / 2022–2024",
    desc: "Event visuals, identity system, and assets for hackathons across 5 cities. Logo variants, stage backdrops, social media kits, and branded merch — each event got its own visual identity while staying within a cohesive system.",
    badge: null,
    images: ["poster", "stage", "social kit", "merch"],
  },
  {
    num: "02",
    title: "Social & Marketing Creatives",
    detail: "Momentum Health Club / ongoing",
    desc: "Posters, motion graphics, and campaign assets for Momentum Health Club and other brands. Instagram carousels, event banners, ad creatives — visual content that converts.",
    badge: "WIP",
    images: ["carousel", "banner", "motion", "ad set"],
  },
  {
    num: "03",
    title: "UI Experiments & Component Systems",
    detail: "ongoing / personal",
    desc: "Component systems, UI experiments, and explorations that pushed creative boundaries. Design tokens, interaction patterns, and visual R&D — the lab work that doesn't ship but sharpens the craft.",
    badge: null,
    images: ["tokens", "components", "interactions", "dark mode"],
  },
];

export default function Archive() {
  return (
    <section id="archive">
      <div className="archive-watermark" aria-hidden="true">Digital</div>

      <div className="archive-title-wrap">
        <h2 className="archive-title">Archive</h2>
      </div>

      <div className="archive-items-layer">
        {items.map((item, i) => (
          <div key={i} className={`archive-item archive-item--${i + 1}`}>
            <div className="archive-item-body">
              <div className="archive-item-num">{item.num}</div>
              <div className="archive-item-title">{item.title}</div>
              <div className="archive-item-detail">{item.detail}</div>
              <div className="archive-item-desc">{item.desc}</div>
              {item.badge && (
                <span className="archive-item-badge">{item.badge}</span>
              )}
              <div className="archive-item-grid">
                {item.images.map((img, j) => (
                  <div key={j} className="archive-item-thumb">
                    <span>[ {img} ]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add CSS for new Archive child elements**

Append to `app/globals.css` after the `.archive-item-badge` rule (after line 491):

```css
.archive-item-num {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: var(--type-xs);
  color: var(--accent-green);
  letter-spacing: 0.05em;
  margin-bottom: var(--sp-2);
}
.archive-item-detail {
  font-size: var(--type-xs);
  color: rgba(240, 236, 230, 0.4);
  margin-bottom: var(--sp-4);
}
.archive-item-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: var(--sp-4);
}
.archive-item-thumb {
  aspect-ratio: 4/3;
  background: rgba(240, 236, 230, 0.06);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--type-xs);
  color: rgba(240, 236, 230, 0.25);
}
```

- [ ] **Step 3: Verify Archive expansion**

Run: `npm run dev`
Expected: Each Archive card now has a numbered heading (green), title, detail line, expanded description, and 2×2 image grid. Cards still scroll up one by one with pin/scroll animation. Cards are taller than before.

- [ ] **Step 4: Commit**

```bash
git add components/Archive.tsx app/globals.css
git commit -m "feat: expand Archive cards with numbered headings, detail lines, and image grids"
```

---

## Task 5: Logo Strip Component

**Files:**
- Create: `components/LogoStrip.tsx`

**Interfaces:**
- Consumes: none (standalone component)
- Produces: `<LogoStrip />` component with class `.logo-strip` for CSS and GSAP targeting

- [ ] **Step 1: Create `components/LogoStrip.tsx`**

```tsx
const logos = [
  { name: "Winvesta", role: "UI/UX Lead" },
  { name: "BharatXR", role: "UX Design" },
  { name: "Let's Upgrade", role: "UX Revamp" },
  { name: "Momentum Health Club", role: "Brand & UX" },
  { name: "JavaScript Mumbai", role: "Lead Designer" },
];

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="logo-strip-label">Worked with</div>
      <div className="logo-strip-row">
        {logos.map((l, i) => (
          <div key={i} className="logo-strip-item">
            <div className="logo-strip-name">{l.name}</div>
            <div className="logo-strip-role">{l.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component renders**

Run: `npm run dev`
Expected: Logo strip appears between About and Footer. Dark background. "Worked with" label above. 5 text entries in a horizontal row with name and role.

- [ ] **Step 3: Commit**

```bash
git add components/LogoStrip.tsx
git commit -m "feat: add Logo Strip component with worked-with brands"
```

---

## Task 6: Page Assembly and GSAP Animations

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `<Services />`, `<Process />`, `<LogoStrip />` from Tasks 2, 3, 5
- Produces: Updated page with correct section order and all GSAP animations

- [ ] **Step 1: Update imports in `app/page.tsx`**

Add imports for new components:

```tsx
import Services from "@/components/Services";
import Process from "@/components/Process";
import LogoStrip from "@/components/LogoStrip";
```

- [ ] **Step 2: Update section order in JSX**

Replace the `<main>` block:

```tsx
<main>
  <Hero />
  <Services />
  <Works />
  <Process />
  <Archive />
  <About />
  <LogoStrip />
</main>
```

- [ ] **Step 3: Add GSAP animations for new sections**

Inside the `gsap.context(() => { ... })` callback, add after the existing Works watermark parallax animation (after line 131):

```tsx
// ── Services cards stagger ──
gsap.fromTo(
  ".services-card",
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.08,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".services-list",
      start: "top 80%",
    },
  }
);

// ── Services watermark parallax ──
gsap.to(".services-watermark", {
  y: -80,
  ease: "none",
  scrollTrigger: {
    trigger: ".services",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

// ── Process phases stagger ──
gsap.fromTo(
  ".process-phase",
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.08,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".process-list",
      start: "top 80%",
    },
  }
);

// ── Process watermark parallax ──
gsap.to(".process-watermark", {
  y: -80,
  ease: "none",
  scrollTrigger: {
    trigger: ".process",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
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
```

- [ ] **Step 4: Move morph shape trigger from Works to Process**

Find the existing morph shape animation (lines 134-142):

```tsx
const morphTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".works",
    start: "bottom 80%",
    end: "bottom top",
    scrub: 0.5,
  },
});
morphTl.to(".morph-shape", { scale: 80, ease: "power2.inOut" });
```

Change `trigger: ".works"` to `trigger: ".process"`:

```tsx
const morphTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".process",
    start: "bottom 80%",
    end: "bottom top",
    scrub: 0.5,
  },
});
morphTl.to(".morph-shape", { scale: 80, ease: "power2.inOut" });
```

- [ ] **Step 5: Update Archive pin timeline duration**

Find the Archive pin timeline (lines 189-203). Change `end: "+=220%"` to `end: "+=350%"`:

```tsx
const archiveTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#archive",
    start: "top top",
    end: "+=350%",
    pin: true,
    scrub: 1.5,
    anticipatePin: 1,
  },
});
```

- [ ] **Step 6: Update nav dark mode triggers**

Find the Archive nav dark trigger (lines 145-165). Update `onEnter`/`onLeave` to also account for About section being dark. The existing Archive trigger already adds dark mode — since About, Logo Strip, and Footer are all dark after Archive, the dark mode should stay active from Archive through Footer.

Replace the Footer nav dark trigger (lines 234-245) with a single continuous dark zone that covers Archive → About → Logo Strip → Footer:

```tsx
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
```

Remove the separate Footer dark mode trigger since the Archive trigger now covers the entire dark zone (Archive, About, Logo Strip, Footer are all dark).

- [ ] **Step 7: Verify full page**

Run: `npm run dev`
Expected: Correct scroll order: Hero → Services (covers Hero) → Works → Process → Archive → About → Logo Strip → Footer. All animations work. Nav turns dark at Archive and stays dark through Footer. Morph transitions from Process into Archive. Archive cards are expanded with image grids.

- [ ] **Step 8: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble page with new sections and GSAP animations"
```

---

## Task 7: Responsive Adjustments

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: existing responsive breakpoints (1024px, 768px)
- Produces: responsive rules for new sections

- [ ] **Step 1: Add tablet breakpoint (1024px) rules**

Append inside the existing `@media (max-width: 1024px)` block:

```css
  .services-list { grid-template-columns: 1fr; gap: var(--sp-6); }
  .process-phase { grid-template-columns: 1fr; gap: var(--sp-3); }
  .logo-strip-row { gap: var(--sp-6); }
```

- [ ] **Step 2: Add mobile breakpoint (768px) rules**

Append inside the existing `@media (max-width: 768px)` block:

```css
  .services-list { grid-template-columns: 1fr; }
  .process-phase { grid-template-columns: 1fr; gap: var(--sp-3); }
  .logo-strip-row { flex-direction: column; gap: var(--sp-4); }
```

- [ ] **Step 3: Verify responsive behavior**

Run: `npm run dev`
Expected: Services cards stack vertically on mobile. Process phases stack vertically on mobile. Logo strip entries stack vertically on mobile. Archive cards go full-width on tablet (existing behavior).

- [ ] **Step 4: Commit**

```bash
git add app/globals.css
git commit -m "feat: add responsive rules for new sections"
```

---

## Final Verification

- [ ] **Step 1: Full build check**

Run: `npm run build`
Expected: No errors, no warnings related to new code.

- [ ] **Step 2: Visual verification**

Run: `npm run dev`
Check: Hero → Services covers Hero → Works normal flow → Process → Archive (morph from Process) → About (dark) → Logo Strip → Footer. All animations smooth. Nav dark mode works. Responsive at 1024px and 768px.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: portfolio sections — services, process, archive expansion, logo strip"
```
