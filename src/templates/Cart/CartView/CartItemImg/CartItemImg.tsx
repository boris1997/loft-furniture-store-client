import Img from "components/Img/Img";
import React, { FC } from "react";
import cartItemImgClasses from "./CartItemImg.module.scss";

interface ICartItemImg {
  img: string;
  name?: string;
}

const CartItemImg: FC<ICartItemImg> = ({ name, img }) => {
  const srcName = `${process.env.REACT_APP_API_URL}${img}`;
  return (
    <div>
      <Img
        imgClasses={cartItemImgClasses.cartItemImg}
        alt={name}
        src={srcName}
      />
    </div>
  );
};

export default CartItemImg;
