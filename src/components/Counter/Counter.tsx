import MinusIcon from "icons/MinusIcon";
import PlusIcon from "icons/PlusIcon";
import {
  ChangeEvent,
  FC,
  FocusEvent,
  MouseEvent,
  MouseEventHandler,
  useState,
} from "react";
import CounterClasses from "./Counter.module.scss";

interface ICounter {
  value: number;
  counterCustomClasses?: string;
  increased?: MouseEventHandler<HTMLDivElement>;
  decreased?: MouseEventHandler<HTMLDivElement>;
  changed: (value: string) => void;
  blured: (value: string) => void;
}

const Counter: FC<ICounter> = ({
  counterCustomClasses,
  decreased,
  value,
  changed,
  blured,
  increased,
}) => {
  //
  const togglerClasses = [
    CounterClasses.toggler,
    value <= 1 && CounterClasses.togglerUnactive,
  ].join(" ");
  /*   if (!value) {
    
    cartStore(actionTypes.INCREASE_AMOUNT_CART, 1);
  } */
  const voidFunc = () => {};

  return (
    <div className={CounterClasses.counter + " " + counterCustomClasses}>
      <div className="" onClick={value > 1 ? decreased : voidFunc}>
        <MinusIcon IconClasses={togglerClasses} />
      </div>
      <div className={CounterClasses.valueBody}>
        <input
          className={CounterClasses.value}
          type="number"
          value={value /* .toString() */}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const {
              target: { value },
            } = e;
            +value > 0 && +value < 12 && changed(value);
          }}
          onBlur={(e: FocusEvent<HTMLInputElement>) => {
            const {
              target: { value },
            } = e;
            blured(value);
          }}
        />
      </div>
      <div className="" onClick={value < 11 ? increased : voidFunc}>
        <PlusIcon IconClasses={CounterClasses.toggler} />
      </div>
    </div>
  );
};

export default Counter;
