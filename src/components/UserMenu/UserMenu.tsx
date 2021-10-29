import NavItem from "components/NavItem/NavItem";
import { INavItemsType } from "components/NavItem/NavItemType";
import userMenuClasses from "./UserMenu.module.scss";
import { FC, MouseEventHandler } from "react";
import WishlistIcon from "icons/userIcons/WishlistIcon";
import CartIcon from "icons/userIcons/CartIcon";
import UserProfileIcon from "icons/userIcons/UserProfileIcon";
import Tooltip from "components/Tooltip/Tooltip";
import VerticalList from "components/VerticalList/VerticalList";
import tooltipClasses from "components/Tooltip/Tooltip.module.scss";
import Card from "components/Card/Card";
import { IAuthResponseUser } from "globalTypes/auth";
import PhoneIcon from "icons/PhoneIcon";
import AmountCounter from "components/AmountCounter/AmountCounter";

interface IUserMenu {
  showPopup?: MouseEventHandler<HTMLAnchorElement>;
  name?: string;
  wishListProductsAmount?: number;
  cartProductsAmount?: number;
  link?: string;
  userData?: IAuthResponseUser | null;
}

const UserMenu: FC<IUserMenu> = ({
  showPopup,
  userData,
  cartProductsAmount,
  wishListProductsAmount,
}) => {
  let userDataUi;
  let name = "Войти";
  let link = "#login";

  if (userData) {
    name = userData.name;
    link = "/account";
    const listUserChildren = (
      <Tooltip direction={"down"}>
        <Card>
          <VerticalList>
            <NavItem
              exact={true}
              link={"/account"}
              type={INavItemsType.navLink}
            >
              Личный кабинет
            </NavItem>
            <NavItem
              exact={true}
              link={"/orderHistory"}
              type={INavItemsType.navLink}
            >
              История заказов
            </NavItem>
            <NavItem exact={true} link={"/logout"} type={INavItemsType.navLink}>
              Выйти
            </NavItem>
          </VerticalList>
        </Card>
      </Tooltip>
    );
    userDataUi = (
      <NavItem
        exact={true}
        link={link}
        type={INavItemsType.navLink}
        customClasses={`${userMenuClasses.tooltip} ${tooltipClasses.toggler}`}
        clicked={showPopup}
        listChildren={listUserChildren}
      >
        <UserProfileIcon />
        <span>{name}</span>
      </NavItem>
    );
  } else {
    userDataUi = (
      <NavItem
        exact={true}
        link={link}
        type={INavItemsType.contactLink}
        clicked={showPopup}
      >
        <UserProfileIcon />
        <span>{name}</span>
      </NavItem>
    );
  }
  // console.log(cartProductsAmount > 0);
  let cartProductsAmountUi;
  if (cartProductsAmount && cartProductsAmount > 0) {
    cartProductsAmountUi = <AmountCounter amount={cartProductsAmount} />;
    console.log("ok");
  }
  let wishListAmountUi;
  if (wishListProductsAmount && wishListProductsAmount > 0) {
    wishListAmountUi = <AmountCounter amount={wishListProductsAmount} />;
    console.log("ok");
  }

  return (
    <ul className={userMenuClasses.userMenu}>
      {userDataUi}
      <NavItem exact={true} link={"/wishList"} type={INavItemsType.navLink}>
        {wishListAmountUi}
        <WishlistIcon />
        <span>Избранное</span>
      </NavItem>
      <NavItem exact={true} link={"/cart"} type={INavItemsType.navLink}>
        {cartProductsAmountUi}
        <CartIcon />
        <span>Корзина</span>
      </NavItem>
    </ul>
  );
};

export default UserMenu;
