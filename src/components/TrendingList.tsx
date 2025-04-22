"use client";

import { useTrending } from "@/hooks/useTrending";
import { Container, Box } from "@radix-ui/themes";
import MovieCard from "./MovieCard";

import type { TrendingItems } from "@/types/TrendingItems";

export default function TrendingList() {
  const { data, isLoading } = useTrending();

  return (
    <Container className="">
      <div>
        <h3>Trending</h3>
      </div>
      <div className="flex gap-2 md:gap-5">
        {isLoading
          ? "Loading..."
          : data.results.map((item: TrendingItems) => (
              <Box key={item.id}>
                <MovieCard
                  image={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${item?.poster_path}`}
                  title={item?.name}
                />
              </Box>
            ))}
      </div>
    </Container>
  );
}
