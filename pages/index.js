import { useRef } from "react";
import { getMovies, getCategories } from "../actions";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import SideMenu from "../components/sideMenu";
import MovieCreateForm from "../components/movieCreateForm";

export default function Home({ movies, coverImages, categories }) {
  return (
    <div className="container">
      <div className="row">
        <SideMenu categories={categories} />
        <div className="col-lg-9">
          <Carousel coverImages={coverImages} />
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal">
              Create movie
            </button>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Create Movie
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <MovieCreateForm categories={categories}/>
                </div>
              </div>
            </div>
          </div>
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const movies = await getMovies();
  const coverImages = movies?.map((movie) => ({ id: `image-${movie.id}`, url: movie.cover }));
  const categories = await getCategories();

  return {
    props: {
      movies,
      coverImages,
      categories,
    },
  };
}
