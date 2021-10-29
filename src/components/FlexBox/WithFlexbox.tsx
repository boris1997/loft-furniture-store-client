import React, { FC } from "react";
import flexboxClasses from "./WithFlexbox.module.scss";
interface IWithFlexbox {
  direction: FlexboxDirection;
  alignment?: FlexboxAligment;
}

export enum FlexboxDirection {
  column = "column",
  row = "row",
}
export enum FlexboxAligment {
  ctrCtr = "ctr-ctr",
  startCtr = "start-ctr",
  ctrStart = "ctr-start",
  startStart = "start-start",
}

const WithFlexbox: FC<IWithFlexbox> = ({ direction, alignment, children }) => {
  return (
    <div
      className={flexboxClasses.flexbox}
      data-direction={direction}
      data-alignment={alignment}
    >
      {children}
    </div>
  );
};

export default WithFlexbox;
