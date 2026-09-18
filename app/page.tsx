import Image from "next/image";
import { FaDiscord, FaGithub } from "react-icons/fa";
import avatarImage from "./avatar.jpg";
import bannerImage from "./banner.jpg";

type Command = {
  command: string;
  description: string;
};

const groups: { title: string; note: string; commands: Command[] }[] = [
  {
    title: "General commands",
    note: "Start a conversation, open the guide, and check the bot's status.",
    commands: [
      { command: "/alren message", description: "Start a private chat with Alren. Responses are automatically deleted after five minutes." },
      { command: "/alrenclear", description: "Clear Alren's private chat memory in the current channel." },
      { command: "/alrenhelp", description: "Open this guide privately." },
      { command: "!alrenhelp", description: "Show this guide in the channel." },
      { command: "!ping", description: "Check whether Alren is online." },
      { command: "!version or !ver", description: "Show the bot version." },
    ],
  },
  {
    title: "Verification",
    note: "Configure roles and connect member accounts in your server.",
    commands: [
      { command: "/verify-role role:@role", description: "Set the role awarded after verification. Requires Manage Server." },
      { command: "/verify-role-status", description: "Show the configured verification role privately." },
      { command: "/osuverify osu_user_id", description: "Send a private osu! OAuth verification link." },
      { command: "/osuverify-status", description: "Show the linked osu! account in this server privately." },
    ],
  },
  {
    title: "osu! & maps",
    note: "Share beatmaps and manage your server's map feed.",
    commands: [
      { command: "/osumap", description: "Post a random beatmap using this server's saved filters." },
      { command: "/osumap status mode", description: "Post a map with temporary status and/or mode filters." },
      { command: "/osumap-settings status mode", description: "Set the current channel as the automatic beatmap feed and save filters. Requires Manage Server." },
      { command: "/community-alert-settings channel bn_mode", description: "Set the channel and BN mode for Guild notifications. Requires Manage Server." },
    ],
  },
];

function CommandTable({ title, note, commands }: (typeof groups)[number]) {
  const headingId = title.replaceAll(" ", "-");

  return (
    <section className="border-b border-[#39404b] px-0 py-10 sm:px-4 sm:py-12" aria-labelledby={headingId}>
      <header className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p className="mb-2 text-[0.66rem] font-extrabold tracking-[0.13em] text-[#b9bec9]">COMMAND GUIDE</p>
          <h2 id={headingId} className="text-[1.65rem] font-bold tracking-[-0.035em]">{title}</h2>
        </div>
        <p className="max-w-xs text-sm leading-snug text-[#b4b8c2] sm:text-right">{note}</p>
      </header>

      <div className="overflow-x-auto border border-[#39404b]">
        <table className="min-w-[620px] w-full border-collapse">
          <thead className="bg-[#101218]">
            <tr>
              <th className="w-[35%] border-b border-r border-[#39404b] px-3 py-3 text-center text-xs font-extrabold">Command</th>
              <th className="border-b border-[#39404b] px-3 py-3 text-left text-xs font-extrabold">Description</th>
            </tr>
          </thead>
          <tbody>
            {commands.map((item, index) => (
              <tr key={item.command} className={index % 2 ? "bg-[#191d24]" : ""}>
                <td className="border-b border-r border-[#39404b] px-3 py-3 text-left last:border-b-0">
                  <code className="inline-block rounded-md bg-[#262c35] px-2 py-1 font-mono text-xs font-bold text-[#f2f3f5]">{item.command}</code>
                </td>
                <td className="border-b border-[#39404b] px-3 py-3 text-sm leading-snug text-[#e6e8ec]">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Home() {
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

          <div className="flex items-center gap-3 text-[0.82rem] font-bold">
            <a className="mr-2 hidden text-[#c7cbd3] hover:text-white sm:block" href="#commands">Commands</a>
            <a className="inline-flex h-[33px] items-center gap-1.5 rounded-lg border border-[#4a505b] px-2.5 text-[0.73rem] text-[#e6e8ec] hover:border-[#8a909a] hover:bg-[#282c33]" href="https://github.com/shykrachet/alren-discord" target="_blank" rel="noreferrer"><FaGithub className="size-4" /><span className="hidden sm:inline">GitHub</span></a>
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
              <p className="mb-1.5 text-[0.66rem] font-extrabold tracking-[0.13em] text-[#b9bec9]">Bot Discord</p>
              <h1 className="text-[clamp(3.2rem,6vw,4.7rem)] font-black leading-[0.79]">Alren<br />Bot</h1>
            </div>

            <div className="flex flex-wrap gap-2">
              {["COMMUNITY", "OSU!", "BOT"].map((tag) => <span key={tag} className="rounded-md bg-[#1214198c] px-2 py-1 text-[0.68rem] font-extrabold">{tag}</span>)}
            </div>

            <a id="join" className="mt-5 inline-flex min-h-[42px] w-full items-center justify-center gap-2.5 rounded-[11px] bg-[#5865f2] px-4 text-[0.78rem] font-black tracking-[0.06em] transition hover:-translate-y-0.5 hover:bg-[#6975fa] sm:w-auto sm:min-w-[204px]" href="https://discord.com/oauth2/authorize?client_id=1550542538497335336&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noreferrer"><FaDiscord className="size-4" /> ADD SERVER</a>
          </div>
        </section>

        <section className="grid gap-1 px-0 py-[58px] sm:grid-cols-[170px_1fr] sm:gap-8 sm:px-4 sm:py-20">
          <p className="mb-2 text-[1.5rem] font-extrabold  text-[#b9bec9]">ABOUT ALREN</p>
          <div>
            <h2 className="mb-4 max-w-[1100px] text-[clamp(2rem,4vw,3.1rem)] font-bold leading-none">Everything your community needs, in one bot.</h2>
            <p className="max-w-[920px] text-base leading-relaxed text-[#d0d2d6]">Alren helps members discover commands, verify their accounts, and share osu! maps without leaving Discord.</p>
          </div>
        </section>

        <div id="commands" className="border-t border-[#39404b]">
          {groups.map((group) => <CommandTable key={group.title} {...group} />)}
        </div>

        <footer className="flex flex-col gap-4 border-t border-[#39404b] px-0 py-6 text-xs text-[#9da1a9] sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-7">
          <span>ALREN BOT</span>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a className="hover:text-white" href="/about">About</a>
            <a className="hover:text-white" href="/terms">Terms</a>
            <a className="hover:text-white" href="/privacy">Privacy</a>
          </nav>
        </footer>
      </div>
    </main>
  );
}
