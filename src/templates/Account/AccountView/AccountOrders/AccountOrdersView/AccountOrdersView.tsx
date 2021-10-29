import React from "react";
import accountOrdersViewClasses from "./AccountOrdersView.module.scss";

const AccountOrdersView = () => {
  return (
    <div className={accountOrdersViewClasses.body}>
      <div className="">
        <h3>Покупки в магазинах</h3>
      </div>
      <div className="">
        <div className={accountOrdersViewClasses.noDiscount}>
          <strong>У Вас пока нет ни одной покупки</strong>
        </div>
        <div className={accountOrdersViewClasses.actuality}></div>
      </div>
    </div>
  );
};

export default AccountOrdersView;
