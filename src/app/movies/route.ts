import { movies } from "./db";

export async function GET() {
  return Response.json(movies);
}

export async function POST(request: Request){
    const newMovie = await request.json()
    movies.push(newMovie);
    return Response.json(newMovie, { status: 201 });
}