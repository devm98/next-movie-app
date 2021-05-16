import React from "react";
import { getMovieById, getMovies } from "../../actions";
import Link from 'next/link'

function Movie({ movie }) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <img src={movie.image} className="img-fluid" alt="..."></img>
        <hr className="my-4" />
        <p>Rating: {movie.rating}</p>
        <p>Genre: {movie.genre}</p>
        <p>Release Year: {movie.releaseYear}</p>
        <Link href="/">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const movies = await getMovies();
  const paths = movies.map((movie) => ({
    params: { id: movie.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movie = await getMovieById(params.id);
  return {
    props: {
      movie,
    },
  };
}

export default Movie;
