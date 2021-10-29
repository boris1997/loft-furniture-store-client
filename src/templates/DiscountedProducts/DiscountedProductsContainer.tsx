import Product from "components/Product/Product";
import Spinner from "components/Spinner/Spinner";
import { useActions } from "customHooks/useActions";
import {
  ISendProductTypes,
  useSendProductToCart,
} from "customHooks/useSendProducts";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { useEffect } from "react";

const DiscountedProductsContainer = () => {
  const {
    fetchDiscountedProducts,
    addProductToWishList,
    removeProductFromWishList,
  } = useActions();

  const discountedProducts = useTypedSelector(
    ({ discountedProducts: { discountedProducts } }) => discountedProducts
  );
  const cart = useTypedSelector(({ cart: { cart } }) => cart);
  const sendProducts = useSendProductToCart();
  const wishList = useTypedSelector(({ wishList: { wishList } }) => wishList);

  let uiProducts;

  if (discountedProducts) {
    // const {}

    uiProducts = (
      <Product
        sendProducts={sendProducts}
        addProductToWishList={addProductToWishList}
        removeProductFromWishList={removeProductFromWishList}
        wishList={wishList}
        cart={cart}
        products={discountedProducts}
      />
    );
  } else {
    uiProducts = <Spinner />;
  }

  useEffect(() => {
    fetchDiscountedProducts();
  }, []);

  return <>{uiProducts}</>;
};

export default DiscountedProductsContainer;
