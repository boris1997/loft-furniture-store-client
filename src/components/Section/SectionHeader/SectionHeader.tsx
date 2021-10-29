import React, { FC } from "react";
import SectionHeaderClasses from "./SectionHeader.module.scss";

interface ISectionHeader {
  title: string;
}
const SectionHeader: FC<ISectionHeader> = ({ title }) => {
  return (
    <div className={SectionHeaderClasses.header}>
      <h2 className={SectionHeaderClasses.title}>{title}</h2>
    </div>
  );
};

export default SectionHeader;
