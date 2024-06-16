import React from 'react'
import '../App.css'
const UserInfo = ({user,deleteUser}) => {

    //The users is managed inside parent component. Main.jsx
    // The action delete happens in child compoenent UserInfo.jsx
    // Pass up / Lifting up through props the id of user needs to deleted

    const handleDelete = () => {
        // Call the props passed by the parent , pass the userId into the function
        deleteUser(user.id)

    }

  return (
    <div className='user-card'>
        <p>User Id : {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Age:{user.age}</p>
        {/* Conditial rendering using ? : */}
        {
            user.age < 18 
            ?
            <p>Cannot enter website</p>
            :
            <p>Adult you may proceed</p>
        }
        {
            user.id == 1 && <p>Hello admin</p>
        }

        <button onClick={handleDelete}>Delete user</button>
    </div>
  )
}

export default UserInfo