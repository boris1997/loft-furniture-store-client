import React, { FC, ReactNode, useEffect, useState } from "react";
import { RootStateOrAny, useDispatch } from "react-redux";
import Spinner from "components/Spinner/Spinner";
import { RouterType } from "globalTypes";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { useSendProductToCart } from "customHooks/useSendProducts";

import { IProductPageElements, ProductParams } from "globalTypes/product";
import { getProduct } from "services/productService";
import ProductPageView from "./productPageView/ProductPageView";
import { useActions } from "customHooks/useActions";
import MobileMenu from "templates/MobileMenu/MobileMenu";
import ErrorContainer from "templates/Error/ErrorContainer";
// import { fetchProduct } from "store/actions/products";

const ProductPage: FC<RouterType> = () => {
  const { urlName, name } = useParams<ProductParams>();
  const { fetchProduct } = useActions();
  const product = useTypedSelector((state) => state.product.product);
  const error = useTypedSelector((state) => state.error.error);

  useEffect(() => {
    fetchProduct(urlName, name);
  }, [urlName, name]);

  let uiProducts = <Spinner />;

  if (product) {
    // const {
    //   product_img: { fullImg, smallImg },
    // } = product;

    // const slidesUi = fullImg.map((slideImg: ReactNode, i: number) => (
    //   <ProductPageImages key={i} slideImg={slideImg} />
    // ));

    uiProducts = <ProductPageView />;
  }

  if (error) {
    //
    uiProducts = (
      <ErrorContainer
        status={error.status}
        message={error.message}
        data={product}
      />
    );
  }

  return <>{uiProducts}</>;
};

export default ProductPage;

// id={product.id} name={product.name} rating={product.rating} price={product.price} info={product.info} /* material={product.material}  */smallImg={product.product_img.smallImg} fullImg={product.product_img.fullImg}
