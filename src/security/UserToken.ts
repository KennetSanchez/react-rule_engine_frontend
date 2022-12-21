import React from "react";

export const UserToken = React.createContext({
    token: "",
    setToken:(newToken:string)=>{}
});