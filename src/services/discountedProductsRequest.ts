import { AxiosResponse } from "axios"
import { IProductCardElements } from "globalTypes/product"
import { $host } from "http/axios"

export const discountedProductsRequest = async (): Promise<AxiosResponse<IProductCardElements[]>> => {
    return $host.get(`api/productSale`)
}

