import Spinner from "components/Spinner/Spinner";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { userInfo } from "os";
import React from "react";
import AccountDataView from "./AccountDataView/AccountDataView";

const AccountDataContainer = () => {
  const userData = useTypedSelector(({ auth: { userData } }) => userData);
  console.log(userData);
  let accountDataUI = <Spinner />;
  if (userData) {
    accountDataUI = <AccountDataView userData={userData} />;
  }
  return <>{accountDataUI}</>;
};

export default AccountDataContainer;
