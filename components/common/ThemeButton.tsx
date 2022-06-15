import { IoMoon, IoSunny } from "react-icons/io5";
import styled from "styled-components";

const ToggleButton = styled.button<{ isLightTheme: boolean }>`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.64rem;
  background-color: ${({ isLightTheme }) =>
    isLightTheme ? "#F29F21" : "#17161D"};
  svg {
    font-size: 20px;
    color: white;
  }
`;

const Circle = styled.div<{ isLightTheme: boolean }>`
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: ${({ isLightTheme }) => !isLightTheme && `translateY(100%)`};
  transition: all 0.3s ease-in-out;
  background-color: #fff;
`;

interface ThemeButtonProps {
  isLightTheme: boolean;
  changeTheme: () => void;
}

const ThemeButton = ({ isLightTheme, changeTheme }: ThemeButtonProps) => {
  return (
    <ToggleButton isLightTheme={isLightTheme} onClick={changeTheme}>
      <Circle isLightTheme={isLightTheme} />
      <IoMoon />
      <IoSunny />
    </ToggleButton>
  );
};

export default ThemeButton;
