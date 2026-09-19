import type { Metadata } from "next";
import { CommandsPageClient } from "./commands-page-client";

export const metadata: Metadata = {
  title: "Commands — Alren Bot",
  description: "Explore every Alren Discord bot command, shortcut, option, and prefix alias in English or Thai.",
};

export default function CommandsPage() {
  return <CommandsPageClient />;
}

