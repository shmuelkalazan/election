import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Navigate, useNavigate } from 'react-router-dom'
import candidateSlice, { fetchCandidates } from '../../redux/slices/candidateSlice'
import { fetchVote } from '../../redux/slices/voteSlise'
import userSlice from '../../redux/slices/userSlice'
import { socket } from '../../main'
import { Ivote } from '../../types/vote'

function Votes() {
  const navigate = useNavigate()
  const { user} = useAppSelector((state) => state.user)
  const candidates = useAppSelector((state) => state.candidates)
  const dispach = useAppDispatch()
  useEffect(( )=>{
    if(!user?._id){
      navigate("/login")
    }
  },[])
  useEffect(( )=>{
      dispach(fetchCandidates())
  },[])


  const hendelVote = (candidateId:string) => {
      socket.emit('newVote',{userId: user?._id.toString() ,candidateId:candidateId})
      socket.on('returnVote',(vote:Ivote)=>{
        console.log("someone voted")
        console.log(vote)
        dispach(userSlice.actions.vote(vote.candidateId))
        dispach(candidateSlice.actions.vote(vote.candidateId))
      })
  }


  return (
    <div>
      {candidates.candidate.map((e) =>
      <div key={e._id} className="vote-list">
      <div className={`vote-card ${
        user?.votedFor === e._id ? "my-vote" : ""
      }`} > 
        <p>name: {e?.name} </p>
        <img src={e.image} alt="candidat" />
        <button
          onClick={()=>{ hendelVote(e._id.toString())}}>vote</button>
      </div> 
      </div>
    )}
    </div>
  )
}

export default Votes