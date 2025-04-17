export async function fetchSearch(query: string) {
  const res = await fetch(`/api/search?query=${query}`);
  if (!res.ok) throw new Error("Failed to fetch search results");
  return res.json();
}
