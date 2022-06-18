import Image from "next/image";

import styled from "styled-components";

const Img = styled(Image)`
  width: 100%;
  height: auto !important;
  position: relative !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 15px;
`;

const PosterImg = ({ src }: { src: string }) => {
  return (
    <Img
      src={`https://image.tmdb.org/t/p/w500/${src}`}
      layout="fill"
      placeholder="blur"
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcOnt2PQAF5AJMrzp1XwAAAABJRU5ErkJggg=="
    />
  );
};

export default PosterImg;