import { CharacteristicType, ISliderProductImages } from "templates/ProductPage/types/products";

export interface IProductElements {
    id: number;
    name: string;
    price: number;
    urlName: string
    img: string;
    discountPrice: number;
}

export interface IProductCardElements extends IProductElements {
    rating: string | number;
    // amount: number;
}


export interface IProductPageElements extends IProductCardElements {
    info: Array<CharacteristicType>;
    product_img: ISliderProductImages;
}




export interface ProductParams {
    name: string;
    urlName: string;
}

export interface IProductsResponse {
    productInfo: IProductCardElements[];
    amount: number;
}