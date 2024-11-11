import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/store'
import { Navigate, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const {user} = useAppSelector(state => state.user)

  useEffect(() => {
    console.log(user)
    if (user?._id) {
      navigate("/votes");
    }
  }, []);

  return (
    <div>Register</div>
  )
}

export default Register
