// pages/index.tsx

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import CustomHead from "../components/common/CustomHead";
import Movie from "../components/Movie";
import { IMovieProps } from "../lib/api/movies";
import styles from "../styles/Home.module.scss";

const Home = ({ results }: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <main className={styles.main}>
      <CustomHead title="Home" />
      {results?.map((movie: IMovieProps) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["x-forwarded-host"] || req.headers["host"];
  const baseUrl = `${protocol}://${host}`;
  const { results } = await (
    await fetch(`${baseUrl}/api/movies`)
  ) // absolute URL (Server Side)
    .json();
  return {
    props: {
      results,
    },
  };
};
