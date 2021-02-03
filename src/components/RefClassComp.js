import React, { Component } from 'react'
import ChildRef from './ChildRef'

class RefClassComp extends Component {
    
    constructor(props) {
        super(props)
    
        this.compoentRef=React.createRef(); //created the reference
    }
    handler=()=>{

        this.compoentRef.current.focusInput()
    }
    
    render() 
    {
        return (
            <div>
                <ChildRef ref={this.compoentRef}/> 
                <button onClick={this.handler} >Click Me</button>
            </div>
        )
    }
}

export default RefClassComp

// our ultimate goal is that on click of button from the child component we want to focus the input.
// we are attaching the reference to the child comoponent.
//now this.compoenentRef will be refrencing the ChildRef and we can access the properties and methods.

// so the refrence created will be referencing the child compoenent and under the current object we can accsess the properties
// and methods of the child compoenent
