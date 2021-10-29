import React, { FC } from "react";
import ImgToggler from "./ImgToggler/ImgToggler";

import ImgTogglersClasses from "./ImgTogglers.module.scss";

const ImgTogglers: FC = ({ children }) => {
  return (
    <div className={ImgTogglersClasses.imgTogglers}>
      {children}
      {/* {togglersUi} */}
    </div>
  );
};

export default ImgTogglers;
