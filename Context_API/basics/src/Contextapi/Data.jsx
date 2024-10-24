import React from "react";
import { useContext } from "react";
import { DataContext } from "./ContextProvider";

const Data = () => {
  const { status, handleStatus } = useContext(DataContext);

  return (
    <div>
      <h1
        style={
          status === true
            ? { background: "lightgreen" }
            : { background: "lightcoral" }
        }
      >
        {status === true ? "Completed!" : "Not Completed!"}
      </h1>
      <button onClick={handleStatus}>Change Status</button>
    </div>
  );
};

export default Data;
