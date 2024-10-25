import React, { Profiler, useEffect, useState } from "react";

const AllData = () => {
  const [data, setData] = useState([]);

  let getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  // Profiler callback function to log performance information
  const onRenderCallback = (
    id, // the "id" prop of the Profiler tree
    phase, // either "mount" or "update"
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
  ) => {
    console.log("Profiler ID:", id);
    console.log("Phase:", phase);
    console.log("Actual Duration:", actualDuration);
    console.log("Base Duration:", baseDuration);
    console.log("Start Time:", startTime);
    console.log("Commit Time:", commitTime);
  };

  return (
    <Profiler id="allDataProfiler" onRender={onRenderCallback}>
      {data.map((el) => (
        <div key={el.id}>
          <img height="100px" src={el.image} alt="image" />
          <p>{el.title}</p>
        </div>
      ))}
    </Profiler>
  );
};

export default AllData;
