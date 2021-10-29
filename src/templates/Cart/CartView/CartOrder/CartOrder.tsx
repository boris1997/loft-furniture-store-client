import Button from "components/Button/Button";
import { ButtonSizes, ButtonTypes } from "globalTypes";
import React, { FC } from "react";
import CartOrderClasses from "./CartOrder.module.scss";

interface ICartOrder {
  totalPrice?: number | string;
  totalAmount?: number | string;
  titleAmount: string;
}

const CartOrder: FC<ICartOrder> = ({
  totalPrice,
  totalAmount,
  titleAmount,
}) => {
  const makeOrder = () => {};
  return (
    <div className={CartOrderClasses.body}>
      <div className={CartOrderClasses.wrapper}>
        <div className={CartOrderClasses.content}>
          <div className={CartOrderClasses.contentAmount}>
            <span className="">
              В корзине {totalAmount} {titleAmount}
            </span>
          </div>
          <div className={CartOrderClasses.contentTotalPrice}>
            <span>Сумма заказа:</span>
            <span className={CartOrderClasses.totalPrice}>{totalPrice} ₽</span>
          </div>
        </div>
        <div className={CartOrderClasses.btn}>
          <Button
            type={ButtonTypes.main}
            size={ButtonSizes.fullWidth}
            clicked={makeOrder}
          >
            Оформить Заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartOrder;
