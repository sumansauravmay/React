import React, { useState } from "react";
import { useEffect } from "react";

function ComponentB({ sendDataToParent }) {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(`https://fakestoreapi.com/products`)
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

  useEffect(() => {
    if (data.length > 0) {
      sendDataToParent(data);
    }
  }, [data, sendDataToParent]);

  return (
    <div>
      <h1>Child Component (C)</h1>
    </div>
  );
}

export default ComponentB;
