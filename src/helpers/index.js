export function withDisabledLetters(wordArray) {
    let lettersWithDisabled = [];

    if (wordArray.length < 11) {
        for (let i = 0; i < 11 - wordArray.length; i++) {
            lettersWithDisabled.push('0');
        }
        return [...lettersWithDisabled, ...wordArray];
    } else {
        return wordArray;
    }
};
