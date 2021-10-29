import { FC } from "react";
import { IInput } from "./IInput";

const Input: FC<IInput> = ({ ...props }) => {
  /*   const focused = () => {
    
  } */

  return (
    <>
      <input
        {...props}
        // onChange={changed}
        className="contact-form__input"
      />
    </>
  );
};

export default Input;
