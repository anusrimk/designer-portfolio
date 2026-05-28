# Anusri Karmokar Portfolio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page animated portfolio for Anusri Karmokar as three static files (index.html, style.css, script.js).

**Architecture:** All layout in HTML/CSS, all scroll animations via GSAP ScrollTrigger loaded from CDN. The morph transition uses a fixed `div.morph-shape` that scales from 0 to full viewport coverage. The Archive section uses GSAP `pin: true` to sticky-scroll with a timeline revealing items one by one.

**Tech Stack:** Vanilla HTML5, CSS custom properties, GSAP 3.12.5 + ScrollTrigger (CDN), Google Fonts (Playfair Display + Inter).

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | Full page markup — nav, hero, works, archive, about, contact, footer |
| `style.css` | Design tokens, layout, section styles, keyframe animations |
| `script.js` | GSAP ScrollTrigger setup, all scroll animations, nav color flip, hover interactions |

---

## Task 1: Project Scaffold

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `script.js`

- [ ] **Create `index.html` with full page structure**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anusri Karmokar — UI/UX & Graphic Designer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Fixed 5-column grid overlay -->
  <div class="grid-overlay" aria-hidden="true">
    <div class="grid-col"></div>
    <div class="grid-col"></div>
    <div class="grid-col"></div>
    <div class="grid-col"></div>
    <div class="grid-col"></div>
  </div>

  <!-- Circle that morphs to fill screen on scroll (Works → Archive) -->
  <div class="morph-shape" aria-hidden="true"></div>

  <!-- NAV -->
  <nav class="nav" id="nav">
    <a href="#" class="nav-logo"><em>anusri</em>.k</a>
    <div class="nav-links">
      <a href="#works">(Works)</a>
      <a href="#about">(About)</a>
      <a href="#contact">(Contact)</a>
    </div>
    <div class="nav-status"><span class="nav-asterisk">✳</span> Open to work</div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="hero-name">
      <span class="hero-name-serif">Anusri</span><span class="hero-name-sans">Karmokar</span>
    </div>
    <div class="hero-specialty">UI/UX · Graphic Design</div>
    <div class="hero-body">
      <div class="hero-desc">
        <span class="hero-plus">+</span>
        <p>Designer. Developer. Professional "this could look cooler" person.</p>
      </div>
      <div class="hero-image">
        <div class="hero-image-placeholder"><span>[ hero image ]</span></div>
      </div>
      <div class="hero-location">
        Mumbai, India<br>
        <em>Building since 2019.</em><br>
        Currently navigating<br>
        design &amp; 47 Figma drafts.
      </div>
    </div>
    <div class="hero-watermark" aria-hidden="true">Selected</div>
    <div class="hero-circle" aria-hidden="true"></div>
    <div class="scroll-indicator" aria-hidden="true"></div>
  </section>

  <!-- WORKS -->
  <section class="works" id="works">
    <div class="works-watermark" aria-hidden="true">Selected</div>
    <div class="works-header">
      <span class="works-year">2022 – 2025</span>
      <h2 class="works-title">Works</h2>
    </div>
    <div class="works-list">
      <a href="#" class="work-row">
        <span class="work-num">01</span>
        <span class="work-name">Winvesta</span>
        <span class="work-tag">UI/UX Lead</span>
        <div class="work-thumb"><span>[ project image ]</span></div>
      </a>
      <a href="#" class="work-row">
        <span class="work-num">02</span>
        <span class="work-name">Let's Upgrade</span>
        <span class="work-tag">UX Revamp</span>
        <div class="work-thumb"><span>[ project image ]</span></div>
      </a>
      <a href="#" class="work-row">
        <span class="work-num">03</span>
        <span class="work-name">12thClass.com</span>
        <span class="work-tag">Branding · UI</span>
        <div class="work-thumb"><span>[ project image ]</span></div>
      </a>
      <a href="#" class="work-row">
        <span class="work-num">04</span>
        <span class="work-name">BharatXR</span>
        <span class="work-tag">Design Systems</span>
        <div class="work-thumb"><span>[ project image ]</span></div>
      </a>
      <a href="#" class="work-row">
        <span class="work-num">05</span>
        <span class="work-name">Momentum Health Club</span>
        <span class="work-tag">Brand · Marketing</span>
        <div class="work-thumb"><span>[ project image ]</span></div>
      </a>
    </div>
  </section>

  <!-- DIGITAL ARCHIVE -->
  <section class="archive" id="archive">
    <div class="archive-watermark" aria-hidden="true">Digital</div>
    <div class="archive-header">
      <h2 class="archive-title">Archive</h2>
      <p class="archive-subtitle">Posters. Interfaces. Event branding. Midnight experiments.</p>
    </div>
    <div class="archive-items">
      <div class="archive-item">
        <div class="archive-item-image">
          <span>[ hackathon branding ]</span>
          <span class="archive-badge">(WIP)</span>
        </div>
        <div class="archive-item-body">
          <h3 class="archive-item-title">Hackathon Branding</h3>
          <p class="archive-item-desc">600+ participant events across Mumbai, Bangalore, Pune, Ahmedabad &amp; Chennai</p>
        </div>
      </div>
      <div class="archive-item">
        <div class="archive-item-image"><span>[ social creatives ]</span></div>
        <div class="archive-item-body">
          <h3 class="archive-item-title">Social &amp; Marketing Creatives</h3>
          <p class="archive-item-desc">Campaigns, posters, and motion for Momentum Health Club and more</p>
        </div>
      </div>
      <div class="archive-item">
        <div class="archive-item-image">
          <span>[ figma experiments ]</span>
          <span class="archive-badge">(WIP)</span>
        </div>
        <div class="archive-item-body">
          <h3 class="archive-item-title">Figma Explorations</h3>
          <p class="archive-item-desc">Components, systems, and yes — the 47 untitled drafts</p>
        </div>
      </div>
    </div>
    <div class="archive-circle" aria-hidden="true"></div>
  </section>

  <!-- ABOUT -->
  <section class="about" id="about">
    <div class="about-watermark" aria-hidden="true">About</div>
    <div class="about-body">
      <div class="about-photo">
        <div class="about-photo-placeholder"><span>[ your photo ]</span></div>
      </div>
      <div class="about-text">
        <p class="about-bio">
          I'm Anusri — a designer who codes, a developer who cares <em>way too much about spacing</em>, and someone who genuinely enjoys turning chaotic ideas into things people actually want to use.<br><br>
          Most of my work lives somewhere between design, tech, branding, storytelling, and community building. Currently with <em>JavaScript Mumbai</em> and designing for <em>Momentum Health Club</em>. Previously: BharatXR, Winvesta, Let's Upgrade, 12thclass.com.<br><br>
          I've managed hackathons with <em>600+ participants</em> across 5 cities — handling operations, branding, and making sure everything doesn't catch fire. And yes, I probably still have <em>47 untitled Figma drafts</em> open.
        </p>
        <div class="about-achievements">
          <span class="achievement-tag">Top 10 — PIWOT PanIIT 2025</span>
          <span class="achievement-tag">Top 4 — ISTD Hackathon</span>
          <span class="achievement-tag">Figma Contest Winner</span>
          <span class="achievement-tag">Best MERN Stack Website</span>
          <span class="achievement-tag">National Athlete — Archery &amp; Taekwondo</span>
          <span class="achievement-tag">600+ hackathon participants</span>
          <span class="achievement-tag">Speaker — MTW 2025</span>
        </div>
        <a href="#" class="about-resume">(Download Resume)</a>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact" id="contact">
    <p class="contact-intro">Whether it's a product, startup, community, campaign, or just an idea scribbled in Notes at 2AM — I'd love to hear about it.</p>
    <div class="contact-watermark" aria-hidden="true">Let's build something cool.</div>
    <div class="contact-links">
      <a href="mailto:yourmail@example.com" class="contact-link">(Email)</a>
      <a href="https://linkedin.com/in/anusrikarmokar" target="_blank" rel="noopener" class="contact-link">(LinkedIn)</a>
      <span class="contact-dot" aria-hidden="true"></span>
      <a href="https://figma.com/@yourhandle" target="_blank" rel="noopener" class="contact-link">(Figma)</a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener" class="contact-link">(GitHub)</a>
      <a href="#" class="contact-resume-pill">Download Resume ↓</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer" id="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <span class="footer-available"><span class="pulse-dot"></span> Currently available for projects</span>
      </div>
      <div class="footer-cta">
        <div class="footer-cta-text">
          <h2 class="footer-headline"><em>Let's build</em><br>something cool.</h2>
          <p class="footer-sub">Mumbai · UI/UX · Graphic Design</p>
          <div class="footer-links">
            <a href="mailto:yourmail@example.com">(Email)</a>
            <span class="footer-divider"></span>
            <a href="https://linkedin.com/in/anusrikarmokar" target="_blank" rel="noopener">(LinkedIn)</a>
            <span class="footer-divider"></span>
            <a href="https://figma.com/@yourhandle" target="_blank" rel="noopener">(Figma)</a>
            <span class="footer-divider"></span>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener">(GitHub)</a>
            <span class="footer-divider"></span>
            <a href="#" class="footer-resume-pill">Resume ↓</a>
          </div>
        </div>
        <!-- Replace .footer-character contents with a Lottie, SVG, or 3D embed later -->
        <div class="footer-character" aria-hidden="true">
          <div class="footer-char-anim">
            <div class="char-blob"></div>
            <div class="char-eye char-eye-l"></div>
            <div class="char-eye char-eye-r"></div>
          </div>
        </div>
      </div>
      <div class="footer-name-giant" aria-hidden="true">Anusri Karmokar</div>
    </div>
    <div class="footer-bar">
      <span>© 2025 Anusri Karmokar</span>
      <span>WIP 2019 – Present ✳</span>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Create empty `style.css` and `script.js`**

