import { IProductElements } from "./product";

export interface ICartElements extends IProductElements {
    img: string;
    amount: number;
}