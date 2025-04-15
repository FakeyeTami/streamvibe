import { useQuery } from "@tanstack/react-query";
import { fetchTrending } from "@/lib/fetchTrending";

export const useTrending = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrending,
  });
};
