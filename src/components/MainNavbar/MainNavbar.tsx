import { FC } from "react";
import NavItem from "../NavItem/NavItem";
import { INavItemsType } from "../NavItem/NavItemType";
import MainNavbarClasses from "./MainNavbar.module.scss";

const MainNavbar: FC = () => {
  return (
    <ul className={MainNavbarClasses.mainNavbar}>
      <NavItem exact={true} link={"/"} type={INavItemsType.navLink}>
        Главная
      </NavItem>
      <NavItem exact={true} link={"/about"} type={INavItemsType.navLink}>
        О нас
      </NavItem>
      <NavItem exact={true} link={"/contacts"} type={INavItemsType.navLink}>
        Контакты
      </NavItem>
    </ul>
  );
};

export default MainNavbar;
