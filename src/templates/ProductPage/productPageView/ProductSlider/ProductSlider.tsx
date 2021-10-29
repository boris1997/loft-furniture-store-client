import Carousel from "components/Slider/Carousel/Carousel";
import { SliderContext } from "components/Slider/Context/SliderContext";
import {
  ArrowTypeVariant,
  BulletType,
  SliderSettings,
} from "components/Slider/Types/types";
import { useTypedSelector } from "customHooks/useTypedSelector";
import React, { FC, ReactNode } from "react";
import { RootStateOrAny } from "react-redux";
import { useParams } from "react-router-dom";
import ProductPageImages from "../ProductPageImages/ProductPageImages";
import ProductSliderClasses from "./ProductSlider.module.scss";

interface ProductParam {
  name: string;
  urlName: string;
}

const ProductSlider: FC = () => {
  let {
    product_img: { smallImg, fullImg },
  } = useTypedSelector(
    /* <
    IProductElementsExtended & IProductElementsWithImg,
    IProductElementsExtended & IProductElementsWithImg
  > */ ({ product: { product } }: RootStateOrAny) => product
  ); // на потом
  const { name } = useParams<ProductParam>();

  //
  let slidesUi: FC = fullImg.map((slideImg: ReactNode, i: number) => (
    <ProductPageImages key={i} slideImg={slideImg} />
  ));
  const sliderSettings: SliderSettings = {
    togglers: {
      imgs: {
        ui: smallImg,
      },
      arrows: {
        type: ArrowTypeVariant.insideCircle,
      },
      bullet: {
        type: BulletType.rounded,
      },
    },
  };

  //

  return (
    <SliderContext.Provider value={slidesUi}>
      <Carousel sliderSettings={sliderSettings} />
    </SliderContext.Provider>
  );
};

export default ProductSlider;
