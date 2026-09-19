import english from "../local/en.json";

export type CommandAccess = "Private" | "Public" | "Admin";

export type BotCommand = {
  command: string;
  description: string;
  aliases?: string[];
  access: CommandAccess;
};

export type CommandGroup = {
  id: string;
  title: string;
  eyebrow: string;
  note: string;
  commands: BotCommand[];
};

export type CommandDictionary = {
  locale: string;
  home: {
    navCommands: string;
    botLabel: string;
    addServer: string;
    aboutLabel: string;
    aboutTitle: string;
    aboutDescription: string;
    commandGuide: string;
  };
  nav: { home: string; commands: string; guide: string; github: string; addDiscord: string };
  guide: {
    eyebrow: string;
    title: string;
    description: string;
    memberLabel: string;
    adminLabel: string;
    commandLabel: string;
    noteLabel: string;
    sections: Array<{
      step: string;
      title: string;
      description: string;
      commands: string[];
      note: string;
      audience: "Member" | "Admin";
    }>;
    permissionsTitle: string;
    permissionsDescription: string;
    permissions: string[];
    troubleshootingTitle: string;
    troubleshooting: Array<{ title: string; description: string }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaInvite: string;
    ctaCommands: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    slashCommands: string;
    quickStart: string;
    guide: string;
  };
  tip: {
    titleBefore: string;
    titleAfter: string;
    description: string;
    button: string;
  };
  browser: {
    eyebrow: string;
    title: string;
    resultSingular: string;
    resultPlural: string;
    searchLabel: string;
    searchPlaceholder: string;
    categoriesLabel: string;
    allCommands: string;
    aliasLabel: string;
    commandColumn: string;
    descriptionColumn: string;
    emptyTitle: string;
    emptyDescription: string;
    clearFilters: string;
  };
  accessLabels: Record<CommandAccess, string>;
  footer: { brand: string; about: string; terms: string; privacy: string };
  commandGroups: CommandGroup[];
};

export const commandGroups = english.commandGroups as CommandGroup[];

export const allCommands = commandGroups.flatMap((group) =>
  group.commands.map((command) => ({ ...command, groupId: group.id, groupTitle: group.title })),
);
