import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Movie does not exist" },
      { status: 400 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
