import React from 'react';

import './MissedLetters.css';

function MissedLetters({ missedLetters }) {
    const missedLettersElements = missedLetters.map((letter, index) => {
        return <span key={index}> {letter} </span>;
    });

    return (
        <div className='MissedLetters flex' >
            <p className='MissedLetters-title'>You missed:</p>
            <p className='MissedLetters-letters'>{missedLettersElements}</p>
        </div>
    );
}

export default MissedLetters;
