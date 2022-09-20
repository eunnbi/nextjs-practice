import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledNav = styled.nav`
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
  & > div {
    display: flex;
    gap: 20px;
  }
`;

const Anchor = styled.a<{ router: string; pathName: string }>`
  color: ${(props) =>
    props.pathName === props.router
      ? props.theme.menuColor
      : props.theme.textColor};
  cursor: pointer;
`;

const NavBar = () => {
  const router = useRouter();

  return (
    <StyledNav>
      <h1>
        <span>💖</span> Movie <span>💖</span>
      </h1>
      <div>
        <Link href="/">
          <Anchor pathName="/" router={router.pathname}>
            Home
          </Anchor>
        </Link>
        <Link href="/about">
          <Anchor pathName="/about" router={router.pathname}>
            About
          </Anchor>
        </Link>
      </div>
    </StyledNav>
  );
};

export default NavBar;
