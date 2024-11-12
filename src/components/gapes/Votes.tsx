import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Navigate, useNavigate } from 'react-router-dom'
import { fetchCandidates } from '../../redux/slices/candidateSlice'
import { fetchVote } from '../../redux/slices/voteSlise'
import userSlice from '../../redux/slices/userSlice'

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

  const hendelVote = (candidatetId:string) => {
    console.log({hasvoted:user?.hasVoted})
    if (!user?.hasVoted){
      console.log({userId: user?._id.toString() || "1",candidateId:candidatetId})
       dispach(fetchVote({userId: user?._id.toString() || "1",candidateId:candidatetId}));
       dispach(userSlice.actions.vote())
      }
    else{
      alert("you can vote only for one candidat")
    }
  }

  return (
    <div>
      {candidatets.candidate.map((e) =>
      <div className="vote-list">
      <div className="vote-card" > 
        <p>name: {e?.name} </p>
        <img src={e.image} alt="candidat" />
        <button onClick={()=>{ hendelVote(e._id.toString())}}>vote</button>
      </div> 
      </div>
    )}
    </div>
  )
}

export default Votes