```css
/* style.css — to be filled in Tasks 2–8 */
```

```js
// script.js — to be filled in Tasks 9–15
```

- [ ] **Open `index.html` in browser, confirm it loads with no console errors and all text is visible (unstyled is fine)**

- [ ] **Commit**

```bash
git init
git add index.html style.css script.js
git commit -m "feat: scaffold portfolio HTML structure"
```

---

## Task 2: CSS Design System + Grid Overlay

**Files:**
- Modify: `style.css`

- [ ] **Write CSS root variables, reset, and grid overlay**

```css
/* =====================
   DESIGN TOKENS
   ===================== */
:root {
  --bg:            #F0ECE6;
  --bg-dark:       #1A1208;
  --bg-footer:     #0D0A07;
  --text:          #1A1208;
  --text-muted:    #6B5B45;
  --grid-line:     rgba(26, 18, 8, 0.07);
  --grid-line-dark: rgba(240, 236, 230, 0.07);
  --accent-green:  #5CDB6A;

  --font-serif:  'Playfair Display', Georgia, serif;
  --font-sans:   'Inter', system-ui, sans-serif;
}

/* =====================
   RESET
   ===================== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
}

img { display: block; max-width: 100%; }
a { text-decoration: none; color: inherit; }

/* =====================
   GRID OVERLAY (fixed 5-col)
   ===================== */
.grid-overlay {
  position: fixed;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  pointer-events: none;
  z-index: 900;
  transition: opacity 0.4s ease;
}

.grid-col {
  border-right: 1px solid var(--grid-line);
  transition: border-color 0.4s ease;
}

.grid-col:first-child { border-left: 1px solid var(--grid-line); }
.grid-col:last-child  { border-right: none; }

/* Dark variant — toggled by JS on dark sections */
body.on-dark .grid-col {
  border-color: var(--grid-line-dark);
}
body.on-dark .grid-col:first-child {
  border-color: var(--grid-line-dark);
}
```

