import Backdrop from "components/Backdrop/Backdrop";
import React, { FC, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import popupClasses from "./Popup.module.scss";
import * as actionTypes from "store/actions/actionTypes";
import CrossIcon from "icons/CrossIcon";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { isScroll } from "helpers/isScroll";

interface IPopup {
  removePopup: MouseEventHandler;
  isActive: boolean;
  scroll?: boolean;
}

const Popup: FC<IPopup> = ({ children, removePopup, isActive, scroll }) => {
  if (scroll) {
    isScroll(isActive);
  }

  return (
    <>
      {isActive && (
        <div className={popupClasses.popup}>
          <Backdrop showBackdrop={isActive} clicked={removePopup} />

          <div className={popupClasses.modal}>
            <CrossIcon
              clicked={removePopup}
              IconClasses={popupClasses.closeBtn}
            />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
