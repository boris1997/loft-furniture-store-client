import { IProductElements, IProductCardElements } from "globalTypes/product";
import { IImgTogglers } from "components/Slider/Types/types";

export interface IProductCard {
    product: IProductCardElements;
}

export interface CharacteristicType {
    id?: number | string;
    title: string;
    description: string;
}

export interface IProductElementsExtended extends IProductElements {
    info: Array<CharacteristicType>;
    smallImg: Array<IImgTogglers>;
    fullImg: Array<IImgTogglers>;
}



export interface ISliderProductImages {
    smallImg: Array<IImgTogglers>;
    fullImg: Array<IImgTogglers>;
}

