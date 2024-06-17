import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();


const handlenavigate=()=>{
  navigate("/");
}


  return (
    <div>
     <h1>Login</h1>
   
     <button onClick={handlenavigate}>Go back to Welcome Page</button>
 
    </div>
  )
}

export default Login
