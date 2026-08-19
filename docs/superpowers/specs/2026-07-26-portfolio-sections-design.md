# Portfolio Sections Design Spec

**Date:** 2026-07-26
**Status:** Approved
**Scope:** Add 4 new sections to the existing single-page portfolio, modify Works section behavior

---

## Summary

Add Services, Process, expand Archive, and add Logo Strip to the portfolio. Services takes over the Works section's "covering Hero" effect. Works loses its overlap behavior and scrolls normally. All new sections use simple stagger-in animations for now.

## Scroll Sequence (Final)

```
Hero (L) → Services (L, covers Hero) → Works (L, normal flow) → Process (L) → Archive (D, morph from Process) → About (D) → Logo strip (D) → Footer (D)
```

3 light sections, then 3 dark sections. The morph shape transitions from Process (light) into Archive (dark). Works and Archive stay in their current positions and keep their colors. About moves to dark.

---

## Section 1: Services

**Position:** After Hero, before Works
**Tone:** Light (#F0ECE6)
**Purpose:** Show design capabilities before the recruiter sees projects

### Behavior

- Covers Hero with the same technique Works currently uses: `z-index: 2`, `margin-top: -60px`, `border-radius: 24px 24px 0 0`, `box-shadow: 0 -16px 48px rgba(26,18,8,0.08)`
- 3 service cards in a horizontal row (desktop), stacking on mobile
- Cards stagger-in on scroll (GSAP ScrollTrigger)

### Content

Three cards, each with:
- Service title (Outfit 700)
- Description paragraph (1-2 sentences)

| Service | Title | Description |
|---------|-------|-------------|
| 1 | UI/UX Design | Product interfaces, user research, and interaction design. From wireframes to polished prototypes that ship. |
| 2 | Graphic Design | Visual identity, event branding, and marketing creatives. Systems that scale across formats and platforms. |
| 3 | Design Systems | Component libraries, design tokens, and documentation. Consistent UI that teams can build from. |

### Watermark

Giant faded "Capabilities" behind the section (same watermark motif as existing sections).

### CSS

```css
.services {
  position: relative;
  z-index: 2;
  margin-top: -60px;
  border-radius: 24px 24px 0 0;
  box-shadow: 0 -16px 48px rgba(26, 18, 8, 0.08);
  background: var(--bg);
  padding: var(--pad-y-sm) var(--pad-x) var(--pad-y-md);
  overflow: hidden;
}
```

### Component

New file: `components/Services.tsx`

---

## Section 2: Works (Modified)

**Position:** After Services, before Process
**Tone:** Light (#F0ECE6) — unchanged
**Purpose:** Project showcase — unchanged

### Changes

Remove the overlapping/covering behavior:

| Property | Current | New |
|----------|---------|-----|
| z-index | 2 | default (auto) |
| margin-top | -60px | 0 |
| border-radius | 24px 24px 0 0 | 0 |
| box-shadow | 0 -16px 48px ... | none |

Works now scrolls in normal document flow below Services.

### CSS

```css
.works {
  padding: var(--pad-y-sm) var(--pad-x) var(--pad-y-md);
  position: relative;
  overflow: hidden;
  background: var(--bg);
}
```

### Content

No changes to the 5 project rows or their data.

### Watermark

"Selected" watermark stays, parallax animation stays.

---

## Section 3: Process

**Position:** After Works, before Archive
**Tone:** Light (#F0ECE6)
**Purpose:** Show design method — how you think, not just what you ship

### Behavior

- Full-width section, light background
- 3 numbered phases, each fades in on scroll (simple stagger for now)
- GSAP entrance: stagger-in (same pattern as Works rows)

### Content

Each phase has:
- Phase number (small, green accent `#5CDB6A`)
- Phase title (Outfit 700)
- Philosophy line (Playfair italic — typographic signature)
- Description paragraph

| # | Title | Philosophy | Description |
|---|-------|-----------|-------------|
| 1 | Understand | "Design starts before Figma opens." | Research, stakeholder conversations, and problem framing. I dig into who this is for, what success looks like, and what constraints actually matter before touching a tool. |
| 2 | Explore | "Thirty bad ideas before one good one." | Sketches, wireframes, rapid prototyping. I work through multiple directions fast — discarding more than I keep — because the first idea is almost never the best one. |
| 3 | Ship | "If it doesn't ship, it's not design." | Handoff, iteration, and collaboration with engineering. I stay involved through implementation because the gap between mockup and production is where good design dies. |

### Watermark

Giant faded "Process" behind the section.

### Component

New file: `components/Process.tsx`

---

## Section 4: Archive (Expanded)

**Position:** After Process, before About
**Tone:** Dark (#0D0A07) — unchanged
**Purpose:** Showcase graphic design / branding work with visual depth

### Behavior

- Same pin/scroll animation (GSAP pinned timeline, items scroll up one by one)
- Same alternating left/right card positions
- Same "Archive" title + "Digital" watermark behind

### Changes Per Card

Each card expands from a compact card to a richer block:

| Element | Current | New |
|---------|---------|-----|
| Heading | Title only | Numbered heading (01, 02, 03) + title |
| Detail line | None | Subtitle (e.g. "5 cities / 600+ participants / 2022–2024") |
| Description | One-liner | Expanded paragraph |
| Images | Single placeholder | 2×2 image grid (4 images per category) |

### Content

| # | Title | Detail | Description |
|---|-------|--------|-------------|
| 1 | Hackathon Branding | 5 cities / 600+ participants / 2022–2024 | Event visuals, identity system, and assets for hackathons across 5 cities. Logo variants, stage backdrops, social media kits, and branded merch — each event got its own visual identity while staying within a cohesive system. |
| 2 | Social & Marketing Creatives | Momentum Health Club / ongoing | Posters, motion graphics, and campaign assets for Momentum Health Club and other brands. Instagram carousels, event banners, ad creatives — visual content that converts. (WIP badge) |
| 3 | UI Experiments & Component Systems | ongoing / personal | Component systems, UI experiments, and explorations that pushed creative boundaries. Design tokens, interaction patterns, and visual R&D — the lab work that doesn't ship but sharpens the craft. |

Note: "Figma Explorations" renamed to "UI Experiments & Component Systems" — same honesty, less self-diminish.

### Image Grid

Each card gets a 2×2 grid of image placeholders below the description. User will supply actual images. Placeholder slots show light gray boxes with category labels (poster, stage, social, merch, etc.).

### GSAP Timeline

The pin duration increases to accommodate taller cards. Current timeline uses `+=220%` end — this will need to increase proportionally (likely `+=300%` or more depending on card height).

### Component

Modify existing: `components/Archive.tsx`

---

## Section 5: About (Modified)

**Position:** After Archive, before Logo Strip
**Tone:** Dark (#0D0A07) — changed from light
**Purpose:** Bio, achievements, credibility

### Changes

- Background changes from light (#F0ECE6) to dark (#0D0A07)
- Text colors invert (light text on dark)
- Achievement pills text/border colors adjust for dark background
- Photo placeholder adjusts for dark background

### Behavior

- Same stagger-in for achievement pills
- Same watermark parallax ("About" watermark)
- Triggers dark mode on nav (same as Archive — extends the dark zone)

---

## Section 6: Logo Strip

**Position:** After About, before Footer
**Tone:** Dark (#0D0A07)
**Purpose:** Surface worked-with brands as quiet credibility

### Behavior

- Single horizontal row of text-based logos
- Simple fade-in on scroll (understated, no stagger)
- Blends into Footer (same dark background)

### Content

Small "Worked with" label above the row (muted text, letter-spaced, matches Works year label style).

Text entries in `Name — Role` format, Outfit font:

| Name | Role |
|------|------|
| Winvesta | UI/UX Lead |
| BharatXR | UX Design |
| Let's Upgrade | UX Revamp |
| Momentum Health Club | Brand & UX |
| JavaScript Mumbai | Lead Designer |

Note: Exact role titles are editable by the user.

### Watermark

None — section is too small, would feel crowded.

### Component

New file: `components/LogoStrip.tsx`

---

## GSAP Animation Changes (page.tsx)

### New Animations

| Animation | Target | Trigger | Effect |
|-----------|--------|---------|--------|
| Services cards stagger | `.services-card` | `.services-list` enters viewport | Fade in + slide up, staggered 0.08s |
| Services watermark parallax | `.services-watermark` | Scroll through `.services` | Translates Y by -80px (scrub) |
| Process phases stagger | `.process-phase` | `.process-list` enters viewport | Fade in + slide up, staggered 0.08s |
| Process watermark parallax | `.process-watermark` | Scroll through `.process` | Translates Y by -80px (scrub) |
| Logo strip fade | `.logo-strip` | `.logo-strip` enters viewport | Fade in (duration 0.6) |
| About nav dark | `.nav`, `body` | `#about` in viewport | Adds/removes `.nav--dark` and `.on-dark` (extends dark zone from Archive through Footer) |

### Modified Animations

| Animation | Change |
|-----------|--------|
| Morph shape trigger | Moves from end of Works to end of Process — transitions from Process (light) into Archive (dark) |
| Archive pin timeline | Duration increases to accommodate taller cards (from `+=220%` to ~`+=300%`) |
| Archive nav dark | Trigger extends to include About section (continuous dark zone from Archive through Footer) |

---

## Section Order in page.tsx

```tsx
<main>
  <Hero />
  <Services />    {/* NEW — covers Hero */}
  <Works />       {/* MODIFIED — normal flow */}
  <Process />     {/* NEW — light */}
  <Archive />     {/* MODIFIED — expanded cards */}
  <About />       {/* MODIFIED — dark background */}
  <LogoStrip />   {/* NEW — dark, before Footer */}
</main>
<Footer />
```

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `components/Services.tsx` | Create |
| `components/Process.tsx` | Create |
| `components/LogoStrip.tsx` | Create |
| `components/Archive.tsx` | Modify (expand cards) |
| `components/About.tsx` | Modify (dark theme: colors, text, badges) |
| `components/Works.tsx` | No change (CSS handles behavior) |
| `app/globals.css` | Add styles for new sections, modify `.works` and `.about` styles |
| `app/page.tsx` | Import new components, add GSAP animations, modify existing animations |

---

## Constraints

- All new sections use simple stagger-in animations for now (user will add custom animations later)
- Content (service descriptions, process philosophy lines, logo roles) is editable — not final
- No case study sub-pages (deferred to future work)
- Awards section removed from scope
- No actual images yet — all image slots are placeholders
