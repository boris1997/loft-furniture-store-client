import React, { FC } from "react";
import { ICartHeader } from "./cartHeaderTypes";
import cartHeaderClasses from "./CartHeader.module.scss";

const CartHeader: FC<ICartHeader> = ({ totalAmount, titleAmount }) => {
  /*   for(let i = totalAmount; i<100; i++){
    if( i === totalAmount ){
      if((i > 1 && i< 5) || (i >21 && i< 25) ){

      }
    }
  } */

  return (
    <div className={cartHeaderClasses.cartHeader}>
      <div className={cartHeaderClasses.wrapper}>
        <h1>Ваша Корзина</h1>
        <span>
          {totalAmount} {titleAmount}
        </span>
      </div>
    </div>
  );
};

export default CartHeader;
