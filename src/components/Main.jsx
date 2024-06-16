import React, { useState } from 'react'
import Counter from './Counter'
import UserInfo from './UserInfo'
import AddUser from './AddUser'

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


    // 4) Implement the delete message
    const deleteUserPassed = (id) => {
        console.log(id);

        // Filter
        // Retrieve me all the users whose id is different than the deleted users
        let filteredUsers = users.filter(val=> val.id !== id)
        setUsers(filteredUsers);

    }

    const handleAddUser = (userForm) => {
         // Retrieving the last id in the users array
         let currentId = users[users.length-1].id;
 
        //  // Using spread operator  {...userForm, }
        //  // I will add id to the userForm
        //  // The value of id is currentId + 1
        //  // Then I will add the modified userForm at the end of users array [...users, ] / push
        //  // use setUsers to update the users state
        
        setUsers([...users, {...userForm, id:currentId+1}])
 

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
      
        <UserInfo user={mainUser} />

        <hr/>
        
          {/* 1) Pass the props addUser to child, and this will invoke handleAddUser method */}
        <AddUser addUser={handleAddUser}/>
       

        <hr />
        <h2>Users information</h2>
        {
            // 1) Inside the props, deleteUserPassed refer to the function defined inside Main.jsx
            // deleteUser is prop passed to the child
            users.map(val=> <UserInfo user={val} key={val.id} deleteUser={deleteUserPassed}/>)
        }

        
    </div>
    
  )
}

export default Main