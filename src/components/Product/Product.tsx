import Button from "components/Button/Button";
import WithFlexbox, { FlexboxDirection } from "components/FlexBox/WithFlexbox";
import { ButtonTypes } from "globalTypes";
import { ICartElements } from "globalTypes/cart";
import { IProductCardElements, IProductElements } from "globalTypes/product";
import WishlistIcon from "icons/userIcons/WishlistIcon";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { CartActions } from "store/types/cart";
import {
  AddProductToWishList,
  RemoveProductFromWishList,
} from "store/types/wishList";
import productClasses from "./Product.module.scss";

interface IProduct {
  products: IProductCardElements[];
  wishList: IProductElements[];
  cart: ICartElements[];
  addProductToWishList: (
    product: IProductElements
  ) => AddProductToWishList | undefined;
  sendProducts: (
    product: ICartElements
  ) => ((dispatch: React.Dispatch<CartActions>) => void) | undefined;
  removeProductFromWishList: (id: number) => RemoveProductFromWishList;
}

const Product: FC<IProduct> = ({
  products,
  cart,
  wishList,
  sendProducts,
  addProductToWishList,
  removeProductFromWishList,
}) => {
  const renderProduct = () =>
    products.map(({ name, img, price, id, discountPrice, urlName }) => {
      const disabled = cart
        ? cart.some((cartItem) => cartItem.name === name)
        : false;
      let priceUI = <p className="price">{price} ₽ </p>;

      if (discountPrice) {
        priceUI = (
          <div className="d-f jc-c ai-c">
            <p>{discountPrice} ₽</p>
            <s className="">{price} ₽ </s>
          </div>
        );
      }
      const isWishListItem = wishList.some(
        (wishListItem: IProductElements) => wishListItem.id === id
      );
      let wishUI = (
        <Link
          to=""
          onClick={(e) => {
            e.preventDefault();
            addProductToWishList({
              id: id,
              img: img,
              name: name,
              urlName: urlName,
              price: price,
              discountPrice: discountPrice,
            });
          }}
        >
          <WishlistIcon />
        </Link>
      );
      console.log(isWishListItem);
      if (isWishListItem) {
        wishUI = (
          <Link
            to=""
            onClick={(e) => {
              e.preventDefault();
              removeProductFromWishList(id);
            }}
          >
            <WishlistIcon IconClasses={productClasses.active} />
          </Link>
        );
      }
      return (
        <div className={productClasses.product} key={id}>
          <div className={productClasses.wrapper}>
            {/* <ProductHeader name={name} urlName={urlName} img={img} /> */}
            <div className={productClasses.wish}>{wishUI}</div>
            <div className={productClasses.header}>
              <Link to={{ pathname: `${urlName}/${name}` }}>
                <img
                  className={productClasses.img}
                  src={`${process.env.REACT_APP_API_URL}${img}`}
                  alt={name}
                  srcSet=""
                />
              </Link>
            </div>
            <div className={productClasses.body}>
              <div className={productClasses.bodyWrapper}>
                <Link to={{ pathname: `${urlName}/${name}` }}>
                  <h3 className="">{name}</h3>
                </Link>
                {priceUI}
                {/*      {children} */}
                <Button
                  clicked={() => {
                    sendProducts({
                      id: id,
                      img: img,
                      name: name,
                      urlName: urlName,
                      price: price,
                      discountPrice: discountPrice,
                      amount: 1,
                    });
                  }}
                  customClass={productClasses.btn}
                  type={ButtonTypes.main}
                  disabled={disabled}
                >
                  {disabled ? `В корзине` : ` добавить в корзину`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    });

  return <>{renderProduct()}</>;
};

export default Product;
