// pages/index.tsx
import { QueryClient, dehydrate } from "react-query";
import CustomHead from "../components/common/CustomHead";
import styles from "../styles/Home.module.scss";
import { moviesQuery } from "../api/movies";
import { GetServerSideProps } from "next";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <main className={styles.main}>
      <CustomHead title="Home" />
      <MovieList />
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["x-forwarded-host"] || req.headers["host"];
  const baseUrl = `${protocol}://${host}`;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(moviesQuery.key, () =>
    moviesQuery.fetcher(baseUrl)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
