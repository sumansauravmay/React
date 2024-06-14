import { useRef } from "react";
import { useState } from "react";
import suman from './Useref.module.css';

const Useref = () => {
    const inputref = useRef();
  const [data, setData] = useState([]);
  // console.log(data);

  const handleClick = () => {
    inputref.current.focus();
    console.log(inputref.current);
    let newData = {
      input: inputref.current.value,
      id: Date.now(),
    };
    setData([...data, newData]);
    inputref.current.value="";
  };
  return (
    <>
    <div className="App">
      <input type="text" ref={inputref} className={suman.input}/>
      <button onClick={handleClick}>Add Focus</button>
    </div>

    {data.map((item) => (
      <div key={item.id}>{item.input} - {item.id}</div>
    ))}
  </>
  )
}

export default Useref
