import React, { Component } from 'react'

 class MountingChild extends Component {

    constructor(props) {
        super(props)
         
        console.log("This is a lifecycle method constructer of child.");
        this.state = {
             name:"bhanu"
        }
    
    }

    static getDerivedStateFromProps(){
        console.log("lifecycle method 2 of child");
        return null;
  
    }

    render() {
        console.log("This is a render method of child.")
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount(){
        console.log("component loaded sucessfully of child.");
    }
}

export default MountingChild
