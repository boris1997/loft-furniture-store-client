import { FC, ReactNode } from "react";
import Characteristic from "./Characteristic/Characteristic";
import ProductClasses from "./ProductPageView.module.scss";
import Container from "hoc/Container/Container";
import ProductBuyContainer from "./ProductBuy/ProductBuyContainer";
import ProductSlider from "./ProductSlider/ProductSlider";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import WithSection from "components/Section/WithSection/WithSection";

interface IProductPageUi {
  productBuy: ReactNode;
  productCarousel: ReactNode;
}

const ProductPageView: FC = () => {
  return (
    <>
      <Breadcrumbs />
      <WithSection>
        <div className={ProductClasses.content}>
          <div className={ProductClasses.main}>
            <div className={ProductClasses.slider}>
              {/* {productCarousel} */}
              <ProductSlider />
            </div>
            <div className={ProductClasses.productBuy}>
              <ProductBuyContainer />
              {/* {productBuy} */}
            </div>
          </div>
          <Characteristic />
        </div>
      </WithSection>
    </>
  );
};

export default ProductPageView;
