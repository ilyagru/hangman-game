import React from 'react';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';

import App from './App';

let server;

beforeEach(() => {
    const orgData = [{'word': 'curriculum', 'id': 100}];
    const response = [200, {'Content-type': 'application/json'}, JSON.stringify(orgData)];
    server = sinon.fakeServer.create();
    server.respondWith('GET', 'http://api.wordnik.com:80/v4/words.json/randomWord', response);
});

afterEach(() => {
    server.restore();
});

it('renders without crashing', () => {
    render(<App />);
});

it('should be wrapped in a div', () => {
    const app = shallow(<App />);
    const wrapper = app.find('div.App');

    expect(wrapper.length).toEqual(1);
});

it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    server.respond();
    const app = mount(<App />);

    expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
});
