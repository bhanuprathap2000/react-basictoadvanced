import React, { Component } from 'react'

class ConditionalGretting extends Component {
constructor(props) {
    super(props)

    this.state = {
         isLoggedIn:false
    }
}



    render()

    //We can't the use the condtional statements inside the jsx as it is just the syntatic sugar.
    //we can use the javascript variables and ternerary operator inside it.
    //There are four types of conditional rendering 
    //1.if else,element variable,terenary conditional operator,short circuit operator.
    //if else is good but not the developer friendly 
    //element vraible is just the extension of the if else
    //terenray operator is the most prefarable operator.
    //short circuit is the shortest one display or not that's it.

     {
    //      if (this.state.isLoggedIn){
    //         return (
    //             <div>
    // Welcome bhanu
                    
    //             </div>
    //         )


    //      }
    //      else{
    //          return(
    //              <div>
    //                  Welcome Guest
    //              </div>
    //          )
    //      }

    // if (this.state.isLoggedIn)
    // {
    //     let message=<div>Hello Bhanu</div>
    //             return message
    
    
    //          }
    //          else{
    //             let message=<div>Hello Guest</div>
    //             return message
                  
    //          }

    // return this.state.isLoggedIn?<div>Hello Bhanu</div>:<div>Hello Guest</div>

    return this.state.isLoggedIn && <div>Hello Bhanu</div> 

    

       
    }
}

export default ConditionalGretting
