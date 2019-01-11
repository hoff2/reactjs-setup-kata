import React from "react";
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';
import App, { fizzBuzz } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App calculate={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("FizzBuzz app", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('input', () => {
    it('exists', () => {
      expect(wrapper.exists('input#input')).toBe(true);
    });

    it('updates state when typed in', () => {
      const inputValue = 'foo';
      wrapper.find('input#input').simulate('change', { target: { value: inputValue } });
      expect(wrapper.state('input')).toBe(inputValue);
    });
  });

  it('has a submit button', () => {
    expect(wrapper.exists('input[type="submit"]')).toBe(true);
  });

  it('has a place for output', () => {
    expect(wrapper.exists('#output')).toBe(true);
  });

  describe('calculate prop', () => {

    let wrapper;
    let argument;
    let returnValue = 'bar';

    const testFunction = (arg) => {
      argument = arg;
      return returnValue;
    };

    beforeEach(() => {
      wrapper = shallow(<App calculate={testFunction} />);
    });

    it('is called with the input contents when submit is clicked', () => {
      const inputValue = 'foo';
      wrapper.setState({ input: inputValue });
      wrapper.find('input[type="submit"]').simulate('click');
      expect(argument).toBe(inputValue);
    });

    it('gets its return value placed in the output', () => {
      wrapper.find('input[type="submit"]').simulate('click');
      expect(wrapper.find('#output').text()).toBe(returnValue);
    });
  });
});

describe('fizzBuzz function', () => {
  it('returns the argument as string if not divisible by 3 or 5', () => {
    expect(fizzBuzz(17)).toBe('17');
  });

  it('returns fizz given a number divisible by 3', () => {
    expect(fizzBuzz(6)).toBe('fizz');
  });

  it('returns buzz when given a number divisible by five', () => {
    expect(fizzBuzz(10)).toBe('buzz');
  });

  it('returns fizzbuzz given a number divisible by both 3 and 5', () => {
    expect(fizzBuzz(30)).toBe('fizzbuzz');
  });
});
