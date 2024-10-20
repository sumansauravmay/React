import React, { useRef } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const componentCRef = useRef();

  // Function to fetch data from Component C
  const fetchDataFromC = () => {
    const dataFromC = componentCRef.current.getData();
    console.log("Data from C:", dataFromC);
  };

  return (
    <div>
      <h1>Component A</h1>
      <button onClick={fetchDataFromC}>Get Data from C</button>
      <ComponentB ref={componentCRef} />
      {/* <ComponentC ref={componentCRef} /> */}
    </div>
  );
};

export default ComponentA;
