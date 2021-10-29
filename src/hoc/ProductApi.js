import React, { } from 'react'
import defaultBtnClasses from 'UI/button/button.module.scss'
import productClasses from 'components/Products/Product/Product.module.scss'
import Button from 'UI/button/Button'
import { useDispatch } from 'react-redux'
import * as actionTypes from 'store/actions/actionTypes';


const ProductApi = (Product) => {

    return (props) => {

        return (
            <>
                {/* <Product {...props} />
                <Button clicked={sendProduct} customStyle={productClasses.product__btn} typeBtn={defaultBtnClasses.btn__main}>добавить в корзину</Button> */}
            </>
        )
    }
}

export default ProductApi
