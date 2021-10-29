import { IForm, IFormElements } from "hoc/Form/IForm";

export class UserDto {
    email;
    name;
    password;

    constructor(form: IFormElements) {
        this.email = form.mail?.value;
        this.name = form.name?.value;
        this.password = form.password.value
    }

}