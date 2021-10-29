export const copyForm = (form: any, key: keyof typeof form, value: string) => {

    return {
        ...form,
        [key]: {
            ...form[key],
            value: value,
        },
    }
}