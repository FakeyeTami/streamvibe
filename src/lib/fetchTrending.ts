export const fetchTrending = async () => {
  const res = await fetch("/api/tmdb/trending");
  if (!res.ok) throw new Error("Error fetching trending movies");
  return res.json();
};
