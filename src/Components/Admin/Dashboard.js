import React from 'react'
import { useUserContext } from '../LoginSignup/context/userContext';

export const Dashboard = () => {
  const { user, loading, error, logoutUser } = useUserContext();

  return (
    <div>
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
      <button onClick={logoutUser}>Log out</button>
    </div>
  )
}
