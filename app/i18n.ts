import english from "../local/en.json";
import thai from "../local/th.json";
import type { CommandDictionary } from "./command-data";

export type Language = "en" | "th";

export const dictionaries: Record<Language, CommandDictionary> = {
  en: english as CommandDictionary,
  th: thai as CommandDictionary,
};

