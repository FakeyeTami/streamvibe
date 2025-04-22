import { useQuery } from "@tanstack/react-query";
import { fetchTvShow } from "@/lib/fetchTvShow";

export const useTvShow = (id: string) => {
  return useQuery({
    queryKey: ["tvShowDetails", id],
    queryFn: () => fetchTvShow(id),
    enabled: !!id,
  });
};
