import React, { FC } from "react";
import formClasses from "./Form.module.scss";

const Form: FC = ({ children }) => {
  return <form className={formClasses.form}>{children}</form>;
};

export default Form;
