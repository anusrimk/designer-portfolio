# Anusri Karmokar — Portfolio Design Spec
**Date:** 2026-05-28  
**Status:** Approved for implementation

---

## 1. Overview

A single-page designer portfolio for **Anusri Karmokar** — UI/UX & Graphic Designer. Inspired by the editorial, grid-based vibe of sahor.dzn but with a warmer palette, heavier animations, and Anusri's distinct voice.

**Tech stack:** Vanilla HTML/CSS/JS + **GSAP ScrollTrigger** for all scroll-based animations.  
**Deployment:** Static — no build step required. Single `index.html` + `style.css` + `script.js`.

---

## 2. Design Tokens

### Colors
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#F0ECE6` | Main background (warm parchment) |
| `--bg-dark` | `#1A1208` | Archive section, nav on dark, footer |
| `--bg-footer` | `#0D0A07` | Footer background (deeper dark) |
| `--text` | `#1A1208` | Primary text |
| `--text-muted` | `#6B5B45` | Secondary text, descriptions |
| `--grid-line` | `rgba(26,18,8,0.07)` | Column dividers (light sections) |
| `--grid-line-dark` | `rgba(240,236,230,0.07)` | Column dividers (dark sections) |
| `--accent-green` | `#5CDB6A` | Availability pulse dot |

### Typography
| Role | Font | Weight | Style |
|---|---|---|---|
| Hero name (first) | Playfair Display | 400 | Italic serif |
| Hero name (last) | Inter | 900 | Bold sans |
| Section watermark | Playfair Display | 700 | Italic, -webkit-text-stroke only |
| Body | Inter | 400 | Regular |
| Nav / labels | Inter | 400–500 | Small, tracked |
| Footer CTA | Playfair Display | 700 | Italic |
| Footer giant name | Playfair Display | 700 | Italic, stroke-only |

### Grid
- 5 equal columns with `1px` vertical dividers via a fixed `position: fixed` overlay div
- Dividers change opacity based on light vs dark section (detected via IntersectionObserver)
- Horizontal rule under navbar only

---

## 3. Page Structure

```
┌─────────────────────────────────┐
│  NAV (fixed)                    │
├─────────────────────────────────┤
│  HERO                           │
├─────────────────────────────────┤
│  WORKS                          │
├─────────────────────────────────┤
│  ↓ MORPH TRANSITION             │  ← shape erupts and fills screen dark
├─────────────────────────────────┤
│  DIGITAL ARCHIVE (sticky)       │
├─────────────────────────────────┤
│  ABOUT                          │
├─────────────────────────────────┤
│  CONTACT                        │
├─────────────────────────────────┤
│  FOOTER                         │
└─────────────────────────────────┘
```

---

## 4. Section Specs

### 4.1 Navbar (fixed)
- `position: fixed; top: 0; z-index: 1000`
- Height: `56px`, border-bottom: `--grid-line`
- Layout: `logo | [spacer] | (Works) (About) (Contact) | [spacer] | ✳ Open to work`
- Logo: `anusri.k` — "anusri" in Playfair italic, ".k" in Inter regular
- Nav links in parentheses: `(Works)`, `(About)`, `(Contact)`
- **Color flip:** when scrolling over Archive/footer sections, nav text turns `#F0ECE6` via IntersectionObserver on those dark sections

---

### 4.2 Hero
- Full viewport height (`100vh`)
- **Name:** `Anusri` (Playfair italic, ~10vw) + `Karmokar` (Inter 900, ~10vw) — flush left, runs nearly full width
- **Specialty tag:** `UI/UX · Graphic Design` — top right, small, `--text-muted`
- **Grid body** (below name, 4-col):
  - Col 1: `+` marker + tagline: *"Designer. Developer. Professional 'this could look cooler' person."*
  - Col 2–3: Floating image/object (placeholder `div` for user-supplied image)
  - Col 4: Location text in Playfair italic — *"Mumbai, India / Building since 2019 / Currently navigating / design & 47 Figma drafts"*
