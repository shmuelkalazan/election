import { useState } from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Votes from './components/gapes/Votes'
import Statistics from './components/gapes/Statistics'
import cors from "cors"


function App() {

  return (
    <div>app
      <Nav/>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='votes' element={<Votes/>}/>
        <Route path='statistics' element={<Statistics/>}/>
      </Routes>


    </div>
  )
}

export default App
