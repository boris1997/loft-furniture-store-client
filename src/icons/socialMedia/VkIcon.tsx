import React, { FC } from "react";
import { IIcon, IIconEvent } from "../IconType";

const VkIcon: FC<IIcon & IIconEvent> = ({ IconClasses, clicked }) => {
  return (
    <svg
      width="23"
      height="14"
      viewBox="0 0 36 20"
      fill="none"
      onClick={clicked}
      className={IconClasses && IconClasses}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.1206 1.371C35.2776 0.626 34.932 0.208401 34.1152 0.208401H30C29.0576 0.208401 28.712 0.595999 28.4294 1.1624C28.4294 1.1624 26.2044 5.6604 23.4974 8.495C22.6284 9.4112 22.1866 9.687 21.7068 9.687C21.3198 9.687 21.1414 9.381 21.1414 8.5544V1.3114C21.1414 0.298199 21.0158 0 20.1362 0H13.5394C13.0366 0 12.7224 0.2772 12.7224 0.6556C12.7224 1.61 14.2618 1.8254 14.2618 4.4112V9.7466C14.2618 10.8198 14.199 11.237 13.665 11.237C12.2514 11.237 8.8902 6.617 7.0054 1.371C6.6284 0.2982 6.22 0 5.1518 0H1.0368C0.4398 0 0 0.3874 0 0.9536C0 1.9968 1.288 6.8256 6.3456 13.2936C9.7382 17.6454 14.199 20 18.2198 20C20.6702 20 21.267 19.6126 21.267 18.629V15.2906C21.267 14.456 21.6126 14.0984 22.1152 14.0984C22.6806 14.0984 23.6786 14.2708 26.0106 16.453C28.7748 18.957 28.9634 20 30.4714 20H35.089C35.5602 20 36 19.7914 36 19.0462C36 18.0626 34.6492 16.304 32.5758 14.2176C31.7278 13.1446 30.3456 11.9822 29.9058 11.4458C29.2776 10.8198 29.466 10.4618 29.9058 9.8062C29.9058 9.8062 34.6492 3.4576 35.1206 1.371Z"
        fill="#333333"
      />
    </svg>
  );
};

export default VkIcon;
