import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:"bhanu"
        }
    }

    

    

    render() 
    {
        console.log("This is a pure component.");
        return (
            <div>
                
                Pure Component.
            </div>
        )
    }
//compoent did mount is called once the component is rendered into dom tree.
componentDidMount(){
    
    
        setInterval(this.setState({name:this.props.name}),2000);
    
    
}

    
}

export default PureComp


//difference between the pure component and component is that 
//pure component implement the shouldComponentUpdate and the component renders only if it returns true
//in this method a shallow comparsion happens i.e value are compared === (props)
//if array and object if both previous and present point to same reference no update returns false (state objects)
//so if we want to update then return the new object rather then same refrence like we push in the array 
//if your parent component is pure ensure that child are also pure so no ambigutiy.
//in pure compoenent update happens only if there is difference in the shallow comparsion of prev and present
//props and state.
//performance bosts happen.
