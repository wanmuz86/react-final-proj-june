import React, { useState } from 'react'
import Counter from './Counter'
import UserInfo from './UserInfo'

const Main = () => {

    const mainUser = {
        "id":1,
        "name":"John Doe",
        "age":25
    }

    const [users,setUsers] = useState([
        {
            "id":1,
            "name":"John Doe",
            "age":25
        },
        {
            "id":2,
            "name":"Alice Lee",
            "age":16
        },
        {
            "id":3,
            "name":"Mark Jacob",
            "age":33
        }
    ])

    // 1 ) Create State to manage the input of the form

    const [userForm, setUserForm] = useState({"name":"", "age":0})

    // 2) Create methods to handle change on the inputs

    // const handleUserNameChanged = (e) => {
    
    //     // Update the value name in the state userForm to the updated name
    //     // ... (spread operator)
    //     // e.target.value refer to the value entered by user
    //     setUserForm({...userForm, name:e.target.value})

    // }

    // const handleAgeChanged = (e) => {
    //     setUserForm({...userForm, age:e.target.value })

    // }

    const handleChanged = (e) => {

        // Retrieved the attribute name and attribute value (whatever that user entered) from the form
        const {name, value} = e.target
        //  Update the userForm  , where the key of the object will be attribute name (name/age)
        // and the value is the value entered by user
        // setUserForm (update the userForm)
        setUserForm({...userForm, [name]:value})
    }


    const handleUserPressed = () => {
        console.log(userForm)
        // Retrieving the last id in the users array
        let currentId = users[users.length-1].id;

        // Using spread operator  {...userForm, }
        // I will add id to the userForm
        // The value of id is currentId + 1
        // Then I will add the modified userForm at the end of users array [...users, ] / push
        // use setUsers to update the users state
        setUsers([...users, {...userForm, id:currentId+1}])

        // reset the form

        setUserForm({"name":"", "age":0})

    }

    const deleteUserPassed = (id) => {
        console.log(id);

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

        <hr/>

        <h2>Add User Form</h2>

        <label htmlFor='userName'>User Name</label>

        {/* 3) Link  the value and onChange to the created state and methods*/}

        <input type="text" id='userName' placeholder='Enter user name' name='name'
        onChange={handleChanged}
        value={userForm.name} />

        <label htmlFor='userAge'>User Age</label>
        <input type="text" id='userAge' placeholder='Enter user age' name='age'
        onChange={handleChanged}
        value={userForm.age} />

          {/* 4) Call the method handleUserPressed*/}
        
        <button onClick={handleUserPressed}>Add User</button>

        <hr />
        <h2>Users information</h2>
        {
            // Inside the props, deleteUserPassed refer to the function defined inside Main.jsx
            // deleteUser is prop passed to the child
            users.map(val=> <UserInfo user={val} key={val.id} deleteUser={deleteUserPassed}/>)
        }

        
    </div>
    
  )
}

export default Main