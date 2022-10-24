import axios from "axios";

const getMovieInfo = async ({
  id,
  baseUrl,
  page,
}: {
  id?: string;
  baseUrl?: string;
  page?: number;
}) => {
  const url = baseUrl ? `${baseUrl}/api/movies` : "/api/movies";
  const finalUrl = id ? `${url}/${id}` : `${url}?page=${page ? page : 1}`;
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
