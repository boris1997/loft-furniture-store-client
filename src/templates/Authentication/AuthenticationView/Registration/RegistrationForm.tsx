import { IFormRegistrationElements } from "hoc/Form/IForm";

export const registrationFormObj: IFormRegistrationElements = {
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
  name: {
    elementType: "input",
    elementConfig: {
      required: true,
      type: "text",
      name: "имя",
      id: "name",
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
