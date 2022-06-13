import axios from "axios";

export const getMovies = async () => {
  const { data } = await axios.get("/api/movies");
  return data.results;
};

export interface IGetMoviesProps {
  page: number;
  results: IMovieProps[];
  total_pages: number;
  total_results: number;
}

export interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genres: IMovieGenre[];
  release_date: string;
  homepage: string;
}

export interface IMovieGenre {
  id: number;
  name: string;
}

export const getMovieDetail = async (id: string) => {
  if (!id) return;
  const { data } = await axios.get(`/api/movies/${id}`);
  return data;
};
