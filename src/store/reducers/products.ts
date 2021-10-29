import {
  ProductsAction,
  ProductsActionTypes,
  ProductState,
  SetProducts,
} from "store/types/products";


const initialState: ProductState = {
  products: [],
  product: null,
  limit: 9,
  error: null,
  amount: 0,
};

/* interface FetchProducts {
    type: 
} */

/* const setProduct = (state: ProductState, action: SetProduct): ProductState => {
  
  const product = action.product;
  const updatedProduct = updateObject(state.product, product);
  return updateObject(state, { product: updatedProduct });
};
 */

const reducer = (
  state = initialState,
  action: ProductsAction
): ProductState => {
  // 
  switch (action.type) {
    case ProductsActionTypes.SET_PRODUCTS:
      return { ...state, products: /* [...state.products, ... */action.products/* ] */ };
    case ProductsActionTypes.REMOVE_PRODUCTS:
      return { ...state, products: [] };
    case ProductsActionTypes.REMOVE_PRODUCT: return { ...state, product: null };
    case ProductsActionTypes.SET_TOTAL_PRODUCTS_AMOUNT: return { ...state, amount: action.amount };
    case ProductsActionTypes.SET_PRODUCT:

      return {
        ...state,
        product: {
          ...state.product,
          ...action.product,
        },
      };
    default:
      return state;
  }
};

export default reducer;
