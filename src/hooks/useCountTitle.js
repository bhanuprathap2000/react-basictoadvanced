import {useEffect} from "react";

function useCountTitle(count) {
    useEffect(()=>{
        document.title=`count ${count}`;
    },[count])
}

export default useCountTitle


//we no longer need the react we are not using the jsx.