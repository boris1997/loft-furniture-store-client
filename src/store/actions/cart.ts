import { ICartElements } from 'globalTypes/cart';
import $host from 'http/axios';
import { Dispatch } from 'react';
import { requestUpdateServerCart } from 'services/cartService';
import { AuthActions } from 'store/types/authentication';
import { AddToCart, CartActions, CartActionTypes, ChangeAmount, CheckField, DecreaseAmount, CountTotalAmount, RemoveItem, CountTotalPrice, IncreaseProductPrice, IncreaseProductAmount, UpdateClientCart, RemoveCartFromStorage } from 'store/types/cart';
/* import * as CartActionTypes from 'store/types/cart';
 */

export const countTotalAmount = (): CountTotalAmount => {
    return {
        type: CartActionTypes.COUNT_TOTAL_AMOUNT_CART
    };
}

export const removeCartFromStorage = (): RemoveCartFromStorage => {
    return {
        type: CartActionTypes.REMOVE_CART_FROM_STORAGE
    };
}

export const countTotalPrice = (): CountTotalPrice => {
    return {
        type: CartActionTypes.COUNT_TOTAL_PRICE_CART
    };
}

export const getTotalAmountPrice = () => {
    // 
    return (dispatch: Dispatch<CartActions>) => {
        dispatch(countTotalPrice());
        dispatch(countTotalAmount());
    }
}

export const addToCart = (product: ICartElements): AddToCart => {

    return {
        type: CartActionTypes.ADD_TO_CART, product: product
    }
}
// export const get
/* export const getTotalPrice = () => {

} */


export const setCartItem = (product: ICartElements) => {
    return (dispatch: Dispatch<CartActions>) => {
        console.log(product)
        dispatch(addToCart(product))
        dispatch(countTotalAmount());
        dispatch(countTotalPrice());
    }
}
export const increaseProductAmount = (id: string | number): IncreaseProductAmount => {
    return {

        type: CartActionTypes.INCREASE_AMOUNT_PRODUCT,
        id: id,

    }
}
export const increaseProductPrice = (id: string | number): IncreaseProductPrice => {
    return {

        type: CartActionTypes.INCREASE_PRICE_PRODUCT,
        id: id,

    }
}

export const increaseAmount = (id: string | number) => {
    return (dispatch: Dispatch<CartActions>) => {
        // dispatch(increaseProductPrice(id))
        dispatch(increaseProductAmount(id))
        dispatch(countTotalAmount());
        dispatch(countTotalPrice());
    }
}

export const decreaseProductAmount = (id: string | number): DecreaseAmount => {
    return {

        type: CartActionTypes.DECREASE_AMOUNT_PRODUCT,
        id: id,
    }
}


export const decreaseAmount = (id: string | number) => {
    return (dispatch: Dispatch<CartActions>) => {
        dispatch(decreaseProductAmount(id))
        dispatch(countTotalAmount());
        dispatch(countTotalPrice());
    }
}

export const changeAmount = (value: string, id: string | number): ChangeAmount => {
    return {

        type: CartActionTypes.CHANGE_AMOUNT_CART,
        product: {
            amount: value,
            id: id,
        },
    }
}


export const changeAmountCart = (value: string, id: string | number) => {
    return (dispatch: Dispatch<CartActions>) => {
        dispatch(changeAmount(value, id))
        dispatch(countTotalAmount());
        dispatch(countTotalPrice());
    }
}


export const checkField = (value: string, id: string | number): CheckField => {
    return {

        type: CartActionTypes.CHECK_FIELD_CART,
        product: {
            amount: value,
            id: id,
        },
    }
}


export const checkFieldCart = (value: string, id: string | number) => {
    return (dispatch: Dispatch<CartActions>) => {
        dispatch(checkField(value, id))
        dispatch(countTotalAmount());
        dispatch(countTotalPrice());
    }
}


export const removeItem = (id: string | number): RemoveItem => {
    return {

        type: CartActionTypes.REMOVE_ITEM_FROM_CART,
        id: id,

    }
}

export const updateClientCart = (data: ICartElements[]): UpdateClientCart => {
    return {

        type: CartActionTypes.UPDATE_CLIENT_CART,
        cart: data,

    }
}


export const removeItemFromCart = (id: string | number) => {
    return (dispatch: Dispatch<CartActions>) => {
        dispatch(removeItem(id))
        dispatch(countTotalAmount());
        dispatch(countTotalPrice());
    }
}


export const getCart = () => {
    return {
        type: CartActionTypes.GET_CART,
    }
}


/* export const equateServerCartToClientCart = () => {

}
 */
export const synchronizeClientServerCarts = (cart: string[], userId: string)/* : (dispatch: Dispatch<CartActions>) => void  */ => {
    return (dispatch: Dispatch<CartActions>) => {
        requestUpdateServerCart(cart, userId).then(({ data }) => {
            dispatch(updateClientCart(data));
            dispatch(countTotalAmount());
            dispatch(countTotalPrice());
        }).catch((res) => {

        })
    }
}