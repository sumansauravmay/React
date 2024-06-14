import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [marr, setMarr]=useState(false);
  const [data, setData] = useState([]);


  console.log("Married", marr)

  const handlelogin = (e) => {
    e.preventDefault();

    let newData = {
      name,
      pass,
      marr,
      id: Date.now(),
    };
    setData([...data, newData]);
    setName("");
    setPass("");
    setMarr("");
  };


const handleDelete=(id)=>{
let deleteuser=data.filter((detail)=>{
  return detail.id!==id;
})
setData(deleteuser);
}




  return (
    <>
      <form>
        <h1>Login Form</h1>
        <input
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Password"
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
        />
        <br />
        <br />
        <div style={{display:"flex"}}>
        <input type="checkbox"
          value={marr}
          onClick={()=>setMarr(!marr)}
        />
        <p>Married</p>
        </div>
         <br />
        <br />
        
        <button onClick={handlelogin}>Login</button>
      </form>

      {data.map((user) => (
        <ul id={user.id}>
          <li style={{display:"flex", gap:"5px"}}>
            <p>Name: 
              <span> {user.name}</span>
              </p>
            <p>Password: 
              <span>{user.pass}</span>
              </p>

              <p>Married Status: 
              <span>{user.marr===true?"Married":"Not Married"}</span>
              </p>
            <button onClick={()=>handleDelete(user.id)}>Delete</button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default App;
