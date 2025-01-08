import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='bg-blue-900 w-screen h-screen' style={{color: 'white'}}>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  )
}

export default App
