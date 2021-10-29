import React, { FC } from "react";

import { IButton } from "globalTypes";
import defaultBtnClasses from "./button.module.scss";

const Button: FC<IButton> = ({
  type,
  customClass,
  clicked,
  disabled,
  children,
  size,
}) => {
  const buttonClasses = [
    defaultBtnClasses.btn,
    type,
    disabled && defaultBtnClasses.disabled,
    customClass && customClass,
  ].join(" ");
  return (
    <>
      <button
        onClick={clicked}
        data-type={type}
        data-size={size}
        className={buttonClasses}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
