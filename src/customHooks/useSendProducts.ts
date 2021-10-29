import { ICartElements } from 'globalTypes/cart';
import { IProductElements } from 'globalTypes/product';
import { useActions } from './useActions';
import { useTypedSelector } from './useTypedSelector';
// import { ProductMainType } from 'types';

export interface ISendProduct {
    type: ISendProductTypes
}

export enum ISendProductTypes {
    cart = 'cart',
    wishList = 'wishList'
}

const checkExistingProducts = (products: any, id: number) => !products || (products && !products.find((item: any) => item.id === id))


export const useSendProductToCart = () => {
    const { setCartItem } = useActions();
    const cart = useTypedSelector(({ cart: { cart } }) => cart);
    return (product: ICartElements) => {

        const { id } = product;
        console.log(product)

        if (checkExistingProducts(cart, id)) {
            return setCartItem(product)
        }
    }
}

export const useSendProductToWishList = () => {
    const { addProductToWishList } = useActions();
    const wishList = useTypedSelector(({ wishList: { wishList } }) => wishList);
    return (product: IProductElements) => {

        const { id } = product;

        if (checkExistingProducts(wishList, id)) {
            return addProductToWishList(product)
        }
    }
}




