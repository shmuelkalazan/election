import { useEffect } from 'react'
import Nav from './components/Nav'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Votes from './components/pages/Votes'
import Statistics from './components/pages/Statistics'
// import cors from "cors"
import { socket } from './main'
import { Ivote } from './types/vote'
import { useAppDispatch } from './redux/store'
import { fetchCandidates } from './redux/slices/candidateSlice'


function App() {
  const dispach = useAppDispatch()
  useEffect(() => {

  socket.on('returnVote',(vote:Ivote)=>{
    console.log("someone voted 1")
    console.log(vote)
    // dispach(candidateSlice.actions.vote(vote.candidateId))
    dispach(fetchCandidates())
  })
  }, []);

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='votes' element={<Votes/>}/>
        <Route path='statistics' element={<Statistics/>}/>
        <Route path='/' element={<Navigate to={'/votes'}/>}/>
      </Routes>
    </div>
  )
}

export default App
