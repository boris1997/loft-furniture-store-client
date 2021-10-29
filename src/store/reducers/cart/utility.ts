import { ICartElements } from "globalTypes/cart";
import { CartState } from "store/types/cart";

export const getCartFromStorage = () => {
    let cart = localStorage.getItem('cart')
    let parsedCart: ICartElements[];
    if (cart) {
        parsedCart = JSON.parse(cart);
        return parsedCart
    }
}

export const getTotalAmountFromStorage = () => {
    let totalAmount = localStorage.getItem('amountProductsInCart')
    let parsedTotalAmount;
    if (totalAmount) {
        parsedTotalAmount = JSON.parse(totalAmount);
        return parsedTotalAmount
    }
}

export const getTotalPriceFromStorage = () => {
    let totalPrice = localStorage.getItem('totalOrderPrice')
    let parsedTotalPrice;
    if (totalPrice) {
        parsedTotalPrice = JSON.parse(totalPrice);
        return parsedTotalPrice
    }
}


export const setCartToStorage = (cart: ICartElements[]) => localStorage.setItem('cart', JSON.stringify(cart))

export const setTotalAmountToStorage = (totalAmount: number) => localStorage.setItem('amountProductsInCart', JSON.stringify(totalAmount))

export const setTotalPriceToStorage = (totalPrice: number) => localStorage.setItem('totalOrderPrice', JSON.stringify(totalPrice))

export const getCartItem = (state: CartState, itemId: number | string, updatedCart: ICartElements[]) => {
    // updatedCart = [...state.cart].map(cartItem => cartItem = { ...cartItem })
    let cartItem: ICartElements;
    const foundedResult = updatedCart.find(({ id }) => id === itemId);
    if (foundedResult) {
        cartItem = foundedResult;
        return cartItem
    }
}

export const validCart = (state: CartState, id: number | string) => {

    let updatedCart = getCartFromStorage();
    if (updatedCart) {
        let cartItem = getCartItem(state, id, updatedCart);
        if (cartItem) {
            return { cartItem, updatedCart }
        }
        return { updatedCart }
    }
}