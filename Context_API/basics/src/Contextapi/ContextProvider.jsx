import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const DataContext=createContext();

const ContextProvider = ({children}) => {
    const [status,setStatus]=useState(false);

const handleStatus=()=>{
    // setStatus((item)=>!item);
    setStatus(!status);
}


  return (
    <DataContext.Provider value={{status, handleStatus}}>
      {children}
    </DataContext.Provider>
  )
}

export default ContextProvider
