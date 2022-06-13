import styled from "styled-components";

const StyledItem = styled.li`
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.15);
`;

const GenreItem = ({ genre }: { genre: string }) => {
  return <StyledItem>{genre}</StyledItem>;
};

export default GenreItem;
