import { moviesQuery } from "../api/movie";
import useResource from "../hooks/useResource";
import { MoviesData, MovieData } from "../types/movie";
import Movie from "./Movie";

const MovieList = () => {
  const { data } = useResource<MoviesData>({
    key: moviesQuery.key,
    fetcher: () => moviesQuery.fetcher({}),
  });
  return data ? (
    <>
      {data?.results.map((movie: MovieData) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  ) : null;
};

export default MovieList;