- **Watermark:** `Selected` in Playfair italic, stroke-only, ~140px, absolute positioned, bleeds below fold — parallax on scroll (moves up slower than scroll). This is a separate element from the Works watermark but uses the same word intentionally — creates a visual echo as the user scrolls from Hero into Works
- **Dark circle:** `32px`, `background: --bg-dark`, `border-radius: 50%`, absolute bottom-right of content area
- **Scroll indicator:** 40×3px pill, bottom-center

---

### 4.3 Works

**Section header:**
- `Selected` as giant outline italic watermark (same treatment as Hero)
- Below: `2022–2025` small label + `Works` in Inter 900, 52px

**Project list (B layout — large title list + hover preview):**

Each row:
```
[01]  Winvesta                          [UI/UX Lead]   [ hover image ]
      ─────────────────────────────────────────────────────────────────
[02]  Let's Upgrade                     [UX Revamp]    [ hover image ]
```

- 5 projects: Winvesta, Let's Upgrade, 12thClass.com, BharatXR, Momentum Health Club
- Project title: Inter 900, ~36px, `--text`
- Number: Playfair italic, small, `--text-muted`
- Tag: small, right-aligned, `--text-muted`
- **Hover:** thumbnail image (180×100px placeholder) fades in on the right; title gets a subtle underline
- Row separator: `1px` `--grid-line`
- Click: navigates to case study (placeholder `#` for now)

---

### 4.4 Archive Transition (Morph Animation)

Triggered when user scrolls to the bottom of Works. Implemented with **GSAP ScrollTrigger**.

**Sequence:**
1. A `div.morph-shape` (initially `width: 0, height: 0, border-radius: 50%`) is positioned center-screen
2. On ScrollTrigger pin: shape scales from 0 → covers 120vmax, `background: --bg-dark`
3. As shape grows, the `Works` section content fades out
4. At 100% fill: Archive section becomes visible
5. Shape div is removed from flow; Archive section takes over

**Shape choice:** Circle (per storyboard). Can optionally be swapped to trapezoid via a single CSS `clip-path` change.

---

### 4.5 Digital Archive (Sticky Scroll)

**Behavior:**
- Section is **pinned** (`ScrollTrigger pin: true`) for the full duration of its content reveal
- Background: `--bg-dark`, with `Digital` outline watermark + `Archive` bold title — **stays fixed**
- Content items scroll up into view one by one as user scrolls through the pinned section
- 3 archive items (initially):
  1. Hackathon Branding (event visuals, 5 cities)
  2. Social & Marketing Creatives (Momentum, posters)
  3. Figma Explorations (components, untitled drafts)
- Each item: dark card with image placeholder, title, short description, optional `(WIP)` badge
- **Unstick:** after all items visible, section unpins and normal scroll resumes into About

**Archive grid:** 3-column for items, same column divider system (dark variant)

**Archive circle:** 32px light-toned circle, bottom-right, echoes hero circle

---

### 4.6 About

- **Watermark:** `About` in giant Playfair italic stroke, parallax on scroll
- **Body grid:** photo (left, 3/4 aspect ratio placeholder) + text (right)
- **Bio text** (condensed from provided content):  
  *"I'm Anusri — a designer who codes, a developer who cares way too much about spacing, and someone who genuinely enjoys turning chaotic ideas into things people actually want to use. Currently with JavaScript Mumbai and Momentum Health Club. Previously: BharatXR, Winvesta, Let's Upgrade, 12thclass.com. I've managed hackathons with 600+ participants across 5 cities. And yes, I probably still have 47 untitled Figma drafts open."*
- **Italic highlights:** `way too much about spacing`, `JavaScript Mumbai`, `Momentum Health Club`, `600+ participants`, `47 untitled Figma drafts`
- **Achievements pills** (flex-wrap row):
  - Top 10 — PIWOT PanIIT 2025
  - Top 4 — ISTD Hackathon
  - Figma Contest Winner
  - Best MERN Stack Website
  - National Athlete — Archery & Taekwondo
  - 600+ hackathon participants
