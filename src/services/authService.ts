import { AxiosResponse } from "axios"
import { IAuthResponse, IAuthResponseUser, IUserData } from "globalTypes/auth"
import { $host } from "http/axios"



export const requestRegistration = async (userData: IUserData): Promise<AxiosResponse<IAuthResponse>> => {

    return $host.post<IAuthResponse>(`api/registration`, userData)
}

export const requestLogin = async (userData: IUserData): Promise<AxiosResponse<IAuthResponse>> => {

    return $host.post<IAuthResponse>(`api/login`, userData)
}

export const requestLogout = async (): Promise<void> => {
    return $host.post(`api/logout`)
}

export const requestRefresh = async (): Promise<AxiosResponse<IAuthResponse>> => {
    return $host.get(`api/refresh`)
}

