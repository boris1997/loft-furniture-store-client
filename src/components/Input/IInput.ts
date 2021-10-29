import { FocusEvent, FocusEventHandler } from "react";

export interface IInput {
    required: boolean;
    type: string;
    placeholder?: string;
    name: string;
    id: /* number &  */string;
    focused?: FocusEvent<HTMLInputElement>;
    blured?: FocusEvent<HTMLInputElement>;
    value?: string;
}

export interface IInputContent {
    input: IInput
}