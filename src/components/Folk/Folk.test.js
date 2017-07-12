import React from 'react';
import { render } from 'enzyme';

import Folk from './Folk';

it('renders without crashing', () => {
    render(<Folk missedLetters={[]} />);
});
