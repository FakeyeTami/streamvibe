export async function fetchSearch(query: string) {
  const res = await fetch(
    `/api/tmdb/search?query=${encodeURIComponent(query)}`,
  );

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      error.message || `Failed to fetch search results: ${res.status}`,
    );
  }

  return res.json();
}
