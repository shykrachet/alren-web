"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import englishFlag from "../img/flag/en.png";
import thaiFlag from "../img/flag/th.svg";
import type { Language } from "../i18n";

const languageEvent = "alren-language-change";

function getSavedLanguage(): Language {
  return window.localStorage.getItem("alren-command-language") === "th" ? "th" : "en";
}

function subscribeToLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(languageEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(languageEvent, callback);
  };
}

export function useLanguage() {
  const language = useSyncExternalStore<Language>(subscribeToLanguage, getSavedLanguage, () => "en");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return language;
}

function switchLanguage(nextLanguage: Language) {
  window.localStorage.setItem("alren-command-language", nextLanguage);
  window.dispatchEvent(new Event(languageEvent));
}

export function LanguageSwitcher() {
  const language = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const labels = language === "th"
    ? { title: "ภาษา", en: "อังกฤษ", th: "ไทย" }
    : { title: "Language", en: "English", th: "Thailand" };
  const options = [
    { id: "en" as const, label: labels.en, flag: englishFlag },
    { id: "th" as const, label: labels.th, flag: thaiFlag },
  ];
  const selectedOption = options.find((option) => option.id === language) ?? options[0];

  useEffect(() => {
    if (!isOpen) return;

    function closeOnOutsideClick(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  function selectLanguage(nextLanguage: Language) {
    switchLanguage(nextLanguage);
    setIsOpen(false);
  }

  return (
    <div ref={menuRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="เปลี่ยนภาษา / Change language"
        className={`flex h-9 w-[58px] items-center justify-between gap-2 rounded-lg border bg-[#171a20] px-2.5 text-xs font-bold transition sm:w-[132px] ${isOpen ? "border-[#6975fa] ring-4 ring-[#5865f2]/10" : "border-[#4a505b] hover:border-[#747b87]"}`}
      >
        <Image src={selectedOption.flag} alt="" className="size-5 shrink-0 object-contain" />
        <span className="hidden min-w-0 flex-1 text-left text-[#e6e8ec] sm:block">{selectedOption.label}</span>
        <FaChevronDown aria-hidden="true" className={`size-2.5 text-[#858c97] transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-[calc(100%+0.55rem)] z-50 w-48 overflow-hidden rounded-xl border border-[#414852] bg-[#171a20] p-1.5 shadow-2xl shadow-black/40" role="menu" aria-label={labels.title}>
          <p className="px-3 pb-2 pt-1.5 text-[0.62rem] font-extrabold tracking-[0.13em] text-[#777e89]">{labels.title.toUpperCase()}</p>
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              role="menuitemradio"
              aria-checked={language === option.id}
              onClick={() => selectLanguage(option.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${language === option.id ? "bg-[#5865f2]/15 text-white" : "text-[#c5c9d1] hover:bg-[#252a32] hover:text-white"}`}
            >
              <Image src={option.flag} alt="" className="size-5 shrink-0 object-contain" />
              <span className="flex-1">{option.label}</span>
              {language === option.id && <FaCheck aria-hidden="true" className="size-3 text-[#8f98ff]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
