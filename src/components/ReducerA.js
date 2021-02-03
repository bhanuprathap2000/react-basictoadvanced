import React, { useReducer } from 'react'
import ReducerC from './ReducerC'
//creating a context

export const CountContext=React.createContext();
const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case "increment":return state+1;
        case "decrement":return state-1;
        case "reset":return initialState;
        default:throw new Error("Unhandeled event.");

    }
}


function ReducerA() {

    const [count,dispatch]=useReducer(reducer,initialState);

    return (
     <CountContext.Provider value={{dispatch:dispatch,count:count}}>
        <div>
        <ReducerC/>
        </div>
        </CountContext.Provider>
    )
}

export default ReducerA
