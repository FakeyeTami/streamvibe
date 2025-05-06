export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
) {
  const { id } = context.params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
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
