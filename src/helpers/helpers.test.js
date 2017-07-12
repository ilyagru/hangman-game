import { withDisabledLetters } from './index';

it('adds zeros if a word is less than 11 characters', () => {
    const word = ['t', 'e', 'a'];
    const wordWithDisabledLetters = withDisabledLetters(word);

    expect(wordWithDisabledLetters).toEqual(['0', '0', '0', '0', '0', '0', '0', '0', 't', 'e', 'a']);
    expect(wordWithDisabledLetters.length).toEqual(11);
});
