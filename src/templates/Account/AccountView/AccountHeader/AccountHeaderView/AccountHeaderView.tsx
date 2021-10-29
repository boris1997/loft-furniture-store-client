import React, { FC } from "react";
import authHeaderClasses from "./AccountHeaderView.module.scss";

interface IAccountHeaderView {
  name?: string;
}

const AccountHeaderView: FC<IAccountHeaderView> = ({ name }) => {
  return (
    <div className={authHeaderClasses.body}>
      <p className={authHeaderClasses.title}>
        Здравствуйте, {name}, добро пожаловать в ваш личный кабинет.
      </p>
    </div>
  );
};

export default AccountHeaderView;
