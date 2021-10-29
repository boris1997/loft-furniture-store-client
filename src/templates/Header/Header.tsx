import MainHeader from "templates/Header/MainHeader/MainHeader";
import { FC } from "react";
import TopHeader from "./TopHeader/TopHeader";
import headerClasses from "./header.module.scss";
import BottomHeader from "./BottomHeader/BottomHeader";

const Header: FC = () => {
  return (
    <header className={headerClasses.header}>
      <TopHeader />
      <MainHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
