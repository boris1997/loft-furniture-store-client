// import { rootReducers } from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import categoryReducer from 'store/reducers/category'
import productReducer from 'store/reducers/products'
import cartReducer from 'store/reducers/cart/cart'
import popupReducer from 'store/reducers/popup'
import authReducer from 'store/reducers/authentication'
import errorReducer from 'store/reducers/error'
import discountedProductsReducer from 'store/reducers/discountedProducts'
import wishListReducer from 'store/reducers/wishList'
import { composeWithDevTools } from 'redux-devtools-extension'

export const rootReducers = combineReducers({
    product: productReducer,
    category: categoryReducer,
    discountedProducts: discountedProductsReducer,
    cart: cartReducer,
    popup: popupReducer,
    auth: authReducer,
    error: errorReducer,
    wishList: wishListReducer,
})



export type RootState = ReturnType<typeof rootReducers>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
    }
}


/* const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose; */



export const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);