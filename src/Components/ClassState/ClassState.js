import React, { Component } from "react";

export default class ClassState extends Component {
  state = { counter: 0 };
  addOne = function () {
    const newCount = this.state.counter + 1;
    this.setState({ counter: newCount });
  };
  minusOne = function () {
    const newCount = this.state.counter - 1;
    this.setState({ counter: newCount });
  };
  multiplyTwo = function () {
    const newCount = this.state.counter * 2;
    this.setState({ counter: newCount });
  };
  reset = function () {
    const newCount = 0;
    this.setState({ counter: newCount });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.addOne()}>Add One</button>
        <button onClick={() => this.minusOne()}>Minus One</button>
        <button onClick={() => this.multiplyTwo()}>Multiply by Two</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}
