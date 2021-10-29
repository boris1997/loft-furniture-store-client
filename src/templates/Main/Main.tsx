import WithGrid from "components/Grid/WithGrid";
import SectionHeader from "components/Section/SectionHeader/SectionHeader";
import WithSection from "components/Section/WithSection/WithSection";
import React from "react";
import DiscountedProductsContainer from "templates/DiscountedProducts/DiscountedProductsContainer";
import MainBanner from "./MainBanner/MainBanner";

const Main = () => {
  return (
    <>
      <WithSection>
        <MainBanner />
      </WithSection>
      <WithSection>
        <SectionHeader title={"товары по акции"} />
        <div className="auto-product-grid">
          <DiscountedProductsContainer />
        </div>
      </WithSection>
    </>
  );
};

export default Main;
