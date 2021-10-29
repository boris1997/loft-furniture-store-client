import { useActions } from "customHooks/useActions";
import React from "react";
import { Redirect } from "react-router";

const Logout = () => {
  const { logout } = useActions();

  const logoutAndRedirect = () => {
    logout();
    return <Redirect to="/" />;
  };

  return <>{logoutAndRedirect()} </>;
};

export default Logout;
