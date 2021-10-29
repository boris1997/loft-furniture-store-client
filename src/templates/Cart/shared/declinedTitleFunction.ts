

export const getDeclinedTitle = (totalAmount: number) => {
    const declensionAmountObj = [
        {
            test: /^(?:[2-4]|[2-9][2-4])$/,
            outputWord: "товара",
        },
        {
            test: /^(?:[1]|[2-9]1)$/,
            outputWord: "товар",
        },
        {
            test: /^(?:[5-9]|1[1-9]|[2-9][5-9]|[1-9]0)$/,
            outputWord: "товаров",
        },
    ];
    const numberToString = totalAmount.toString();
    return declensionAmountObj
        .map(
            ({ test, outputWord }, i) => numberToString.match(test) && outputWord
        )
        .join("");
};