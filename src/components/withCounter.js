import React, { Component } from "react";


const withCounter=(WrappedComp,Num)=>{
    
    
     class withCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
    
        clickHandler=()=>{
            this.setState(prev=>{
                return {count:prev.count+Num};
            })
        }

        render() {
            return (<WrappedComp count={this.state.count} clickHandler={this.clickHandler} {...this.props} />)

        }
    }
    return withCounter;
  
    
}


export default withCounter



/*

Higher order are those components which take a component as parameter add data and functionality to it
and return them.




Process.

1.Create the normal  component and then create another compoenent
2.In this another compoenent create a arrow function which will take a original compoenent as the parameter

and create a new class compoenent and write your handlers and state

and then initilize the original component inside the render method with data and handlers as props.

and then return the new comp and export the arrow function.

now import this into original component and wrap the original around this when exporting
and use the props using the deconstructing.


It is good to name the class and file name the same;

we have use the pascal while naming the functional and class components and the file name also.


There are two important aspects of the higher order functions which are

we we pass props in the original comp they get pass only passed to hoc so it's our job to use spread in the hoc to pass
the props to original.

We can also pass parameters to the hoc.

*/