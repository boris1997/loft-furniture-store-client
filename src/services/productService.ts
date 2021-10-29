import { AxiosResponse } from "axios"
import { IProductPageElements, IProductsResponse } from "globalTypes/product"
import { $host } from "http/axios"

export const getProduct = async (urlName: string, name: string): Promise<AxiosResponse<IProductPageElements>> => {
    return $host.get(`api/product/${urlName}/${name}`)
}

export const getProducts = async (name: string, limit: number, page: number | string): Promise<AxiosResponse<IProductsResponse>> => {
    return $host.get(`api/product/${name}`, {
        params: {
            limit,
            page,
        }
    })
}