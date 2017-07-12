import React from 'react';

import './GuessedLetter.css';

function GuessedLetter({ letter }) {
    const isDisabled = letter === '0' ? 'disabled' : '';
    const showedLetter = letter !== '0' && letter !== '1' ? letter : '';

    return <div className={`GuessedLetter ${isDisabled}`}>{showedLetter}</div>
}

export default GuessedLetter;
