import React, { FC, MouseEventHandler } from "react";
import authClasses from "./AuthenticationHeader.module.scss";

interface IAuthenticationHeader {
  showLoginForm: MouseEventHandler;
  showRegistrationForm: MouseEventHandler;
  authKey: string;
}

const AuthenticationHeader: FC<IAuthenticationHeader> = ({
  showLoginForm,
  showRegistrationForm,
  authKey,
}) => {
  return (
    <div className={authClasses.header}>
      <span
        className={authKey === "registrationForm" ? authClasses.disabled : ""}
        onClick={showLoginForm}
      >
        Вход
      </span>{" "}
      <span> / </span>{" "}
      <span
        className={authKey === "loginForm" ? authClasses.disabled : ""}
        onClick={showRegistrationForm}
      >
        Регистрация
      </span>
    </div>
  );
};

export default AuthenticationHeader;
