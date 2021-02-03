import React from 'react'
import "../stylesheet.css"
function StyleSheet() {
    const mystyle={fontSize:"80px",color:"red"};
    console.log("Hiiiiii")
    console.log(this);

    return (
        <div>
            <h1 style={mystyle}>This is a heading.</h1>
        </div>
    )
}

export default StyleSheet


//using the external file to apply styles to the html element.

//we have to create the css file in the src folder and import into components where we want to use them
//import them and just us the class as simple as html instead of class use className

//if we want to apply inline styling to the html 

//first we need to create the a object of attributes in camelcase with values

// const mystyle={fontSize:80px,color:red}