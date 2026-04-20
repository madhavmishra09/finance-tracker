import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import NavBar from './components/navigation'
import Login from './authentication/login'
import Signup from './authentication/signup'
import LandingPage from './mainpage/landingpage'
import ForgotPassword from './authentication/forgot-password'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path='/' element={<><NavBar />
        <LandingPage/>
        </>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
