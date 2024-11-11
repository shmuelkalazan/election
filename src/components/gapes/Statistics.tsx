import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/store'
import { Navigate, useNavigate } from 'react-router-dom'

function Statistics() {
  const navigate = useNavigate()
  const {user} = useAppSelector(state => state.user)

  useEffect(( )=>{
    if(!user?._id && !user?.isAdmin){navigate("/votes")}
    if(!user?._id){navigate("/login")}
  },[])
  
  return (
    <div>Statistics</div>
  )
}

export default Statistics