import Container from "hoc/Container/Container";
import React, { FC } from "react";
import logo from "assets/logo/LOGO.png";
import Logo from "components/Logo/Logo";
import Searcher from "components/Searcher/Searcher";
import mainHeaderClasses from "./mainHeader.module.scss";
import LogoIcon from "icons/LogoIcon";
import SearcherContainer from "./Searcher/SearcherContainer";
import UserMenuContainer from "./UserMenu/UserMenuContainer";
import NavItem from "components/NavItem/NavItem";
import { INavItemsType } from "components/NavItem/NavItemType";
import { NavLink } from "react-router-dom";
import PhoneIcon from "icons/PhoneIcon";

const MainHeader: FC = () => {
  return (
    <div className={mainHeaderClasses.mainHeader}>
      <Container>
        <div className={mainHeaderClasses.content}>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <div className={mainHeaderClasses.phoneIcon}>
            <a href="tel:+7 (964) 89 99 119">
              <PhoneIcon />
            </a>
          </div>
          <SearcherContainer />
          <div className={mainHeaderClasses.userMenu}>
            <UserMenuContainer />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainHeader;
