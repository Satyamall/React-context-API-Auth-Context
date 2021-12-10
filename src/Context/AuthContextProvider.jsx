import {createContext, useState } from "react";

export const AuthContext= createContext();

function AuthContextProvider({children}){

    const [isAuth,setIsAuth]=useState(false);

    const toggleAuth=()=>{
        setIsAuth(isAuth===false? true:false);
    }

    return (
        <AuthContext.Provider value={[{isAuth},toggleAuth]}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;