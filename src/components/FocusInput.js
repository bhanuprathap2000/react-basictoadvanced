import React,{useEffect,useRef} from 'react'

function FocusInput() {
    const inputRef=useRef(null);
    
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            

            <input ref={inputRef} type="text"/>
        </div>
    )
}

export default FocusInput


/*
Simple steps to use useRef

import it

create a initial ref with null and attach the ref to the html element.


we use the useRef in order to refrence to the dom elements and use that \
whereever required.

we need to attach the ref attribute to the respective dom element.
*/