- **Download Resume** link — `(Download Resume)` in parentheses, underline style

---

### 4.7 Contact

- **Intro text:** *"Whether it's a product, startup, community, campaign, or just an idea scribbled in Notes at 2AM — I'd love to hear about it."* — small, italic, `--text-muted`
- **Giant outline text:** `Let's build something cool.` — Playfair italic, stroke-only, ~90px, bleeds off edges
- **Links row:** `(Email)` · `(LinkedIn)` · `●` (dark circle) · `(Figma)` · `(GitHub)` · `[Download Resume ↓]` pill
- Links open in new tab; email uses `mailto:`

---

### 4.8 Footer

**Layout (top → bottom):**

```
┌─────────────────────────────────────────┐
│  ✳ Currently available for projects     │  ← small label
│                                         │
│  Let's build                            │  ← Playfair italic, ~80px
│  something cool.                        │
│                                         │
│  Mumbai · UI/UX · Graphic Design        │  ← small muted
│                                         │
│  (Email) | (LinkedIn) | (Figma) | (GitHub) | [Resume ↓]  │
│                                         │
│  [ ANIMATED CHARACTER PLACEHOLDER ]     │  ← right-aligned, ~200px wide
│                                         │
│  ───────────────────────────────────── │
│                                         │
│  ANUSRI KARMOKAR  ← giant stroke name  │  ← Playfair italic, bleeds both edges
│                                         │
│  © 2025 Anusri Karmokar   WIP 2019–Present ✳  │
└─────────────────────────────────────────┘
```

**Animated character:**
- Placeholder `div.footer-character` at bottom-right of the "above giant name" area
- Size: ~200×200px
- Will accept: Lottie JSON, SVG animation, CSS character, or 3D embed
- For now: an animated CSS element (bouncing dot / abstract shape) to keep the space alive

**Giant name:**
- `Anusri Karmokar` in Playfair italic, 700, ~120–140px
- `-webkit-text-stroke: 1px rgba(240,236,230,0.12)`, `color: transparent`
- Overflows both left and right edges (negative horizontal margins)
- Subtle scroll-based letter-spacing animation: as user scrolls into footer, letters expand from condensed → normal tracking (GSAP)

---

## 5. Global Animations

| Element | Trigger | Animation |
|---|---|---|
| Section watermarks | Scroll into view | Fade in + slight upward parallax (moves at 0.6x scroll speed) |
| Hero name | Page load | Letters stagger in from bottom, 0.05s delay per char (GSAP SplitText or manual spans) |
| Nav color flip | Dark section enters viewport | Smooth color transition 0.3s |
| Works rows | Scroll into view | Stagger fade-in from bottom, 0.08s between rows |
| Archive morph | Scroll to Works end | Circle scale 0 → 120vmax, 0.8s ease-in-out |
| Archive items | Pinned scroll steps | Each item slides up + fades in as user scrolls through pin |
| Footer giant name | Scroll into footer | Letter-spacing expands from `-4px` → `0px` |
| Achievement pills | About scrolls in | Stagger fade-in left→right |
| Hover: Works rows | mouseenter | Thumbnail fades in (opacity 0 → 1, 0.2s) |
| Hover: Nav links | mouseenter | Subtle underline slide-in |

---

## 6. Responsive

- Desktop-first (portfolio audience is primarily desktop)
- Mobile: grid collapses, font sizes clamp, sticky Archive becomes a normal scroll section (parallax disabled below 768px — too heavy for mobile)
- Nav: hamburger menu on mobile

---

## 7. Assets (Placeholders)

All images are styled placeholder `div`s. User will supply:
- Hero floating image
- 5 Works project images (16:9 ratio preferred)
- 3 Archive item images
- About photo (portrait, ~3:4)
- Footer animated character (Lottie / SVG / CSS)
- Resume PDF

---

## 8. Out of Scope

- Individual case study pages (links go to `#` for now)
- CMS / dynamic content
- Contact form (links go directly to email/social)
- Dark mode toggle
