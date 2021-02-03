
const Greet=(props)=> {return <h1>Hello {props.name}.</h1>}

//In jsx we can specify the javascript inside the curly braces.
export const Bye=(props)=> {return <h1>Bye {props.name}.</h1>}

//exporting so that other components can use this component.

export default Greet;



