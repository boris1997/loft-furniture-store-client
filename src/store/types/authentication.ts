import { IAuthResponse, IAuthResponseUser } from "globalTypes/auth";
import { IProductCardElements } from "globalTypes/product";
import { CountTotalAmount, CountTotalPrice, UpdateClientCart } from "./cart";

export interface AuthState {
    accessToken: string;
    userData: IAuthResponseUser | null;
}


export enum AuthActionTypes {
    SET_REGISTRATION_DATA = 'SET_REGISTRATION_DATA',
    SET_LOGIN_DATA = 'SET_LOGIN_DATA',
    REMOVE_ACCESS_TOKEN_FROM_STORAGE = 'REMOVE_ACCESS_TOKEN_FROM_STORAGE',
}

export interface RemoveAccessTokenFromStorage {
    type: AuthActionTypes.REMOVE_ACCESS_TOKEN_FROM_STORAGE,

}

export interface SetRegistrationData {
    type: AuthActionTypes.SET_REGISTRATION_DATA,
    authData: AuthState,
}
export interface SetLoginData {
    type: AuthActionTypes.SET_LOGIN_DATA,
    authData: AuthState,
}
/* export interface SetProduct {
    type: ProductsActionTypes.SET_PRODUCT,
    product: IProductPageElements,
} */

export type AuthActions = SetRegistrationData | SetLoginData | UpdateClientCart | CountTotalAmount | CountTotalPrice | RemoveAccessTokenFromStorage

