import React, { FC } from "react";

interface ICartItemBody {
  name: string;
  totalProductPrice: number | string;
  amount: number;
  cartStore: object;
}

const CartItemBody: FC<ICartItemBody> = ({
  cartStore,
  name,
  totalProductPrice,
  amount,
}) => {
  return <></>;
};

export default CartItemBody;
