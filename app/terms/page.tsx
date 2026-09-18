import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service — Alren Bot",
  description: "Terms of Service for Alren Bot.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#202225] text-[#f2f3f5]">
      <div className="mx-auto min-h-[calc(100vh-120px)] w-full max-w-4xl px-5 py-10 sm:px-10 sm:py-16">
        <a className="mb-14 inline-flex rounded-lg border border-[#4a505b] px-3 py-2 text-xs font-bold text-[#e6e8ec] hover:border-[#8a909a] hover:bg-[#282c33]" href="/">← Back to Home</a>
        <p className="mb-3 text-[0.68rem] font-extrabold tracking-[0.14em] text-[#b9bec9]">ALREN BOT · LEGAL</p>
        <h1 className="mb-10 text-5xl font-black sm:text-7xl">Terms of Service</h1>
        <article className="space-y-10 border-t border-[#39404b] pt-10 text-[0.95rem] leading-7 text-[#d0d2d6]">
          <section><h2 className="mb-3 text-xl font-bold text-white">Use of Alren</h2><p>By using Alren, you agree to use the bot responsibly and in accordance with Discord&apos;s Terms of Service and Community Guidelines. Do not use the bot to harm, harass, spam, or violate applicable law.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-white">Server administration</h2><p>Server owners and administrators are responsible for configuring Alren&apos;s permissions, commands, and verification settings in their own servers.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-white">Availability</h2><p>Alren is provided as available. Features may be changed, paused, or removed when necessary for maintenance, safety, or improvement.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-white">Contact</h2><p>For questions about these terms, please contact the Alren Bot maintainer through the project&apos;s GitHub repository.</p></section>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
