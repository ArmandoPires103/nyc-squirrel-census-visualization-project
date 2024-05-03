import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SquirrelData from './SquirrelData'
import Navigation from './Nav'
import LandingPage from './LandingPage'
import MostWanted from './MostWanted'

const App = () => {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/beware" element={<SquirrelData/>} />
        <Route path="/most-wanted" element={<MostWanted />}/>
      </Routes>
    </>
  )
}

export default App
