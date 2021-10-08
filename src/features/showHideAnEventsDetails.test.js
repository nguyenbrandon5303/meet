import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let EventWrapper;
  let EventListWrapper;
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('user has not opened details to an event', () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventListWrapper = mount(<EventList events={mockData} />);
    });

    when('user is interested in an event', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see a collapsed event that can be viewed for more information', () => {
      expect(EventWrapper.find('.EventDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('user is interested in an event', () => {
      AppWrapper = mount(<App />);
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventListWrapper = mount(<EventList events={mockData} />);
    });

    when('user clicks Show details', () => {
      EventWrapper.find('.showDetail').simulate('click');
    });

    then('the user should see more information about that event', () => {
      expect(EventWrapper.find('.EventDetails')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    given('user clicked Show details on an event', () => {
      AppWrapper = mount(<App />);
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper.find('.showDetail').simulate('click');
    });

    when('user clicks Hide details', () => {
      EventWrapper.find('.showDetail').simulate('click');
    });

    then('the user should see the collapsed event.', () => {
      expect(EventWrapper.find('.EventDetails')).toHaveLength(0);
    });
  });
});