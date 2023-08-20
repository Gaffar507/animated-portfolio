import { useContext, createContext, useReducer } from "react";

export const themeContext = createContext();

const initalContext={
    darkMode: false
}
const themeReducer=(state, action)=>{
    if (action.type==='toggle') {
        return { darkMode: !state.darkMode}
    } 
    return state;
}
export const ThemeProvider=(props)=>{
    const [state, dispatch] = useReducer(themeReducer, initalContext);

    return <themeContext.Provider value={{ state, dispatch}}>
        {props.children}
    </themeContext.Provider>
}
export const useGlobalContext=()=> useContext(themeContext);