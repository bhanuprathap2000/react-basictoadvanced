import React, { Component } from 'react'
import withCounter from "./withCounter"

 class ClickCounter extends Component {

    

    render() {
        const {count,clickHandler}=this.props;

        return (
            <div>
                <button onClick={clickHandler}>Clicked {count} times.</button>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default withCounter(ClickCounter,10);
