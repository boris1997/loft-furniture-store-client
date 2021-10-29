import CatalogNavbar from "components/CatalogNavbar/CatalogNavbar";
import Container from "hoc/Container/Container";
import React, { FC } from "react";
import bottomHeaderClasses from "./BottomHeader.module.scss";

const BottomHeader: FC = () => {
  return (
    <div className={bottomHeaderClasses.bottomHeader}>
      <Container>
        <div className={bottomHeaderClasses.content}>
          <CatalogNavbar />
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
