import axios from "axios";
import { createResource } from "../hooks/useResource";

interface GetMovieInfoParams {
  id?: string;
  baseUrl?: string;
}

const getMovieInfo = async ({ id, baseUrl }: GetMovieInfoParams) => {
  const url = baseUrl ? `${baseUrl}/api/movies` : "/api/movies";
  const finalUrl = id ? `${url}/${id}` : url;
  const { data } = await axios.get(finalUrl);
  return data;
};

export const moviesQuery = createResource<MoviesData, GetMovieInfoParams>({
  key: ["movies"],
  fetcher: getMovieInfo,
});

export const movieDetailQuery = createResource<MovieData, GetMovieInfoParams>({
  key: (id: string | undefined) => ["detail", id],
  fetcher: getMovieInfo,
});
