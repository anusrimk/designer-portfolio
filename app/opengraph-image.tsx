import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Social preview (og:image) for every page, rendered at build time.
// Mirrors the hero: serif-italic + bold-sans name, muted role line, and the
// ASCII portrait, on the site's cream background with its 5-column grid.

export const alt =
  "Anusri Karmokar — Product Designer and UX Strategist, based in Mumbai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#F0ECE6";
const TEXT = "#1A1208";
const MUTED = "#6B5B45";
const GRID = "rgba(26, 18, 8, 0.07)";
const ACCENT = "#5CDB6A";

export default async function Image() {
  const root = process.cwd();
  // next/og can't read woff2, so these .woff copies live in assets/fonts
  const [playfairItalic, outfitRegular, outfitBold, portrait] = await Promise.all([
    readFile(join(root, "assets/fonts/PlayfairDisplay-400-Italic.woff")),
    readFile(join(root, "assets/fonts/Outfit-400.woff")),
    readFile(join(root, "assets/fonts/Outfit-800.woff")),
    readFile(join(root, "public/asciinator_20Aug_001.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: BG,
          color: TEXT,
          fontFamily: "Outfit",
        }}
      >
        {/* The site's background grid */}
        <div style={{ position: "absolute", inset: 0, display: "flex" }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                borderRight: i < 4 ? `1px solid ${GRID}` : "none",
              }}
            />
          ))}
        </div>

        {/* Left: wordmark, name, role, location */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 0 64px 80px",
            flex: 1,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 26 }}>
            <span style={{ fontFamily: "Playfair Display", fontStyle: "italic" }}>
              anusri
            </span>
            <span>.k</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Playfair Display",
                fontStyle: "italic",
                fontSize: 112,
                lineHeight: 1,
              }}
            >
              Anusri
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 112,
                lineHeight: 1,
                letterSpacing: "-0.01em",
                marginTop: 6,
              }}
            >
              Karmokar
            </div>
            <div
              style={{
                width: 72,
                height: 2,
                background: TEXT,
                margin: "40px 0 28px",
              }}
            />
            <div style={{ fontSize: 34, color: TEXT }}>
              Product Designer · UX Strategist
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 24,
              color: MUTED,
              letterSpacing: "0.04em",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                background: ACCENT,
                marginRight: 14,
              }}
            />
            Based in Mumbai, India
          </div>
        </div>

        {/* Right: the hero portrait, anchored to the bottom edge */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            paddingRight: 80,
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${portrait}`}
            width={423}
            height={560}
            alt=""
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair Display", data: playfairItalic, style: "italic", weight: 400 },
        { name: "Outfit", data: outfitRegular, style: "normal", weight: 400 },
        { name: "Outfit", data: outfitBold, style: "normal", weight: 800 },
      ],
    }
  );
}
