import * as actionTypes from './actionTypes';
import { $host } from '../../http/axios';


export const setCategories = (categories) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        categories: categories
    }
}

export const fetchCategories = (dispatch) => {
    /*         return dispatch => {
            
            const { data } = await $host.get('api/category')
            
        } */




    $host.get(`api/category`)
        .then(({ data }) => {
            //  const {data} = { res }
            dispatch(setCategories(data))
        })
        .catch(error => {
        })


}