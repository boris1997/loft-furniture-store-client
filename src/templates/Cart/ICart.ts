import { ICartElements } from "globalTypes/cart";
import { IProductElements } from "globalTypes/product";




export interface ICart {
    cartItem: ICartElements;
}

export interface ICartProductAmount {
    amount: number;
}