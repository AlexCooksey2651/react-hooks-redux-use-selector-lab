import React from "react";
import { useSelector } from "react-redux"
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users)
  const userCount = useSelector((state) => state.users.length)
  return (
    <div>
      <ul>
        Users!
        {users.map(user => {
          return <p key={user.username}>{user.username}</p>
        })}
        <br />
        <p>Total Users: {userCount}</p>
      </ul>
    </div>
  );
}

export default Users;
