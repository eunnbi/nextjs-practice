import type { NextPage } from "next";
import { Button } from "../components/common/Button.styled";
import CustomHead from "../components/common/CustomHead";
import { ImGithub } from "react-icons/im";
import styles from "../styles/About.module.scss";

const About: NextPage = () => {
  return (
    <>
      <CustomHead title="About" />
      <main className={styles.main}>
        <p>
          <span>NextJS</span>를 공부하며 간단한 영화 정보 애플리케이션🎬 을
          만들었습니다.
        </p>
        <Button>
          <a
            className={styles.link}
            href="https://github.com/eunnbi/nextjs-practice"
            target="_blank"
          >
            <ImGithub />
            README 보러가기
          </a>
        </Button>
      </main>
    </>
  );
};

export default About;