- [ ] **Open browser, confirm 5 faint column lines are visible across the page**

- [ ] **Commit**

```bash
git add style.css
git commit -m "feat: add CSS design tokens and fixed grid overlay"
```

---

## Task 3: Navbar

**Files:**
- Modify: `style.css`

- [ ] **Add nav styles**

```css
/* =====================
   NAV
   ===================== */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  border-bottom: 1px solid var(--grid-line);
  background: var(--bg);
  z-index: 1000;
  transition: background 0.4s ease, border-color 0.4s ease;
}

.nav-logo {
  font-family: var(--font-sans);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--text);
  transition: color 0.4s ease;
}

.nav-logo em {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 14px;
}

.nav-links {
  display: flex;
  gap: 48px;
}

.nav-links a {
  font-size: 12px;
  color: var(--text);
  opacity: 0.65;
  transition: opacity 0.2s ease, color 0.4s ease;
  letter-spacing: 0.01em;
}

.nav-links a:hover { opacity: 1; }

.nav-status {
  font-size: 11px;
  color: var(--text);
  opacity: 0.55;
  letter-spacing: 0.03em;
  transition: color 0.4s ease;
}

.nav-asterisk { margin-right: 3px; }

/* Dark nav state — toggled by JS */
.nav.nav--dark {
  background: var(--bg-dark);
  border-color: var(--grid-line-dark);
}

.nav.nav--dark .nav-logo,
.nav.nav--dark .nav-links a,
.nav.nav--dark .nav-status {
  color: #F0ECE6;
}

.nav.nav--dark { border-color: var(--grid-line-dark); }
```

- [ ] **Open browser — confirm nav is fixed at top with logo, links, and status text**

- [ ] **Commit**

```bash
git add style.css
git commit -m "feat: style fixed navbar with dark-mode toggle class"
```

---

## Task 4: Hero Section

**Files:**
- Modify: `style.css`

- [ ] **Add hero styles**

```css
/* =====================
   HERO
   ===================== */
.hero {
  min-height: 100vh;
  padding: 56px 32px 0; /* offset for fixed nav */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Large mixed-type name */
.hero-name {
  padding-top: 12px;
  line-height: 0.88;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0 6px;
}

.hero-name-serif {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(56px, 10vw, 130px);
  color: var(--text);
  display: inline-block;
  overflow: hidden;
}

.hero-name-sans {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: clamp(56px, 10vw, 130px);
  color: var(--text);
  display: inline-block;
  overflow: hidden;
}

/* Each letter wrapped in .char span by JS */
.hero-name .char {
  display: inline-block;
}

.hero-specialty {
  position: absolute;
  top: 68px;
  right: 32px;
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

/* 4-column body below name */
.hero-body {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  gap: 0;
  margin-top: 40px;
  flex: 1;
  align-items: center;
  padding-bottom: 80px;
}

.hero-desc { align-self: flex-start; padding-top: 4px; }

.hero-plus {
  display: block;
  font-size: 18px;
  color: var(--text-muted);
  margin-bottom: 10px;
  line-height: 1;
}

.hero-desc p {
  font-size: 12px;
  line-height: 1.7;
  color: var(--text);
  opacity: 0.7;
  max-width: 180px;
}

.hero-image {
  grid-column: 2 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-placeholder {
  width: 280px;
  height: 220px;
  background: #D4C9BB;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(26, 18, 8, 0.1);
  font-size: 11px;
  color: var(--text-muted);
}

.hero-location {
  text-align: right;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 11px;
  line-height: 1.8;
  color: var(--text-muted);
  align-self: flex-end;
  padding-bottom: 4px;
}

/* "Selected" outline watermark */
.hero-watermark {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(100px, 16vw, 200px);
  -webkit-text-stroke: 1px rgba(26, 18, 8, 0.1);
  color: transparent;
  pointer-events: none;
  user-select: none;
  letter-spacing: -4px;
  line-height: 1;
}

.hero-circle {
  position: absolute;
  bottom: 80px;
  right: 32px;
  width: 32px;
  height: 32px;
  background: var(--bg-dark);
  border-radius: 50%;
}

.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: rgba(26, 18, 8, 0.2);
  border-radius: 2px;
}
```

