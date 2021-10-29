import React, { FC } from "react";
import AccountConfirmClasses from "./AccountConfirmView.module.scss";

interface IAccountConfirmView {
  email?: string;
}

const AccountConfirmView: FC<IAccountConfirmView> = ({ email }) => {
  return (
    <div className={AccountConfirmClasses.body}>
      <h2> Пожалуйста подтвердите вашу электронную почту</h2>
      <p>
        Ссылка для подтверждения отправлена на {email} Не нашли пиcьмо?
        Отправить повторно
      </p>
    </div>
  );
};

export default AccountConfirmView;
