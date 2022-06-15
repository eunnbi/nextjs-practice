import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import CustomHead from "../../components/common/CustomHead";
import GenreList from "../../components/GenreList";
import { Button } from "../../components/common/Button.styled";
import { useBack } from "../../hooks/useBack";
import { getMovieDetail, IMovieProps } from "../../lib/api/movies";
import styles from "../../styles/Detail.module.scss";

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
  return (
    <>
      <CustomHead title={title as string} />
      <main>
        <h1>{title}</h1>
        {status === "loading" ? (
          <div className={styles.column}>
            <img className={styles.posterImg} src={query.imageUrl} />
            <h1 className={styles.loading}>Loading...</h1>
          </div>
        ) : (
          <>
            <div className={styles.row}>
              <img className={styles.posterImg} src={query.imageUrl} />
              <div>
                <p>📅 {data?.release_date}</p>
                <p>⭐ {data?.vote_average}</p>
                <GenreList genres={data!.genres} />
              </div>
            </div>
            <h3>📖 Overview</h3>
            <p className={styles.overview}>{data?.overview}</p>
            <Button onClick={goBack}>Go Back</Button>
          </>
        )}
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
