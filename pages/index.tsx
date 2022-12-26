import { GetServerSidePropsContext } from "next";
import { QueryClient, dehydrate } from "react-query";
import CustomHead from "@components/common/CustomHead";
import { moviesQuery } from "@api/movie";
import { getAbsoluteUrl } from "@utils/getAbsoluteUrl";
import MovieList from "@components/MovieList";
import { getSessionStorage, SCROLL_POS_KEY } from "@utils/sessionStorage";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const value = getSessionStorage<number>(SCROLL_POS_KEY, 0);
    window.scrollTo({
      top: value,
    });
  }, []);
  return (
    <>
      <CustomHead title="Home" />
      <MovieList />
    </>
  );
};

export default Home;

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const baseUrl = getAbsoluteUrl(req);
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(moviesQuery.key, () =>
    moviesQuery.fetcher({ baseUrl })
  );
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
