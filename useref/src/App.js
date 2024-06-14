import { useRef } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const inputref = useRef();
  const [data, setData] = useState([]);
  // console.log(data);

  const handleClick = () => {
    inputref.current.focus();
    console.log(inputref.current.value);
    let newData = {
      input: inputref.current.value,
      id: Date.now(),
    };
    setData([...data, newData]);
  };

  return (
    <>
      <div className="App">
        <input type="text" ref={inputref} />
        <button onClick={handleClick}>Add Focus</button>
      </div>

      {data.map((item) => (
        <div key={item.id}>{item.input} - {item.id}</div>
      ))}
    </>
  );
}

export default App;
