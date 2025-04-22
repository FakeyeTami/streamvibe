import { NextRequest, NextResponse } from "next/server";
import { TmdbIdParams } from "@/types/tmdb";

export async function GET(
  request: NextRequest,
  { params }: { params: TmdbIdParams },
) {
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  );

  if (!res.ok)
    return NextResponse.json(
      { error: "Series does not exist" },
      { status: 400 },
    );

  const data = await res.json();
  return NextResponse.json(data);
}
