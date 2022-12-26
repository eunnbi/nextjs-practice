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
        <h1>Not Found</h1>
        <Button onClick={goHome}>🏡 Go Home</Button>
      </Main>
    </>
  );
};

export default NotFound;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--hh));
  @media screen and (max-width: 900px) {
    height: calc(var(--vh, 1vh) * 100 - var(--hh));
  }
`;
