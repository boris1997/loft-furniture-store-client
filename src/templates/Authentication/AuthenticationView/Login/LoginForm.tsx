import { IFormElements } from "hoc/Form/IForm";

export const loginFormObj: IFormElements = {
  mail: {
    elementType: "input",
    elementConfig: {
      required: true,
      type: "text",
      name: "почта",
      id: "mail",
    },
    value: "",
  },

  password: {
    elementType: "input",
    elementConfig: {
      required: true,
      type: "password",
      name: "пароль",
      id: "password",
    },
    value: "",
  } /* ,

  buttonText: 'Войти'  */,
};
