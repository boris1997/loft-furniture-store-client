import CrossIcon from "icons/CrossIcon";
import React, { FC } from "react";
import cartItemDelBtnClasses from "./CartItemDeleteBtn.module.scss";
import * as actionTypes from "store/actions/actionTypes";

interface ICartStore {
  removed: any;
}

const CartItemDeleteBtn: FC<ICartStore> = ({ removed }) => {
  return (
    <div className={cartItemDelBtnClasses.cartItemDeleteBtn} onClick={removed}>
      <CrossIcon />
    </div>
  );
};

export default CartItemDeleteBtn;
