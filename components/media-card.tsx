import { Star } from "lucide-react";
import type { MediaItem } from "@/domain/media";

export function MediaCard({ item }: { item: MediaItem }) {
  return (
    <article className="group min-w-0">
      <div
        className="poster-art relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] p-4 transition duration-300 group-hover:-translate-y-1 group-hover:border-white/20 sm:p-5"
        style={{ background: item.posterGradient }}
      >
        <div className="poster-grain pointer-events-none absolute inset-0" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            {item.badge ? (
              <span className="rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                {item.badge}
              </span>
            ) : (
              <span />
            )}
            <span className="flex items-center gap-1 rounded-full bg-black/25 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              <Star size={12} className="fill-accent text-accent" />
              {item.rating}
            </span>
          </div>
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
              {item.kind} · {item.year}
            </p>
            <h3 className="max-w-[15rem] text-xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-2xl">
              {item.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="px-1 pt-3">
        <p className="line-clamp-2 min-h-10 text-xs leading-5 text-muted sm:text-[13px]">{item.description}</p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="truncate text-[10px] font-medium text-white/55 sm:text-[11px]">
            {item.genres.slice(0, 2).join(" · ")}
          </span>
          <span className="shrink-0 text-[10px] text-white/40 sm:text-[11px]">{item.runtime}</span>
        </div>
      </div>
    </article>
  );
}
