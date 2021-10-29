import NavItem from "components/NavItem/NavItem";
import { INavItemsType } from "components/NavItem/NavItemType";
import Container from "hoc/Container/Container";
import CatalogIcon from "icons/CatalogIcon";
import HomeIcon from "icons/HomeIcon";
import React, { FC, MouseEventHandler } from "react";
import navigationClasses from "./MobileMenuNavigation.module.scss";

import UserMenuContainer from "templates/Header/MainHeader/UserMenu/UserMenuContainer";
import WishlistIcon from "icons/userIcons/WishlistIcon";
import CartIcon from "icons/userIcons/CartIcon";
import UserProfileIcon from "icons/userIcons/UserProfileIcon";
import { IAuthResponseUser } from "globalTypes/auth";

interface IMobileMenuNavigation {
  pathname: string;
  hash: string;
  userData?: IAuthResponseUser | null;
}

const MobileMenuNavigation: FC<IMobileMenuNavigation> = ({
  pathname,
  hash,
  userData,
}) => {
  console.log(hash, hash === "#", pathname);

  return (
    <div className={navigationClasses.mobileMenu}>
      <Container>
        <nav>
          <ul className={navigationClasses.body}>
            <NavItem
              exact
              link={"/"}
              hash={""}
              type={INavItemsType.navLink}
              active={pathname === "/" && hash === ""}
              customActiveNavLink
            >
              <HomeIcon />
              Главная
            </NavItem>
            <NavItem
              exact
              link={"/"}
              hash={"catalog"}
              type={INavItemsType.navLink}
              active={hash === "#catalog"}
              customActiveNavLink
            >
              <CatalogIcon />
              Каталог
            </NavItem>
            <NavItem
              exact
              link={userData ? "/account" : ""}
              hash={!userData ? "login" : ""}
              type={INavItemsType.navLink}
              active={
                (pathname === "/account" && hash !== "#catalog") ||
                hash === "#login"
              }
              customActiveNavLink
            >
              <UserProfileIcon />
              {userData ? userData.name : "Войти"}
            </NavItem>
            <NavItem
              exact
              link={"/wishList"}
              hash={""}
              type={INavItemsType.navLink}
              active={
                pathname === "/wishList" &&
                hash !== "#catalog" &&
                hash !== "#login"
              }
              customActiveNavLink
            >
              <WishlistIcon />
              Избранное
            </NavItem>
            <NavItem
              exact
              link={"/cart"}
              hash={""}
              type={INavItemsType.navLink}
              active={
                pathname === "/cart" && hash !== "#catalog" && hash !== "#login"
              }
              customActiveNavLink
            >
              <CartIcon />
              Корзина
            </NavItem>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default MobileMenuNavigation;
