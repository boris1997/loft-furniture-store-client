import { FC } from "react";
import cartClasses from "./Cart.module.scss";
import CartItemDeleteBtn from "./CartItemDeleteBtn/CartItemDeleteBtn";
import Counter from "components/Counter/Counter";
import WithSection from "components/Section/WithSection/WithSection";
import SectionHeader from "components/Section/SectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import Img from "components/Img/Img";
import { ICartElements } from "globalTypes/cart";
import CartOrder from "./CartOrder/CartOrder";
import { IProductElements } from "globalTypes/product";
import { CartActions } from "store/types/cart";
import { AddProductToWishList } from "store/types/wishList";

interface ICartView {
  increaseAmount: (
    id: string | number
  ) => (dispatch: React.Dispatch<CartActions>) => void;
  cart: ICartElements[];
  wishList: IProductElements[];
  titleAmount: string;
  totalAmount: number;
  totalPrice: string | number;
  decreaseAmount: (
    id: string | number
  ) => (dispatch: React.Dispatch<CartActions>) => void;
  addProductToWishList: (product: IProductElements) => AddProductToWishList;
  changeAmount: (
    value: string,
    id: string | number
  ) => (dispatch: React.Dispatch<CartActions>) => void;
  checkField: (
    value: string,
    id: string | number
  ) => (dispatch: React.Dispatch<CartActions>) => void;
  removeItem: (
    id: string | number
  ) => (dispatch: React.Dispatch<CartActions>) => void;
}

const CartView: FC<ICartView> = ({
  cart,
  addProductToWishList,
  increaseAmount,
  changeAmount,
  decreaseAmount,
  titleAmount,
  wishList,
  checkField,
  totalPrice,
  totalAmount,
  removeItem,
}) => {
  const renderCartItem = () =>
    cart.map(
      ({
        img,
        name,
        urlName,
        id,
        amount,
        price,
        discountPrice,
      }: ICartElements) => {
        const totalProductPrice = amount ? amount * price : 1 * price;
        const srcName = `${process.env.REACT_APP_API_URL}${img}`;
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
            Сохранить на потом
          </Link>
        );
        if (isWishListItem) {
          wishUI = <Link to="wishList">В избранном</Link>;
        }
        return (
          /*  */
          <div className={cartClasses.item}>
            <div className={cartClasses.itemImg}>
              <Img alt={name} src={srcName} />
            </div>
            <div className={cartClasses.itemBody}>
              <div className={cartClasses.titleBody}>
                <Link to={`${urlName}/${name} `}>{name}</Link>
              </div>
              <div className={cartClasses.priceBody}>
                <span>{totalProductPrice} ₽</span>
              </div>
              <div className={cartClasses.counter}>
                {" "}
                <Counter
                  increased={() => increaseAmount(id)}
                  decreased={() => decreaseAmount(id)}
                  changed={(value: string) => changeAmount(value, id)}
                  blured={(value: string) => checkField(value, id)}
                  value={amount}
                />
              </div>
              <div className={cartClasses.wishListBody}>{wishUI}</div>
            </div>
            <CartItemDeleteBtn removed={() => removeItem(id)} />{" "}
          </div>
        );
      }
    );

  /*   const decreaseAmoint = (id) => {

  }; */

  return (
    <WithSection>
      <SectionHeader title="Ваша Корзина" />
      <div className={cartClasses.content}>
        <div className={cartClasses.items}>{renderCartItem()}</div>
        <CartOrder
          totalPrice={totalPrice}
          totalAmount={totalAmount}
          titleAmount={titleAmount}
        />
      </div>
    </WithSection>
  );
};

export default CartView;
