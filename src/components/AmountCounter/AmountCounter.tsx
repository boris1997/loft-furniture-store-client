import React from "react";
import { FC } from "react";
import amountCounterClasses from "./AmountCounter.module.scss";
interface IAmountCounter {
  amount: number;
}

const AmountCounter: FC<IAmountCounter> = ({ amount }) => {
  return (
    <div className={`d-f jc-c ai-c ${amountCounterClasses.body}`}>{amount}</div>
  );
};

export default AmountCounter;
