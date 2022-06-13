import type { NextPage } from "next";
import { Button } from "../components/common/Button";
import CustomHead from "../components/common/CustomHead";
import { ImGithub } from "react-icons/im";
import styled from "styled-components";

const AboutMain = styled.main`
  padding: 1.5rem;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  p {
    text-align: center;
  }
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    font-size: 20px;
  }
`;

const About: NextPage = () => {
  return (
    <>
      <CustomHead title="About" />
      <AboutMain>
        <p>
          <span>NextJS</span>를 공부하며 간단한 영화 정보 애플리케이션🎬 을
          만들었습니다.
        </p>
        <Button>
          <Anchor
            href="https://github.com/eunnbi/nextjs-practice"
            target="_blank"
          >
            <ImGithub />
            README 보러가기
          </Anchor>
        </Button>
      </AboutMain>
    </>
  );
};

export default About;
