import axios from "axios";
import { MovieData, MoviesData } from "../types/movie";
import { createResource } from "../hooks/useResource";

interface getMovieInfoParams {
  id?: string;
  baseUrl?: string;
}

const getMovieInfo = async ({ id, baseUrl }: getMovieInfoParams) => {
  const url = baseUrl ? `${baseUrl}/api/movies` : "/api/movies";
  const finalUrl = id ? `${url}/${id}` : url;
  const { data } = await axios.get(finalUrl);
  return data;
};

export const moviesQuery = createResource<MoviesData, getMovieInfoParams>({
  key: ["movies"],
  fetcher: getMovieInfo,
});

export const movieDetailQuery = createResource<MovieData, getMovieInfoParams>({
  key: (id: string | undefined) => ["detail", id],
  fetcher: getMovieInfo,
});
