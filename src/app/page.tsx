"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTrending } from "@/hooks/useTrending";
import { Button } from "@radix-ui/themes";
import { PlayIcon } from "lucide-react";

export default function Home() {
  const [background, setBackground] = useState<string | null>(null);
  const { data } = useTrending();

  useEffect(() => {
    if (data?.results?.length) {
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      if (randomMovie?.backdrop_path) {
        setBackground(
          `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`,
        );
      }
    }
  }, [data]);

  return (
    <section className="relative w-full h-[700px] md:h-[850px] px-4 md:px-6 flex items-center justify-center">
      <div>
        <div className="absolute inset-0 z-0">
          <div>
            {background && (
              <Image
                src={background}
                alt="Trending Movies"
                fill
                className="object-cover"
                priority
              />
            )}

            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0.85)_100%)]" />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
            <Image
              src="/assets/hero-logo.svg"
              alt="StreamVibe Logo"
              width={256}
              height={256}
              className="object-contain sm:w-2xs sm:h-2xs z-20"
              aria-hidden={true}
            />
          </div>
        </div>
      </div>
      <div className="absolute z-30 -bottom-48 max-w-6xl flex flex-col items-center justify-between gap-12">
        <div className="flex flex-col items-center justify-between gap-3.5">
          <h2 className="font-bold text-center text-5xl text-white">
            The Best Streaming Experience
          </h2>
          <p className="text-sm text-center md:text-base">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlist, so you can easily find the
            content you want to watch.
          </p>
        </div>

        <Button className="bg-red-700 text-white flex items-center justify-center py-3.5 px-5 rounded-lg">
          <PlayIcon fill="white" />
          <span className="text-sm font-semibold ml-2">Start Watching Now</span>
        </Button>
      </div>
    </section>
  );
}
