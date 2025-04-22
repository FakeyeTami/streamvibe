import { NextRequest, NextResponse } from "next/server";
import { TmdbIdParams } from "@/types/tmdb"; // Adjust the path to where the type is located

export async function GET(
  request: NextRequest,
  context: { params: TmdbIdParams },
) {
  const { id } = await context.params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  );

  if (!res.ok)
    return NextResponse.json(
      { error: "Movie does not exist" },
      { status: 400 },
    );

  const data = await res.json();
  return NextResponse.json(data);
}
