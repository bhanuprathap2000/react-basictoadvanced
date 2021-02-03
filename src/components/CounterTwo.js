import React, { Component } from 'react'

class CounterTwo extends Component {
    render() {
        
        const {count,handler}=this.props;
        console.log(`helllllll ${count}`)
        return (
            
            <div>
                <button onClick={handler}>Click {count} Times.</button>
                
            </div>
        )
    }
}

export default CounterTwo

