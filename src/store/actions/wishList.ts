import { IProductElements } from "globalTypes/product"
import { Dispatch } from "react"
import { requestUpdateServerWishLists } from "services/wishListService"
import { AddProductToWishList, RemoveProductFromWishList, RemoveWishListFromStorage, UpdateClientWishList, WishListActions, WishListActionTypes } from "store/types/wishList"

export const addProductToWishList = (product: IProductElements): AddProductToWishList => {
    return {
        type: WishListActionTypes.ADD_PRODUCT_TO_WISHLIST,
        product: product
    }
}
export const removeProductFromWishList = (id: number): RemoveProductFromWishList => {
    return {
        type: WishListActionTypes.REMOVE_PRODUCT_FROM_WISHLIST,
        id: id
    }
}
export const removeWishListFromStorage = (): RemoveWishListFromStorage => {
    return {
        type: WishListActionTypes.REMOVE_WISHLIST_FROM_STORAGE,
    }
}

export const updateClientWishList = (data: IProductElements[]): UpdateClientWishList => {
    return {
        type: WishListActionTypes.UPDATE_WISHLIST,
        wishList: data
    }
}

export const getWishList = () => {
    return {
        type: WishListActionTypes.GET_WISHLIST,
    }
}

export const synchronizeClientServerWishLists = (wishList: string[], userId: string) => {
    return (dispatch: Dispatch<WishListActions>) => {
        requestUpdateServerWishLists(wishList, userId).then(({ data }) => {
            console.log(wishList)
            dispatch(updateClientWishList(data));
        }).catch((res) => {

        })
    }
}