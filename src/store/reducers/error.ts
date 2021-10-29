import { ErrorActions, ErrorActionTypes, ErrorState } from "store/types/error"

const initialState: ErrorState = {
    error: null
}

const reducer = (state = initialState, action: ErrorActions): ErrorState => {
    switch (action.type) {
        case ErrorActionTypes.SET_ERROR: return { ...state, error: action.error }
        case ErrorActionTypes.RESET_ERROR: return { ...state, error: null }
        default: return state
    }
}

export default reducer