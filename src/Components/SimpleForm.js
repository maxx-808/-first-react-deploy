import React, { Component } from "react";

export default class SimpleForm extends Component {
  state = {};

  onChange = function (e) {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <form>
        <input onChange={(e) => this.onChange(e)} type="text" name="fName" />
        <input onChange={(e) => this.onChange(e)} type="text" name="lName" />
        <input
          onClick={() => alert(`${this.state.fName} ${this.state.lName}`)}
          type="submit"
          value="Click"
        />
      </form>
    );
  }
}
