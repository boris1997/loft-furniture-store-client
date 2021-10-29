import { AuthState, AuthActions, AuthActionTypes, SetRegistrationData, SetLoginData, RemoveAccessTokenFromStorage, } from 'store/types/authentication';

const initialState: AuthState = {
    userData: null,
    accessToken: '',
}

const setData = (state: AuthState, action: SetRegistrationData | SetLoginData) => {

    localStorage.setItem('token', action.authData.accessToken)
    if (state.userData) {
        return { ...state.userData, ...action.authData }
    }
    return action.authData
}

const setRegistrationData = (state: AuthState, action: SetRegistrationData) => {
    let copyUserData = setData(state, action);

    return copyUserData
}
const setLoginData = (state: AuthState, action: SetLoginData) => {
    let copyUserData = setData(state, action);

    return copyUserData
}

const removeAccessTokenFromStorage = (state: AuthState, action: RemoveAccessTokenFromStorage) => {
    localStorage.removeItem('token');


    return { ...state, userData: null, accessToken: '', }
}

const reducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_REGISTRATION_DATA: return setRegistrationData(state, action)
        case AuthActionTypes.SET_LOGIN_DATA: return setLoginData(state, action)
        case AuthActionTypes.REMOVE_ACCESS_TOKEN_FROM_STORAGE: return removeAccessTokenFromStorage(state, action)
        default: return state
    }
}

export default reducer