import { useTypedSelector } from "customHooks/useTypedSelector";
import React from "react";
import AccountConfirmView from "./AccountConfirmView/AccountConfirmView";

const AccountConfirmContainer = () => {
  const userData = useTypedSelector(({ auth: { userData } }) => userData);
  let confirmUi;
  if (!userData?.isActivated) {
    confirmUi = <AccountConfirmView email={userData?.email} />;
  }
  return <>{confirmUi}</>;
};

export default AccountConfirmContainer;
