import { useRouter } from "next/router";
import CustomHead from "../components/CustomHead";
import { Button } from "../components/Button";
import { useBack } from "../hooks/useBack";
import styled from "styled-components";

const NotFoundMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const NotFound = () => {
  const { goBack } = useBack();
  return (
    <>
      <CustomHead title="Not Found!" />
      <NotFoundMain>
        <h1>Not Found</h1>
        <Button onClick={goBack}>⬅️ Go Back</Button>
      </NotFoundMain>
    </>
  );
};

export default NotFound;
