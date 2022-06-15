import styled from "styled-components";

const StyledItem = styled.li`
  background-color: ${({ theme }) => theme.name === "dark" && "#363636"};
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => `1px 5px 5px ${theme.shadowColor}`};
  margin-bottom: 0.5rem;
`;

const GenreItem = ({ genre }: { genre: string }) => {
  return <StyledItem>{genre}</StyledItem>;
};

export default GenreItem;
