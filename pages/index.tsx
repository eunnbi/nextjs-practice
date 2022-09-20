// pages/index.tsx
import { QueryClient, dehydrate } from "react-query";
import CustomHead from "../components/common/CustomHead";
import styles from "../styles/Home.module.scss";
import { moviesQuery } from "../api/movie";
import { GetServerSideProps } from "next";
import MovieList from "../components/MovieList";
import { getAbsoluteUrl } from "../utils";

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
  const baseUrl = getAbsoluteUrl(req);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(moviesQuery.key, () =>
    moviesQuery.fetcher({ baseUrl })
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
