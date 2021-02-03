import React, { Component } from 'react'
import Hero from './Hero';

export class ErrorHandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasErr:false
        }
    }
    
    static getDerivedStateFromError(err){
        return {
            hasErr:true
        }
    }

    
    render()
     {
        if(this.state.hasErr===true){
            return ( <div>There was a problem while serving you.</div> )
        }
        return (
            <div>
                <div>No error</div>

            </div>
        )
    }
}

export default ErrorHandling
