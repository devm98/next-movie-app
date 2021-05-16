import { CATEGORIES, MOVIE_DATA } from "../resources/1_data";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

axios.defaults.baseURL = BASE_URL;

export const getMovies = () => {
  axios.get("http://localhost:3000/api/movies").then((res) => {
    console.log(" res.data", res.data);
  });
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(CATEGORIES), 0);
  });
};

export const createMovie = (data) => {
  return new Promise((resolve, reject) => {
    MOVIE_DATA.push({ id: Math.random().toString(36).substr(2, 7), ...data });
    setTimeout(() => {
      resolve(MOVIE_DATA);
    }, 0);
  });
};

export const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    const movie = MOVIE_DATA.find((movie) => movie.id === id);

    setTimeout(() => {
      resolve(movie);
    }, 0);
  });
};
