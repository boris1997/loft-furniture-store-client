import React, { FC } from "react";

interface IImg {
  alt?: string;
  src: string;
  imgClasses?: string;
}

const Img: FC<IImg> = ({ src, alt, imgClasses }) => {
  return (
    <>
      <img className={imgClasses} src={src} alt={alt} />
    </>
  );
};

export default Img;
