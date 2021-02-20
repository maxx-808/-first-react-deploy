import React, { Component } from "react";
import axios from "axios";

export default class AjaxDemo extends Component {
  state = { data: [], gifSearch: "" };

  onChange = function (e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  getRequest = async function (e) {
    e.preventDefault();
    const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
    const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

    const fullUrl = BASEURL + this.state.gifSearch + APIKEY;

    try {
      const response = await axios.get(fullUrl);
      this.setState({ data: response.data.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <h1>Gif Search</h1>
        <form>
          <input
            onChange={(e) => this.onChange(e)}
            type="text"
            name="gifSearch"
          />
          <input
            onClick={(e) => this.getRequest(e)}
            type="submit"
            name="Search"
          />
        </form>

        {this.state.data.map((image, index) => (
          <img src={image.images.downsized.url} key={index} />
        ))}
      </>
    );
  }
}
