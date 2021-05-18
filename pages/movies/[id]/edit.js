import React from "react";
import { getMovieById, getMovies, getCategories } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";

function EditMovie({ movie, categories }) {
  console.log("movie", movie);
  return (
    <div className="container">
      <h1>Edit Movie</h1>
      <MovieCreateForm categories={categories} movie={movie}/>
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
  const categories = await getCategories();

  return {
    props: {
      movie,
      categories,
    },
  };
}

export default EditMovie;