- [ ] **Open browser — confirm hero has large name, description, image placeholder, location text, circle, and scroll indicator pill**

- [ ] **Commit**

```bash
git add style.css
git commit -m "feat: style hero section with mixed typography and grid layout"
```

---

## Task 5: Works Section

**Files:**
- Modify: `style.css`

- [ ] **Add works styles**

```css
/* =====================
   WORKS
   ===================== */
.works {
  padding: 0 32px 80px;
  position: relative;
  overflow: hidden;
  background: var(--bg);
}

/* "Selected" watermark behind Works header */
.works-watermark {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(100px, 16vw, 200px);
  -webkit-text-stroke: 1.5px rgba(26, 18, 8, 0.08);
  color: transparent;
  pointer-events: none;
  user-select: none;
  letter-spacing: -4px;
  line-height: 1;
}

.works-header {
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 120px 0 64px;
}

.works-year {
  display: block;
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  margin-bottom: 6px;
}

.works-title {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: clamp(40px, 6vw, 72px);
  color: var(--text);
  letter-spacing: -2px;
  line-height: 1;
}

/* Project list rows */
.works-list {
  position: relative;
  z-index: 2;
  border-top: 1px solid var(--grid-line);
}

.work-row {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid var(--grid-line);
  position: relative;
  transition: background 0.2s ease;
  cursor: pointer;
}

.work-row:hover .work-name {
  text-decoration: underline;
  text-underline-offset: 5px;
}

.work-num {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 12px;
  color: var(--text-muted);
  width: 32px;
  flex-shrink: 0;
}

.work-name {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: clamp(26px, 3.5vw, 48px);
  color: var(--text);
  flex: 1;
  letter-spacing: -1px;
  line-height: 1;
}

.work-tag {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.03em;
  flex-shrink: 0;
  margin-right: 8px;
}

/* Hover thumbnail — hidden by default, shown on hover via JS */
.work-thumb {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 180px;
  height: 100px;
  background: #C5B9A8;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: var(--text-muted);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  overflow: hidden;
  z-index: 5;
}

.work-row:hover .work-thumb { opacity: 1; }
```

- [ ] **Open browser — confirm 5 project rows with number, title, tag. Hover a row — thumbnail should fade in**

- [ ] **Commit**

```bash
git add style.css
git commit -m "feat: style works section list with hover thumbnail"
```

---

## Task 6: Digital Archive Section

**Files:**
- Modify: `style.css`

- [ ] **Add archive styles**

```css
/* =====================
   MORPH SHAPE (Works → Archive transition)
   ===================== */
.morph-shape {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 6vmax;
  height: 6vmax;
  border-radius: 50%;
  background: var(--bg-dark);
  transform: translate(-50%, -50%) scale(0);
  transform-origin: center center;
  z-index: 500;
  pointer-events: none;
  will-change: transform;
}

/* =====================
   ARCHIVE
   ===================== */
.archive {
  background: var(--bg-dark);
  position: relative;
  overflow: hidden;
  padding: 80px 32px 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.archive-watermark {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(100px, 18vw, 220px);
  -webkit-text-stroke: 1.5px rgba(240, 236, 230, 0.08);
  color: transparent;
  pointer-events: none;
  user-select: none;
  letter-spacing: -5px;
  line-height: 1;
}

.archive-header {
  text-align: center;
  position: relative;
  z-index: 2;
  margin-bottom: 64px;
}

.archive-title {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: clamp(40px, 6vw, 72px);
  color: #F0ECE6;
  letter-spacing: -2px;
  line-height: 1;
  margin-bottom: 8px;
}

.archive-subtitle {
  font-size: 12px;
  color: rgba(240, 236, 230, 0.4);
  font-style: italic;
}

/* 3-column items grid */
.archive-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--grid-line-dark);
  position: relative;
  z-index: 2;
}

.archive-item {
  border-right: 1px solid var(--grid-line-dark);
  padding-bottom: 32px;
  /* Initial state for GSAP animation */
  opacity: 0;
  transform: translateY(60px);
}

.archive-item:last-child { border-right: none; }

.archive-item-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #2A1E10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: rgba(240, 236, 230, 0.3);
  position: relative;
  overflow: hidden;
}

.archive-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(240, 236, 230, 0.1);
  color: rgba(240, 236, 230, 0.6);
  font-size: 9px;
  padding: 3px 8px;
  border-radius: 20px;
  border: 1px solid rgba(240, 236, 230, 0.15);
}

.archive-item-body { padding: 14px 16px 0; }

.archive-item-title {
  font-size: 14px;
  font-weight: 600;
  color: #F0ECE6;
  margin-bottom: 4px;
}

.archive-item-desc {
  font-size: 11px;
  color: rgba(240, 236, 230, 0.45);
  line-height: 1.6;
}

.archive-circle {
  position: absolute;
  bottom: 80px;
  right: 40px;
  width: 32px;
  height: 32px;
  background: rgba(240, 236, 230, 0.4);
  border-radius: 50%;
}
```

