"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { MediaKind } from "@/domain/media";
import { demoMedia } from "@/lib/demo-media";
import { MediaCard } from "@/components/media-card";

type KindFilter = "All" | MediaKind;

const filters: KindFilter[] = ["All", "Film", "Series"];

export function DiscoveryCatalog() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<KindFilter>("All");
  const normalizedQuery = query.trim().toLocaleLowerCase();

  const results = useMemo(
    () =>
      demoMedia.filter((item) => {
        const matchesKind = kind === "All" || item.kind === kind;
        const searchableText = [item.title, item.description, item.kind, item.year.toString(), ...item.genres]
          .join(" ")
          .toLocaleLowerCase();
        return matchesKind && (!normalizedQuery || searchableText.includes(normalizedQuery));
      }),
    [kind, normalizedQuery],
  );

  return (
    <section id="discover" className="scroll-mt-8">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">The good stuff</p>
          <h2 className="text-3xl font-bold tracking-[-0.06em] text-white sm:text-[40px]">Find your next favorite</h2>
          <p className="mt-2 text-sm text-muted">A handpicked demo shelf. No endless scrolling required.</p>
        </div>
        <div className="relative w-full lg:max-w-[360px]">
          <label htmlFor="catalog-search" className="sr-only">
            Search demo titles, genres, or years
          </label>
          <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/45" />
          <input
            id="catalog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search titles, genres, years..."
            className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-11 pr-11 text-sm text-white placeholder:text-white/35 transition focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/10"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/45 transition hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
        <div role="group" aria-label="Filter by format" className="flex flex-wrap items-center gap-2">
          <SlidersHorizontal size={15} className="mr-1 text-white/40" />
          {filters.map((filter) => {
            const active = kind === filter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={active}
                onClick={() => setKind(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active
                    ? "bg-accent text-ink"
                    : "border border-white/10 text-white/65 hover:border-white/25 hover:text-white"
                }`}
              >
                {filter === "All" ? "Everything" : `${filter}s`}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-muted" aria-live="polite">
          {results.length} {results.length === 1 ? "title" : "titles"}
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 pt-6 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
          {results.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-56 flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.06] text-white/50">
            <Search size={20} />
          </div>
          <h3 className="font-semibold text-white">Nothing on this shelf</h3>
          <p className="mt-1 max-w-xs text-sm text-muted">Try another title, genre, or year.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setKind("All");
            }}
            className="mt-4 text-xs font-semibold text-accent hover:text-white"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
