import Head from "next/head";

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default CustomHead;
