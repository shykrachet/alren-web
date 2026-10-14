type Command = {
  command: string;
  description: string;
};

type CommandGroup = {
  id: string;
  title: string;
  note: string;
  commands: Command[];
};

const groups: CommandGroup[] = [
  {
    id: "general",
    title: "General commands",
    note: "Open the guide, check latency, and chat privately with Alren.",
    commands: [
      { command: "/help", description: "Open the command guide privately, with a link to this website." },
      { command: "/ping", description: "Check whether Alren is online and view the bot's latency." },
      { command: "/alren message:<message>", description: "Start a private AI chat. Replies are automatically deleted after five minutes by default." },
      { command: "/alrenclear", description: "Clear your private chat memory in the current channel." },
    ],
  },
  {
    id: "verification",
    title: "osu! verification",
    note: "Link your osu! account through OAuth and check your server profile.",
    commands: [
      { command: "/verify [osu_id]", description: "Get a private osu! OAuth verification link. Your account is detected automatically when osu_id is omitted." },
      { command: "/verify-status", description: "View your linked osu! account privately in the current server." },
    ],
  },
  {
    id: "beatmaps",
    title: "Beatmap discovery",
    note: "Find a random beatmap using the current channel's saved filters.",
    commands: [
      { command: "/map [status] [mode]", description: "Post a random beatmap with cover artwork. Optional filters override this channel's settings for one request. Unconfigured channels default to Ranked and All Mode." },
    ],
  },
  {
    id: "setup",
    title: "Server setup",
    note: "All /setup commands require Manage Server and must be used in a server.",
    commands: [
      { command: "/setup status", description: "View verification settings, every configured channel feed, and community alert settings privately." },
      { command: "/setup verify [role] [channel]", description: "Configure the role assigned after verification and the channel for public verification announcements. Omit options to view settings." },
      { command: "/setup beatmap [channel] [status] [mode] [enabled]", description: "Configure a separate automatic feed for each channel. Defaults to the current channel. Use enabled:false to stop only the selected channel's feed, or enabled:true to enable it." },
      { command: "/setup alerts [channel] [bn_mode]", description: "Configure Beatmap Nominator request opening/closure alerts and new Mappers' Guild missions. bn_mode filters BN alerts; missions include all modes." },
    ],
  },
];

const prefixCommands: Command[] = [
  { command: "!help / !alrenhelp", description: "Send the command guide by DM. Enable direct messages from server members." },
  { command: "!ping", description: "Show bot latency in the channel." },
  { command: "!alren <message> / !chat <message>", description: "Chat with Alren by DM. Mentioning the bot with a message also starts a chat." },
  { command: "!alrenclear / !reset", description: "Clear your chat memory in the current channel and confirm by DM." },
  { command: "!osuverify [osu_id]", description: "Start osu! OAuth verification." },
  { command: "!verify-status / !osuverify-status", description: "Show your linked osu! account." },
  { command: "!verify-setting @role / !verify-role @role", description: "Configure the verification role. Requires Manage Server." },
  { command: "!verify-role-status", description: "Show the configured verification role." },
  { command: "!osumap [status] [mode]", description: "Post a random beatmap using the current channel's filters, with optional overrides." },
  { command: "!osumap-settings [status] [mode]", description: "Configure a beatmap feed in the current channel. Requires Manage Server." },
  { command: "!osumap-status", description: "View the current channel's beatmap feed settings." },
  { command: "!community-alert-settings #channel [mode]", description: "Configure community alerts. Mode choices are all, osu, taiko, catch, and mania. Requires Manage Server." },
];

function CommandTable({ commands }: { commands: Command[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#39404b]">
      <table className="w-full table-fixed border-collapse">
        <thead className="bg-[#101218]">
          <tr>
            <th scope="col" className="w-[44%] border-b border-r border-[#39404b] px-3 py-3 text-left text-xs font-extrabold sm:w-[40%] sm:px-4">Command</th>
            <th scope="col" className="border-b border-[#39404b] px-3 py-3 text-left text-xs font-extrabold sm:px-4">Description</th>
          </tr>
        </thead>
        <tbody>
          {commands.map((item, index) => (
            <tr key={item.command} className={`${index % 2 ? "bg-[#191d24]" : ""} border-b border-[#39404b] last:border-b-0`}>
              <td className="border-r border-[#39404b] px-3 py-4 align-top sm:px-4">
                <code className="rounded-md bg-[#262c35] px-1.5 py-1 font-mono text-xs font-bold leading-7 text-[#f2f3f5] [overflow-wrap:anywhere]">{item.command}</code>
              </td>
              <td className="px-3 py-4 align-top text-sm leading-relaxed text-[#d0d2d6] sm:px-4">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CommandGuide() {
  return groups.map(({ id, title, note, commands }) => (
    <section key={id} id={id} className="scroll-mt-6 border-b border-[#39404b] px-0 py-10 sm:px-4 sm:py-12" aria-labelledby={`${id}-heading`}>
      <header className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p className="mb-2 text-[0.66rem] font-extrabold tracking-[0.13em] text-[#b9bec9]">COMMAND GUIDE</p>
          <h2 id={`${id}-heading`} className="text-[1.65rem] font-bold tracking-[-0.035em]">{title}</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-[#b4b8c2] sm:text-right">{note}</p>
      </header>
      <CommandTable commands={commands} />
    </section>
  ));
}

export function LegacyCommands() {
  return (
    <section id="legacy" className="scroll-mt-6 py-10 sm:px-4 sm:py-12" aria-labelledby="legacy-heading">
      <h2 id="legacy-heading" className="text-[1.65rem] font-bold tracking-[-0.035em]">Legacy prefix commands</h2>
      <p className="mb-5 mt-3 text-sm leading-relaxed text-[#b4b8c2]">These ! commands are still supported as fallbacks. Use the slash commands above for the current command menu.</p>
      <details className="group rounded-xl border border-[#39404b] p-4 open:bg-[#171a20]">
        <summary className="cursor-pointer text-sm font-bold text-[#e6e8ec]">View prefix commands and aliases</summary>
        <div className="mt-4"><CommandTable commands={prefixCommands} /></div>
      </details>
    </section>
  );
}
