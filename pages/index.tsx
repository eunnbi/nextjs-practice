import { GetServerSidePropsContext } from "next";
import { QueryClient, dehydrate } from "react-query";
import CustomHead from "@components/common/CustomHead";
import { moviesQuery } from "@api/movie";
import { getAbsoluteUrl } from "@utils/index";
import MovieListMain from "@components/MovieListMain";

const Home = () => {
  return (
    <>
      <CustomHead title="Home" />
      <MovieListMain />
    </>
  );
};

export default Home;

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
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
