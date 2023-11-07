import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginContextProvider = ({children})=>{
    const [logged, setLogged] = useState(false);
    const [currentUser, setCurrentUser] = useState("");
    
    return(
        <LoginContext.Provider value={{logged,setLogged,currentUser,setCurrentUser}}>
        {children}
        </LoginContext.Provider>
    )
}

