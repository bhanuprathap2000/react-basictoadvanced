import React,{useContext} from 'react'
import {userContext} from "./UseContext"

//The hooks should be called at the top level.

function ComponentsC() {
    const name=useContext(userContext);   //passing the context to the useContext hook and it returns the value passed in parent component.

    return (
        <div>
            from c component {name}
        </div>
    )
}

export default ComponentsC
