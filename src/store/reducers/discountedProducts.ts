import { DiscountedProductsActions, DiscountProductsActionTypes, DiscountProductState, SetDiscountedProducts } from "store/types/saleProducts"

const initialState: DiscountProductState = {
    discountedProducts: [],
    error: null
}

const setDiscountedProducts = (state: DiscountProductState, action: SetDiscountedProducts) => {
    return state

}

const reducer = (state = initialState, action: DiscountedProductsActions): DiscountProductState => {
    switch (action.type) {

        case DiscountProductsActionTypes.SET_DISCOUNTED_PRODUCT: return { ...state, discountedProducts: /* [...state.products, ... */action.discountedProducts/* ] */ };
        default: return state
    }
}

export default reducer