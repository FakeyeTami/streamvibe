export async function fetchTvShow(id: string) {
  const res = await fetch(`/api/tmdb/tv/${id}`);
  if (!res.ok) throw new Error("Failed to fetch series");
  return res.json();
}
