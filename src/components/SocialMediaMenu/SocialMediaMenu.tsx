import NavItem from "components/NavItem/NavItem";
import { INavItemsType } from "components/NavItem/NavItemType";
import FaceBookIcon from "icons/socialMedia/FaceBookIcon";
import InstagramIcon from "icons/socialMedia/InstagramIcon";
import VkIcon from "icons/socialMedia/VkIcon";
import socialMediasClasses from "./SocialMediaMenu.module.scss";
import React from "react";

const SocialMediaMenu = () => {
  return (
    <ul className={socialMediasClasses.socialMedias}>
      <NavItem
        exact={true}
        link={"https://vk.com/borman1997"}
        type={INavItemsType.contactLink}
      >
        <VkIcon />
      </NavItem>
      <NavItem exact={true} link={""} type={INavItemsType.contactLink}>
        <InstagramIcon />
      </NavItem>
      <NavItem exact={true} link={""} type={INavItemsType.navLink}>
        <FaceBookIcon />
      </NavItem>
    </ul>
  );
};

export default SocialMediaMenu;
