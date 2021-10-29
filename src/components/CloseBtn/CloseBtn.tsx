import Button from "components/Button/Button";
import { ButtonTypes } from "globalTypes";
import CrossIcon from "icons/CrossIcon";
import React, { FC, MouseEventHandler } from "react";
import closeBtnClasses from "./CloseBtn.module.scss";

interface ICloseBtn {
  background?: boolean;
  customClass?: string;
  clicked: MouseEventHandler<HTMLButtonElement>;
}

const CloseBtn: FC<ICloseBtn> = ({ background, clicked }) => {
  return (
    <Button
      clicked={clicked}
      type={ButtonTypes.main}
      data-background={background}
      customClass={`${closeBtnClasses.btn} ${
        background && closeBtnClasses.background
      }`}
    >
      <CrossIcon />
    </Button>
  );
};

export default CloseBtn;
