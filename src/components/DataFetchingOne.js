import React,{useState,useEffect} from 'react'
import axios from "axios";

function DataFetchingOne()
 {
     const [loading,setLoading]=useState(true);
     const [error,setError]=useState("");
     const [post,setPost]=useState({});

     useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/posts/1")
         .then((res)=>{
             setLoading(false);
             setError("");
             console.log(res);
             console.log(res.data);
             setPost(res.data);
         })
         .catch((err)=>{
             setLoading(false);
             setError("Something went in fetching the data");
             setPost({});
         })
     },[])

    return (
        <div>
           {loading?"Loading":post.title};
           {error?error:null};
        </div>
    )
}

export default DataFetchingOne
//we would use the null for the indicating something is empty.
//by using the useState hook we have used 3 state variables differently.
//for this type of error
//Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.
// use exact post or data not the object to render