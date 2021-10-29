import React, { FC } from "react";
import { IBackdrop } from "./IBackdrop";
import backdropClasses from "./Backdrop.module.scss";
import {} from "globalTypes";

const Backdrop: FC<IBackdrop> = ({ showBackdrop, clicked }) => {
  return (
    <>
      {showBackdrop && (
        <div onClick={clicked} className={backdropClasses.backdrop}></div>
      )}
    </>
  );
};

export default Backdrop;
