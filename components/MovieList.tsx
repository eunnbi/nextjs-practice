import { moviesQuery } from "@api/movie";
import Movie from "./Movie";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";
import { useRef } from "react";
import { useInfiniteScroll } from "@hooks/useInfiniteScroll";

const MovieList = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<MoviesData>(
    moviesQuery.key,
    ({ pageParam = 1 }) => moviesQuery.fetcher({ page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        const { page, total_pages } = lastPage;
        return page === total_pages ? undefined : page + 1;
      },
    }
  );
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  useInfiniteScroll({ hasNextPage, fetchNextPage, ref: loadMoreRef });
  return (
    <Main>
      {data ? (
        <>
          {data?.pages.map((page) =>
            page.results.map((movie) => <Movie movie={movie} key={movie.id} />)
          )}
        </>
      ) : null}
      <div ref={loadMoreRef}></div>
    </Main>
  );
};

export default MovieList;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
