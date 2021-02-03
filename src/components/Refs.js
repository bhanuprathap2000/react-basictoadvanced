import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
    
        this.inputref=React.createRef();
        //created the property inputref which is react createRef

    }
    
    //after creating the ref we need to attach it to the element using the reserved keyword ref


    handler=()=>{
        alert(this.inputref.current.value);   //value is present inside the current.value
    }
    render() {

        return (
            <div>

            <input ref={this.inputref} type="text"/>
            <button onClick={this.handler} >Click</button>
                
            </div>
        )
    }

    //this method is called once the element is inserted into dom.
    componentDidMount()
    {
         
        console.log(this.inputref);
        //once the element is loaded into the dom tree we can call methods
        this.inputref.current.focus();
        console.log(this.inputref.current);

    }



}

export default Refs

//if we want to access the elements from the dom we need to use the ref
//our main aim is that we want to focus the input box when page loads.

/*
so the method is as follows

first create a property and intialize with react.createRef()

and attach it to the element of choice with reserved keyword ref={this.inputref}

now once the component is rendered we can call the componentDidMount() and there we can call the 
methods related to current object which points to the element of choice 

this.inputref.current.focus()


*/