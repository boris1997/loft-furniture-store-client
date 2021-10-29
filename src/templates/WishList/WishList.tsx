import Spinner from "components/Spinner/Spinner";
import { useActions } from "customHooks/useActions";
import { useSendProductToCart } from "customHooks/useSendProducts";
import { useTypedSelector } from "customHooks/useTypedSelector";
import React from "react";
import ErrorContainer from "templates/Error/ErrorContainer";
import WishListView from "./WishListView/WishListView";

const WishList = () => {
  const wishList = useTypedSelector(({ wishList: { wishList } }) => wishList);
  const cart = useTypedSelector(({ cart: { cart } }) => cart);
  const error = useTypedSelector((state) => state.error.error);
  const sendProducts = useSendProductToCart();
  const { removeProductFromWishList } = useActions();
  let uiWishList = <Spinner />;

  if (wishList) {
    uiWishList = (
      <WishListView
        wishList={wishList}
        sendProducts={sendProducts}
        removeItem={removeProductFromWishList}
        cart={cart}
      />
    );
  }

  if (error) {
    //
    uiWishList = (
      <ErrorContainer
        status={error.status}
        message={error.message}
        data={wishList}
      />
    );
  }
  console.log(wishList);

  return <>{uiWishList}</>;
};

export default WishList;
