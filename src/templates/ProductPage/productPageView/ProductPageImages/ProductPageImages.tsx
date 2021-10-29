import React, { FC, ReactNode } from "react";
import { IImgTogglers } from "components/Slider/Types/types";

import ProductImgClasses from "./ProductPageImages.module.scss";

const ProductPageImages: FC<IImgTogglers> = ({ slideImg }) => {
  return (
    <div className={ProductImgClasses.img}>
      <img
        /* className={SliderClasses.slider__img} */ src={`${process.env.REACT_APP_API_URL}${slideImg}`}
        alt=""
        srcSet=""
      />
    </div>
  );
};

export default ProductPageImages;
