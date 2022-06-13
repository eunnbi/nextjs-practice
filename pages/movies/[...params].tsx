import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import CustomHead from "../../components/CustomHead";

type MovieDetailParams = [string, string] | [];

const Detail = ({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [title, id] = params as MovieDetailParams;
  return (
    <main>
      <CustomHead title={title as string} />
      <h1>{title}</h1>
    </main>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params!.params as MovieDetailParams;
  return {
    props: { params },
  };
};
