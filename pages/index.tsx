import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import CustomHead from "@components/common/CustomHead";
import { moviesQuery } from "@api/movie";
import { getAbsoluteUrl } from "@utils/getAbsoluteUrl";
import MovieList from "@components/MovieList";
import { getSessionStorage, SCROLL_POS_KEY } from "@utils/sessionStorage";
import { useEffect } from "react";

const Home = ({ data } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    const value = getSessionStorage<number>(SCROLL_POS_KEY, 0);
    window.scrollTo({
      top: value,
    });
  }, []);
  return (
    <>
      <CustomHead title="Home" />
      <MovieList movieList={data} />
    </>
  );
};

export default Home;

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const baseUrl = getAbsoluteUrl(req);
  const data = await moviesQuery.fetcher({ baseUrl })
  return {
    props: {
      data
    },
  };
};
