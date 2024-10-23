import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logindata } from "../redux/fetch/action";
import { postdatalogin } from "../redux/post/action";

const Data = () => {
    const [name, setName]=useState("");
  const dispatch = useDispatch();
  const store = useSelector((store) => store.getreducer.data);
  console.log("store", store);

  useEffect(() => {
    dispatch(logindata());
  }, [dispatch]);

  const handleSubmit=()=>{
    let newName={
        id:Date.now(),
        name:name
    }
    console.log(newName);
    dispatch(postdatalogin(newName));
  }

  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handleSubmit}>Add</button>
        <br/>
      {store?.map((el) => (
        <div key={el.id}>{el.name}</div>
      ))}
    </div>
  );
};

export default Data;
