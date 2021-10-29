import React, { FC } from "react";
import { IIcon } from "../IconType";

const LightIcon: FC<IIcon> = ({ IconClasses }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={IconClasses && IconClasses}
      id="lighting"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.02.86A.5.5 0 018.5.5h7a.5.5 0 01.48.36l3.395 11.64H21a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-7v1.909l2.254 3.091H18.5a.5.5 0 01.485.379l.5 2A.5.5 0 0119 23.5H5a.5.5 0 01-.485-.621l.5-2A.5.5 0 015.5 20.5h2.246L10 17.409V15.5H3a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h1.625L8.02.86zM5.667 12.5h12.666l-3.208-11h-6.25l-3.208 11zm-2.167 1v1h17v-1h-17zm7.5 2v2.071a.5.5 0 01-.096.295L8.984 20.5h6.033l-1.921-2.634a.5.5 0 01-.096-.295V15.5h-2zm-5.11 6l-.25 1h12.72l-.25-1H5.89z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 18v-3h1v3h-1z"
      ></path>
      <path d="M19 18a1 1 0 11-2 0 1 1 0 012 0z"></path>
    </svg>
  );
};

export default LightIcon;
