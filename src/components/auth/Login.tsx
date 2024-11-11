import React, { useEffect, useState } from 'react'
import { fetchLogin } from '../../redux/slices/userSlice'
import cors from "cors"
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
    const [username ,setUsername] = useState("")
    const [password ,setPassword] = useState("")
    const navigate = useNavigate()
    const dispach = useAppDispatch()
    const {user} = useAppSelector((state) => state.user)
  
    useEffect(() => {
      // console.log(user)
      if (!user?._id) return
      navigate('/votes')
    }, [user]);
  
    useEffect(() => {
      if (user?._id) {
          navigate('/votes')
      }
    }, []);
    return (

    <div>
        <input type='text' placeholder='username'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        />
        <input type='password' placeholder='Password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button onClick={() =>dispach(fetchLogin({username ,password}))}>login</button>
        
    </div>
  )
}

export default Login