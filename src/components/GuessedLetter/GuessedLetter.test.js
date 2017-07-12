import React from 'react';
import { shallow, render } from 'enzyme';

import GuessedLetter from './GuessedLetter';

it('renders without crashing', () => {
    render(<GuessedLetter letter={''} />);
});

it('shows disabled letter', () => {
    const guessedLetter = shallow(<GuessedLetter letter={'0'}/>);

    expect(guessedLetter.find('.disabled')).toEqual(guessedLetter);
    expect(guessedLetter.text()).toEqual('');
});

it('hides non guessed letter', () => {
    const guessedLetter = shallow(<GuessedLetter letter={'1'}/>);

    expect(guessedLetter.text()).toEqual('');
});

it('shows correct letter', () => {
    const guessedLetter = shallow(<GuessedLetter letter={'t'}/>);

    expect(guessedLetter.text()).toEqual('t');
});
