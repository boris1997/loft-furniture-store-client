import { FC, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from "components/Spinner/Spinner";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { useSendProductToCart } from "customHooks/useSendProducts";
import { ProductParams } from "globalTypes/product";
import { fetchProducts } from "store/actions/products";
import ProductsView from "templates/Products/ProductsView/ProductsView";
import Product from "components/Product/Product";
import { useActions } from "customHooks/useActions";
import { useHttpErrorHandler } from "customHooks/useErrorHandler";
import $host from "http/axios";
import ErrorPage from "templates/Error/ErrorPage/ErrorPage";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import ErrorContainer from "templates/Error/ErrorContainer";

const ProductsContainer: FC = () => {
  const { fetchProducts } = useActions();

  const { urlName } = useParams<ProductParams>();
  const {
    location: { search },
  } = useHistory();
  //
  const [limit, products, amount] = useTypedSelector(
    ({ product: { limit, products, amount } }) => [limit, products, amount]
  );
  const error = useTypedSelector((state) => state.error.error);
  let pageNumber = 1;

  //
  if (search) {
    const newPageNumber = search.split("");
    pageNumber = +newPageNumber[newPageNumber.length - 1];
  }
  useEffect(() => {
    fetchProducts(urlName, limit, pageNumber);
  }, [urlName, search]);

  let uiProducts = <Spinner />;

  if (products?.length /* && !error */) {
    // const {}
    console.log(products?.length);
    uiProducts = (
      <ProductsView
        limit={limit}
        pageNumber={pageNumber}
        productsAmount={amount}
      />
    );
  } /* else */

  const isData = products?.length;
  if (error) {
    //
    uiProducts = (
      <ErrorContainer
        status={error.status}
        message={error.message}
        data={isData}
      />
    );
  }
  //

  return <>{uiProducts}</>;
};

export default ProductsContainer;
