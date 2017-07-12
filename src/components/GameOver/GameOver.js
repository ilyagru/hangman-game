import React from 'react';

import './GameOver.css';

function GameOver({ onNewWordButtonClick }) {
    return (
        <div className='GameOver flex-items flex-justify-center flex-align-items-center'>
            <div>
                <p className='GameOver-title'>Game Over</p>
                <button className='GameOver-button' onClick={() => onNewWordButtonClick()}>New Word</button>
            </div>
        </div>
    );
}

export default GameOver;
