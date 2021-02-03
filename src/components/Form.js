import React, { Component } from 'react'

class Form extends Component 
{

    constructor(props) {
        super(props)
    
        this.state = {
            name:"hh",
            tname:""
           
        }
         
        }


        
//using the class property as the method for handling the events.
        nameHandler=(event)=>{
       
            this.setState({
                name:event.target.value
            })

        
        }
        
        thandler=(event)=>{
            this.setState({
                tname:event.target.value
            })
        }

             formhandle=event=>
             {

                alert(`${this.state.name}`)
                event.preventDefault()
             }

    
    

    render() 
    {
        return (
            <div>

            <form action="" onSubmit= {this.formhandle}>

                <label htmlFor="">Username</label>
                <input type="text" name="itxt" id="" value={this.state.name} onChange={this.nameHandler} />
                <div>
                <textarea name="" id="" cols="30" rows="10" value={this.state.tname} onChange={this.thandler}  ></textarea>

                </div>
                <button type="submit"> Click Me </button>
                
            </form>
                
            </div>
        )
    
}
}

export default Form
//here we will create a controlled component.
//onChange atrribute will be for text ones 
//onsubmit will be vailable for form.
//when we click a button or change any text which event caused it we can pass it as argument to the handler.