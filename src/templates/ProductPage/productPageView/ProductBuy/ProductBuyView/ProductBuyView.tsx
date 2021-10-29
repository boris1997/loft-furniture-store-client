import Button from "components/Button/Button";
import { FC, MouseEventHandler } from "react";
import ProductBuyClasses from "./ProductBuyView.module.scss";
import { IProductCardElements, IProductElements } from "globalTypes/product";
import { ButtonTypes } from "globalTypes";
import StarIcon from "icons/StarIcon";
import { CloseButton } from "react-bootstrap";
import LinkButton from "components/LinkButton/LinkButton";
import { Link } from "react-router-dom";
import WishlistIcon from "icons/userIcons/WishlistIcon";
import {
  AddProductToWishList,
  RemoveProductFromWishList,
} from "store/types/wishList";
import { ICartElements } from "globalTypes/cart";

interface IProductBuy {
  product: IProductCardElements;
  wishList: IProductElements[];
  cart: ICartElements[];
  sendProducts: MouseEventHandler;
  addProductToWishList: MouseEventHandler<HTMLAnchorElement>;
  removeFromWishList: MouseEventHandler<HTMLAnchorElement>;
}

/* interface IProductBuyElements extends IProductElements {
  rating?: number | string;
} */

const ProductBuyView: FC<IProductBuy> = ({
  product: { id, img, name, price, rating, urlName, discountPrice },
  cart,
  wishList,
  sendProducts,
  addProductToWishList,
  removeFromWishList,
}) => {
  const isWishListItem = wishList.some(
    (wishListItem: IProductElements) => wishListItem.id === id
  );
  const cartBtndisabled = cart.some(
    (cartItem: ICartElements) => cartItem.name === name
  );

  let wishUI = (
    <Link to="" onClick={addProductToWishList}>
      <WishlistIcon />
      Добавить в избранное
    </Link>
  );

  if (isWishListItem) {
    wishUI = (
      <Link to="" onClick={removeFromWishList}>
        <WishlistIcon IconClasses={ProductBuyClasses.active} />
        Убрать из избранного
      </Link>
    );
  }

  return (
    <div className={ProductBuyClasses.productBuy}>
      <div className={ProductBuyClasses.rating}>
        <StarIcon />{" "}
        <span className={ProductBuyClasses.ratingIndex}>{rating}</span>
      </div>
      <div className="">
        <h1>{name}</h1>
      </div>
      <div className={ProductBuyClasses.callToAction}>
        <div className={ProductBuyClasses.price}>
          <span>{price}₽</span>
        </div>
        <div className={ProductBuyClasses.buy}>
          {" "}
          <Button
            clicked={sendProducts}
            type={ButtonTypes.main}
            customClass={ProductBuyClasses.btn}
            disabled={cartBtndisabled}
          >
            {cartBtndisabled ? `В корзине` : ` добавить в корзину`}
          </Button>{" "}
        </div>
        <div className={ProductBuyClasses.addToWish}>{wishUI} </div>
      </div>

      <div className={ProductBuyClasses.description}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          atque tempore adipisci, veniam non, tenetur, dolorem culpa vel
          quisquam asperiores unde possimus excepturi ratione hic. Praesentium
          ut cupiditate dolorum earum!
        </p>
      </div>
    </div>
  );
};

export default ProductBuyView;
