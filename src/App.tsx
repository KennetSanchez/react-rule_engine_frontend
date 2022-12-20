import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";
import {Home} from "./pages/Home";

function App() {
  return (
    <div className="h-full overflow-x-hidden">
        <Routes>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/"} element={<Navigate to={"/login"}/>} />
        </Routes>
    </div>
  );
}

export default App;
