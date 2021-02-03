import React from 'react'
import useCounter from "../hooks/useCounter";

function CounterWithCustomHook2() {
    const [count,increment,decrement,reset]=useCounter(10);

    return (
        <div>
        <div>
            count-{count}
        </div>
            <button onClick={()=>{increment()}}>increment</button>
            <button onClick={()=>{decrement()}}>decrement</button>
            <button onClick={()=>{reset()}}>reset</button>
        </div>
    )
}

export default CounterWithCustomHook2
