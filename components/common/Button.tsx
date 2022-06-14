import styled from "styled-components";

export const Button = styled.button`
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #000;
  padding: 0.5rem 1rem;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
