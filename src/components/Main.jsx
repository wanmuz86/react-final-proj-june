import React from 'react'
import Counter from './Counter'
import UserInfo from './UserInfo'

const Main = () => {

    const mainUser = {
        "id":1,
        "name":"John Doe",
        "age":25
    }

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
        <Counter initialValue={0} minValue={0}/>
        <Counter initialValue={5} minValue={3}/>
        <Counter initialValue={10} minValue={-5}/>
        <hr />
        <h2>User Info</h2>
        <UserInfo user={mainUser}/>

        
    </div>
    
  )
}

export default Main