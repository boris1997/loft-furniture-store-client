import { IProductElements } from "globalTypes/product";


export interface WishListState {
    wishList: IProductElements[];
}


export enum WishListActionTypes {
    ADD_PRODUCT_TO_WISHLIST = 'ADD_PRODUCT_TO_WISHLIST',
    REMOVE_PRODUCT_FROM_WISHLIST = 'REMOVE_PRODUCT_FROM_WISHLIST',
    REMOVE_WISHLIST_FROM_STORAGE = 'REMOVE_WISHLIST_FROM_STORAGE',
    GET_WISHLIST = 'GET_WISHLIST',
    UPDATE_WISHLIST = 'UPDATE_WISHLIST',

}


export interface GetWishList {
    type: WishListActionTypes.GET_WISHLIST,
}

export interface AddProductToWishList {
    type: WishListActionTypes.ADD_PRODUCT_TO_WISHLIST,
    product: IProductElements,
}

export interface RemoveProductFromWishList {
    type: WishListActionTypes.REMOVE_PRODUCT_FROM_WISHLIST,
    id: string | number,
}

export interface RemoveWishListFromStorage {
    type: WishListActionTypes.REMOVE_WISHLIST_FROM_STORAGE
}

export interface UpdateClientWishList {
    type: WishListActionTypes.UPDATE_WISHLIST,
    wishList: IProductElements[],
}


export type WishListActions = AddProductToWishList | RemoveProductFromWishList | GetWishList | UpdateClientWishList | RemoveWishListFromStorage