import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Navigate, useNavigate } from 'react-router-dom'
import { fetchCandidates } from '../../redux/slices/candidateSlice'

function Votes() {
  const navigate = useNavigate()
  const { user} = useAppSelector((state) => state.user)
  const candidatets = useAppSelector((state) => state.candidates)
  const dispach = useAppDispatch()

  useEffect(( )=>{
    if(!user?._id){
      navigate("/login")
    }
  },[])
  useEffect(( )=>{
      dispach(fetchCandidates())
  },[])

  return (
    <div>
      {candidatets.candidate.map((e) =>
      <div> 
        <p>name: {e?.name} </p>
        <img src={e.image} alt="candidat" />
        <button>vote</button>
      </div> )}
    </div>
  )
}

export default Votes