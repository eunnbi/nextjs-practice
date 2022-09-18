import axios from "axios";

const getMovies = async (baseUrl: string | undefined = undefined) => {
  const finalUrl = baseUrl ? `${baseUrl}/api/movies` : "/api/movies";
  const { data } = await axios.get(finalUrl);
  return data;
};

export const getMovieDetail = async (id: string) => {
  if (!id) return;
  const { data } = await axios.get(`/api/movies/${id}`);
  return data;
};

export const moviesQuery = {
  key: ["movies"],
  fetcher: getMovies,
};
