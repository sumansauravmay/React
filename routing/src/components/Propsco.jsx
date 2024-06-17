import React from "react";
import Navbar from "./Navbar";

const Propscom = (props) => {
  const { name, btnval } = props;
  return (
    <div>
      <h1>{name}</h1>
      <button>{btnval}</button>
    </div>
  );
};

export default Propscom;
