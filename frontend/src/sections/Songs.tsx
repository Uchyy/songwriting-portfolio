
import { motion } from "motion/react";
import LyricsAccordion from "../components/Accordion";
import ExpandableCard from "../components/ExpandableCard";
import HorizontalCarousel from "../components/HorizontalCarousel";
import { songs } from "../data/SampleSong";

export default function SongSection() {
  return (
    <section id="songs" className="bg-white px-6 py-20 wavy-border">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="font-label text-sm tracking-[0.2em] text-gold-muted">
              THE COLLECTION
            </span>

            <h2 className="mt-3 font-display text-4xl text-espresso sm:text-5xl">
              The Song Archive
            </h2>

            <p className="mt-4 max-w-xl font-body text-espresso-light">
              A collection of ideas, stories and melodies.
            </p>
          </div>

          <span className="hidden font-label text-sm text-gold-muted sm:block">
            {songs.length} SONGS
          </span>
        </div>

        <HorizontalCarousel className="px-2">
          {songs.map((song) => (
            <ExpandableCard
              key={song.id}
              title={song.title}
              subtitle={song.description}
              image={song.artwork}>


                {/* Song information */}
                <div className="flex h-full w-full flex-col overflow-y-auto p-2">

                    {/* Audio */}
                    {song.media.length > 0 && (
                    <section className="mt-3">
                        <h3 className="mb-4 font-display text-xl font-bold text-espresso">
                            Listen
                        </h3>

                        <div className="space-y-4">
                        {song.media.map((item) => (
                            <div key={item.id}>
                                <p className="mb-2 font-label text-xs uppercase tracking-wider text-gold-muted">
                                    {item.label}
                                </p>

                                <audio controls preload="none" className="w-full">
                                    <source src={item.audioUrl} />
                                </audio>
                            </div>
                        ))}
                        </div>
                    </section>
                    )}

                    {/* Suno link */}
                    {song.externalLink && (
                    <a
                        href={song.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-bold text-espresso transition hover:bg-gold-muted">
                            Listen on Suno ↗
                    </a>
                    )}

                    {/* Story */}
                    {song.story && (
                    <section className="mt-8">
                        <h3 className="mb-3 font-display text-xl font-bold text-espresso">
                            The Story
                        </h3>

                        <p className="font-body text-sm leading-relaxed text-espresso-light">
                            {song.story}
                        </p>
                    </section>
                    )}

                    {/* Diary */}
                    {song.diary && song.diary.length > 0 && (
                    <section className="mt-4 space-y-3">
                        {song.diary.map((entry, index) => (
                        <p
                            key={index}
                            className="border-l-2 border-gold pl-4 font-body text-sm leading-relaxed text-espresso-light">
                            {entry}
                        </p>
                        ))}
                    </section>
                    )}

                    {/* Lyrics */}
                    {song.lyrics && (
                    <LyricsAccordion lyrics={song.lyrics} />
                    )}

                    {/* Genres */}
                    <div className="mt-7 flex flex-wrap items-center gap-2">
                    <span className="font-display text-lg font-bold text-espresso">
                        Tags:
                    </span>

                    {song.genre.map((tag) => (
                        <span
                        key={tag}
                        className="rounded-full border border-beige px-3 py-1 font-label text-xs uppercase tracking-wider text-gold-muted">
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
            </ExpandableCard>
          ))}
        </HorizontalCarousel>

      </div>
    </section>
  );
}