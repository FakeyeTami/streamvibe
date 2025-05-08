import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Series does not exist" },
      { status: 404 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data, { status: 200 });
}
