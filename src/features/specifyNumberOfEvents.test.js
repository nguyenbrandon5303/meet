import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    given('user opened the app', () => {
      AppWrapper = mount(<App />);
    });

    when('user hasn\'t specified a number for amount of events shown', () => {

    });

    then('the user should see at most 32 events.', (arg0) => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(2);
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    given('user opened the app', () => {
      AppWrapper = mount(<App />);
    });

    let NumberOfEventsWrapper
    when('user changes number of events displayed', () => {
      NumberOfEventsWrapper = mount(<NumberOfEvents />)
      const eventObject = { target: { value: 1 } };
      NumberOfEventsWrapper.find('.NumberOfEvents').simulate('change', eventObject);
    });

    then('the user should see at most the number of events the user entered.', () => {
      expect(NumberOfEventsWrapper.state('query')).toBe(1);
    });
  });
});