import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";
import Login from "./Components/Login";
 import Signup from "./Components/SignUp";
 import Home1 from "./Components/Home1";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Home1" element={<Home1/>}/>

    <Route path="/Login" element={<Login/>}/>
    <Route path="/SignUp" element={<Signup/>}/>
    </Routes>
    </>
  );
 
}

export default App;