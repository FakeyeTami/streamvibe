import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "@/lib/fetchSearch";

export function useSearch(query: string) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchSearch(query),
    enabled: !!query,
  });
}
