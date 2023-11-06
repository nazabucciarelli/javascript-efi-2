import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginContextProvider = ({children})=>{
    const [logged, setLogged] = useState(false);
    
    return(
        <LoginContext.Provider value={{logged,setLogged}}>
        {children}
        </LoginContext.Provider>
    )
}

