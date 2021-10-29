import React, { FC } from "react";
import { Link } from "react-router-dom";
import linkButtonClasses from "./LinkButton.module.scss";

interface ILinkButton {
  link?: string;
  hash?: string;
}

const LinkButton: FC<ILinkButton> = ({ link, hash, children }) => {
  return (
    <div className={linkButtonClasses.btn}>
      <Link
        /* className={linkButtonClasses.btn} */
        to={{ pathname: link, hash: hash }}
      >
        {children}
      </Link>
    </div>
  );
};

export default LinkButton;
