import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CommandGuide, LegacyCommands } from "../components/command-guide";
import { SiteFooter } from "../components/site-footer";
import avatarImage from "../img/avatar.jpg";

export const metadata: Metadata = {
  title: "Commands — Alren Bot",
  description: "Alren's Discord command guide: osu! verification, private AI chat, per-channel beatmap feeds, and BN and Mappers' Guild alerts.",
};

const examples = [
  { title: "Verify members", command: "/setup verify role:@Verified channel:#welcome", note: "Assign a role and announce successful verifications. Members can then run /verify." },
  { title: "Mania · Ranked + Loved", command: "/setup beatmap channel:#mania mode:mania status:ranked_loved", note: "Receive new Ranked and Loved beatmaps together in #mania." },
  { title: "Standard · Ranked", command: "/setup beatmap channel:#standard mode:osu status:ranked", note: "Keep Standard maps in their own channel." },
  { title: "Taiko · Ranked", command: "/setup beatmap channel:#taiko mode:taiko status:ranked", note: "Add another feed with independent filters and posting history." },
  { title: "Catch · Ranked", command: "/setup beatmap channel:#catch mode:catch status:ranked", note: "Repeat the setup for each channel you want to use." },
  { title: "Pause one feed", command: "/setup beatmap channel:#mania enabled:false", note: "Stop #mania's feed. Other channel feeds keep running." },
  { title: "Find a map", command: "/map status:ranked_loved mode:mania", note: "Pick a random Ranked or Loved Mania beatmap without changing the saved feed." },
  { title: "Community alerts", command: "/setup alerts channel:#alerts bn_mode:mania", note: "Receive Mania BN opening/closure alerts and new Mappers' Guild missions in all modes." },
];

const filters = [
  { title: "Beatmap status", option: "status", choices: [["ranked", "Ranked"], ["qualified", "Qualified"], ["loved", "Loved"], ["ranked_loved", "Ranked + Loved"], ["all", "Ranked, Qualified, and Loved"]] },
  { title: "Beatmap mode", option: "mode", choices: [["any", "All Mode"], ["osu", "Standard (osu!)"], ["taiko", "osu!taiko"], ["catch", "osu!catch / fruits"], ["mania", "osu!mania"]] },
  { title: "BN alert mode", option: "bn_mode", choices: [["all", "All Mode"], ["osu", "Standard (osu!)"], ["taiko", "Taiko"], ["catch", "Catch / fruits"], ["mania", "Mania"]] },
];

export default function CommandsPage() {
  return (
    <main className="min-h-screen bg-[#202225] text-[#f2f3f5]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-10">
        <nav aria-label="Main navigation" className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 text-[0.78rem] font-extrabold tracking-[0.13em]">
            <Image src={avatarImage} alt="Alren Bot avatar" className="size-[34px] rounded-full object-cover ring-[3px] ring-[#5865f24d]" />
            <span>ALREN</span>
          </Link>
          <div className="flex items-center gap-5 text-sm font-bold">
            <Link href="/" className="text-[#c7cbd3] hover:text-white">Home</Link>
            <Link href="/commands" aria-current="page" className="text-white">Commands</Link>
          </div>
        </nav>

        <header className="rounded-3xl border border-white/10 bg-[#171a20] px-6 py-10 sm:px-10 sm:py-14">
          <p className="mb-3 text-xs font-extrabold tracking-[0.14em] text-[#a8b0ff]">ALREN HELP CENTER</p>
          <h1 className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-none tracking-[-0.04em]">Commands</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#d0d2d6]">Verify your osu! account, find your next beatmap, and set up your community. Start with /help in Discord or explore the guide below.</p>
          <p className="mt-4 text-sm leading-relaxed text-[#b4b8c2]">[options] are optional. Replace &lt;placeholders&gt;, @roles, and #channels with your own values. Select options from Discord&apos;s slash command menu.</p>
        </header>

        <nav aria-label="Command guide sections" className="flex flex-wrap gap-2 border-b border-[#39404b] py-6 text-sm font-bold">
          {[["general", "General"], ["verification", "Verification"], ["beatmaps", "Beatmaps"], ["setup", "Server setup"], ["filters", "Filters"], ["examples", "Examples"], ["legacy", "Legacy"]].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="rounded-lg border border-[#39404b] px-3 py-2 text-[#d0d2d6] transition hover:border-[#8891ff] hover:bg-[#5865f21a] hover:text-white">{label}</a>
          ))}
        </nav>

        <CommandGuide />

        <section id="filters" aria-labelledby="filters-heading" className="scroll-mt-6 border-b border-[#39404b] py-10 sm:px-4 sm:py-12">
          <h2 id="filters-heading" className="text-[1.65rem] font-bold tracking-[-0.035em]">Choose your filters</h2>
          <p className="mb-6 mt-3 max-w-3xl text-sm leading-relaxed text-[#b4b8c2]">/map inherits the current channel&apos;s saved filters unless you override them. Ranked + Loved watches both statuses for feeds; /map randomly selects one of the two.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {filters.map((filter) => (
              <div key={filter.option} className="rounded-xl border border-[#39404b] bg-[#171a20] p-5">
                <h3 className="font-bold">{filter.title}</h3>
                <p className="mb-4 mt-1 text-xs text-[#b4b8c2]">Option: <code>{filter.option}</code></p>
                <dl className="space-y-3 text-sm">
                  {filter.choices.map(([value, label]) => (
                    <div key={value}>
                      <dt className="font-mono text-xs text-[#a8b0ff]">{value}</dt>
                      <dd className="mt-1 text-[#d0d2d6]">{label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-[#b4b8c2]">Use mode:any for all beatmap modes and bn_mode:all for all BN modes. The BN filter does not limit Mappers&apos; Guild missions.</p>
        </section>

        <section id="examples" aria-labelledby="examples-heading" className="scroll-mt-6 border-b border-[#39404b] py-10 sm:px-4 sm:py-12">
          <h2 id="examples-heading" className="text-[1.65rem] font-bold tracking-[-0.035em]">Ready-to-use examples</h2>
          <p className="mb-6 mt-3 text-sm leading-relaxed text-[#b4b8c2]">Each channel keeps its own filters and posting history. Run /setup status to review every configured feed.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <article key={example.title} className="min-w-0 rounded-xl border border-[#39404b] bg-[#171a20] p-5">
                <h3 className="font-bold">{example.title}</h3>
                <p className="my-3 rounded-lg bg-[#262c35] p-3 font-mono text-xs leading-relaxed text-[#e6e8ec] [overflow-wrap:anywhere]"><code>{example.command}</code></p>
                <p className="text-sm leading-relaxed text-[#b4b8c2]">{example.note}</p>
              </article>
            ))}
          </div>
          <aside className="mt-6 rounded-xl border border-[#5865f266] bg-[#5865f21a] p-5 text-sm leading-relaxed text-[#d0d2d6]">
            <h3 className="mb-2 font-bold text-white">Before setting up your server</h3>
            <p>All /setup commands need Manage Server. For verification, Alren needs Manage Roles and Manage Nicknames, and its role must sit above the verified role. Give Alren permission to view and send messages in each feed or alert channel.</p>
            <p className="mt-3">Feeds and community alerts check for updates every 30 seconds by default. Delivery depends on the next successful check and when upstream services expose the change. The first BN check establishes a baseline instead of posting every existing status.</p>
          </aside>
        </section>

        <LegacyCommands />
        <div className="pb-8 sm:px-4"><Link href="/" className="text-sm font-bold text-[#c7cbd3] hover:text-white">← Back to Home</Link></div>
      </div>
      <SiteFooter />
    </main>
  );
}
