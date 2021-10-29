import { IProductCardElements, IProductPageElements } from "globalTypes/product";

export enum DiscountProductsActionTypes {
    FETCH_DISCOUNTED_PRODUCTS = 'FETCH_DISCOUNTED_PRODUCTS',
    SET_DISCOUNTED_PRODUCT = 'SET_DISCOUNTED_PRODUCT',
}


export interface SetDiscountedProducts {
    type: DiscountProductsActionTypes.SET_DISCOUNTED_PRODUCT,
    discountedProducts: IProductCardElements[],
}



// export interface ProductSaleElements extends IProductCardElements {
//     discount: string;
// }


export interface DiscountProductState {
    discountedProducts: IProductCardElements[],
    error: null | string;
}

export type DiscountedProductsActions = SetDiscountedProducts
