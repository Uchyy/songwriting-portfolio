export interface Song {
  id: string;
  title: string;
  label: string; // Usually something like lady-in-red
  description: string;
  genre: string[];
  status: SongStatus;
  artwork: string;

  story?: string;
  diary?: string[];

  lyrics?: string;
  media: SongMedia[];

  externalLink?: string;
  createdAt: string;
}

export type SongStatus = "demo" | "in-progress" | "completed";

export interface SongMedia {
  id: string;
  type: "demo" | "instrumental" | "full";
  label: string;
  audioUrl: string;
  duration?: string;
}