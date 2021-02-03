import React, { Component } from 'react'
import ReactDOM from "react-dom"

 
 function Portals() {
     return ReactDOM.createPortal((
        <div>
            <h1>Hello from another portal</h1>
        </div>
    ),document.getElementById("portal-root")) 
 }
 
 export default Portals
 

//this will be rendered into the root div but i don't want it to be rendered into root div and other elemnent
//if we wan't to render a specific html into another than the root we need to use ReactDom.cretaePortal()
//pass the jsx and the place where we want to place the jsx other than root.
