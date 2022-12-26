import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderBox = styled.header`
  height: var(--hh);
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => `0px 10px 50px ${theme.shadowColor}`};
  font-weight: bold;
  h1 > span {
    font-size: 28px;
  }
  nav {
    display: flex;
    gap: 20px;
  }
`;

const StyledLink = styled(Link)<{ router: string; pathname: string }>`
  color: ${(props) =>
    props.pathname === props.router
      ? props.theme.menuColor
      : props.theme.textColor};
  cursor: pointer;
`;

const Header = () => {
  const router = useRouter();

  return (
    <HeaderBox>
      <h1>
        <span>💖</span> Movie <span>💖</span>
      </h1>
      <nav>
        <StyledLink href="/" pathname="/" router={router.pathname}>
          Home
        </StyledLink>
        <StyledLink href="/about" pathname="/about" router={router.pathname}>
          About
        </StyledLink>
      </nav>
    </HeaderBox>
  );
};

export default Header;
