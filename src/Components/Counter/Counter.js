import React, { useState } from "react";
import Button from "../Button/Button";

const Counter = () => {
  const [counter, setcounter] = useState(0);

  const setCounter = () => {
    let number = counter;
    number++;
    setcounter(number);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={() => setCounter()} text="add1" />
      <button>Better</button>
    </div>
  );
};

export default Counter;
