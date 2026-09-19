import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Alren Bot",
  description: "Privacy Policy for Alren Bot.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#202225] text-[#f2f3f5]">
      <div className="mx-auto min-h-[calc(100vh-120px)] w-full max-w-4xl px-5 py-10 sm:px-10 sm:py-16">
        <Link className="mb-14 inline-flex rounded-lg border border-[#4a505b] px-3 py-2 text-xs font-bold text-[#e6e8ec] hover:border-[#8a909a] hover:bg-[#282c33]" href="/">← Back to Home</Link>
        <p className="mb-3 text-[0.68rem] font-extrabold tracking-[0.14em] text-[#b9bec9]">ALREN BOT · LEGAL</p>
        <h1 className="mb-10 text-5xl font-black  sm:text-7xl">Privacy Policy</h1>
        <article className="space-y-10 border-t border-[#39404b] pt-10 text-[0.95rem] leading-7 text-[#d0d2d6]">
          <section><h2 className="mb-3 text-xl font-bold text-white">Information Alren uses</h2><p>Alren may process Discord identifiers, server configuration, command inputs, and account-verification details needed to deliver its features.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-white">How information is used</h2><p>Information is used only to operate commands, maintain server-specific settings, verify linked accounts, and improve the reliability and safety of the bot.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-white">Data sharing</h2><p>Alren does not sell personal information. Data is shared only with services required to provide an enabled feature, such as Discord, osu!, or a configured AI provider.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-white">Your choices</h2><p>Server administrators may remove the bot from their server. For questions or data requests, contact the maintainer through the project&apos;s GitHub repository.</p></section>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
