import { useState } from 'react'
import './App.scss'
import { AuthLayout } from './components/Layouts/AuthLayout/AuthLayout'
import { Login, SignUp } from './pages'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [authForm, setAuthForm] = useState({})
  return (
    <>
      <Router>
        <Routes>
            <Route path='/login' element={<AuthLayout ><Login /></AuthLayout>} />
            <Route path='/signup' element={<AuthLayout ><SignUp /></AuthLayout>} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
