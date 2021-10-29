import { IProductCardElements, IProductPageElements } from "globalTypes/product";

export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    SET_PRODUCTS = 'SET_PRODUCTS',
    SET_PRODUCT = 'SET_PRODUCT',
    REMOVE_PRODUCTS = 'REMOVE_PRODUCTS',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED',
    SET_TOTAL_PRODUCTS_AMOUNT = 'SET_TOTAL_PRODUCTS_AMOUNT'
}

export interface SetProducts {
    type: ProductsActionTypes.SET_PRODUCTS,
    products: IProductCardElements[],
}
export interface SetProduct {
    type: ProductsActionTypes.SET_PRODUCT,
    product: IProductPageElements,
}

export interface SetTotalProductAmount {
    type: ProductsActionTypes.SET_TOTAL_PRODUCTS_AMOUNT,
    amount: number,
}

export interface RemoveProducts {
    type: ProductsActionTypes.REMOVE_PRODUCTS
}
export interface RemoveProduct {
    type: ProductsActionTypes.REMOVE_PRODUCT
}

export type ProductsAction = SetProducts | SetProduct | RemoveProducts | RemoveProduct | SetTotalProductAmount

export interface ProductState {
    products: null | IProductCardElements[],
    product: null | IProductPageElements,
    limit: number,
    error: null | string,
    amount: number
}

