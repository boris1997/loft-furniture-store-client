import SectionHeader from "components/Section/SectionHeader/SectionHeader";
import WithSection from "components/Section/WithSection/WithSection";
import wishListClasses from "./WishListView.module.scss";
import React, { FC } from "react";
import { IProductElements } from "globalTypes/product";
import Img from "components/Img/Img";
import { Link } from "react-router-dom";
import Button from "components/Button/Button";
import { CartActions } from "store/types/cart";
import { ICartElements } from "globalTypes/cart";
import defaultBtnClasses from "components/button/button.module.scss";
import CartItemDeleteBtn from "templates/Cart/CartView/CartItemDeleteBtn/CartItemDeleteBtn";
import { ButtonTypes } from "globalTypes";

interface IWishListView {
  wishList: IProductElements[];
  cart: ICartElements[];
  sendProducts: (
    product: ICartElements
  ) => ((dispatch: React.Dispatch<CartActions>) => void) | undefined;
  removeItem: any;
}

const WishListView: FC<IWishListView> = ({
  wishList,
  sendProducts,
  cart,
  removeItem,
}) => {
  const renderWishListItem = () =>
    wishList.map(
      ({ img, name, urlName, id, price, discountPrice }: IProductElements) => {
        const disabled = cart
          ? cart.some((cartItem) => cartItem.name === name)
          : false;
        const srcName = `${process.env.REACT_APP_API_URL}${img}`;
        return (
          <div className={wishListClasses.item}>
            <div className={wishListClasses.itemImg}>
              <Img alt={name} src={srcName} />
            </div>
            <div className={wishListClasses.itemBody}>
              <div className={wishListClasses.titleBody}>
                <Link to={`${urlName}/${name} `}>{name}</Link>
              </div>
              <div className={wishListClasses.priceBody}>
                <span>{price} ₽</span>
              </div>
              <div className={wishListClasses.btn}>
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
                  type={ButtonTypes.main}
                  disabled={disabled}
                >
                  {disabled ? `В корзине` : ` добавить в корзину`}
                </Button>
              </div>
            </div>
            <CartItemDeleteBtn removed={() => removeItem(id)} />{" "}
          </div>
        );
      }
    );
  return (
    <WithSection>
      <SectionHeader title="Избранное" />
      <div className={wishListClasses.body}>{renderWishListItem()}</div>
    </WithSection>
  );
};

export default WishListView;
