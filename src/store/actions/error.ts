import { ErrorActionTypes, IError, SetError } from "store/types/error"

export const setError = (error: IError): SetError => {
    return {

        type: ErrorActionTypes.SET_ERROR,
        error: error,

    }
}


export const resetError = () => {
    return {
        type: ErrorActionTypes.RESET_ERROR

    }
}
