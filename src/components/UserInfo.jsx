import React from 'react'
import '../App.css'
const UserInfo = ({user}) => {
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
    </div>
  )
}

export default UserInfo