- [ ] **Open browser — confirm archive section is dark with watermark, title, 3-col item grid (items invisible initially — that's correct, GSAP will reveal them)**

- [ ] **Commit**

```bash
git add style.css
git commit -m "feat: style digital archive dark section"
```

---

## Task 7: About Section

**Files:**
- Modify: `style.css`

- [ ] **Add about styles**

```css
/* =====================
   ABOUT
   ===================== */
.about {
  padding: 80px 32px 100px;
  position: relative;
  overflow: hidden;
  background: var(--bg);
}

.about-watermark {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(100px, 18vw, 220px);
  -webkit-text-stroke: 1.5px rgba(26, 18, 8, 0.07);
  color: transparent;
  pointer-events: none;
  user-select: none;
  letter-spacing: -5px;
  line-height: 1;
}

.about-body {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 56px;
  position: relative;
  z-index: 2;
  margin-top: 100px;
}

.about-photo-placeholder {
  width: 100%;
  aspect-ratio: 3 / 4;
  background: #C5B9A8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: var(--text-muted);
}

.about-bio {
  font-size: 15px;
  line-height: 1.85;
  color: var(--text);
  opacity: 0.82;
}

.about-bio em {
  font-family: var(--font-serif);
  font-style: italic;
  opacity: 1;
  color: var(--text);
}

.about-achievements {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
}

.achievement-tag {
  font-size: 10px;
  color: var(--text);
  padding: 5px 13px;
  border: 1px solid rgba(26, 18, 8, 0.2);
  border-radius: 20px;
  white-space: nowrap;
  opacity: 0;        /* revealed by GSAP */
  transform: translateX(-10px);
}

.about-resume {
  display: inline-block;
  margin-top: 24px;
  font-size: 12px;
  color: var(--text);
  opacity: 0.5;
  border-bottom: 1px solid rgba(26, 18, 8, 0.3);
  padding-bottom: 2px;
  transition: opacity 0.2s ease;
}

.about-resume:hover { opacity: 1; }
```

- [ ] **Open browser — confirm About has photo placeholder left, bio text right, pills row (pills invisible initially)**

- [ ] **Commit**

```bash
git add style.css
git commit -m "feat: style about section with photo, bio, and achievement pills"
```

---

## Task 8: Contact + Footer

**Files:**
- Modify: `style.css`

- [ ] **Add contact and footer styles**

```css
/* =====================
   CONTACT
   ===================== */
.contact {
  padding: 80px 32px 60px;
  position: relative;
  overflow: hidden;
  background: var(--bg);
}

.contact-intro {
  font-size: 13px;
  color: var(--text-muted);
  font-style: italic;
  max-width: 380px;
  line-height: 1.7;
  margin-bottom: 16px;
  position: relative;
  z-index: 2;
}

.contact-watermark {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(40px, 7vw, 90px);
  -webkit-text-stroke: 1.5px rgba(26, 18, 8, 0.1);
  color: transparent;
  white-space: nowrap;
  margin: 0 -32px;
  letter-spacing: -2px;
  line-height: 1.1;
  pointer-events: none;
  user-select: none;
}

.contact-links {
  display: flex;
  align-items: center;
  gap: 36px;
  padding-top: 32px;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.contact-link {
  font-size: 13px;
  color: var(--text);
  opacity: 0.65;
  transition: opacity 0.2s ease;
}

.contact-link:hover { opacity: 1; }

.contact-dot {
  width: 26px;
  height: 26px;
  background: var(--bg-dark);
  border-radius: 50%;
  flex-shrink: 0;
}

.contact-resume-pill {
  font-size: 11px;
  color: var(--text);
  border: 1px solid rgba(26, 18, 8, 0.25);
  padding: 6px 16px;
  border-radius: 20px;
  transition: background 0.2s ease, color 0.2s ease;
  margin-left: auto;
}

.contact-resume-pill:hover {
  background: var(--text);
  color: var(--bg);
}

/* =====================
   FOOTER
   ===================== */
.footer {
  background: var(--bg-footer);
  color: #F0ECE6;
  overflow: hidden;
}

.footer-inner {
  padding: 56px 40px 0;
  position: relative;
}

.footer-top {
  margin-bottom: 40px;
}

.footer-available {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: rgba(240, 236, 230, 0.45);
  letter-spacing: 0.06em;
}

/* Pulsing green dot */
.pulse-dot {
  width: 7px;
  height: 7px;
  background: var(--accent-green);
  border-radius: 50%;
  animation: pulseGreen 2s ease-in-out infinite;
}

@keyframes pulseGreen {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.85); }
}

/* CTA row: headline left, character right */
.footer-cta {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
}

.footer-headline {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: clamp(36px, 6vw, 80px);
  color: #F0ECE6;
  line-height: 1.0;
  letter-spacing: -2px;
  margin-bottom: 16px;
}

.footer-headline em {
  font-style: italic;
  font-weight: 400;
}

.footer-sub {
  font-size: 11px;
  color: rgba(240, 236, 230, 0.35);
  letter-spacing: 0.05em;
  margin-bottom: 24px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-links a {
  font-size: 12px;
  color: rgba(240, 236, 230, 0.5);
  transition: color 0.2s ease;
}

.footer-links a:hover { color: #F0ECE6; }

.footer-divider {
  width: 1px;
  height: 13px;
  background: rgba(240, 236, 230, 0.15);
}

.footer-resume-pill {
  border: 1px solid rgba(240, 236, 230, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 11px !important;
}

/* Animated character placeholder */
.footer-character {
  flex-shrink: 0;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* CSS blob character — replace with Lottie/SVG later */
.footer-char-anim {
  position: relative;
  width: 120px;
  height: 120px;
  animation: charFloat 4s ease-in-out infinite;
}

@keyframes charFloat {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}

.char-blob {
  width: 100px;
  height: 100px;
  background: rgba(240, 236, 230, 0.08);
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 55%;
  position: absolute;
  top: 10px;
  left: 10px;
  animation: blobMorph 6s ease-in-out infinite;
  border: 1px solid rgba(240, 236, 230, 0.15);
}

@keyframes blobMorph {
  0%, 100% { border-radius: 60% 40% 55% 45% / 50% 60% 40% 55%; }
  33%       { border-radius: 40% 60% 45% 55% / 60% 40% 55% 45%; }
  66%       { border-radius: 55% 45% 60% 40% / 40% 55% 50% 60%; }
}

.char-eye {
  width: 8px;
  height: 8px;
  background: rgba(240, 236, 230, 0.6);
  border-radius: 50%;
  position: absolute;
  top: 40px;
  animation: blink 5s ease-in-out infinite;
}

@keyframes blink {
  0%, 90%, 100% { transform: scaleY(1); }
  95%            { transform: scaleY(0.1); }
}

.char-eye-l { left: 32px; }
.char-eye-r { left: 56px; animation-delay: 0.1s; }

/* Giant outlined name — bleeds off both edges */
.footer-name-giant {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(60px, 10vw, 140px);
  -webkit-text-stroke: 1px rgba(240, 236, 230, 0.1);
  color: transparent;
  white-space: nowrap;
  letter-spacing: var(--footer-name-spacing, -4px);
  line-height: 1;
  margin: 0 -40px;
  pointer-events: none;
  user-select: none;
  will-change: letter-spacing;
}

.footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 40px;
  border-top: 1px solid rgba(240, 236, 230, 0.07);
  margin-top: 0;
}

.footer-bar span {
  font-size: 10px;
  color: rgba(240, 236, 230, 0.22);
}
```

- [ ] **Open browser — confirm contact section with watermark text, links row; footer with headline, character blob (floating), and giant outlined name bleeding off edges**

- [ ] **Commit**

```bash
git add style.css
git commit -m "feat: style contact section and footer with animated character"
```

---

## Task 9: GSAP Setup + Hero Name Entrance

**Files:**
- Modify: `script.js`

- [ ] **Write GSAP setup, text splitter helper, and hero name entrance animation**

```js
// script.js

gsap.registerPlugin(ScrollTrigger);

/* ─── HELPER: wrap each character in a span ─── */
function splitChars(el) {
  const text = el.textContent;
  el.textContent = '';
  for (const char of text) {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = char === ' ' ? ' ' : char;
    span.style.display = 'inline-block';
    el.appendChild(span);
  }
}

/* ─── HERO NAME ENTRANCE ─── */
function initHeroEntrance() {
  const serif = document.querySelector('.hero-name-serif');
  const sans  = document.querySelector('.hero-name-sans');

  splitChars(serif);
  splitChars(sans);

  const chars = document.querySelectorAll('.hero-name .char');

  gsap.fromTo(chars,
    { y: '110%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.035,
      delay: 0.2,
    }
  );

  /* Fade in hero supporting elements after name */
  gsap.fromTo(
    ['.hero-specialty', '.hero-desc', '.hero-image-placeholder', '.hero-location', '.hero-circle', '.scroll-indicator'],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.1, delay: 0.8 }
  );
}

initHeroEntrance();
```

- [ ] **Open browser — confirm name letters stagger in from below on page load**

- [ ] **Commit**

```bash
git add script.js
git commit -m "feat: GSAP hero name stagger entrance animation"
```

---

## Task 10: Watermark Parallax + Section Reveals

**Files:**
- Modify: `script.js`

- [ ] **Append watermark parallax and works/about section reveal animations**

```js
/* ─── WATERMARK PARALLAX (all sections) ─── */
function initWatermarks() {
  document.querySelectorAll(
    '.hero-watermark, .works-watermark, .archive-watermark, .about-watermark'
  ).forEach(el => {
    gsap.to(el, {
      y: '-30%',
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') || el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  });
}

/* ─── WORKS ROWS STAGGER ─── */
function initWorksReveal() {
  gsap.fromTo('.work-row',
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.works-list',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    }
  );
}

/* ─── ABOUT SECTION REVEAL ─── */
function initAboutReveal() {
  gsap.fromTo(
    ['.about-photo-placeholder', '.about-bio'],
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.about-body',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    }
  );

  /* Achievement pills stagger left → right */
  gsap.fromTo('.achievement-tag',
    { opacity: 0, x: -14 },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.07,
      scrollTrigger: {
        trigger: '.about-achievements',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      }
    }
  );
}

initWatermarks();
initWorksReveal();
initAboutReveal();
```

- [ ] **Open browser, scroll to Works — rows should stagger in. Scroll to About — photo/bio fade in, pills appear left-to-right**

- [ ] **Commit**

```bash
git add script.js
git commit -m "feat: watermark parallax, works stagger, and about reveal animations"
```

---

## Task 11: Archive Morph Transition + Sticky Scroll

**Files:**
- Modify: `script.js`

- [ ] **Append morph transition and archive sticky scroll animations**

```js
/* ─── MORPH TRANSITION: Works → Archive ─── */
function initMorphTransition() {
  const morph = document.querySelector('.morph-shape');

  gsap.timeline({
    scrollTrigger: {
      trigger: '#works',
      start: 'bottom 65%',
      end: 'bottom top',
      scrub: 1.5,
    }
  })
  .to(morph, {
    scale: 60,            /* 6vmax × 60 = 360vmax — covers any screen */
    ease: 'power2.inOut',
    duration: 1,
  })
  .to(morph, {
    opacity: 0,           /* fade out once archive bg takes over */
    duration: 0.3,
  }, '-=0.1');
}

/* ─── ARCHIVE STICKY SCROLL ─── */
function initArchivePin() {
  const items = gsap.utils.toArray('.archive-item');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#archive',
      pin: true,
      start: 'top top',
      end: `+=${items.length * 100}%`,
      scrub: 1,
    }
  });

  items.forEach((item, i) => {
    tl.to(item,
      { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
      i * 0.4           /* stagger each item along the timeline */
    );
  });
}

initMorphTransition();
initArchivePin();
```

- [ ] **Open browser, scroll past Works — dark circle should erupt from center and fill the viewport, then Archive section pins and reveals its 3 items one by one as you scroll**

- [ ] **Commit**

```bash
git add script.js
git commit -m "feat: circle morph transition and archive sticky scroll with GSAP"
```

---

## Task 12: Footer Giant Name Letter-Spacing Animation

**Files:**
- Modify: `script.js`

- [ ] **Append footer name letter-spacing expansion animation**

```js
/* ─── FOOTER GIANT NAME: letter-spacing expand on scroll ─── */
function initFooterName() {
  const nameEl = document.querySelector('.footer-name-giant');

  /* Use a proxy object because GSAP can't tween CSS custom properties directly on older builds */
  const proxy = { spacing: -4 };

  gsap.to(proxy, {
    spacing: 2,
    ease: 'none',
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 90%',
      end: 'top 20%',
      scrub: 1.5,
      onUpdate: () => {
        nameEl.style.letterSpacing = proxy.spacing + 'px';
      }
    }
  });
}

initFooterName();
```

- [ ] **Open browser, scroll to footer — the giant "Anusri Karmokar" outline text should expand its letter-spacing as it enters view**

- [ ] **Commit**

```bash
git add script.js
git commit -m "feat: footer giant name letter-spacing scroll animation"
```

---

## Task 13: Nav Color Flip

**Files:**
- Modify: `script.js`

- [ ] **Append nav color flip via IntersectionObserver on dark sections**

```js
/* ─── NAV COLOR FLIP ─── */
function initNavColorFlip() {
  const nav     = document.getElementById('nav');
  const body    = document.body;
  const darkEls = document.querySelectorAll('#archive, #footer');

  const observer = new IntersectionObserver(
    entries => {
      const anyDark = [...darkEls].some(el => {
        const rect = el.getBoundingClientRect();
        return rect.top <= 56 && rect.bottom > 56;   /* overlapping with nav height */
      });

      if (anyDark) {
        nav.classList.add('nav--dark');
        body.classList.add('on-dark');
      } else {
        nav.classList.remove('nav--dark');
        body.classList.remove('on-dark');
      }
    },
    { threshold: 0, rootMargin: '-56px 0px 0px 0px' }   /* trigger at nav bottom */
  );

  darkEls.forEach(el => observer.observe(el));
}

initNavColorFlip();
```

- [ ] **Open browser, scroll into Archive and Footer — nav text and background should flip to dark. Scroll back up — should flip back to light**

- [ ] **Commit**

```bash
git add script.js
git commit -m "feat: nav color flip via IntersectionObserver on dark sections"
```

---

## Task 14: Responsive Breakpoints

**Files:**
- Modify: `style.css`

- [ ] **Append responsive styles at end of `style.css`**

```css
/* =====================
   RESPONSIVE
   ===================== */
@media (max-width: 768px) {
  /* Nav */
  .nav { padding: 0 20px; }
  .nav-links { gap: 20px; }
  .nav-links a { font-size: 11px; }
  .nav-status { display: none; }

  /* Hero */
  .hero { padding: 56px 20px 0; }
  .hero-name { gap: 0 3px; }
  .hero-name-serif,
  .hero-name-sans { font-size: clamp(36px, 12vw, 60px); }
  .hero-specialty { display: none; }

  .hero-body {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 24px;
  }
  .hero-image { grid-column: 1; }
  .hero-image-placeholder { width: 100%; height: 200px; }
  .hero-location { text-align: left; align-self: auto; }

  /* Works */
  .works { padding: 0 20px 60px; }
  .work-name { font-size: clamp(22px, 6vw, 32px); }
  .work-thumb { display: none; } /* thumbnails off on mobile */

  /* Archive — disable pin on mobile, too heavy */
  .archive { padding: 60px 20px 80px; min-height: auto; }
  .archive-items { grid-template-columns: 1fr; }
  .archive-item {
    border-right: none;
    border-bottom: 1px solid var(--grid-line-dark);
    opacity: 1 !important;           /* override GSAP initial state */
    transform: none !important;
  }
  .archive-item:last-child { border-bottom: none; }

  /* About */
  .about { padding: 60px 20px 80px; }
  .about-body { grid-template-columns: 1fr; gap: 32px; margin-top: 80px; }
  .about-photo-placeholder { width: 100%; }

  /* Contact */
  .contact { padding: 60px 20px 40px; }
  .contact-links { gap: 20px; }
  .contact-resume-pill { margin-left: 0; }
  .contact-watermark { font-size: clamp(28px, 8vw, 50px); margin: 0 -20px; }

  /* Footer */
  .footer-inner { padding: 40px 20px 0; }
  .footer-cta { flex-direction: column; align-items: flex-start; gap: 32px; }
  .footer-character { align-self: flex-end; }
  .footer-name-giant { font-size: clamp(40px, 12vw, 80px); margin: 0 -20px; }
  .footer-bar { padding: 14px 20px; }

  /* Grid overlay — thinner on mobile */
  .grid-overlay { opacity: 0.6; }
}

@media (max-width: 480px) {
  .works-title,
  .archive-title { font-size: 36px; }
  .footer-headline { font-size: clamp(28px, 9vw, 50px); }
  .nav-links { gap: 12px; }
  .achievement-tag { font-size: 9px; padding: 4px 10px; }
}
```

- [ ] **Resize browser to 375px width — confirm hero is readable, works list is single column, archive shows items without animation, footer is stacked**

- [ ] **Commit**

```bash
git add style.css
git commit -m "feat: responsive breakpoints for mobile (768px and 480px)"
```

---

## Task 15: Mobile Archive Animation Disable

**Files:**
- Modify: `script.js`

- [ ] **Guard all heavy GSAP scroll animations behind a desktop-only check, then add final scroll setup call**

Wrap the `initArchivePin` and `initMorphTransition` calls with a media query check, and call `ScrollTrigger.refresh()` after everything is set up:

```js
/* ─── MOBILE GUARD ─── */
/* Re-write the bottom of script.js so it reads like this: */

initHeroEntrance();
initWatermarks();
initWorksReveal();
initAboutReveal();
initFooterName();
initNavColorFlip();

/* Heavy scroll effects — desktop only */
if (window.matchMedia('(min-width: 769px)').matches) {
  initMorphTransition();
  initArchivePin();
}

/* Let GSAP re-measure after all images/fonts have loaded */
window.addEventListener('load', () => ScrollTrigger.refresh());
```

Replace the existing function calls at the bottom of `script.js` with the block above.

- [ ] **Open browser at both desktop and 375px — on desktop all animations run; on mobile Archive items are visible and no pinning occurs**

- [ ] **Commit**

```bash
git add script.js
git commit -m "feat: guard heavy GSAP animations behind desktop media query"
```

---

## Self-Review Checklist

**Spec coverage:**
- [x] Warm parchment palette — Task 2
- [x] Fixed 5-col grid overlay — Task 2
- [x] Nav with dark flip — Tasks 3, 13
- [x] Hero name stagger entrance — Task 9
- [x] Hero: name, specialty, description, image, location, circle, scroll indicator — Task 4
- [x] Works: title list + hover thumbnail, 5 projects — Task 5
- [x] Watermark parallax on all sections — Task 10
- [x] Archive morph circle transition — Task 11
- [x] Archive sticky pin + item-by-item reveal — Task 11
- [x] About: photo, bio, achievements pills stagger — Tasks 7, 10
- [x] Contact: watermark text, links row — Task 8
- [x] Footer: headline, pulsing dot, character blob, giant name letter-spacing — Tasks 8, 12
- [x] Responsive — Tasks 14, 15

**No placeholders** — all code blocks are complete and reference defined class names.

**Type consistency** — `initMorphTransition`, `initArchivePin`, `initHeroEntrance`, `initWatermarks`, `initWorksReveal`, `initAboutReveal`, `initFooterName`, `initNavColorFlip` are defined before they are called. All CSS class names match exactly between `index.html`, `style.css`, and `script.js`.
