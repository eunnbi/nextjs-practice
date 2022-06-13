// pages/index.tsx

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import CustomHead from "../components/CustomHead";
import Movie from "../components/Movie";
import { IMovieProps } from "../lib/api/movies";
import styled from "styled-components";

const HomeMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const Home = ({ results }: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <HomeMain>
      <CustomHead title="Home" />
      {results?.map((movie: IMovieProps) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </HomeMain>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ) // absolute URL (Server Side)
    .json();
  return {
    props: {
      results,
    },
  };
};
