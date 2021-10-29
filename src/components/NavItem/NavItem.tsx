import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import navItemClasses from "./NavItem.module.scss";
import { INavItem } from "./NavItemType";

const NavItem: FC<INavItem> = ({
  link,
  hash,
  clicked,
  exact,
  children,
  listChildren,
  type,
  active,
  customClasses,
  customLinkClasses,
  customActiveNavLink,
}) => {
  let ui = (
    <a
      onClick={clicked}
      className={`${navItemClasses.navItem} ${
        customLinkClasses && customLinkClasses
      }  ${active && navItemClasses.active} `}
      href={link}
    >
      {children}
    </a>
  ); // need for outer url or href tel, messangers
  if (type === "navLink") {
    ui = (
      <NavLink
        onClick={clicked}
        className={`${navItemClasses.navItem} ${
          customLinkClasses && customLinkClasses
        } ${active && navItemClasses.active} `}
        activeClassName={!customActiveNavLink ? navItemClasses.active : ""}
        exact={exact}
        to={{ pathname: link, hash: hash }}
      >
        {children}
        {/*  */}
      </NavLink>
    );
  }

  return (
    <li className={customClasses}>
      {ui}
      {listChildren}
    </li>
  );
};

export default NavItem;
