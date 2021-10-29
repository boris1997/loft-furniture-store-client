

export interface PopupState {
    popupActive: boolean;
}


export enum PopupActionTypes {
    ACTIVATE_POPUP = 'ACTIVATE_POPUP',
    DIACTIVATE_POPUP = 'DIACTIVATE_POPUP',

}


export interface ShowPopup {
    type: PopupActionTypes.ACTIVATE_POPUP,
}
export interface RemovePopup {
    type: PopupActionTypes.DIACTIVATE_POPUP,
}


export type PopupActions = ShowPopup | RemovePopup