import { DOMAttributes, FC } from "react";
import tooltipClasses from "./Tooltip.module.scss";

interface ITooltip {
  direction: string;
}

const Tooltip: FC<ITooltip> = ({ children, direction }) => {
  return (
    <div className={tooltipClasses.tooltip} data-direction={direction}>
      <div className={tooltipClasses.body}>{children}</div>
    </div>
  );
};

export default Tooltip;
