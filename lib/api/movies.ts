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
  genre_ids: number[];
}
