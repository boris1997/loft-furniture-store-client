import { useDispatch } from "react-redux";
import * as actionTypes from "store/actions/actionTypes";

export const useShowPopup = () => {
    const dispatch = useDispatch();

    return () => {

        dispatch({
            type: actionTypes.ACTIVATE_POPUP,
        });
    }

}