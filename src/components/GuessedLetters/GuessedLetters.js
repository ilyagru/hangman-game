import React from 'react';

import GuessedLetter from '../GuessedLetter';

function GuessedLetters({ guessedLetters, randomWordArray }) {
    // Add placeholders before guessing
    let letters = [...randomWordArray];
    letters.forEach((letter, index) => {
        if (letter !== '0') {
            letters[index] = '1';
        }
    });

    // Update letters according to guessed letters
    randomWordArray.forEach((letter, index) => {
        guessedLetters.forEach(guessedLetter => {
            if (letter === guessedLetter) {
                letters[index] = guessedLetter;
            } else {
                if (letters[index] !== guessedLetter) {
                } else if (letters[index] !== '0') {
                    letters[index] = '1';
                } else {
                    letters[index] = '0';
                }
            }
        });
    });

    const guessedLettersElements = letters.map((letter, index) => {
        return <GuessedLetter letter={letter} key={index} />;
    });

    return (
        <div className='GuessedLetters flex-items flex-justify-between' >
            {guessedLettersElements}
        </div>
    );
}

export default GuessedLetters;
