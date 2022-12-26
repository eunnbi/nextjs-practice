import { HiChevronUp } from "react-icons/hi";
import styled from "styled-components";

const TopButton = () => {
  const onClick = () => window.scrollTo({ top: 0 });
  return (
    <Button type="button" onClick={onClick}>
      <HiChevronUp />
    </Button>
  );
};

const Button = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 30px;
  height: 30px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  z-index: 10;
`;

export default TopButton;
