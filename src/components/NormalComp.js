import React, { Component } from 'react'

class NormalComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"bhanu"
             
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount()
    {
        
        
        setInterval(()=>{
            console.log("normal compoent")
            this.setState({name:this.props.name})
        }  ,2000);
    
    
}
}

export default NormalComp

//about the function 
/*

normal function 

function name(){}

anoynomous function

function (){} 
now this is the function it is useful to call these fucntions when we want to pass this as the value

fat arrow

()=>{} this is also useful when passing the function as the value.



*/