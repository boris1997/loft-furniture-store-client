import { useActions } from "customHooks/useActions";
import {
  useSendProductToCart,
  useSendProductToWishList,
} from "customHooks/useSendProducts";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { ICartElements } from "globalTypes/cart";
import React from "react";
import ErrorContainer from "templates/Error/ErrorContainer";
import ProductBuyView from "./ProductBuyView/ProductBuyView";

const ProductBuyContainer = () => {
  const sendProducts = useSendProductToCart();
  const addProductToWishList = useSendProductToWishList();
  const { removeProductFromWishList } = useActions();
  const [cart, product, wishList] = useTypedSelector(
    ({ cart: { cart }, product: { product }, wishList: { wishList } }) => [
      cart,
      product,
      wishList,
    ]
  );
  let productBuy;
  if (product) {
    productBuy = (
      <ProductBuyView
        sendProducts={() =>
          sendProducts({
            id: product.id,
            img: product.img,
            name: product.name,
            urlName: product.urlName,
            price: product.price,
            discountPrice: product.discountPrice,
            amount: 1,
          })
        }
        addProductToWishList={(e) => {
          e.preventDefault();
          addProductToWishList({
            id: product.id,
            img: product.img,
            name: product.name,
            urlName: product.urlName,
            price: product.price,
            discountPrice: product.discountPrice,
          });
        }}
        removeFromWishList={(e) => {
          e.preventDefault();
          removeProductFromWishList(product.id);
        }}
        wishList={wishList}
        cart={cart}
        product={product}
      />
    );
  }

  return <>{productBuy}</>;
};

export default ProductBuyContainer;
