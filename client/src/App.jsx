import React from 'react'
import {Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-black bg-[url('./src/assets/bgImg.svg')] bg-center bg-no-repeat bg-contain"> //bg contain real lifesaver yo
      <div>
        <Routes>
          <Route path='/' element = {<HomePage />}/>
          <Route path='/login' element = {<LoginPage />}/>
          <Route path='/profile' element = {<ProfilePage />}/>
        </Routes>
      </div>
    </div> 
  )
}

export default App
