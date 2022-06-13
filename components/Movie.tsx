import Link from "next/link";
import { IMovieProps } from "../lib/api/movies";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledMovie = styled.div`
  cursor: pointer;
  &:hover img {
    transform: scale(1.05) translateY(-10px);
  }
  h4 {
    font-size: 18px;
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Movie = ({ movie }: { movie: IMovieProps }) => {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <StyledMovie onClick={() => onClick(movie.id, movie.original_title)}>
      <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <h4>{movie.original_title}</h4>
    </StyledMovie>
  );
};

export default Movie;
