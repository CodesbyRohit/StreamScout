import Link from "next/link";
import { Compass, Menu } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b border-white/[0.07]">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="StreamScout home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-ink">
            <Compass size={21} strokeWidth={2.3} />
          </span>
          <span className="text-[19px] font-bold tracking-[-0.06em] text-white">
            stream<span className="text-accent">scout</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <a className="text-sm font-medium text-white transition hover:text-accent" href="#discover">
            Discover
          </a>
          <a className="text-sm font-medium text-muted transition hover:text-white" href="#about">
            About
          </a>
        </nav>

        <a
          href="#discover"
          className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-accent/40 hover:text-accent sm:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Demo catalog
        </a>
        <a href="#discover" aria-label="Jump to discovery" className="rounded-lg p-2 text-white md:hidden">
          <Menu size={22} />
        </a>
      </div>
    </header>
  );
}
