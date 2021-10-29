import DeliveryIcon from "icons/DeliveryIcon";
import PhoneIcon from "icons/PhoneIcon";
import NavItem from "components/NavItem/NavItem";
import { INavItemsType } from "components/NavItem/NavItemType";
import { FC } from "react";
import FeedbackClasses from "./feedback.module.scss";

const Feedback: FC = () => {
  return (
    <ul className={FeedbackClasses.feedback}>
      <NavItem
        exact={true}
        link={"tel:+7 (964) 89 99 119"}
        type={INavItemsType.contactLink}
      >
        <PhoneIcon />
        <span>8 (964) 89 99 119</span>
      </NavItem>
      <NavItem exact={true} link={"delivery"} type={INavItemsType.navLink}>
        <DeliveryIcon />
        <span>Доставка</span>
      </NavItem>
    </ul>
  );
};

export default Feedback;
