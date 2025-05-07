export const fetchMovie = async (id: string) => {
  const res = await fetch(`/api/tmdb/movie/${id}`);
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
};
