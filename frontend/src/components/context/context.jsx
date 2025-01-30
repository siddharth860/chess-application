import { createContext,useContext } from "react";

const contextApp=createContext()
export function useContextApp(){
    return useContext(contextApp)
}

export default contextApp