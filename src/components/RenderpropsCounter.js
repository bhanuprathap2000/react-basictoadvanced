import React, { Component } from 'react'

 class RenderpropsCounter extends Component
  {
   
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
    
        clickHandler=()=>{
            this.setState(prev=>{
                return {count:prev.count+1};
            })
        }

    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.clickHandler)}
            </div>
        )
    }
}

export default RenderpropsCounter


/*


Using the render props we can share the functionality between the components

So the method is like this 

We will define a parent component in which all the shared functionalities are to be written.

So in this component we won't render anything but what we do is we call a function render which is passed as the props
to this parent component while instatating

So this method is very crucial which is function passed as the prop which is an arrow function.


This arrow function which is under the name render accepts the parameters from the parent compoennt and pass them 
as props to the child component which we will return from the arrow function after instatating.


state variables are present in this.state.var

handlers will be available as this.handler


So in the child component we will get the count and handler as the prop and we will destructure it.



*/