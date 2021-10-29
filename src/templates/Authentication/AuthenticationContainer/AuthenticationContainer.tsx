import Login from "templates/Authentication/AuthenticationView/AuthenticationForm/AuthenticationForm";
import LoginContainer from "templates/Authentication/AuthenticationView/Login/LoginContainer";
import RegistrationContainer from "templates/Authentication/AuthenticationView/Registration/RegistrationContainer";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import AuthenticationHeader from "../AuthenticationView/AuthenticationHeader/AuthenticationHeader";

interface IAuthentication {
  customClasses?: string;
}

const AuthenticationContainer = () => {
  const dispatch = useDispatch();
  const [authKey, setAuthKey] = useState("loginForm");

  const login = () => {};
  const registrate = () => {};

  const showLoginForm = () => setAuthKey("loginForm");
  const showRegistrationForm = () => setAuthKey("registrationForm");

  let formUI = <LoginContainer /* formElementsUI={formElementsUI} */ />;
  if (authKey === "registrationForm") {
    formUI = <RegistrationContainer />;
  }
  return (
    <>
      <AuthenticationHeader
        showLoginForm={showLoginForm}
        showRegistrationForm={showRegistrationForm}
        authKey={authKey}
      />
      {formUI}
    </>
  );
};

export default AuthenticationContainer;
