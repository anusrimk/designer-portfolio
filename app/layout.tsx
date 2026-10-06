import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Anusri Karmokar — UX Strategist & Product Designer",
  description:
    "Portfolio of Anusri Karmokar — UX Strategist and Product Designer based in Mumbai.",
  // Shown above the title on Discord, Slack and other link previews.
  // No title/description here, so each page keeps its own og:title.
  openGraph: { siteName: "Anusri Karmokar", type: "website" },
  // Large preview on X; the image itself comes from app/opengraph-image.tsx
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body>
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
