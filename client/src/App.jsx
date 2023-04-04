import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthFeature } from './features/auth'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='auth/*' element={<AuthFeature />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
