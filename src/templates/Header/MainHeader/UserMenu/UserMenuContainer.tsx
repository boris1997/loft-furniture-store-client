import { useDispatch } from "react-redux";
import UserMenu from "components/UserMenu/UserMenu";
import * as actionTypes from "store/actions/actionTypes";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { useShowPopup } from "customHooks/useShowPopup";

const UserMenuContainer = () => {
  const showPopup = useShowPopup();

  const [userData, totalAmount, wishList] = useTypedSelector(
    ({ auth: { userData }, cart: { totalAmount }, wishList: { wishList } }) => [
      userData,
      totalAmount,
      wishList,
    ]
  );

  return (
    <>
      <UserMenu
        userData={userData}
        cartProductsAmount={totalAmount}
        wishListProductsAmount={wishList.length}
        showPopup={showPopup}
      />
    </>
  );
};

export default UserMenuContainer;
