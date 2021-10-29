export {
    increaseProductAmount,
    decreaseProductAmount,
    setCartItem,
    increaseAmount,
    decreaseAmount,
    changeAmountCart,
    checkFieldCart,
    removeItemFromCart,
    getCart,
    synchronizeClientServerCarts
} from './cart';
export {
    fetchProducts,
    fetchProduct
} from './products';
export {
    registrate,
    login,
    autoAuthUser,
    logout
} from './authentication';
export {
    fetchDiscountedProducts
} from './discountedProducts';
export {
    resetError
} from './error';
export {
    showPopup,
    removePopup
} from './popup';
export {
    addProductToWishList,
    removeProductFromWishList,
    getWishList
} from './wishList';
