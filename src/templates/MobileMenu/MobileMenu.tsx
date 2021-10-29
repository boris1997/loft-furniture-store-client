import { useActions } from "customHooks/useActions";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { isScroll } from "helpers/isScroll";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Sidebar from "templates/Sidebar/Sidebar";
import MobileMenuNavigation from "./MobileMenuNavigation/MobileMenuNavigation";

interface IActiveLink {
  hash: string;
  pathname: string;
}
// type hash = string;
// type pathname = string;

const MobileMenu = () => {
  const [activeLink, setActiveLink] = useState<IActiveLink>({
    hash: "",
    pathname: "",
  });

  let { pathname, hash } = activeLink;
  const sidebarActive = hash === "#catalog";

  const history = useHistory();
  console.log(history);

  const setLink = (hash: string, pathname: string) => {
    let hashKey = "hash";
    let pathKey = "pathname";
    const link = {
      ...activeLink,
      [hashKey]: hash,
      [pathKey]: pathname,
    };
    setActiveLink(link);
  };

  if (!pathname && !hash) {
    console.log("ok");
    setLink(history.location.hash, history.location.pathname); // setLink on componentDidMount
  }
  // console.log("lifecycling");

  const historyCallback = history.listen((location, action) => {
    historyCallback(); // clear history
    setLink(location.hash, location.pathname);
  });

  const { showPopup, removePopup } = useActions();

  const userData = useTypedSelector(({ auth: { userData } }) => userData); // we need data to understand what to show in login navItem

  const popupActive = useTypedSelector(
    ({ popup: { popupActive } }) => popupActive
  );

  // isScroll(sidebarActive); // remove or add srollBar;
  isScroll(popupActive);
  isScroll(sidebarActive);

  const closeSidebar = () => {
    history.goBack();
  };

  useEffect(() => {
    console.log("updated", hash);
    if (popupActive && hash !== "#login") {
      removePopup();
    }
    if (!popupActive && hash === "#login") {
      showPopup();
    }
  }, [hash, pathname]);

  // useEffect(() => {
  //   return () => {
  //     console.log("unmount");
  //     historyCallback();
  //     // cleanup
  //   };
  // });

  return (
    <>
      <Sidebar closeSidebar={closeSidebar} isActive={sidebarActive} />
      <MobileMenuNavigation
        pathname={pathname}
        hash={activeLink.hash}
        userData={userData}
      />
    </>
  );
};

export default MobileMenu;
