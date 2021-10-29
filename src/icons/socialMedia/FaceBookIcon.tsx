import React, { FC } from "react";
import { IIcon, IIconEvent } from "../IconType";

const FaceBookIcon: FC<IIcon & IIconEvent> = ({ IconClasses, clicked }) => {
  return (
    <svg
      width="10"
      height="20"
      viewBox="0 0 14 28"
      fill="none"
      onClick={clicked}
      className={IconClasses && IconClasses}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.13728 28V14.7425H13.2878L13.9092 10H9.13728V6.84705C9.13728 5.45177 9.52473 4.501 11.5255 4.501L14 4.49977V0.189874C13.5585 0.131249 12.121 0 10.3589 0C6.67992 0 4.16098 2.2456 4.16098 6.36983V10H0V14.7425H4.16098V28H9.13728Z"
        fill="#333333"
      />
    </svg>
  );
};

export default FaceBookIcon;
