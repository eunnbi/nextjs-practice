import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 10px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  img {
    max-width: 100px;
    margin-bottom: 5px;
  }
  div {
    display: flex;
    gap: 10px;
  }
`;

const Anchor = styled.a<{ router: string; pathName: string }>`
  color: ${(props) => (props.pathName === props.router ? "red" : "black")};
  cursor: pointer;
`;

const NavBar = () => {
  const router = useRouter();

  return (
    <StyledNav>
      <img src="/vercel.svg" />
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
