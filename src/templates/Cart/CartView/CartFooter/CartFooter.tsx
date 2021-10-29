import Button from "components/Button/Button";
import React, { FC } from "react";
import cartFooterClasses from "./CartFooter.module.scss";
import { ButtonTypes } from "globalTypes";

interface ICartFooter {
  totalPrice?: number | string;
}

const CartFooter: FC<ICartFooter> = ({ totalPrice }) => {
  const makeOrder = () => {};
  return (
    <div className={cartFooterClasses.cartFooter}>
      <div className={cartFooterClasses.content}>
        <div>
          <span> Итоговая стоимость:</span> <span>{totalPrice} ₽</span>{" "}
        </div>
        <Button
          clicked={makeOrder}
          customClass={cartFooterClasses.btn}
          type={ButtonTypes.main}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default CartFooter;
