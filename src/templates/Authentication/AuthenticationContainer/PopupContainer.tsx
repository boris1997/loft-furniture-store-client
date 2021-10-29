import Popup from "components/Popup/Popup";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as actionTypes from "store/actions/actionTypes";
import AuthenticationContainer from "templates/Authentication/AuthenticationContainer/AuthenticationContainer";

const PopupContainer = () => {
  const isActive = useTypedSelector(
    ({ popup: { popupActive } }) => popupActive
  );
  const userData = useTypedSelector(({ auth: { userData } }) => userData);

  const dispatch = useDispatch();

  const removePopup = () => {
    // history.goBack();
    dispatch({
      type: actionTypes.DIACTIVATE_POPUP,
    });
  };
  /*   if (userData) {
  } */
  useEffect(() => {
    if (userData) {
      removePopup();
    }
  }, [userData]);

  return (
    <>
      <Popup scroll removePopup={removePopup} isActive={isActive}>
        <AuthenticationContainer />
      </Popup>
    </>
  );
};

export default PopupContainer;
