import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = React.forwardRef((props, ref) => {
  return (
    <div>
      {/* <h2>Component B</h2> */}
      <ComponentC ref={ref} />
    </div>
  );
});

export default ComponentB;
