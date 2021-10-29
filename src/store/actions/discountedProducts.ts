import { IProductCardElements } from "globalTypes/product";
import { Dispatch } from "react";
import { discountedProductsRequest } from "services/discountedProductsRequest";
import { DiscountedProductsActions, DiscountProductsActionTypes, SetDiscountedProducts } from "store/types/saleProducts";

export const setDiscountedProducts = (data: IProductCardElements[]): SetDiscountedProducts => {
    return {
        type: DiscountProductsActionTypes.SET_DISCOUNTED_PRODUCT,
        discountedProducts: data
    }
}


export const fetchDiscountedProducts = () => {
    return (dispatch: Dispatch<DiscountedProductsActions>) => {
        discountedProductsRequest().then(({ data }) => {
            dispatch(setDiscountedProducts(data))
        }).catch((res) => {

        })
    }
}