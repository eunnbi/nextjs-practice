import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { QueryClient, useQuery, dehydrate } from "react-query";
import CustomHead from "../../components/common/CustomHead";
import GenreList from "../../components/GenreList";
import { Button } from "../../components/common/Button.styled";
import PosterImage from "../../components/common/PosterImage";
import { useBack } from "../../hooks/useBack";
import { movieDetailQuery } from "../../api/movie";
import { MovieData } from "../../types/movie";
import styles from "../../styles/Detail.module.scss";
import { getAbsoluteUrl } from "../../utils";

const Detail = ({
  params,
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [title, id] = params;
  const { data, status } = useQuery<MovieData>(movieDetailQuery.key(id), () =>
    movieDetailQuery.fetcher({ id })
  );
  const { goBack } = useBack();
  return (
    <>
      <CustomHead title={title as string} />
      <main className={styles.main}>
        <h1>{title}</h1>
        {status === "loading" ? (
          <>
            {query.imageUrl && (
              <div className={styles.imgContainer}>
                <PosterImage src={query.imageUrl as string} />
              </div>
            )}
            <h1 className={styles.loading}>Loading...</h1>
          </>
        ) : (
          <>
            <div className={styles.row}>
              <div className={styles.imgContainer}>
                <PosterImage src={data!.poster_path} />
              </div>
              <div className={styles.column}>
                <p>📅 {data?.release_date}</p>
                <p>⭐ {data?.vote_average}</p>
                <GenreList genres={data!.genres} />
              </div>
            </div>
            <div>
              <h3>📖 Overview</h3>
              <p className={styles.overview}>{data?.overview}</p>
            </div>
            <Button onClick={goBack}>Go Back</Button>
          </>
        )}
      </main>
    </>
  );
};

export default Detail;

type MovieDetailParams = [string, string] | [];

export const getServerSideProps = async ({
  params,
  query,
  req,
}: GetServerSidePropsContext) => {
  const baseUrl = getAbsoluteUrl(req);
  const [title, id] = params!.params as MovieDetailParams;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(movieDetailQuery.key(id), () =>
    movieDetailQuery.fetcher({ id, baseUrl })
  );
  return {
    props: {
      params: [title, id],
      query,
      dehydratedState: dehydrate(queryClient),
      navBar: false,
    },
  };
};
