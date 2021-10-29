import React, { FC } from "react";
import { IIcon } from "../IconType";

const TableIcon: FC<IIcon> = ({ IconClasses }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={IconClasses && IconClasses}
      id="kitchen_table"
    >
      <path d="M5.49 6.098a.5.5 0 10-.98-.196l.98.196zM2 21l-.49-.098A.5.5 0 002 21.5V21zm1.5 0v.5a.5.5 0 00.48-.36L3.5 21zM19.49 5.902a.5.5 0 00-.98.196l.98-.196zM22 21v.5a.5.5 0 00.49-.598L22 21zm-1.5 0l-.48.14a.5.5 0 00.48.36V21zM7 9v-.5a.5.5 0 00-.48.36L7 9zm10 0l.48-.14A.5.5 0 0017 8.5V9zM2 4.5h20v-1H2v1zm20 1H2v1h20v-1zm-20 0a.5.5 0 01-.5-.5h-1A1.5 1.5 0 002 6.5v-1zM22.5 5a.5.5 0 01-.5.5v1A1.5 1.5 0 0023.5 5h-1zm-.5-.5a.5.5 0 01.5.5h1A1.5 1.5 0 0022 3.5v1zm-20-1A1.5 1.5 0 00.5 5h1a.5.5 0 01.5-.5v-1zm2.51 2.402l-3 15 .98.196 3-15-.98-.196zM2 21.5h1.5v-1H2v1zM18.51 6.098l3 15 .98-.196-3-15-.98.196zM22 20.5h-1.5v1H22v-1zM7 9.5h10v-1H7v1zM3.98 21.14l2.333-8-.96-.28-2.333 8 .96.28zm2.333-8l1.167-4-.96-.28-1.167 4 .96.28zm14.667 7.72l-2.333-8-.96.28 2.333 8 .96-.28zm-2.333-8l-1.167-4-.96.28 1.167 4 .96-.28zm-12.814.64h12.333v-1H5.833v1z"></path>
    </svg>
  );
};

export default TableIcon;
