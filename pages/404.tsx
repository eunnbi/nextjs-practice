import { useRouter } from "next/router";
import CustomHead from "../components/CustomHead";
import styled from "styled-components";

const NotFoundMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Button = styled.button`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #000;
  padding: 0.5rem 1rem;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const NotFound = () => {
  const router = useRouter();
  const onClick = () => router.back();
  return (
    <>
      <CustomHead title="Not Found!" />
      <NotFoundMain>
        <h1>Not Found</h1>
        <Button onClick={onClick}>⬅️ Go Back</Button>
      </NotFoundMain>
    </>
  );
};

export default NotFound;
