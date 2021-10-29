import React, { FC } from "react";
import gridClasses from "./WithGrid.module.scss";

const WithGrid: FC = ({ children }) => {
  return <div className={gridClasses.grid}>{children}</div>;
};

export default WithGrid;
