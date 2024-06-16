import React,{useState} from 'react'

// Pass parameter into compoenent through props
// These parameters are destructured using object destructured
const Counter = ({initialValue,minValue}) => {

     // Create a variable/state number
    // The initial value of this variable/the state is 0 (getter)
    // When we want to update the variable/the state use setNumber method (setter)

    const [number, setNumber] = useState(initialValue)
    const [message,setMessage] = useState("")

    // Create a function using () =>
    // THis function is called incrementNumber
    //It will set the number to number+1 // number = number+1, number++
    const incrementNumber = () => {
        setNumber(number+1)
        setMessage("")
    }

    const decrementNumber = () =>{
        if (number == minValue) {
            setMessage(`Number cannot be less than ${minValue}`)
        } 
        else {
            setNumber(number-1)
        }
       
    }

    const reset = () => {
        setNumber(0)
        setMessage("")
    }

  return (
    <div>
        <h4>{number}</h4>
        <p style={{color:'red'}}>{message}</p>
        <button onClick={incrementNumber}>Increment number</button>
        <button onClick={decrementNumber}>Decrement number</button>
        <button onClick={reset}>Reset to Zero</button>
    </div>
  )
}

export default Counter