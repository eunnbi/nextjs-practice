import { moviesQuery } from "@api/movie";
import useResource from "@hooks/useResource";
import Movie from "./Movie";
import styled from "styled-components";

const MovieListMain = () => {
  const { data } = useResource<MoviesData>({
    key: moviesQuery.key,
    fetcher: () => moviesQuery.fetcher({}),
  });
  return (
    <Main>
      {data ? (
        <>
          {data?.results.map((movie: MovieData) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </>
      ) : null}
    </Main>
  );
};

export default MovieListMain;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
