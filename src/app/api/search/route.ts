import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "No query" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`,
  );

  const data = await res.json();
  return NextResponse.json(data);
}
