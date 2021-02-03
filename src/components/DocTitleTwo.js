import React,{useState,useEffect} from 'react'
import useCountTitle from "../hooks/useCountTitle";


function DocTitleTwo() {

    const [count,setCount]=useState(0);

    useCountTitle(count);

    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>{`count ${count}`}</button>
        </div>
    )
}

export default DocTitleTwo;
