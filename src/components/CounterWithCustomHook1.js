import React from 'react'
import useCounter from "../hooks/useCounter";
function CounterWithCustomHook1() {

    const [count,increment,decrement,reset]=useCounter(0);

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

export default CounterWithCustomHook1


//There was problem that i have used double braces where we need to use single brace.