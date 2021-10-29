import { IAuthResponseUser } from "globalTypes/auth";
import { ICartElements } from "globalTypes/cart";


export interface ErrorState {
    error: IError | null;
}


export enum ErrorActionTypes {
    SET_ERROR = 'SET_ERROR',
    RESET_ERROR = 'RESET_ERROR',

}


export interface SetError {
    type: ErrorActionTypes.SET_ERROR,
    error: IError
}
export interface ResetError {
    type: ErrorActionTypes.RESET_ERROR,
}

export interface IError {
    status: number;
    message: string
}

/* export interface SetProduct {
    type: ProductsActionTypes.SET_PRODUCT,
    product: IProductPageElements,
} */

export type ErrorActions = SetError | ResetError