import React from "react";

const Marks = ({ marks }) => {
    console.log("marks", marks)
  return <h1>My marks is {marks}</h1>;
};

export default React.memo(Marks);
