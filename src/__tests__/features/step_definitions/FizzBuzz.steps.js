import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import App, { fizzBuzz } from '../../../App.js'

const feature = loadFeature('./src/__tests__/features/FizzBuzz.feature');

defineFeature(feature, test => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App calculate={fizzBuzz} />);
    });

    const givenInputContains = given => {
        given(/^Input contains (.*)$/, (inputValue) => {
            wrapper.find('input#input').simulate('change', { target: { value: inputValue } });
        });
    };

    const whenIClickSubmit = when => {
        when('I click submit', () => {
            wrapper.find('input[type="submit"]').simulate('click');
        });
    };

    const thenIsDisplayed = then => {
        then(/^(.*) is displayed$/, (expected) => {
            expect(wrapper.find('#output').text()).toBe(expected);
        });
    }

    test('Returns a number when given a number not divisible by 3 or 5', ({ given, when, then }) => {
        givenInputContains(given);
        whenIClickSubmit(when);
        thenIsDisplayed(then);
    });
    
    test('Returns fizz when given a number divisible by three', ({ given, when, then }) => {
        givenInputContains(given);
        whenIClickSubmit(when);
        thenIsDisplayed(then); 
    }); 

    test('Returns buzz when given a number divisible by five', ({ given, when, then }) => {
        givenInputContains(given);
        whenIClickSubmit(when);
        thenIsDisplayed(then); 
    });
});