import CustomHead from "../components/common/CustomHead";
import { Button } from "../components/common/Button.styled";
import { useBack } from "../hooks/useBack";
import styled from "styled-components";

const NotFound = () => {
  const { goBack } = useBack();
  return (
    <>
      <CustomHead title="Not Found!" />
      <Main>
        <h1>Not Found</h1>
        <Button onClick={goBack}>⬅️ Go Back</Button>
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
  height: 80vh;
`;
