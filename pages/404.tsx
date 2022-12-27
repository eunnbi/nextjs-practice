import CustomHead from "../components/common/CustomHead";
import { Button } from "../components/common/Button.styled";
import styled from "styled-components";
import Router from "next/router";
import { useInnerHeight } from "@hooks/useInnerHeight";

const NotFound = () => {
  useInnerHeight();
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
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  height: calc(100vh - var(--header-height) - 1px);
  h1 {
    text-align: center;
  }
  @media screen and (max-width: 900px) {
    height: calc(var(--vh, 1vh) * 100 - var(--header-height) - 1px);
  }
`;
