import { NextRequest } from "next/server";
import { movies } from "./db";

export async function POST(request: Request) {
  const newMovie = await request.json();
  movies.push(newMovie);
  return Response.json(newMovie, { status: 201 });
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const genre = searchParams.get("genre");

  const filteredMovies = genre
    ? movies.filter((m) => m.genre.toLowerCase().includes(genre))
    : movies;

  return new Response(JSON.stringify(filteredMovies));
}
