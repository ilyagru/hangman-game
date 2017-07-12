import React from 'react';
import { render } from 'enzyme';

import GuessedLetters from './GuessedLetters';

const mockRandomWordArray = ['0', '0', '0', 't', 'e', 'e', 'n', 'a', 'g', 'e', 'r'];
const mockGuessedLetters = ['t', 'e'];

it('renders without crashing', () => {
    render(<GuessedLetters guessedLetters={mockGuessedLetters} randomWordArray={mockRandomWordArray} />);
});

it('shows correct letters', () => {
    const guessedLettersComponent = render(
        <GuessedLetters guessedLetters={mockGuessedLetters} randomWordArray={mockRandomWordArray} />
    );

    const letters = guessedLettersComponent.find('.GuessedLetter');
    const disabledLetters = guessedLettersComponent.find('.GuessedLetter.disabled');

    expect(letters.length).toEqual(11);
    expect(disabledLetters.length).toEqual(3);
    expect(letters.text()).toEqual('teee');
});
