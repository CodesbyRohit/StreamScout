import { ArrowDownRight, ArrowUpRight, Play } from "lucide-react";
import { DiscoveryCatalog } from "@/components/discovery-catalog";
import { SiteHeader } from "@/components/site-header";
import { featuredMedia } from "@/lib/demo-media";

export default function HomePage() {
  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <section className="grid gap-8 pb-16 pt-8 sm:pt-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12 lg:pb-24 lg:pt-14">
          <div className="relative isolate flex min-h-[420px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#242338] p-6 sm:min-h-[490px] sm:p-10 lg:min-h-[520px] lg:p-12">
            <div className="hero-art absolute inset-0 -z-20" />
            <div className="poster-grain pointer-events-none absolute inset-0 -z-10" />
            <div className="relative z-10 flex max-w-xl flex-col items-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/85 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                This week&apos;s spotlight
              </span>
              <div className="mt-auto pt-20">
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-white/75">
                  <span>{featuredMedia.year}</span>
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                  <span>{featuredMedia.kind}</span>
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                  <span>{featuredMedia.runtime}</span>
                </div>
                <h1 className="max-w-[600px] text-5xl font-bold leading-[0.94] tracking-[-0.075em] text-white sm:text-7xl lg:text-[84px]">
                  {featuredMedia.title}
                </h1>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/75 sm:text-[15px]">
                  {featuredMedia.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#discover"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-xs font-bold text-ink transition hover:bg-white"
                  >
                    <Play size={15} className="fill-current" />
                    Explore the shelf
                  </a>
                  <span className="rounded-full border border-white/20 bg-black/15 px-4 py-2.5 text-xs font-semibold text-white/85 backdrop-blur-sm">
                    ★ {featuredMedia.rating} scout rating
                  </span>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col justify-between gap-8 py-2 lg:py-4">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet">Your watch compass</p>
              <h2 className="max-w-md text-[38px] font-bold leading-[1.02] tracking-[-0.07em] text-white sm:text-5xl">
                Less browsing.
                <br />
                More <span className="text-accent">whoa.</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
                StreamScout brings the good stories to the surface, so your next movie night starts with a great pick.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 sm:p-5">
                <span className="mb-5 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <ArrowUpRight size={17} />
                </span>
                <p className="text-2xl font-bold tracking-[-0.06em] text-white">8 picks</p>
                <p className="mt-1 text-xs text-muted">On this demo shelf</p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 sm:p-5">
                <span className="mb-5 flex h-8 w-8 items-center justify-center rounded-full bg-violet/10 text-violet">
                  <ArrowDownRight size={17} />
                </span>
                <p className="text-2xl font-bold tracking-[-0.06em] text-white">2 formats</p>
                <p className="mt-1 text-xs text-muted">Films &amp; series</p>
              </div>
            </div>
            <p className="border-l-2 border-accent/70 pl-4 text-xs leading-5 text-white/55">
              A little curiosity goes a long way. Start with a genre, a mood, or a title you almost missed.
            </p>
          </aside>
        </section>

        <DiscoveryCatalog />
      </main>
      <footer id="about" className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            <span className="font-semibold text-white">StreamScout</span> — a small demo for big-screen stories.
          </p>
          <p>All titles and ratings are sample content.</p>
        </div>
      </footer>
    </div>
  );
}
