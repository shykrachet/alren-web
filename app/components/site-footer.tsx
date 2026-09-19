export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 border-t border-[#39404b] px-5 py-7 text-xs text-[#9da1a9] sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <span>ALREN BOT</span>
      <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <a className="hover:text-white" href="/about">About</a>
        <a className="hover:text-white" href="/terms">Terms of Service</a>
        <a className="hover:text-white" href="/privacy">Privacy Policy</a>
      </nav>
    </footer>
  );
}
