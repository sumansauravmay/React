import { useRef } from 'react';
import './App.css';

function App() {
  const inputref = useRef();

const handleClick=()=>{
  inputref.current.focus();
  console.log(inputref.current)
}


  return (
    <div className="App">
     <input type='text' ref={inputref}/>
     <button onClick={handleClick}>Add Focus</button>
    </div>
  );
}

export default App;
