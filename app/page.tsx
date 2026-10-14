"use client";

import Image from "next/image";
import { FaDiscord, FaGithub } from "react-icons/fa";
import avatarImage from "./img/avatar.jpg";
import bannerImage from "./img/banner.jpg";
import { LanguageSwitcher, useLanguage } from "./components/language-switcher";
import { dictionaries } from "./i18n";

export default function Home() {
  const language = useLanguage();
  const dictionary = dictionaries[language];

  return (
    <main className="min-h-screen bg-[#202225] text-[#f2f3f5]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10">
        <nav className="flex h-20 items-center justify-between">
          <a className="flex items-center gap-2.5 text-[0.78rem] font-extrabold tracking-[0.13em]" href="#top">
            <Image
              src={avatarImage}
              alt="Alren Bot avatar"
              className="size-[34px] rounded-full object-cover ring-[3px] ring-[#5865f24d]"
            />
            <span>ALREN</span>
          </a>

          <div className="flex items-center gap-2 text-[0.82rem] font-bold sm:gap-3">
            <a className="mr-1 hidden w-20 text-center text-[#c7cbd3] hover:text-white md:block" href="/commands">{dictionary.home.navCommands}</a>
            <LanguageSwitcher />
            <a className="inline-flex h-[33px] w-9 items-center justify-center gap-1.5 rounded-lg border border-[#4a505b] text-[0.73rem] text-[#e6e8ec] hover:border-[#8a909a] hover:bg-[#282c33] sm:w-[88px]" href="https://github.com/shykrachet/alren-discord" target="_blank" rel="noreferrer"><FaGithub className="size-4" /><span className="hidden sm:inline">GitHub</span></a>
          </div>
        </nav>

        <section id="top" className="relative isolate min-h-[510px] overflow-hidden rounded-[18px] border border-white/10 bg-[#171a20] sm:min-h-[450px] sm:rounded-3xl">
          <Image
            src={bannerImage}
            alt="Alren Bot banner"
            fill
            priority
            className="z-0 object-cover object-center opacity-55"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
          <div aria-hidden="true" className="absolute inset-[-15%] z-10 rotate-[-12deg] opacity-20 [background-image:linear-gradient(90deg,transparent_49.7%,white_50%,transparent_50.3%),linear-gradient(transparent_49.7%,white_50%,transparent_50.3%)] [background-size:112px_112px]" />
          <div aria-hidden="true" className="absolute -right-16 -top-20 z-10 size-[280px] rounded-full border border-white/20" />
          <div aria-hidden="true" className="absolute right-[17%] top-[120px] z-10 size-[180px] rounded-full border border-white/20" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#08090cf5] via-[#08090cb8] to-[#08090c66]" />

          <div className="absolute bottom-10 left-6 right-6 z-20 sm:bottom-[72px] sm:left-[74px] sm:right-auto">
            <div className="my-3.5">
              <p className="mb-1.5 text-[0.66rem] font-extrabold tracking-[0.13em] text-[#b9bec9]">{dictionary.home.botLabel}</p>
              <h1 className="font-display text-[clamp(3.2rem,6vw,4.7rem)] leading-[0.79]">Alren<br />Bot</h1>
            </div>

            <div className="flex flex-wrap gap-2">
              {["COMMUNITY", "OSU!", "BOT"].map((tag) => <span key={tag} className="rounded-md bg-[#1214198c] px-2 py-1 text-[0.68rem] font-extrabold">{tag}</span>)}
            </div>

            <a id="join" className="mt-5 inline-flex min-h-[42px] w-full items-center justify-center gap-2.5 rounded-[11px] bg-[#5865f2] px-4 text-[0.78rem] font-black tracking-[0.06em] transition hover:-translate-y-0.5 hover:bg-[#6975fa] sm:w-auto sm:min-w-[204px]" href="https://discord.com/oauth2/authorize?client_id=1550542538497335336&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noreferrer"><FaDiscord className="size-4" /> {dictionary.home.addServer}</a>
          </div>
        </section>

        <section className="grid gap-1 px-0 py-[58px] sm:grid-cols-[170px_1fr] sm:gap-8 sm:px-4 sm:py-20">
          <p className="mb-2 text-[1.5rem] font-extrabold text-[#b9bec9]">{dictionary.home.aboutLabel}</p>
          <div>
            <h2 className="mb-4 max-w-[1100px] text-[clamp(2rem,4vw,3.1rem)] font-bold leading-none">{dictionary.home.aboutTitle}</h2>
            <p className="max-w-[920px] text-base leading-relaxed text-[#d0d2d6]">{dictionary.home.aboutDescription}</p>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#39404b] px-0 py-6 text-xs text-[#9da1a9] sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-7">
          <span>ALREN BOT</span>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a className="hover:text-white" href="/about">{dictionary.footer.about}</a>
            <a className="hover:text-white" href="/terms">{dictionary.footer.terms}</a>
            <a className="hover:text-white" href="/privacy">{dictionary.footer.privacy}</a>
          </nav>
        </footer>
      </div>
    </main>
  );
}
