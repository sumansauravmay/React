import React from "react";

const Name = ({ name }) => {
  console.log("name", name);
  return <h1>My name is {name}</h1>;
};

export default React.memo(Name);
