import { IInput } from "components/Input/IInput";
import { ReactNode } from "react";

export interface IForm {
    form: IFormElements;
}



export interface IFormUi {
    formElementsUI: ReactNode;
}

export interface IFormElements {
    mail: IFormElement,
    password: IFormElement,
    [key: string]: IFormElement,
}

export interface IFormRegistrationElements extends IFormElements {
    name: IFormElement

}

export interface IKey {
    [key: string]: IFormElement,
}


export interface IFormElement {
    elementType: string;
    elementConfig: IInput;
    value: string;
}


export enum ElementType {
    input = "input",
    textarea = "textarea",
    select = "select"
}