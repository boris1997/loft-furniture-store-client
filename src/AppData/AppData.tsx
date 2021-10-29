import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useActions } from "customHooks/useActions";
import { usePrevious } from "customHooks/usePrevious";
import { useTypedSelector } from "customHooks/useTypedSelector";
import $host from "http/axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { requestEquateServerCart } from "services/cartService";
import { requestEquateServerWishLists } from "services/wishListService";

const AppData = () => {
  const [cart, totalAmount, wishList, userData] = useTypedSelector(
    ({
      cart: { cart, totalAmount },
      wishList: { wishList },
      auth: { userData },
    }) => [cart, totalAmount, wishList, userData]
  );

  const { getCart, autoAuthUser, getWishList } = useActions();

  const wishListAmount = wishList.length;

  const prevTotalAmount = usePrevious(totalAmount);
  const prevWishListAmount = usePrevious(wishListAmount);

  useEffect(() => {
    getWishList();
    getCart();
    if (!userData) {
      autoAuthUser();
    }
  }, []);
  // console.log(totalAmount, prevTotalAmount);
  useEffect(() => {
    if (userData && totalAmount !== prevTotalAmount) {
      console.log(userData);
      const stringCart = cart.map((cartItem) => JSON.stringify(cartItem));
      requestEquateServerCart(stringCart, userData.id);
    }
  }, [userData, totalAmount]);

  useEffect(() => {
    if (userData && wishListAmount !== prevWishListAmount) {
      console.log(userData);
      const wishList = cart.map((wishListItem) => JSON.stringify(wishListItem));
      requestEquateServerWishLists(wishList, userData.id);
    }
  }, [userData, wishListAmount]);

  return <></>;
};

export default AppData;
