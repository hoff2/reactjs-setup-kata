import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./src/__tests__/features/FizzBuzz.feature');

defineFeature(feature, test => {
    test('Returns a number when given a number not divisible by 3 or 5', ({ given, when, then }) => {

        let wrapper;

        beforeEach(() => {
            
        });

        given('Input contains 17', () => {

        });

        when('I click submit', () => {

        });

        then('17 is displayed', () => {

        });
    }); 
});