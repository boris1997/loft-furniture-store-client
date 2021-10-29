import { useTypedSelector } from "customHooks/useTypedSelector";
import React from "react";
import { Redirect } from "react-router";
import AccountHeaderContainer from "./AccountView/AccountHeader/AccountHeaderContainer";
import AccountView from "./AccountView/AccountView";

const AccountContainer = () => {
  const userData = useTypedSelector(({ auth: { userData } }) => userData);
  let userUI = <AccountView />;
  if (!userData) {
    userUI = <Redirect to="/" />;
  }

  return <>{userUI}</>;
};

export default AccountContainer;
