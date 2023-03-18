import axios from "axios";

export const getMovieList = async ({
  baseUrl,
  page
}: {
  baseUrl?: string;
  page?: number;
}) => {
  const url = baseUrl ? `${baseUrl}/api/movies` : "/api/movies";
  const { data } = await axios.get<MoviesData>(`${url}?page=${page ? page : 1}`);
  return data;
}

export const getMovieInfo = async ({
  id,
  baseUrl,
}: {
  id?: string;
  baseUrl?: string;
}) => {
  const url = baseUrl ? `${baseUrl}/api/movies` : "/api/movies";
  const { data } = await axios.get<MovieData>( `${url}/${id}`);
  return data;
};

export const moviesQuery = {
  key: ["movies"],
  fetcher: getMovieList,
};

export const movieDetailQuery = {
  key: (id: string | undefined) => ["detail", id],
  fetcher: getMovieInfo,
};
