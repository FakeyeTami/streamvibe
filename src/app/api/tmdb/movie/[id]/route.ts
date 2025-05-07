import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Movie does not exist" },
      { status: 404 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
