import React,{Component} from "react"


//  For the Welcome to become the react compoennt we to extend with component class and include render method.
//if jsx spans over multiple lines we have to wrap everything inside ().
class Welcome extends Component{
    constructor(){
        super()
        //state is a object which is private to the that particular component.
        this.state={
            msg:"Please Subscribe."
        }
    }
    update(){ //set state accepts the object which is the updated state.
        this.setState({
         msg:"Thank for Subscribing."

        })
    }

    render(props)
    {
        return (

        <div>
        {this.state.msg}
        <button onClick={()=>{this.update()}} >Click</button>

        </div>
        )
        
        
    }

}

export default Welcome;

