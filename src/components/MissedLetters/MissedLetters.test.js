import React from 'react';
import { render, shallow } from 'enzyme';

import MissedLetters from './MissedLetters';

it('renders without crashing', () => {
    render(<MissedLetters missedLetters={[]} />);
});

it('shows correct missed letters', () => {
    const mockMissedLetters = ['a', 'b'];
    const missedLettersComponent = shallow(<MissedLetters missedLetters={mockMissedLetters} />);

    const letters = missedLettersComponent.find('.MissedLetters-letters');
    expect(letters.text()).toEqual(' a  b ');
});
