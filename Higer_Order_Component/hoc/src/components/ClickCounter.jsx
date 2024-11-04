import React from "react";

import WithCounter from "./WithCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button onClick={incrementCount}>Click</button>
      <h3>Counter is: {count}</h3>
    </div>
  );
};

export default WithCounter(ClickCounter, 10);
