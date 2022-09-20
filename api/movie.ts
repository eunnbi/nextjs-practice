import axios from "axios";

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

export const moviesQuery = {
  key: ["movies"],
  fetcher: getMovieInfo,
};

export const movieDetailQuery = {
  key: (id: string | undefined) => ["detail", id],
  fetcher: getMovieInfo,
};
