import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const torus = localFont({
  src: [
    { path: "./fonts/Torus-Thin.otf", weight: "100", style: "normal" },
    { path: "./fonts/Torus-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/Torus-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Torus-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/Torus-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/Torus-Heavy.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-torus",
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
      className="h-full antialiased"
    >
      <body className={`${torus.variable} ${torus.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
