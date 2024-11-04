import React from "react";
import WithCounter from "./WithCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;

  return (
    <div>
      <button onMouseOver={incrementCount}>Click</button>
      <h3>Counter is: {count}</h3>
    </div>
  );
};

export default WithCounter(HoverCounter);
