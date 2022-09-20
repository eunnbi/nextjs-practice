import { useRouter } from "next/router";
import PosterImage from "./common/PosterImage";
import { MovieData } from "../types/movie";
import styled from "styled-components";

const Movie = ({ movie }: { movie: MovieData }) => {
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
      <ImageWrapper>
        <PosterImage src={movie.poster_path} />
      </ImageWrapper>
    </StyledMovie>
  );
};

export default Movie;

const ImageWrapper = styled.div`
  max-width: 100%;
  position: relative;
  transition: transform 0.2s ease-in-out;
  & > span {
    position: unset !important;
  }
`;

const StyledMovie = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  &:hover ${ImageWrapper} {
    transform: scale(1.05) translateY(-10px);
  }
  h4 {
    font-size: 18px;
    text-align: center;
  }
`;
