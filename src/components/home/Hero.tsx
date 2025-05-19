import { useEffect, useState } from "react";
import { useTrending } from "@/hooks/useTrending";
import Image from "next/image";
import { Button } from "@radix-ui/themes";
import { PlayIcon } from "lucide-react";

export function Hero() {
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
    <section className="relative h-[700px] md:h-[850px] section-container">
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
          <div className="absolute inset-0 z-20 flex-center flex-col">
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
        <div className="flex-column-center">
          <h1 className="heading-primary">The Best Streaming Experience</h1>
          <p className="paragraph-text text-center">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlist, so you can easily find the
            content you want to watch.
          </p>
        </div>

        <Button className="primary-button">
          <PlayIcon fill="white" />
          <span className="text-sm font-semibold ml-2">Start Watching Now</span>
        </Button>
      </div>
    </section>
  );
}
