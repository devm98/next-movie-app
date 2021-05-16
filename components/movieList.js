import React from "react";
import MovieItem from "./movieItem";

function MovieList({movies = [], ...props}) {
  return (
    <div className="row">
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
