import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)
    const incremental = () => {
        setCounter(counter +1 )
    }
    const decrement = () => {
        if(counter === 0) return;
        setCounter(counter - 1 )
    }
    const reset = () => {
        setCounter(initialValue )
    }
    return {
        counter, 
        incremental,
        decrement,
        reset
    }
}