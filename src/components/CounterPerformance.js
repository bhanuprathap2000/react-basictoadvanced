import React,{useState,useMemo} from 'react'



function CounterPerformance() {

    const [counterOne,setCounterOne]=useState(0);
    const [counterTwo,setCounterTwo]=useState(0);
    const incrementOne = () => {
		setCounterOne(counterOne + 1);
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1);
  }
  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])
    return (
        <div>
        
            <button onClick={()=>{incrementOne()}} >Counter1-{counterOne}
            
            </button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={()=>{incrementTwo()}}>Counter2-{counterTwo}</button>


        </div>
    )
}

export default CounterPerformance


/*
In order to improve the performance issuess we can use the react memo usecallback and usememo


So the react.memo is like purecomponent so when there is a change in the props or state only the 

the component renders.


Using the usecallback hook we can cache a function and create only new if props or state changes.

Using the the usememo we can invoke the function and cache the return value or the result.

So 




 */