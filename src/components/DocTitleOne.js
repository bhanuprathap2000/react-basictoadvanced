import React,{useState,useEffect} from 'react'

import useCountTitle from "../hooks/useCountTitle";
function DocTitleOne() {

    const [count,setCount]=useState(0);
    
    useCountTitle(count);
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>{`count ${count}`}</button>
        </div>
    )
}

export default DocTitleOne


//we can create our own hooks the method is take a logic of all the components which you need every time
//create a folder called hooks and maintain all the hooks inside it.
//name the component as use*
//*means anything. 
