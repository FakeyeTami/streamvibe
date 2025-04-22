import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
) {
  const { id } = await context.params;

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
  );

  if (!res.ok)
    return NextResponse.json(
      { error: "Series does not exist" },
      { status: 400 },
    );

  const data = await res.json();
  return NextResponse.json(data);
}
