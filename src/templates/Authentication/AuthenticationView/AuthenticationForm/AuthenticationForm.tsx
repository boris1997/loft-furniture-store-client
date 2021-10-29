import defaultBtnClasses from "components/button/button.module.scss";

import { ChangeEvent, FC, useState } from "react";
import {
  IFormElement,
  IFormRegistrationElements,
  IFormUi,
} from "hoc/Form/IForm";
import Form from "hoc/Form/Form";
import Button from "components/Button/Button";
import FormElement from "components/FormElement/FormElement";
import { ButtonTypes } from "globalTypes";
// import { IForm } from "components/Form/IForm";
// import { IFormElements } from "components/Form/IForm";

// <IInput[]>
import { IFormElements } from "hoc/Form/IForm";

interface IAuthenticationForm {
  form: IFormElements | IFormRegistrationElements;
  clicked: (e: Event) => void;
  authTitle: string;
  changed: (key: keyof IFormElements, value: string) => void;
}

const AuthenticationForm: FC<IAuthenticationForm> = ({
  form,
  clicked,
  authTitle,
  changed,
}) => {
  const formElementsArray: IFormElement[] = [];

  for (let key in form) {
    formElementsArray.push(form[key]);
  }

  const renderFormElements = () =>
    formElementsArray.map(
      (
        {
          elementType,
          elementConfig /* : { required, type, name, id } */,
          /* : { transform } */
        },
        i
      ) => (
        <FormElement /* input={input} */
          elementType={elementType}
          elementConfig={elementConfig}
          key={i}
          changed={(e: ChangeEvent<HTMLInputElement>) =>
            changed(elementConfig.id, e.target.value)
          }
        />
      )
    );

  return (
    <Form>
      {/* {formElementsUI} */}
      {renderFormElements()}
      <Button
        type={ButtonTypes.main}
        /*         customClass={authClasses.btn} */
        clicked={clicked}
      >
        {authTitle}
      </Button>
    </Form>
  );
};

export default AuthenticationForm;

// <FormElement /* input={input} */
//   elementType={"input"}
//   changed={setLogin}
//   elementConfig={{
//     required: true,
//     type: "text",
//     name: "логин",
//     id: "login",
//   }}
// />
// <FormElement /* input={input} */
//   elementType={"input"}
//   changed={setPassword}
//   elementConfig={{
//     required: true,
//     type: "password",
//     name: "пароль",
//     id: "password",
//   }}
// />
