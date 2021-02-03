import React,{useEffect,useReducer} from 'react'
import axios from "axios";

const initialState={
    loading:true,
    error:"",
    post:{}
}


const reducer=(state,action)=>{
    switch(action.type){
        case "FETCH_SUCESSFUL": return {loading:false,error:"",post:action.payload};
        case "FAILED":return {loading:false,error:"Not able to fetch",post:{}};

    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>{
            dispatch({type:"FETCH_SUCESSFUL",payload:res.data});
        })
        .catch((err)=>{
            dispatch({type:"FAILED"});
            
        })
    },[])
    
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
			{state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo;



/*


Both the usestae and usereducer are used for the statemangement 

These are the used cases.

      useState                                                                   useReducer

type: number,boolean,string                                                        array object

transistions: 1 or 2                                                               more

related transistions: no                                                           yes

bussiness logic: no bussiness logic                                               bussiness logic

local vs global: local                                                           global




In order to improve the performance we can use the useCallback hook

When a component renders?

The component renders if props or state of the component changes.

But when we pass a handler as prop that handler is created everytime and hence prop changes and re renders
happens

So in order to stop this behaviour

we can use the useCallback(function(),dependencyarray);


*/