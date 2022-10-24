import styled from "styled-components";

const List = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Item = styled.li`
  background-color: ${({ theme }) => theme.name === "dark" && "#363636"};
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => `1px 5px 5px ${theme.shadowColor}`};
  margin-bottom: 0.5rem;
`;

const GenreList = ({ genres }: { genres: MovieGenre[] }) => {
  return (
    <List>
      {genres.map((genre: MovieGenre) => (
        <Item key={genre.id}>{genre.name}</Item>
      ))}
    </List>
  );
};

export default GenreList;
