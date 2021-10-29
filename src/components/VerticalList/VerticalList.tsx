import React, { FC } from "react";
import verticalListClasses from "./VerticalList.module.scss";

const VerticalList: FC = ({ children }) => {
  return <ul className={verticalListClasses.verticalList}>{children}</ul>;
};

export default VerticalList;
