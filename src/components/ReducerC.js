import React,{useContext} from 'react'
import {CountContext} from "../components/ReducerA"

function ReducerC() {
    const globalcount=useContext(CountContext);
    return (
        <div>
        <div>
            count-{globalcount.count}
        </div>
            <button onClick={()=>{globalcount.dispatch("increment")}}>
                Increment
            </button>
            <button onClick={()=>{globalcount.dispatch("decrement")}}>
                Decrement
            </button>
            <button onClick={()=>{globalcount.dispatch("reset")}}>
                Reset
            </button>
        </div>
    )
}

export default ReducerC
