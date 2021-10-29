import { FC } from "react";
import productClasses from "./ProductsView.module.scss";
import WithGrid from "components/Grid/WithGrid";
import ProductsLayoutContainer from "./ProductsLayout/ProductsLayoutContainer";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import WithSection from "components/Section/WithSection/WithSection";
import Pagination from "components/Pagination/PaginationContainer";
import PaginationContainer from "components/Pagination/PaginationContainer";

interface IProductsView {
  limit: number;
  pageNumber: number;
  productsAmount: number;
}

const ProductsView: FC<IProductsView> = ({
  limit,
  pageNumber,
  productsAmount,
  children,
}) => {
  return (
    <>
      <Breadcrumbs />
      <WithSection>
        {/* <div className={productClasses.products}> */}
        <div className="auto-product-grid">
          <ProductsLayoutContainer />
        </div>
        <div className={`d-f jc-c ${productClasses.productsPagination}`}>
          <PaginationContainer
            shouldBeActive
            productsAmount={productsAmount}
            page={pageNumber}
            limit={limit}
          />
        </div>
        {/* </div> */}
      </WithSection>
    </>
  );
};

export default ProductsView;
