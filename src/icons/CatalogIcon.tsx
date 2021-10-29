import React, { FC } from "react";
import { IIcon, IIconEvent } from "./IconType";

const CatalogIcon: FC<IIcon & IIconEvent> = ({ IconClasses, clicked }) => {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      onClick={clicked}
      className={IconClasses && IconClasses}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 16L14.7143 11.7143M10.4286 13.8571C6.87817 13.8571 4 10.979 4 7.42857C4 3.87817 6.87817 1 10.4286 1C13.979 1 16.8571 3.87817 16.8571 7.42857C16.8571 10.979 13.979 13.8571 10.4286 13.8571Z"
        stroke="black"
      />
      <line
        x1="0.5"
        y1="1.5"
        x2="4.5"
        y2="1.5"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="13.5"
        x2="4.5"
        y2="13.5"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="7.5"
        x2="2.5"
        y2="7.5"
        stroke="black"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CatalogIcon;
