import { useQuery } from "@tanstack/react-query";
import { fetchMovie } from "@/lib/fetchMovie";

export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => fetchMovie(id),
    enabled: !!id,
  });
};
