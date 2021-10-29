import { getDeclinedTitle } from "./shared/declinedTitleFunction";
import { useTypedSelector } from "customHooks/useTypedSelector";
import CartView from "./CartView/CartView";
import { useActions } from "customHooks/useActions";

const CartContainer = () => {
  const cart = useTypedSelector(({ cart: { cart } }) => cart);
  const totalAmount = useTypedSelector(
    ({ cart: { totalAmount } }) => totalAmount
  );
  const wishList = useTypedSelector(({ wishList: { wishList } }) => wishList);

  const { addProductToWishList } = useActions();

  const totalPrice = useTypedSelector(({ cart: { totalPrice } }) => totalPrice);
  // const userData = useTypedSelector(({ auth: { userData } }) => userData);
  const {
    increaseAmount,
    decreaseAmount,
    changeAmountCart,
    checkFieldCart,
    removeItemFromCart,
  } = useActions();
  // const dispatch = useDispatch();

  let titleAmount;
  let cartUI = <div>Ваша корзина пуста</div>;
  if (cart.length) {
    titleAmount = totalAmount ? getDeclinedTitle(totalAmount) : "";
    cartUI = (
      <CartView
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
        changeAmount={changeAmountCart}
        addProductToWishList={addProductToWishList}
        checkField={checkFieldCart}
        removeItem={removeItemFromCart}
        wishList={wishList}
        titleAmount={titleAmount}
        totalAmount={totalAmount}
        totalPrice={totalPrice}
        cart={cart}
      />
    );
  }

  return <>{cartUI}</>;
};

export default CartContainer;
