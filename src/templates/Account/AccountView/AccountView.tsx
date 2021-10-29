import SectionHeader from "components/Section/SectionHeader/SectionHeader";
import WithSection from "components/Section/WithSection/WithSection";
import React from "react";
import accountViewClasses from "./AccountView.module.scss";
import AccountHeaderContainer from "templates/Account/AccountView/AccountHeader/AccountHeaderContainer";
import AccountBonus from "./AccountBonus/AccountBonus";
import AccountConfirmContainer from "./AccountConfirm/AccountConfirmContainer";
import AccountOrdersContainer from "./AccountOrders/AccountOrdersContainer";
import AccountDataContainer from "./AccountData/AccountDataContainer";
import AccountDiscounts from "./AccountDiscounts/AccountDiscounts";

const AccountView = () => {
  return (
    <WithSection>
      <SectionHeader title="Личный кабинет" />
      <div className={accountViewClasses.content}>
        <AccountHeaderContainer />
        <AccountConfirmContainer />
        <div
          className={accountViewClasses.bonus + " " + accountViewClasses.item}
        >
          <AccountBonus />
        </div>
        <div
          className={accountViewClasses.data + " " + accountViewClasses.item}
        >
          <AccountDataContainer />
        </div>
        <div
          className={
            accountViewClasses.discounts + " " + accountViewClasses.item
          }
        >
          <AccountDiscounts />
        </div>
        <div
          className={accountViewClasses.orders + " " + accountViewClasses.item}
        >
          <AccountOrdersContainer />
        </div>
      </div>
    </WithSection>
  );
};

export default AccountView;
