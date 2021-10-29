import React, { FC } from "react";
import { IIcon } from "./IconType";

const HomeIcon: FC<IIcon> = ({ IconClasses }) => {
  return (
    <svg
      viewBox="0 0 26 24"
      fill="none"
      className={IconClasses && IconClasses}
      xmlns="http://www.w3.org/2000/svg"
      stroke="black"
    >
      <path d="M7 14.584v6c0 .5523.44772 1 1 1h4v-5h3v5h4c.5523 0 1-.4477 1-1v-6h2.3697c.4341 0 .662-.5152.37-.8364l-8.5176-9.36931c-.3903-.42928-1.0627-.43747-1.4633-.01781L3.80682 13.7387c-.30372.3182-.07819.8453.36168.8453H7z"></path>
    </svg>
  );
};

export default HomeIcon;
