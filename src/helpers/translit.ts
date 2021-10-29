export const translit = (word: string) => {
    const converter = {
        a: { value: ["а"], sound: "vowel" },
        b: { value: ["б"], sound: "consonant" },
        v: { value: ["в"], sound: "consonant" },
        g: { value: ["г"], sound: "consonant" },
        d: { value: ["д"], sound: "consonant" },
        e: { value: ["е", "э"], sound: "vowel" },
        zh: { value: ["ж"], sound: "consonant" },
        z: { value: ["з"], sound: "consonant" },
        i: { value: ["и"], sound: "vowel" },
        y: { value: ["й", "ы"], sound: "vowel" },
        ye: { value: ["е"], sound: "vowel" },
        k: { value: ["к"], sound: "consonant" },
        l: { value: ["л"], sound: "consonant" },
        m: { value: ["м"], sound: "consonant" },
        n: { value: ["н"], sound: "consonant" },
        o: { value: ["о"], sound: "vowel" },
        p: { value: ["п"], sound: "consonant" },
        r: { value: ["р"], sound: "consonant" },
        s: { value: ["с"], sound: "consonant" },
        t: { value: ["т"], sound: "consonant" },
        u: { value: ["у"], sound: "vowel" },
        f: { value: ["ф"], sound: "consonant" },
        h: { value: ["х"], sound: "consonant" },
        c: { value: ["ц"], sound: "consonant" },
        ch: { value: ["ч"], sound: "consonant" },
        sh: { value: ["ш"], sound: "consonant" },
        sch: { value: ["щ"], sound: "consonant" },
        yu: { value: ["ю"], sound: "vowel" },
        ya: { value: ["я"], sound: "vowel" },
    };

    let translatedWord = "";
    for (let i = 0; i < word.length; i++) {

        const keyCur = word[i] as keyof typeof converter;
        const keyPrev = word[i - 1] as keyof typeof converter;
        const keyNext = word[i + 1] as keyof typeof converter;
        // 
        if (converter[keyCur]?.value.length > 1) {
            if (
                converter[keyCur].value[0] === "й" &&
                converter[keyPrev]?.sound === "consonant"
            ) {
                translatedWord += converter[keyCur].value[1];
            } else {
                translatedWord += converter[keyCur].value[0];
            }
        } else {
            translatedWord += converter[keyCur]?.value[0];
        }
        if (!converter[keyCur]) {
            return (translatedWord = word);
        }
    }
    return translatedWord;
};