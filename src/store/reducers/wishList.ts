import { IProductElements } from "globalTypes/product";
import { AddProductToWishList, GetWishList, RemoveProductFromWishList, RemoveWishListFromStorage, UpdateClientWishList, WishListActions, WishListActionTypes, WishListState } from "store/types/wishList";

const initialState: WishListState = {
    wishList: []
}

const getWishListFromStorage = () => {
    let wishList = localStorage.getItem('wishList');
    let parsedwishList: IProductElements[];
    if (wishList) {
        parsedwishList = JSON.parse(wishList);
        return parsedwishList
    }
}

export const setWishListToStorage = (wishList: IProductElements[]) => localStorage.setItem('wishList', JSON.stringify(wishList))


const addProductToWishList = (state: WishListState, action: AddProductToWishList) => {
    const updatedWishList = [...state.wishList, action.product]
    localStorage.setItem('wishList', JSON.stringify(updatedWishList))
    const copyWishList = {
        ...state, wishList: updatedWishList
    }
    console.log(copyWishList)
    // updateObject(state, { wishList: updatedCart })
    return /* state */ copyWishList
}


const removeProductFromWishList = (state: WishListState, action: RemoveProductFromWishList) => {
    let updatedCart = [...state.wishList]

    const filteredWishList = updatedCart.filter(updatedCartItem => updatedCartItem.id !== action.id)
    setWishListToStorage(filteredWishList)
    const newWishList = { ...state, wishList: filteredWishList ? filteredWishList : [] }
    return newWishList
}

const getWishList = (state: WishListState, action: GetWishList) => {
    const updatedWishList = getWishListFromStorage()
    if (updatedWishList) {
        return { ...state, wishList: updatedWishList }
    }
    return { ...state }

}

const updateClientWishList = (state: WishListState, action: UpdateClientWishList) => {
    setWishListToStorage(action.wishList);
    const newWishList = getWishListFromStorage();
    if (newWishList) {

        return { ...state, wishList: newWishList }
    }
    return { ...state }
}

const removeWishListFromStorage = (state: WishListState, action: RemoveWishListFromStorage) => {
    localStorage.removeItem('wishList');

    return {
        ...state, wishList: []
    }
}

const reducer = (state = initialState, action: WishListActions) => {
    switch (action.type) {
        case WishListActionTypes.ADD_PRODUCT_TO_WISHLIST: return addProductToWishList(state, action);
        case WishListActionTypes.REMOVE_PRODUCT_FROM_WISHLIST: return removeProductFromWishList(state, action);
        case WishListActionTypes.GET_WISHLIST: return getWishList(state, action);
        case WishListActionTypes.UPDATE_WISHLIST: return updateClientWishList(state, action);
        case WishListActionTypes.REMOVE_WISHLIST_FROM_STORAGE: return removeWishListFromStorage(state, action);
        default: return state
    }
}

export default reducer