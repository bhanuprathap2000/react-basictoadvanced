import React from 'react'
import ComponentA from './ComponentA'
export const userContext=React.createContext(); //creating the context
function UseContext() {
    return (
        <div>
        <userContext.Provider value="bhanu prathap">
            <ComponentA/>

            </userContext.Provider>
        </div>
    )
}

export default UseContext



/*
We know that we can pass the props from the parent component to deeply nested component without actually passing them 
through the other components

But still there is a problem which we will use userprovider to wrap the comp
and at the child component we will use userconsumer in which we call the arrow function which gets 
param from the userprovider comp

This can go deep nested 

In order to solve this we can use the useContext Hook
*/
