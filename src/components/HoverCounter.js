import React, { Component } from 'react'

 class HoverCounter extends Component {
     
    
     
    render() {
        return (
            <div>
                 <h1 onMouseOver={this.clickHandler}>Mouseover {this.state.count} times.</h1>
            </div>
        )
    }
}

export default HoverCounter
