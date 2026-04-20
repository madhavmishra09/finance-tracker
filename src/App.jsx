import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import NavBar from './components/navigation'
import Login from './authentication/login'
import Signup from './authentication/signup'
import LandingPage from './mainpage/landingpage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
