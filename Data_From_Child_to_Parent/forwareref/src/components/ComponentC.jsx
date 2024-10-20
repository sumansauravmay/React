import React, { useState, useImperativeHandle, forwardRef, useEffect } from "react";

// Use forwardRef to pass a ref from B or A
const ComponentC = forwardRef((props, ref) => {
  // Define state with some data
  const [data, setData] = useState([]);

const getDatafromapi=()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((res)=>{
        // console.log(res);
        setData(res)
    })
    .catch((err)=>console.log(err))
}
useEffect(()=>{
    getDatafromapi()
},[])

  // Use useImperativeHandle to expose a method to get data
  useImperativeHandle(ref, () => ({
    getData() {
      return data;
    },
  }));

  return (
    <div>
     {
        data.map((item)=>(
            <div key={item.id}>{item.title}</div>
        ))
     }
    </div>
  );
});

export default ComponentC;
