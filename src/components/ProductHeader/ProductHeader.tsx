import React, { FC } from "react";
import { Link } from "react-router-dom";
import productHeaderClasses from "./ProductHeader.module.scss";

interface IProductHeader {
  name: string;
  urlName: string;
  img: string;
}

const ProductHeader: FC<IProductHeader> = ({ name, urlName, img }) => {
  return (
    <Link to={{ pathname: `${urlName}/${name}` }}>
      <div className={productHeaderClasses.header}>
        <img
          className={productHeaderClasses.img}
          src={`${process.env.REACT_APP_API_URL}${img}`}
          alt={name}
          srcSet=""
        />
      </div>
    </Link>
  );
};

export default ProductHeader;
