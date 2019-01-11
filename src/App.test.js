import React from "react";
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("FizzBuzz app", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('has a place for input', () => {
    expect(wrapper.exists('input#input')).toBe(true);
  });

  it('has a submit button', () => {
    expect(wrapper.exists('input[type="submit"]')).toBe(true);
  });

  it('has a place for output', () => {
    expect(wrapper.exists('#output')).toBe(true);
  });
});
