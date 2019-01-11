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

  it("has a place for input", () => {
    expect(wrapper.exists('#input')).toBe(true);
  });
});
