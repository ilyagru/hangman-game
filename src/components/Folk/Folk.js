import React from 'react';

import './Folk.css';

import bar from '../../imgs/bar.png';
import head from '../../imgs/head.png';
import neck from '../../imgs/neck.png';
import corpus from '../../imgs/corpus.png';
import rightArm from '../../imgs/right-arm.png';
import leftArm from '../../imgs/left-arm.png';
import rightHand from '../../imgs/right-hand.png';
import leftHand from '../../imgs/left-hand.png';
import rightLeg from '../../imgs/right-leg.png';
import leftLeg from '../../imgs/left-leg.png';
import rightFoot from '../../imgs/right-foot.png';
import leftFoot from '../../imgs/left-foot.png';

function Folk({ missedLetters }) {
    const body = [head, neck, corpus, rightArm, leftArm, rightHand, leftHand, rightLeg, leftLeg, rightFoot, leftFoot];
    body.length = missedLetters.length;

    const bodyParts = body.map((part, index) => {
        const partName = part.match(/media\/[a-z-]+/)[0].replace(/media\//, '');

        return <img className={`Folk-body-${partName}`} src={part} alt={partName} key={index}/>
    });

    return (
        <div className='Folk flex'>
            <img className='bar' src={bar} alt='bar'/>
            <div className='Folk-body'>
                {bodyParts}
            </div>
        </div>
    );
}

export default Folk;
