import { useDispatch } from "react-redux"
import { ActionCreator, ActionFromReducer, bindActionCreators } from "redux"
import * as actionCreators from "store/actions/index";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators, dispatch)

}