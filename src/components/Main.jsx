import React,{useState} from 'react'

const Main = () => {

    // Create a variable/state number
    // The initial value of this variable/the state is 0 (getter)
    // When we want to update the variable/the state use setNumber method (setter)

    const [number, setNumber] = useState(0)

  return (
    <div style={{padding:'1.5rem', backgroundColor:'yellow'}}>
        <h1>Hello World</h1>
        <p>Welcome to my first React.js project</p>   
        <hr/>
        <h2 style={{fontSize:'1.5rem'}}>Who are you?</h2>
        <div>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" placeholder='Enter your name'/>
            <button onClick={()=> alert("Data sent!")}>Send</button>
        </div>

        <hr/>
        <h2>Counter</h2>
        <h4>{number}</h4>
    </div>
    
  )
}

export default Main