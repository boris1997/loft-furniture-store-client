import React, { FC, MouseEventHandler, ReactNode } from "react";
import { IImgTogglers } from "components/Slider/Types/types";

const ImgToggler: FC<IImgTogglers> = ({ togglerImg, clicked }) => {
  return (
    <div onClick={clicked}>
      {<img src={`${process.env.REACT_APP_API_URL}${togglerImg}`} alt="" />}
    </div>
  );
};

export default ImgToggler;
