import { useQuery } from "react-query";
import { moviesQuery } from "../api/movies";
import { MoviesData, MovieData } from "../types/movie";
import Movie from "./Movie";

const MovieList = () => {
  const { data } = useQuery<MoviesData>(moviesQuery.key, () =>
    moviesQuery.fetcher()
  );
  return data ? (
    <>
      {data?.results.map((movie: MovieData) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  ) : null;
};

export default MovieList;
