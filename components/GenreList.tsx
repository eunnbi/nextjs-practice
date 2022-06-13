import { IMovieGenre } from "../lib/api/movies";
import GenreItem from "./GenreItem";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const GenreList = ({ genres }: { genres: IMovieGenre[] }) => {
  return (
    <StyledList>
      {genres.map((genre: IMovieGenre) => (
        <GenreItem key={genre.id} genre={genre.name} />
      ))}
    </StyledList>
  );
};

export default GenreList;
