import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "No query provided" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: res.status },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
