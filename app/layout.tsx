import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
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
  title: "Anusri Karmokar — UI/UX & Graphic Designer",
  description:
    "Portfolio of Anusri Karmokar — UI/UX Designer, Graphic Designer, and Developer based in Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
