import React, {useState} from 'react'

// Step 2 (Lifting Up State) = Add props addUser, that will be invoked to pass item to the parent
const AddUser = ({addUser}) => {
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


         // reset the form

         // 3 Lifting Up State => passed the userForm to the parent component
         addUser(userForm)
 
         setUserForm({"name":"", "age":0})
 
     }
    return (
        <div>
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
        </div>
    )
}

export default AddUser