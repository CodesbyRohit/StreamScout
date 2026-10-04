export type MediaKind = "Film" | "Series";

export interface MediaItem {
  id: string;
  title: string;
  kind: MediaKind;
  year: number;
  runtime: string;
  rating: string;
  description: string;
  genres: string[];
  badge?: string;
  posterGradient: string;
}
