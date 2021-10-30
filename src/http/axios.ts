import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IAuthResponse, IAuthResponseUser, IUserData } from "globalTypes/auth"

import { config } from 'process';
console.log(process.env.REACT_APP_API_URL)
export const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})
let isRetry = false;

$host.interceptors.request.use((config): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
$host.interceptors.response.use((config): AxiosResponse | Promise<AxiosResponse> => {

    return config
}, (error): AxiosResponse | Promise<AxiosResponse<IAuthResponse>> => {
    const originalRequest = error.config;
    console.log(error.config.isRetry)
    console.log(isRetry)
    // if (error.response.status === 401 && error.config && !isRetry) {
    //     isRetry = true
    //     console.log(error.config.isRetry)
    //     $host.get(`api/refresh`).then((res) => {
    //         localStorage.setItem('token', res.data.accessToken);
    //         return $host.request(originalRequest);
    //     }).catch((error) => {
    //         console.log('Не авторизован')
    //     })
    // }
    throw error;
}

)

/* $host.interceptors.request.eject(reqInterceptor);
$host.interceptors.response.eject(resInterceptor); */
// $host.interceptors.response.eject((config): AxiosResponse | Promise<AxiosResponse>  => {
//     
//     return config
// })
// export const setProduct = (product: IProductPageElements) => product

export default $host