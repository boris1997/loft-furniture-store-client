import { PopupActionTypes } from "store/types/popup"


export const showPopup = () => {

    return { type: PopupActionTypes.ACTIVATE_POPUP }

}
export const removePopup = () => {
    return { type: PopupActionTypes.DIACTIVATE_POPUP }

}/*  */