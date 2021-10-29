import { AxiosResponse } from "axios"
import { ICartElements } from "globalTypes/cart"
import $host from "http/axios"

export const requestUpdateServerCart = async (cart: string[], userId: string): Promise<AxiosResponse<ICartElements[]>> => {

    return $host.post<ICartElements[]>(`api/cart/updateCart`, { cart, userId })
}

export const requestEquateServerCart = async (cart: string[], userId: string): Promise<AxiosResponse<ICartElements[]>> => {
    return $host.post<ICartElements[]>(`api/cart/equateServerCartToClient`, { cart, userId })
}
