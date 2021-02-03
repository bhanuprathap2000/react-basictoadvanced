import React, { Component } from 'react'


 class ChildRef extends Component {

    constructor(props) {
        super(props)
    
       this.inputRef=React.createRef() //after creating the refrence we need to attach it to the element.
    }
    //we won't call this input from child while we call it from parent component.
    
    focusInput(){
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef} type="text"/>
            </div>
        )
    }
}

export default ChildRef
