import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SquirrelData from './SquirrelData'

const App = () => {
  return (
    <>
      <h1>Squirrel Census Visualization Starter</h1>
      <Routes>
        <Route path="/" element={<SquirrelData/>} />
      </Routes>
    </>
  )
}

export default App
