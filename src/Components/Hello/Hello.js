import React from "react";

const Hello = (props) => {
  const styles = {
    colors: props.str < 5 ? "purple" : "blue",
  };
  return <h1>Hello Hello</h1>;
};

export default Hello;
