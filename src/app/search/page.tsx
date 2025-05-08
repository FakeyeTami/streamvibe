"use client";

import { useSearchParams } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";
import { Container } from "@radix-ui/themes";
import { Suspense } from "react";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const { data, isLoading } = useSearch(query);

  return (
    <Container>
      <h2>Search Results for: {query}</h2>
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.results?.map((item: { id: number; name: string }) => (
            <li key={item.id}>{item?.name}</li>
          ))
        )}
      </ul>
    </Container>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<p>Loading search...</p>}>
      <SearchPageContent />
    </Suspense>
  );
}
