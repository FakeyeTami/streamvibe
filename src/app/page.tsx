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
    <section className="relative w-full h-[700px] md:h-[850px] px-4 md:px-6">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {background && (
          <Image
            src={background}
            alt="Trending Movie Background"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0.85)_100%)]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center h-full text-center gap-6">
        <Image
          src="/assets/hero-logo.svg"
          alt="StreamVibe Logo"
          width={256}
          height={256}
          className="object-contain sm:w-2xs sm:h-2xs"
          aria-hidden="true"
        />
        <h1 className="text-3xl md:text-6xl font-semibold text-white">
          The Best Streaming Experience
        </h1>
        <p className="font-light text-sm md:text-md text-white max-w-2xl">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more.
        </p>
        <Button className="bg-primary-900 font-semibold text-md text-white rounded-lg lg:rounded-xl flex px-3 py-2 md:px-4 md:py-3 gap-3 items-center justify-center">
          <PlayIcon fill="white" size={15} />
          Start Watching Now
        </Button>
      </div>
    </section>
  );
}
