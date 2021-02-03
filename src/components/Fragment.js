import React from 'react'

function Fragment() {
    return (
        <React.Fragment>
            <h1>Hello this is a heading page.</h1>
            <p>The is a paragraph.</p>


        </React.Fragment>
    )
}

export default Fragment


//when we wrap everything inside the jsx in div tag even that div tag is rendered into dom 
//if we don't want that we need to use ReactFragment