import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "@/lib/fetchMovieDetails";

export const useMovieDetails = (id: string) => {
  return useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => fetchMovieDetails(id),
    enabled: !!id,
  });
};
