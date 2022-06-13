import styled from "styled-components";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  h1 {
    opacity: 0.5;
  }
`;

const Loading = () => {
  return (
    <Main>
      <h1>Loading...</h1>
    </Main>
  );
};

export default Loading;
