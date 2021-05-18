import axios from "axios";
import { CATEGORIES } from "../resources/1_data";

const apiCaller = axios.create({
  baseURL: "http://localhost:3000",
});

export const getMovies = () => {
  return apiCaller.get("/api/movies").then((res) => res.data);
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(CATEGORIES), 0);
  });
};

export const createMovie = (data) => {
  data.id = Math.random().toString(36).substr(2, 5);
  return apiCaller.post("/api/movies", data);
};

export const getMovieById = (id) => {
  return apiCaller.get(`/api/movies/${id}`).then((res) => res.data);
};

export const deleteMovieById = (id) => {
  return apiCaller.delete(`/api/movies/${id}`).then((res) => res.data);
};
