# Anusri Karmokar — Portfolio

Personal portfolio of Anusri Karmokar, product designer and UX strategist based in Mumbai. A single scrolling homepage (hero, selected works, a pinned digital archive, about, footer) plus a case study page for every project.

## Stack

- **Next.js 16** (App Router, Turbopack) and **React 19**. This Next.js version has breaking changes from older releases; check `node_modules/next/dist/docs/` before changing framework-level code (see `AGENTS.md`).
- **GSAP + ScrollTrigger** for scroll-driven motion on the homepage
- **Lenis** for smooth scrolling on every page
- **Tailwind CSS v4**, used mainly for its reset; almost all styling is plain CSS in `app/globals.css`
- Fonts via `next/font`: Playfair Display (serif) and Outfit (sans)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

> If style changes stop showing up after `next.config.ts` changes (the dev server restarts itself), restart `npm run dev`.

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, custom cursor, smooth scroll
  page.tsx              Homepage and all of its GSAP scroll animations
  works/[slug]/         Case study pages for Selected Works
  project/[slug]/       Case study pages for the Archive
  globals.css           Design tokens and nearly all styles
components/             Page sections and shared UI
lib/
  works.ts              Selected Works content
  archive.ts            Archive content
  case-study.ts         Shared case study types
  smooth-scroll.ts      Access to the site-wide Lenis instance
public/
  works/<slug>/         Selected Works images
  archive/              Archive images
  Anusri-Karmokar-Resume.pdf
VOICE.md                Copywriting voice guide
```

## Editing content

Case studies are plain data. No component changes are needed to edit or add one.

- **Selected Works**: `lib/works.ts`. **Archive**: `lib/archive.ts`. Both use the `CaseStudy` type in `lib/case-study.ts`.
- Each case study has an `intro` and a list of `sections`. Sections are made of blocks: `p`, `quote`, `list`, `flow` (steps joined by arrows), `images` (a grid that opens in a lightbox) and `placeholders`.
- Put images in `public/works/<slug>/` or `public/archive/` and reference them from the root, e.g. `"/archive/banking01.png"`. An optional `thumb` on a Selected Works item shows on hover in the homepage list.
- The Archive is designed for **exactly four cards** (positions are set per card in `globals.css`, `.archive-item--1` to `--4`).
- **Renaming a slug changes the URL.** Add a redirect from the old path in `next.config.ts` so shared links keep working.
- **Resume**: replace `public/Anusri-Karmokar-Resume.pdf` (keep the filename) and every "Download Resume" link picks it up.

### Writing copy

Follow [`VOICE.md`](VOICE.md): designer-first positioning, results first, specific and in first person, British spelling, and no invented metrics. It ends with a prompt you can paste into Claude or ChatGPT.

## Motion

- **Tokens**: `--ease-out` and `--ease-in-out` in `:root` (`app/globals.css`). Use them for new UI motion.
- **Homepage scroll animations** live in one effect in `app/page.tsx`: works rows, watermark parallax, the morph circle, the dark-zone nav switch, the pinned Archive, and the footer name.
- **Archive pacing**: the pin length is derived from how far the cards travel. Tune the speed with `CARD_SPEED` in `app/page.tsx` (1 = moves with the page; currently 1.25).
- **Breakpoint sync**: the pinned Archive only runs at `min-width: 1025px`. The matching stacked layout in `globals.css` (`max-width: 1024px`) must stay its exact complement, or the section pins with nothing moving.
- **Smooth scrolling**: `components/SmoothScroll.tsx`, mounted in the root layout. Read the instance with `getLenis()` from `lib/smooth-scroll.ts` (the lightbox uses it to pause scrolling).
- **Reduced motion** is respected everywhere: no smooth scrolling, no parallax or pinning (the Archive uses its stacked layout), and entrances fade instead of moving.

## Deployment

Deployed on Vercel. Every push to `main` triggers a production deploy.
