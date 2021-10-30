import { IAuthResponseUser, IUserData } from 'globalTypes/auth';
import { Dispatch } from 'react';
import { requestLogin, requestLogout, requestRefresh, requestRegistration } from 'services/authService';
import { AuthActions, AuthActionTypes, SetRegistrationData, SetLoginData, RemoveAccessTokenFromStorage } from 'store/types/authentication';
import { CartActions } from 'store/types/cart';
import { WishListActions } from 'store/types/wishList';
import { getCart, synchronizeClientServerCarts } from '.';
import { removeCartFromStorage } from './cart';
import { removeWishListFromStorage, synchronizeClientServerWishLists } from './wishList';

export const setRegistrationData = (accessToken: string, user: IAuthResponseUser): SetRegistrationData => {

    return {
        type: AuthActionTypes.SET_REGISTRATION_DATA,
        authData: {
            accessToken: accessToken,
            userData: user,
        }
    }
}
export const setLoginData = (accessToken: string, user: IAuthResponseUser): SetLoginData => {

    return {
        type: AuthActionTypes.SET_LOGIN_DATA,
        authData: {
            accessToken: accessToken,
            userData: user,
        }
    }
}





export const autoAuthUser = () => {
    return (dispatch: Dispatch<AuthActions>) => {
        requestRefresh().then(({ data: { accessToken, user } }) => {
            console.log(accessToken)
            dispatch(setLoginData(accessToken, user))
        }).catch(({ response }) => {
            console.log(response)
        })
    }
}



export const login = (userData: IUserData, stringCart: string[], stringWishList: string[]) => {
    return (dispatch: Dispatch<AuthActions | Dispatch<any>>) => {
        requestLogin(userData).then(({ data: { accessToken, user, refreshToken } }) => {
            console.log(accessToken, user, refreshToken)
            dispatch(synchronizeClientServerCarts(stringCart, user.id));
            dispatch(synchronizeClientServerWishLists(stringWishList, user.id));
            dispatch(setLoginData(accessToken, user))

        }).catch(({ response }) => {

        })
    }
}
export const registrate = (userData: IUserData, stringCart: string[], stringWishList: string[]) => {
    return (dispatch: Dispatch<AuthActions | Dispatch<any>>) => {
        requestRegistration(userData).then(({ data: { accessToken, user } }) => {

            dispatch(synchronizeClientServerCarts(stringCart, user.id));
            dispatch(synchronizeClientServerWishLists(stringWishList, user.id));
            dispatch(setRegistrationData(accessToken, user))

        }).catch(({ response }) => {
            console.log(response)
        })
    }
}

export const removeAccessTokenFromStorage = (): RemoveAccessTokenFromStorage => {
    return {
        type: AuthActionTypes.REMOVE_ACCESS_TOKEN_FROM_STORAGE
    }
}

export const logout = () => {
    return (dispatch: Dispatch<CartActions | WishListActions | AuthActions>) => {
        requestLogout().then(() => {
            // 
            dispatch(removeAccessTokenFromStorage());
            dispatch(removeCartFromStorage());
            dispatch(removeWishListFromStorage());

        }).catch(({ response }) => {

        })
    }
}

