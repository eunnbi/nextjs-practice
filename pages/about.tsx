import type { NextPage } from "next";
import { Button } from "@components/common/Button.styled";
import CustomHead from "@components/common/CustomHead";
import { ImGithub } from "react-icons/im";
import styled from "styled-components";

const About: NextPage = () => {
  return (
    <>
      <CustomHead title="About" />
      <Main>
        <p>
          <span>NextJS</span>를 공부하며 간단한 영화 정보 애플리케이션🎬 을
          만들었습니다.
        </p>
        <Button>
          <a
            href="https://github.com/eunnbi/nextjs-practice"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub />
            README 보러가기
          </a>
        </Button>
      </Main>
    </>
  );
};

export default About;

const Main = styled.main`
  position: fixed;
  top: var(--header-height);
  bottom: 0;
  width: 100%;
  max-width: var(--max-width);
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  p {
    text-align: center;
    span {
      font-weight: bold;
    }
  }
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      font-size: 20px;
    }
  }
`;
