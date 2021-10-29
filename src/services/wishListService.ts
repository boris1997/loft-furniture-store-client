import { AxiosResponse } from "axios"
import { IProductElements } from "globalTypes/product"
import $host from "http/axios"

export const requestUpdateServerWishLists = async (wishList: string[], userId: string): Promise<AxiosResponse<IProductElements[]>> => {

    return $host.post<IProductElements[]>(`api/wishList/updateWishList`, { wishList, userId })
}

export const requestEquateServerWishLists = async (wishList: string[], userId: string): Promise<AxiosResponse<IProductElements[]>> => {
    return $host.post<IProductElements[]>(`api/wishList/equateServerWishListToClient`, { wishList, userId })
}
