import React,{useReducer} from 'react'
const initialState=0;
const reducer=(currstate,action)=>{
    switch(action){
        case "increment":
            return currstate+1;
        case "decrement":
            return currstate-1;
        case "reset":
            return initialState;
        default:
            return currstate;
    }
}


function CounterWithUseReducer() {
    const [state,dispatch]= useReducer(reducer,initialState)
    return (
        <div>
        <div>Count-{state}</div>
            <button onClick={()=>{dispatch("increment")}}  >Increment</button>
            <button onClick={()=>{dispatch("decrement")}} >Decrement</button>
            <button onClick={()=>{dispatch("reset")}}  >Reset</button>
        </div>
    )
}

export default CounterWithUseReducer


/*

Use State hook is created from useReducer hook

Use reducer accepts two parameters which are reducer function and initial state and return the current state
and a dispatch method to call the actions.

The reducer function itself accepts two parameters which are current state and action and return newstate.


summary

UseReducer hook is used for state management
usereducer is related to reducer function slike in array.reduce which accepts a reducer function

usereducer(reducer,initialstate)
reucer(currentsate,action)


So the state and action can be simple string

they can be also objects when needed.



 */