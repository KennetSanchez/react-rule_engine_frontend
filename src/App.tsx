import React, {useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";
import {Home} from "./pages/Home";

export const UserToken = React.createContext({
    token: "",
    setToken: (newToken: string) => {
    }
});

function App() {

    const updateToken = (newToken: string) => {
        state.token = newToken
    }

    const [state, setState] = useState(() => ({
        token: "",
        setToken: (newToken: string) => {
            updateToken(newToken)
        }
    }))

    const handleLogout = (e : React.MouseEvent<HTMLAnchorElement>) => {
        state.setToken("");
    }

    return (
        <UserToken.Provider value={state}>
            <div className="h-full overflow-x-hidden">
                <Routes>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<SignUp/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/"} element={<Navigate to={"/login"}/>}/>
                </Routes>
            </div>
        </UserToken.Provider>
    );
}

export default App;
