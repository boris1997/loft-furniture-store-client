import { IProductCardElements, IProductPageElements } from 'globalTypes/product';
import { Dispatch } from 'react';
import { getProduct, getProducts } from 'services/productService';
import { ErrorActions } from 'store/types/error';
import { ProductsAction, ProductsActionTypes, RemoveProducts, SetProduct, SetProducts, SetTotalProductAmount } from 'store/types/products';
import { setError } from './error';



export const setProducts = (products: IProductCardElements[]): SetProducts => {
    return {
        type: ProductsActionTypes.SET_PRODUCTS,
        products: products
    }
}

export const setProduct = (product: IProductPageElements): SetProduct => {

    return {
        type: ProductsActionTypes.SET_PRODUCT,
        product: product
    }
}
export const setTotalProductAmount = (amount: number): SetTotalProductAmount => {

    return {
        type: ProductsActionTypes.SET_TOTAL_PRODUCTS_AMOUNT,
        amount: amount
    }
}

export const removeProducts = (): RemoveProducts => {
    return {
        type: ProductsActionTypes.REMOVE_PRODUCTS,
    }
}

export const fetchProducts = (name: string, limit: number = 9, page: number | string = 1) => {

    return (dispatch: Dispatch<ProductsAction | ErrorActions>) => {
        getProducts(name, limit, page)
            .then(({ data: { productInfo, amount } }) => {
                console.log(productInfo);
                dispatch(setProducts(productInfo));
                dispatch(setTotalProductAmount(amount))
            })
            .catch(({ response: { status, data: { message } } }) => {

                const error = {
                    status: status,
                    message: message
                }
                dispatch(removeProducts())
                dispatch(setError(error))
            })
    }

}


export const fetchProduct = (urlName: string, name: string) => {

    // 
    return (dispatch: Dispatch<ProductsAction | ErrorActions>) => {

        getProduct(urlName, name)
            .then(({ data }) => {
                //  const {data} = { res }
                dispatch(setProduct(data))
            })
            .catch(({ response: { status, data: { message } } }) => {
                console.log(status)
                const error = {
                    status: status,
                    message: message
                }
                dispatch(removeProducts())
                dispatch(setError(error))
                // dispatch(setError(response))
            })
    }

}