"use client";

import { useSearchParams } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";
import { Container } from "@radix-ui/themes";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const { data, isLoading } = useSearch(query);

  if (isLoading) return;

  return (
    <Container>
      <h2>Search Results for: {query}</h2>
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.results?.map((item: { id: number; name: string }) => (
            <li key={item.id}>{item?.name}</li>
          ))
        )}
      </ul>
    </Container>
  );
}
