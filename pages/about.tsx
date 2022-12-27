import type { NextPage } from "next";
import { Button } from "@components/common/Button.styled";
import CustomHead from "@components/common/CustomHead";
import { ImGithub } from "react-icons/im";
import styled from "styled-components";
import { useEffect } from "react";
import { useInnerHeight } from "@hooks/useInnerHeight";

const About: NextPage = () => {
  useInnerHeight();
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow-y: hidden;
  height: calc(100vh - var(--header-height) - 1px);
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
  @media screen and (max-width: 900px) {
    height: calc(var(--vh, 1vh) * 100 - var(--header-height) - 1px);
  }
`;
