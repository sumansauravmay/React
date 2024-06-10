import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick=()=>{
    setCount(count-1);
    setCount(count-1);
  }

  const handleIncClick=(val)=>{
    setCount((prev)=>prev+val);
    setCount((prev)=>prev+val);
    setCount((prev)=>prev+val);
    setCount((prev)=>prev+val);
    setCount((prev)=>prev+val);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button disabled={count===0} onClick={handleClick}>Dec</button>
      <button disabled={count>=50} onClick={()=>handleIncClick(1)}>Inc</button>
    </>
  );
}

export default App;
