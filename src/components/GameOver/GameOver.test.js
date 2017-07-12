import React from 'react';
import { shallow, render } from 'enzyme';
import sinon from 'sinon';

import GameOver from './GameOver';

it('renders without crashing', () => {
    render(<GameOver onNewWordButtonClick={() => {}} />);
});

it('simulates click events', () => {
    const onNewWordButtonClick = sinon.spy();
    const GameOverComponent = shallow(<GameOver onNewWordButtonClick={onNewWordButtonClick} />);

    GameOverComponent.find('button').simulate('click');
    expect(onNewWordButtonClick.calledOnce).toBeTruthy;
});
