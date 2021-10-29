import React, { FC, ReactNode, useEffect, useState } from "react";
import { RootStateOrAny, useDispatch } from "react-redux";
import Spinner from "components/Spinner/Spinner";
import { RouterType } from "globalTypes";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "customHooks/useTypedSelector";
import {
  useSendProductToCart,
  useSendProductToWishList,
} from "customHooks/useSendProducts";

import { IProductPageElements, ProductParams } from "globalTypes/product";
import { getProduct } from "services/productService";
import { useActions } from "customHooks/useActions";
import Product from "components/Product/Product";
// import { fetchProduct } from "store/actions/products";

const ProductsLayoutContainer: FC = () => {
  const products = useTypedSelector((state) => state.product.products);
  const cart = useTypedSelector(({ cart: { cart } }) => cart);
  const wishList = useTypedSelector(({ wishList: { wishList } }) => wishList);
  const { removeProductFromWishList } = useActions();
  const sendProducts = useSendProductToCart();
  const addProductToWishList = useSendProductToWishList();

  let uiProducts = <Spinner />;

  if (products) {
    // const {
    //   product_img: { fullImg, smallImg },
    // } = product;

    // const slidesUi = fullImg.map((slideImg: ReactNode, i: number) => (
    //   <ProductPageImages key={i} slideImg={slideImg} />
    // ));

    uiProducts = (
      <Product
        sendProducts={sendProducts}
        addProductToWishList={addProductToWishList}
        removeProductFromWishList={removeProductFromWishList}
        wishList={wishList}
        cart={cart}
        products={products}
      />
    );
  }

  return <>{uiProducts}</>;
};

export default ProductsLayoutContainer;

// id={product.id} name={product.name} rating={product.rating} price={product.price} info={product.info} /* material={product.material}  */smallImg={product.product_img.smallImg} fullImg={product.product_img.fullImg}
