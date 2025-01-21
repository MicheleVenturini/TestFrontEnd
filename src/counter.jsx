import { useState } from "react"

export const Counter = (count,setCounter) => {
    

    return (
        <div>
        <p>{count}</p>                 
        <button onClick={setCounter}>
        </button>
        </div>
    );
}