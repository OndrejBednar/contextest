import React, {createContext, useState} from "react";


export const SandwichContext = createContext();

export const SandwichProvider = ({children, value, ...data}) => { 
    const [contextData, setcontextData] = useState(value);


    //value parametr provideru je jiná hodnota než value parametr funkce
    return(
        <SandwichContext.Provider value ={{contextData, setcontextData}}> 
            {children}
        </SandwichContext.Provider>
    )
}