import Router from "next/router";
import PosterImage from "./common/PosterImage";
import styled from "styled-components";
import { SCROLL_POS_KEY, setSessionStorage } from "@utils/sessionStorage";

const Movie = ({ movie }: { movie: MovieData }) => {
  const onClick = (id: number, title: string, imageUrl: string) => {
    setSessionStorage(SCROLL_POS_KEY, window.scrollY);
    Router.push(
      {
        pathname: `/movies/${title}/${id}`,
        query: {
          imageUrl,
        },
      },
      `/movies/${title}/${id}`
    );
  };
  return (
    <StyledMovie
      onClick={() => onClick(movie.id, movie.original_title, movie.poster_path)}
    >
      <PosterImage src={movie.poster_path} title={movie.title} sizes="230px" />
    </StyledMovie>
  );
};

const StyledMovie = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
  @media screen and (max-width: 520px) {
    height: calc(75vw - 30px);
  }
`;

export default Movie;
