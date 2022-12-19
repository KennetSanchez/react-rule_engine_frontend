import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";

function App() {
  return (
    <div className="h-full overflow-x-hidden">
        <Routes>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/"} element={<Navigate to={"/login"}/>} />
        </Routes>
    </div>
  );
}

export default App;
