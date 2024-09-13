
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { useCallback } from 'react';

function App() {
  const [count, setCount]=useState(0);

const handleInc=useCallback(()=>{
  setCount((prevcount)=>prevcount+1);
},[])


useEffect(()=>{
  console.log("call inside useefeect")
},[handleInc])

  return (
    <div className="App">
      <h1>Count: {count}</h1>
     <button onClick={handleInc}>click me</button>
    </div>
  );
}

export default App;
