import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alren-Bot — Invite to Discord",
  description: "เชิญ Alren-Bot เข้าสู่เซิร์ฟเวอร์ Discord ของคุณ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
