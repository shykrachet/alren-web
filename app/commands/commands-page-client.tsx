"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaDiscord, FaGithub } from "react-icons/fa";
import avatarImage from "../img/avatar.jpg";
import type { CommandDictionary, CommandGroup } from "../command-data";
import { LanguageSwitcher, useLanguage } from "../components/language-switcher";
import { dictionaries } from "../i18n";

const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1550542538497335336&permissions=8&integration_type=0&scope=bot+applications.commands";

function CommandTable({ group, dictionary }: { group: CommandGroup; dictionary: CommandDictionary }) {
  return (
    <section className="border-b border-[#39404b] py-10 sm:px-4 sm:py-12" aria-labelledby={`${group.id}-heading`}>
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p className="mb-2 text-[0.66rem] font-extrabold tracking-[0.13em] text-[#b9bec9]">{dictionary.home.commandGuide}</p>
          <h2 id={`${group.id}-heading`} className="text-[1.8rem] font-extrabold tracking-[-0.035em]">{group.title}</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#b4b8c2] sm:text-right">{group.note}</p>
      </header>

      <div className="overflow-x-auto border border-[#39404b]">
        <table className="w-full min-w-[680px] border-collapse">
          <thead className="bg-[#101218]">
            <tr>
              <th className="w-[35%] border-b border-r border-[#39404b] px-4 py-4 text-center text-xs font-extrabold">{dictionary.browser.commandColumn}</th>
              <th className="border-b border-[#39404b] px-4 py-4 text-left text-xs font-extrabold">{dictionary.browser.descriptionColumn}</th>
            </tr>
          </thead>
          <tbody>
            {group.commands.map((item, index) => (
              <tr key={item.command} className={index % 2 ? "bg-[#191d24]" : ""}>
                <td className="border-b border-r border-[#39404b] px-4 py-4 align-top last:border-b-0">
                  <code className="inline-block rounded-md bg-[#262c35] px-2.5 py-1.5 font-mono text-xs font-bold text-[#f2f3f5]">{item.command}</code>
                  {item.aliases && (
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      <span className="mr-1 text-[0.58rem] font-extrabold tracking-[0.1em] text-[#777e89]">{dictionary.browser.aliasLabel}</span>
                      {item.aliases.map((alias) => <code key={alias} className="rounded bg-[#22272f] px-1.5 py-1 font-mono text-[0.66rem] text-[#aeb4be]">{alias}</code>)}
                    </div>
                  )}
                </td>
                <td className="border-b border-[#39404b] px-4 py-4 text-sm leading-6 text-[#e6e8ec]">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function CommandsPageClient() {
  const language = useLanguage();
  const dictionary = dictionaries[language];

  return (
    <main className="min-h-screen bg-[#202225] text-[#f2f3f5]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10">
        <nav className="flex h-20 items-center justify-between" aria-label="Main navigation">
          <Link className="flex items-center gap-2.5 text-[0.78rem] font-extrabold tracking-[0.13em]" href="/">
            <Image src={avatarImage} alt="Alren Bot avatar" className="size-[34px] rounded-full object-cover ring-[3px] ring-[#5865f24d]" priority />
            <span>ALREN</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Link className="hidden w-24 items-center justify-center gap-2 text-xs font-bold text-[#bfc4cd] hover:text-white lg:flex" href="/"><FaArrowLeft className="size-3" /> {dictionary.nav.home}</Link>
            <LanguageSwitcher />
            <a className="hidden size-9 place-items-center rounded-lg border border-[#4a505b] text-[#e6e8ec] hover:border-[#8a909a] hover:bg-[#282c33] sm:grid" href="https://github.com/shykrachet/alren-discord" target="_blank" rel="noreferrer" aria-label={dictionary.nav.github}><FaGithub className="size-4" /></a>
            <a className="inline-flex h-9 w-9 items-center justify-center gap-2 rounded-lg bg-[#5865f2] text-xs font-extrabold hover:bg-[#6975fa] sm:w-40" href={inviteUrl} target="_blank" rel="noreferrer"><FaDiscord className="size-4" /><span className="hidden sm:inline">{dictionary.nav.addDiscord}</span></a>
          </div>
        </nav>

        <div className="border-t border-[#39404b]">
          {dictionary.commandGroups.map((group) => <CommandTable key={group.id} group={group} dictionary={dictionary} />)}
        </div>
      </div>

      <footer className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 border-t border-[#39404b] px-5 py-7 text-xs text-[#9da1a9] sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>{dictionary.footer.brand}</span>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link className="hover:text-white" href="/about">{dictionary.footer.about}</Link>
          <Link className="hover:text-white" href="/terms">{dictionary.footer.terms}</Link>
          <Link className="hover:text-white" href="/privacy">{dictionary.footer.privacy}</Link>
        </nav>
      </footer>
    </main>
  );
}
