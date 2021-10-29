
import { updateObject } from './utility'; import * as actionTypes from '../actions/actionTypes'
import { PopupActions, PopupActionTypes, PopupState, RemovePopup, ShowPopup } from 'store/types/popup';

const initialState = {
    popupActive: false,

}


const reducer = (state = initialState, action: PopupActions): PopupState => {
    switch (action.type) {
        case actionTypes.ACTIVATE_POPUP: return { ...state, popupActive: true };
        case actionTypes.DIACTIVATE_POPUP: return { ...state, popupActive: false };;

        default: return state
    }
}

export default reducer