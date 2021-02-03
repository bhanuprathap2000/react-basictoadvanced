import React, { Component } from 'react'

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary


// I understood the totally about the ErrorBoundary
//first we need to set the state inside the error handling as false 
//call the method getDerivedStateFromError() and return true for error
//then check if there any error in render method and then based on that show the fallback ui 
//simle thing is to wrap this component around the other compoenents we want to handle the error
//this will handle the error coming from rendering and the constructer but not the error from handlers for 
//that use the try and catch.
