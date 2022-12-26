import Image, { ImageProps } from "next/image";
import styled from "styled-components";

const Img = styled(Image)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 15px;
`;

interface Props {
  src: string;
  title: string;
  sizes?: ImageProps["sizes"];
}

const PosterImage = ({ src, title, sizes }: Props) => {
  return (
    <Img
      src={`https://image.tmdb.org/t/p/w500/${src}`}
      alt={`${title} poster`}
      fill
      placeholder="blur"
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcOnt2PQAF5AJMrzp1XwAAAABJRU5ErkJggg=="
      sizes={sizes}
    />
  );
};

export default PosterImage;
