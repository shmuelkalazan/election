import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Navigate, useNavigate } from 'react-router-dom'
import { fetchCandidates } from '../../redux/slices/candidateSlice'

function Statistics() {
  const navigate = useNavigate()
  const {user} = useAppSelector(state => state.user)
  const candidatets = useAppSelector((state) => state.candidates)
  const dispach = useAppDispatch()

  useEffect(( )=>{
    if(!user?._id && !user?.isAdmin){navigate("/votes")}
    if(!user?._id){navigate("/login")}
  },[])

  useEffect(( )=>{
    dispach(fetchCandidates())
    console.log(candidatets.candidate[0]?.votes)
},[])
  
  return (
    <div>
    {candidatets.candidate.map((e) =>
    <div className="vote-list">
    <div className="vote-card" > 
      <p>name: {e?.name} </p>
      <p className="badge">{(e?.votes).toString()}</p>
      <img src={e.image} alt="candidat" />
    </div> 
    </div>
  )}
  </div>
  )
}

export default Statistics