import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props) //super is called for execution of parent constructer.
     
         this.state = {
             count:0


              
         }
         this.Update=this.Update.bind(this);//In this this won't be undefined hence no problem.
     }
     
     Update (){
         //this is a asynchronous task.
         this.setState((prevState,props)=>{

            //  return {count:prevState.count+1}; //see we are using same object type of notation.
             return {count:prevState.count+1};
         });
     }
    //  updateFive(){
    //     this.Update()
    //     this.Update()
    //     this.Update()
    //     this.Update()

    //  }
     
    render() {
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.Update} >Click</button>
                
            </div>
        )
    }
}

export default Counter

