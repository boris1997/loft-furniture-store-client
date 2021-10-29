import React, { FC } from "react";

import accountDiscountsClasses from "./AccountDiscounts.module.scss";

const AccountDiscounts: FC = () => {
  let month = new Date().toLocaleString("default", { month: "long" });
  // month = month[month.length];
  month = month.replace(/ь/, "я");
  console.log(month, month.replace(/ь/, "я"));
  console.log(month[month.length - 1]);
  return (
    <div className={accountDiscountsClasses.body}>
      <div className="">
        <h3>Скидки</h3>
      </div>
      <div className="">
        <div className={accountDiscountsClasses.noDiscount}>
          <strong>У Вас пока нет ни одной скидки</strong>
        </div>
        <div className={accountDiscountsClasses.actuality}>
          Обновляется раз в сутки. Актуально на 00:00, {new Date().getDate()}{" "}
          {month} {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default AccountDiscounts;
