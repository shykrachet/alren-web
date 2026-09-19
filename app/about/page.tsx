import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe, FaInstagram } from "react-icons/fa";
import { SiteFooter } from "../components/site-footer";
import avatarImage from "../img/moaijay.png";

export const metadata: Metadata = {
  title: "About — Alren Bot",
  description: "About Alren Bot.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#202225] text-[#f2f3f5]">
      <div className="flex flex-1 items-center justify-center px-5 py-10">
        <section className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#171a20] shadow-2xl shadow-black/20">
        <div className="h-28 bg-[linear-gradient(135deg,#5865f2_0%,#303967_52%,#171a20_100%)]" />
        <div className="px-7 pb-8">
          <Image
            src={avatarImage}
            alt="Alren Bot avatar"
            className="-mt-14 size-28 rounded-[1.4rem] border-4 border-[#171a20] object-cover"
            priority
          />
          <p className="mt-6 text-[0.68rem] font-extrabold tracking-[0.14em] text-[#b9bec9]">Developer</p>
          <h1 className="mt-2 text-4xl font-black tracking-[-0.06em]">shykrachet</h1>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#d0d2d6]">A Discord bot built for private Bot chat, account verification, beatmap discovery, and helpful community automation.</p>
          <section className="mt-7 border-t border-[#39404b] pt-6">
            <p className="mb-4 text-[0.68rem] font-extrabold tracking-[0.14em] text-[#b9bec9]">CONTACT</p>
            <div className="flex gap-3">
              <a className="grid size-11 place-items-center rounded-full border border-[#cf4e91] text-[#ef77b8] transition hover:-translate-y-1 hover:bg-[#cf4e9120]" href="https://www.instagram.com/ranahtfai/" aria-label="Instagram"><FaInstagram className="size-5" /></a>
              <a className="grid size-11 place-items-center rounded-full border border-[#4e87cf] text-[#73a9f2] transition hover:-translate-y-1 hover:bg-[#4e87cf20]" href="https://shykrachet.xyz/" aria-label="Website"><FaGlobe className="size-5" /></a>
              <a className="grid size-11 place-items-center rounded-full border border-[#5b626c] text-[#e4e7eb] transition hover:-translate-y-1 hover:bg-white/10" href="https://github.com/shykrachet" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub className="size-5" /></a>
            </div>
          </section>

          <Link className="mt-7 inline-flex rounded-lg border border-[#4a505b] px-3 py-2 text-xs font-bold text-[#e6e8ec] hover:border-[#8a909a] hover:bg-[#282c33]" href="/">← Back to Home</Link>
        </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
