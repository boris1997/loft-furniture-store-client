import LinkButton from "components/LinkButton/LinkButton";
import { IAuthResponseUser } from "globalTypes/auth";
import React, { FC } from "react";
import accountDataClasses from "./accountDataView.module.scss";

interface IAccountDataView {
  userData: IAuthResponseUser;
}

const AccountDataView: FC<IAccountDataView> = ({
  userData: { email, name },
}) => {
  return (
    <div>
      <div className={accountDataClasses.header}>
        <div className={accountDataClasses.title}>
          <span className={accountDataClasses.signature}> {name[0]}</span>
          <h3>Личные данные </h3>
        </div>
        <div className={accountDataClasses.link}>
          <LinkButton link={""}>Изменить</LinkButton>
        </div>
      </div>
      <div className={accountDataClasses.body}>
        <div className={accountDataClasses.item}>Имя: {name}</div>
        <div className={accountDataClasses.item}>email: {email}</div>
        <span className={accountDataClasses.item}>
          Пожалуйста, придумайте и сохраните PIN-код для списания Бонусных
          рублей в розничных магазинах. Функция станет доступной в ближайшие
          месяцы.
        </span>
      </div>
    </div>
  );
};

export default AccountDataView;
