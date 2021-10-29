import { useTypedSelector } from "customHooks/useTypedSelector";
import React from "react";
import AccountHeaderView from "./AccountHeaderView/AccountHeaderView";

const AccountHeaderContainer = () => {
  const userData = useTypedSelector(({ auth: { userData } }) => userData);
  const name = userData?.name;
  return (
    <>
      <AccountHeaderView name={name} />
    </>
  );
};

export default AccountHeaderContainer;
