
import { updateObject } from './utility'; import * as actionTypes from '../actions/actionTypes'
import { CategoryState } from 'store/types/category';
import { fetchCategories } from 'store/actions/category';

const initialState = {
    categories: null,
    error: null
}

/* const fetchCategories = (state, action): CategoryState => {
    // 
    const categories = action.categories
    // const updateCategory = updateObject(state.categories, categories)
    const updateState = {
        categories: categories,
        error: null
    }
    return updateObject(state, updateState);
}
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CATEGORIES: return fetchCategories(state, action);

        default: return state
    }
}

export default reducer