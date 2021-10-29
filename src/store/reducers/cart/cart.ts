
import { AddToCart, CartActions, CartActionTypes, CartState, ChangeAmount, CheckField, CountTotalAmount, CountTotalPrice, DecreaseAmount, GetCart, IncreaseProductAmount, IncreaseProductPrice, RemoveCartFromStorage, RemoveItem, UpdateClientCart } from 'store/types/cart';
import { getCartFromStorage, getTotalAmountFromStorage, getTotalPriceFromStorage, setCartToStorage, setTotalAmountToStorage, setTotalPriceToStorage, validCart } from './utility';

const initialState: CartState = {
    cart: [],
    totalAmount: 0,
    totalPrice: 0
}



const addToCart = (state: CartState, action: AddToCart) /* CartState */ => {
    console.log(action)
    const updatedCart = [...state.cart, action.product]
    setCartToStorage(updatedCart)
    const copyCart = {
        ...state, cart: updatedCart
    }

    // updateObject(state, { cart: updatedCart })
    return /* state */ copyCart
}

const removeItemFromCart = (state: CartState, action: RemoveItem) => {
    let updatedCart = [...state.cart]

    const filteredCart = updatedCart.filter(updatedCartItem => updatedCartItem.id !== action.id)
    setCartToStorage(filteredCart)
    const newCart = { ...state, cart: filteredCart ? filteredCart : [] }
    return newCart

}

const increaseProductAmount = (state: CartState, action: IncreaseProductAmount) => {

    const result = validCart(state, action.id);
    if (result?.cartItem) {
        const { cartItem, updatedCart } = result
        cartItem.amount = cartItem.amount + 1
        setCartToStorage(updatedCart)
        const copyState = {
            ...state, cart: updatedCart
        }
        return copyState
    }

    return { ...state }
}



const decreaseProductAmount = (state: CartState, action: DecreaseAmount) => {
    const result = validCart(state, action.id);
    if (result?.cartItem) {
        const { cartItem, updatedCart } = result
        cartItem.amount = cartItem?.amount - 1
        setCartToStorage(updatedCart)
        const copyState = {
            ...state, cart: updatedCart
        }
        return copyState
    }
    return { ...state }
}



const changeAmountCart = (state: CartState, action: ChangeAmount) => {
    const result = validCart(state, action.product.id);

    if (result?.cartItem) {
        const { cartItem, updatedCart } = result
        cartItem.amount = parseFloat(action.product.amount);
        setCartToStorage(updatedCart)
        const copyState = {
            ...state, cart: updatedCart
        }
        return copyState
    }

    return { ...state }
}

const getCart = (state: CartState, action: GetCart) => {
    const updatedCart = getCartFromStorage();
    const totalPrice = getTotalPriceFromStorage();
    const totalAmount = getTotalAmountFromStorage();
    if (updatedCart && totalAmount && totalPrice) {


        return { ...state, cart: updatedCart, totalPrice: totalPrice, totalAmount: totalAmount }
    }
    return { ...state }
}

const checkFieldCart = (state: CartState, action: CheckField) => {
    if (!action.product.amount) {
        const result = validCart(state, action.product.id);
        if (result?.cartItem) {
            const { cartItem, updatedCart } = result
            cartItem.amount = 1;
            setCartToStorage(updatedCart)
            const copyState = {
                ...state, cart: updatedCart
            }
            return copyState
        }
    }
    return { ...state }
}

const countToatalAmountCart = (state: CartState, action: CountTotalAmount) => {
    let updatedCart = getCartFromStorage();
    if (updatedCart && updatedCart.length) {
        let totalAmount: number;
        // console.log(updatedCart)
        totalAmount = updatedCart
            .map((cartItem) => cartItem.amount)
            .reduce((cartItemPrev, cartItemCur) => cartItemCur + cartItemPrev);
        setTotalAmountToStorage(totalAmount)
        return { ...state, totalAmount: totalAmount, cart: updatedCart }
    }
    return { ...state, totalAmount: 0 }
}


const countTotalPriceCart = (state: CartState, action: CountTotalPrice) => {
    let updatedCart = getCartFromStorage();
    if (updatedCart && updatedCart.length) {
        let totalPrice: number;
        totalPrice = updatedCart.map((cartItem) => cartItem.price * cartItem.amount)
            .reduce((cartItemPrev, cartItemCur) => cartItemCur + cartItemPrev);
        setTotalPriceToStorage(totalPrice);
        return { ...state, totalPrice: totalPrice, cart: updatedCart }

    }
    return { ...state, totalPrice: 0 }
}

const updateClientCart = (state: CartState, action: UpdateClientCart) => {
    setCartToStorage(action.cart);
    const newCart = getCartFromStorage();
    if (newCart) {

        return { ...state, cart: newCart }
    }
    return { ...state }
}

const removeCartFromStorage = (state: CartState, action: RemoveCartFromStorage) => {
    localStorage.removeItem('cart');
    localStorage.removeItem('amountProductsInCart');
    localStorage.removeItem('totalOrderPrice');

    return {
        ...state, cart: [], totalPrice: 0, totalAmount: 0
    }
}

const reducer = (state: CartState = initialState, action: CartActions): CartState => {

    switch (action.type) {
        case CartActionTypes.ADD_TO_CART: return addToCart(state, action);
        case CartActionTypes.INCREASE_AMOUNT_PRODUCT: return increaseProductAmount(state, action);
        case CartActionTypes.DECREASE_AMOUNT_PRODUCT: return decreaseProductAmount(state, action);
        case CartActionTypes.CHANGE_AMOUNT_CART: return changeAmountCart(state, action);
        case CartActionTypes.REMOVE_ITEM_FROM_CART: return removeItemFromCart(state, action);
        case CartActionTypes.CHECK_FIELD_CART: return checkFieldCart(state, action);
        case CartActionTypes.COUNT_TOTAL_AMOUNT_CART: return countToatalAmountCart(state, action);
        case CartActionTypes.COUNT_TOTAL_PRICE_CART: return countTotalPriceCart(state, action);
        case CartActionTypes.UPDATE_CLIENT_CART: return updateClientCart(state, action);
        case CartActionTypes.REMOVE_CART_FROM_STORAGE: return removeCartFromStorage(state, action);
        case CartActionTypes.GET_CART: return getCart(state, action);
        default: return state
    }

}

export default reducer