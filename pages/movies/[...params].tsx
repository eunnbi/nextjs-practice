import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import CustomHead from "../../components/common/CustomHead";
import GenreList from "../../components/GenreList";
import { Button } from "../../components/common/Button";
import Loading from "../../components/Loading";
import { useBack } from "../../hooks/useBack";
import { getMovieDetail, IMovieProps } from "../../lib/api/movies";
import styled from "styled-components";

const PosterImg = styled.img`
  width: 300px;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const DetailRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 2rem;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Overview = styled.p`
  color: rgba(0, 0, 0, 0.8);
  line-height: 2rem;
`;

type MovieDetailParams = [string, string] | [];

const Detail = ({
  params,
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [title, id] = params as MovieDetailParams;
  const { data, status } = useQuery<IMovieProps>(["detail", id], () =>
    getMovieDetail(id as string)
  );
  const { goBack } = useBack();
  if (status === "loading") {
    return <Loading />;
  }
  return (
    <>
      <CustomHead title={title as string} />
      <main>
        <h1>{title}</h1>
        <DetailRow>
          <PosterImg src={query.imageUrl} />
          <div>
            <p>📅 {data?.release_date}</p>
            <p>⭐ {data?.vote_average}</p>
            <GenreList genres={data!.genres} />
          </div>
        </DetailRow>
        <h3>📖 Overview</h3>
        <Overview>{data?.overview}</Overview>
        <Button onClick={goBack}>Go Back</Button>
      </main>
    </>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params!.params as MovieDetailParams;
  const query = context.query;
  return {
    props: { params, query },
  };
};
