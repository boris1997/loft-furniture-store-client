import CashBackIcon from "icons/CashBackIcon";
import GiftIcon from "icons/GiftIcon";
import RubleIcon from "icons/RubleIcon";
import accountBonusClasses from "./AccountBonus.module.scss";
import React from "react";

const AccountBonus = () => {
  return (
    <div className={accountBonusClasses.body}>
      <h3>Бонусная программа</h3>
      <div className={accountBonusClasses.content}>
        <div className={accountBonusClasses.item}>
          <CashBackIcon />
          <p>Возвращаем до 7% на бонусный счет</p>
        </div>
        <div className={accountBonusClasses.item}>
          <RubleIcon />
          <p> 1 бонус = 1 рубль</p>
        </div>
        <div className={accountBonusClasses.item}>
          <GiftIcon />
          <p> Оплачивайте бонусами до 20% от покупки</p>
        </div>
      </div>
    </div>
  );
};

export default AccountBonus;
