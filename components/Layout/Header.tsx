import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderBox = styled.header`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 10px;
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

const StyledLink = styled(Link)<{ router: string; pathName: string }>`
  color: ${(props) =>
    props.pathName === props.router
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
        <StyledLink href="/" pathName="/" router={router.pathname}>
          Home
        </StyledLink>
        <StyledLink href="/about" pathName="/about" router={router.pathname}>
          About
        </StyledLink>
      </nav>
    </HeaderBox>
  );
};

export default Header;
