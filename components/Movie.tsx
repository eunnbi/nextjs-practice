import { useRouter } from "next/router";
import PosterImg from "./common/PosterImg";
import { IMovieProps } from "../lib/api/movies";
import styled from "styled-components";

const StyledMovie = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  &:hover .img-container {
    transform: scale(1.05) translateY(-10px);
  }
  h4 {
    font-size: 18px;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  position: relative;
  transition: transform 0.2s ease-in-out;
  & > span {
    position: unset !important;
  }
`;

const Movie = ({ movie }: { movie: IMovieProps }) => {
  const router = useRouter();
  const onClick = (id: number, title: string, imageUrl: string) => {
    router.push(
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
      <ImageWrapper className="img-container">
        <PosterImg src={movie.poster_path} />
      </ImageWrapper>
      <h4>{movie.original_title}</h4>
    </StyledMovie>
  );
};

export default Movie;
