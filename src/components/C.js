import React, { Component } from 'react'
import {UserConsumer} from "./userContext"

 class C extends Component {

    render() {
        return (
            <div>

              <UserConsumer>
				{username => {
                    console.log(username);
					return <div>Hello {username}</div>
				}}
			</UserConsumer>

            </div>
        )
    }
}

export default C

