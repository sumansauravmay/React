import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./Home"));
const Contact = React.lazy(() => import("./Contact"));


const Allroutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
     </Suspense>
  );
};

export default Allroutes;
