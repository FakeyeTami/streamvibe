export const fetchMovieDetails = async (id: string) => {
  const res = await fetch(`/api/movie/${id}`);
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
};
