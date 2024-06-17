import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "../componets2/Home";
import Login from "../componets2/Login";


const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={"Welcome to Home Page"}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  )
}

export default AllRoute
