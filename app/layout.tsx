import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const torus = localFont({
  src: "./fonts/en/Torus-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-torus",
  display: "swap",
});

const kanit = localFont({
  src: "./fonts/th/Kanit-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-kanit",
  display: "swap",
});

const torusDisplay = localFont({
  src: "./fonts/en/Torus-Heavy.otf",
  weight: "800",
  style: "normal",
  variable: "--font-torus-display",
  display: "swap",
});

const kanitDisplay = localFont({
  src: "./fonts/th/Kanit-ExtraBold.ttf",
  weight: "800",
  style: "normal",
  variable: "--font-kanit-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alren Bot — Commands & Invite",
  description: "Commands and usage guide for Alren Bot on Discord.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${torus.variable} ${kanit.variable} ${torusDisplay.variable} ${kanitDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
