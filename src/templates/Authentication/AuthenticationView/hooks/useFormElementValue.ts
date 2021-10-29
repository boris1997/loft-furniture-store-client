import { IForm } from "hoc/Form/IForm";
import { useState } from "react";

export const useFormElementValue = (formObj: any, key: keyof typeof formObj, value: string) => {
    const [form, setform] = useState(formObj);
    const copyForm = {
        ...form,
        [key]: {
            ...form[key],
            value: value,
        },
    };

    setform(copyForm);
    return form
}