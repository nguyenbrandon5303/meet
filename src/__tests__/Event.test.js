import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />)
  });

  test('render event title', () => {
    expect(EventWrapper.find(".EventSummary")).toHaveLength(1);
  });
  test('render event start', () => {
    expect(EventWrapper.find(".EventStart")).toHaveLength(1);
  });
  test('render event location', () => {
    expect(EventWrapper.find(".EventLocation")).toHaveLength(1);
  });
  test('render details button', () => {
    expect(EventWrapper.find(".showDetail")).toHaveLength(1);
  });
  test('change detail button state to true', () => {
    EventWrapper.setState({
      details: false
    });
    EventWrapper.find(".showDetail").simulate("click");
    expect(EventWrapper.state("details")).toEqual(true);
  });
  test('change detail button state to false', () => {
    EventWrapper.setState({
      details: true
    });
    EventWrapper.find(".showDetail").simulate("click");
    expect(EventWrapper.state("details")).toEqual(false);
  });
  test('render event link when detail button state is true (clicked)', () => {
    EventWrapper.setState({
      details: true
    });
    expect(EventWrapper.find(".EventLink")).toHaveLength(1);
  });
  test('render details when detail button state is false (not clicked)', () => {
    EventWrapper.setState({
      details: false
    });
    expect(EventWrapper.find(".EventDetails")).toHaveLength(0);
  });
  test('render details when detail button state is true (clicked)', () => {
    EventWrapper.setState({
      details: true
    });
    expect(EventWrapper.find(".EventDetails")).toHaveLength(1);
  });
});