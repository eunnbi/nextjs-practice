import CustomHead from "../components/common/CustomHead";
import { Button } from "../components/common/Button.styled";
import styled from "styled-components";
import Router from "next/router";

const NotFound = () => {
  const goHome = () => Router.push("/");
  return (
    <>
      <CustomHead title="Not Found!" />
      <Main>
        <h1>
          404
          <br />
          Not Found
        </h1>
        <Button onClick={goHome}>🏡 Go Home</Button>
      </Main>
    </>
  );
};

export default NotFound;

const Main = styled.main`
  position: fixed;
  top: var(--header-height);
  bottom: 0;
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  h1 {
    text-align: center;
  }
`;
