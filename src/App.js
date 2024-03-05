// import { useEffect, useState } from 'react';
import React from "react";
import Data from "./Data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Elements from "./Elements";
import Register from "./Register";


function App() {
  return(
    <div>
      <>
      
      <BrowserRouter>
      <Routes>
        <Route path="Data" element={<Data/>}/>
        <Route path="/" element={<Elements/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route  path="/Register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
      </>
     
    </div>
  );


}

export default App;
