import React, { FC } from "react";
import cardClasses from "./Card.module.scss";

const Card: FC = ({ children }) => {
  return <div className={cardClasses.card}>{children}</div>;
};

export default Card;
