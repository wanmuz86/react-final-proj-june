import React from 'react'

const UserInfo = ({user}) => {
  return (
    <div>
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
    </div>
  )
}

export default UserInfo