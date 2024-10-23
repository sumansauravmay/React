// CounterDisplay.js
import React, { useContext } from "react";
import { CounterContext } from "./CounterProvider";


const CounterDisplay = () => {
  const { counter } = useContext(CounterContext);
  return <h1>Counter: {counter}</h1>;
};

export default CounterDisplay;
