import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState, useAppSelector } from '../redux/store'

function Nav() {
    // const user = useSelector((state :RootState) => state.user)
    const user = useAppSelector(state => state.user)

    return (
    <div className="nav">
      {user.user ? (
        <>{console.log(user.user)}
          <NavLink to={"/votes"}>Votes</NavLink>
          {user.user.isAdmin && (
            <NavLink to={"/statistics"}>Statistics</NavLink>
          )}
          <button onClick={() => alert("Log out successfully")}>Logout</button>
        </>
      ) : (
        <>
        {console.log(user.user)}
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
        </>
      )}
      </div>
  )
}

export default Nav