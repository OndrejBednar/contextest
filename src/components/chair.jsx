import React, {useContext} from "react";
import {SandwichContext} from "../providers/sandwichProvider"

export const Seat = ({table,seat}) => {
    const dataContext = useContext(SandwichContext);

    console.log(dataContext);

    return(
        <button onClick={e=>{}}></button>
    )
}