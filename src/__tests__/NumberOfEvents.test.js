import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  });
  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });
  test('renders number input correctly', () => {
    const query = NumberOfEventsWrapper.state('query');
    expect(NumberOfEventsWrapper.find('.NumberOfEvents').prop('value')).toBe(query);
  });
  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({
      query: 32
    });
    const eventObject = { target: { value: 16 } };
    NumberOfEventsWrapper.find('.NumberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('query')).toBe(16);
  });
  test('number of events out of bounds error', () => {
    NumberOfEventsWrapper.setState({
      query: 32,
      numberOutOfBounds: ''
    });
    const eventObject = { target: { value: 100 } };
    NumberOfEventsWrapper.find('.NumberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOutOfBounds')).toBe('Please enter a number between 0 and 100.');
  })
});