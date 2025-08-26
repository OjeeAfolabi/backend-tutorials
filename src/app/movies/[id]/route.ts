import { error } from "console";
import { movies } from "../db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const movie = movies.find((m) => m.id === +id);

  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const movieId = +id;

  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return new Response(JSON.stringify({ error: "Movie Not Found" }), {
      status: 404,
    });
  }

  try {
    const updatedMovie = await req.json();

    const index = movies.findIndex((m) => m.id === movieId);
    if (!movie) {
      return new Response(JSON.stringify({ error: "Movie Not Found" }), {
        status: 404,
      });
    }
    movies[index] = { ...movie, ...updatedMovie };
    return new Response(JSON.stringify(movies[index]), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to parse JSON" }), {
      status: 404,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movieId = +id;
  const movieIndex = movies.findIndex((m) => m.id === movieId);

  if (movieIndex === -1) {
    return new Response(JSON.stringify({ error: "Movie Not Found" }), {
      status: 404,
    });
  }

  movies.splice(movieIndex, 1);
  return new Response(
    JSON.stringify({ Message: "Movie deleted successfully" }),
    { status: 200 }
  );
}


