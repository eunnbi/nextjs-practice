import { MovieGenre } from "../types/movie";
import GenreItem from "./GenreItem";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const GenreList = ({ genres }: { genres: MovieGenre[] }) => {
  return (
    <StyledList>
      {genres.map((genre: MovieGenre) => (
        <GenreItem key={genre.id} genre={genre.name} />
      ))}
    </StyledList>
  );
};

export default GenreList;
