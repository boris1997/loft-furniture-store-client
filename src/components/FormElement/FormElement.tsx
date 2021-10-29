import React, { FC } from "react";

import formElementClasses from "./FormElement.module.scss";

const FormElement: FC<any> = (props) => {
  let inputElement = null;
  const inputClasses = [formElementClasses.InputElement];
  const labelClasses = [formElementClasses.LabelELement].join(" ");
  /*   if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(inputClasses.Invalid);
  }
 */

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          placeholder={"fdf"}
          onChange={props.changed}
          onBlur={props.blured}
          onFocus={props.focused}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={formElementClasses.formElement}>
      {inputElement}
      <label className={labelClasses}>{props.elementConfig.name}</label>
    </div>
  );
};

export default FormElement;
