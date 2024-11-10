import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '../../redux/slices/userSlice'
import cors from "cors"

function Login() {
    const [username ,setUsername] = useState("")
    const [password ,setPassword] = useState("")
    const dispach =useDispatch()
  return (
    <div>
        <input type='text' placeholder='username'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        />
        <input type='password' placeholder='password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button onClick={() =>{dispach(fetchLogin({username:username ,password:password}))}}>login</button>
        login
    </div>
  )
}

export default Login