import React from 'react'

const UserInfo = ({user}) => {
  return (
    <div>
        <p>User Id : {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Age:{user.age}</p>
    </div>
  )
}

export default UserInfo