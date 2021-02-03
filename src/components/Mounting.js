import React, { Component } from 'react'
import MountingChild from './MountingChild';

 class Mounting extends Component {

    //Special function that will be called when the component is created.
    //ideal method for initliazing the state and binding the event handlers
    //not to be used for the ajax requests.
constructor(props) {
    super(props)
     
    console.log("This is a lifecycle method constructer.");
    this.state = {
         name:"bhanu"
    }

}
 //static methods are avialable only through the class
 //this is one of the rarely used methods.
//in this rare method we need to return object right now null.

//this method is called when the state of the component depends on the props over the time.
//no ajax
  handleClick=()=>{
      this.setState({
          name:"bhanu prathap"
      })
  }
  static getDerivedStateFromProps(props,state)
  {
      console.log("lifecycle method 2");
      return null;

  }



//this is a required method
//this method is called when required any changes in the dom
//ideal for read props and state and return jsx
//should not  change the state.



    render()
     {
         console.log("This is a render method.")
        return (
            <div>
                <MountingChild/>
                <button onClick={this.handleClick} >Click</button>
            </div>
        )
    }
    //invoked once the component and all it's children components have rendered into dom.
    //this will invoked only once per rerendering.
    //very ideal for making any ajax requests.

    componentDidMount(){
        console.log("component loaded sucessfully.");
    }
    //it is called once the updated happens into the dom.
        //this will invoked only once per rerendering.

    componentDidUpdate(){
        console.log("After the update.");
    }
}
   
 
   

export default Mounting
