import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../redux/store'

function Nav() {
    const user = useSelector((state :RootState) => state.user)
  return (
    // <div className="nav">
    //     {user.user ? (
    //         <>
    //             <NavLink to={"/votes"}>votes</NavLink>
    //             {user.user.isAdmin && (
    //                 <NavLink to={"/statistics"}>statistics</NavLink>
    //             )}
    //         </>
    //     ):(
            
    //     )}
    //     <NavLink to={"/login"}>login</NavLink>
    //     <NavLink to={"/register"}>register</NavLink>
    //     <button onClick={()=>{alert("logout succesfuly")}}>lout</button>

        <></>
        // Nav</div>
  )
}

export default Nav