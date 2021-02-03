import React, { Component } from 'react'
import Children from "./Children"
 class Parent extends Component {
   
   
   constructor(props) {
       super(props)
   
       this.state = {
            who:"Parent"
       }
       

   }

   hi=(child)=>{
       alert(`This is hi from ${this.state.who} and reply from ${child}. `)
   }
    b2click()
    {

     console.log(this);
   }

   c2click=()=>{
       console.log(this);
   }
   
   //passing the method as the props.
    render() {
        return (
            <div>
        

          <Children hi={this.hi} />
           
           <button onClick={this.b2click}>Click on me </button>
           
           <button onClick={this.c2click} >click me please.</button>
                
        

            </div>
        )
    }
}

export default Parent

//passing the parent's method as the prop and using it inside the child component as this.props.method or props.method
