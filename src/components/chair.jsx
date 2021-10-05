import React, {useContext} from "react";
import {SandwichContext} from "../providers/sandwichProvider"

export const Seat = ({table,seat}) => {
    const dataContext = useContext(SandwichContext);

    console.log(dataContext);

    return(
        <button onClick={e=>{
            const data = {...dataContext.contextData};
            data.Sandwich[0][0] += 1;
            dataContext.setcontextData(data);
        }}>{dataContext.contextData.Sandwich[0][0]}</button>
    )
}