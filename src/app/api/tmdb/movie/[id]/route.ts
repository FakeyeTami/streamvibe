import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movies/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
  );
  if (!res.ok)
    NextResponse.json({ error: "Movie does not exist" }, { status: 400 });

  const data = await res.json();
  return NextResponse.json(data);
}
