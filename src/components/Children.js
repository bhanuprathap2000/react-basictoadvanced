import React, { Component } from 'react'

 class Children extends Component {
   
    render() {
        return (
            <div>

            <button onClick={()=>{this.props.hi("child")}}  >Click</button>
                
            </div>
        )
    }
}

export default Children
