import { IAuthResponseUser } from "globalTypes/auth";
import { ICartElements } from "globalTypes/cart";


export interface CartState {
    cart: ICartElements[];
    totalAmount: number;
    totalPrice: number | string;
}


export enum CartActionTypes {
    COUNT_TOTAL_PRICE_CART = 'COUNT_TOTAL_PRICE_CART',
    REMOVE_CART_FROM_STORAGE = 'REMOVE_CART_FROM_STORAGE',
    COUNT_TOTAL_AMOUNT_CART = 'COUNT_TOTAL_AMOUNT_CART',
    ADD_TO_CART = 'ADD_TO_CART',
    UPDATE_CLIENT_CART = 'UPDATE_CLIENT_CART',
    INCREASE_AMOUNT_PRODUCT = 'INCREASE_AMOUNT_PRODUCT',
    INCREASE_PRICE_PRODUCT = 'INCREASE_PRICE_PRODUCT',
    DECREASE_AMOUNT_PRODUCT = 'DECREASE_AMOUNT_PRODUCT',
    CHANGE_AMOUNT_CART = 'CHANGE_AMOUNT_CART',
    CHECK_FIELD_CART = 'CHECK_FIELD_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    GET_CART = 'GET_CART',
}


export interface CountTotalAmount {
    type: CartActionTypes.COUNT_TOTAL_AMOUNT_CART,
}

export interface CountTotalPrice {
    type: CartActionTypes.COUNT_TOTAL_PRICE_CART,
}
export interface RemoveCartFromStorage {
    type: CartActionTypes.REMOVE_CART_FROM_STORAGE,
}

export interface GetCart {
    type: CartActionTypes.GET_CART,
}

export interface UpdateClientCart {
    type: CartActionTypes.UPDATE_CLIENT_CART,
    cart: ICartElements[]
}

export interface AddToCart {
    type: CartActionTypes.ADD_TO_CART,
    product: ICartElements
}

export interface IncreaseProductAmount {
    type: CartActionTypes.INCREASE_AMOUNT_PRODUCT,
    id: number | string
}

export interface IncreaseProductPrice {
    type: CartActionTypes.INCREASE_PRICE_PRODUCT,
    id: number | string
}

export interface DecreaseAmount {
    type: CartActionTypes.DECREASE_AMOUNT_PRODUCT,
    id: number | string
}

export interface ChangeAmount {
    type: CartActionTypes.CHANGE_AMOUNT_CART,
    product: ICartItems
}

export interface CheckField {
    type: CartActionTypes.CHECK_FIELD_CART,
    product: ICartItems
}

export interface RemoveItem {
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    id: string | number
}

interface ICartItems {
    amount: string
    id: string | number
}
/* export interface SetProduct {
    type: ProductsActionTypes.SET_PRODUCT,
    product: IProductPageElements,
} */

export type CartActions = CountTotalAmount | CountTotalPrice | GetCart | AddToCart
    | IncreaseProductAmount | UpdateClientCart | IncreaseProductPrice |
    DecreaseAmount | ChangeAmount | CheckField | RemoveItem | RemoveCartFromStorage
