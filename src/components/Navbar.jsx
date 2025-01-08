import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { toast } from 'react-toastify'

function Navbar({ isLoggedIn, setIsLoggedIn }) {


  return (
    <div className='flex justify-evenly'>
      <Link to='/'>
        <img src={Logo} alt="img" />
      </Link>

      <nav>
        <ul className='flex gap-5 ml-5'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </nav>
        
      <div className='flex gap-8 ml-10'>
        {
          !isLoggedIn &&
          <Link to='/login'>
            <button>Login</button>
          </Link>
        }
        {
          !isLoggedIn &&
          <Link to='/signup'>
            <button>Signup</button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to='/'>
            <button 
            onClick={() => {
              setIsLoggedIn(false)
              toast.success("logged out")
              }}>
                Logout
            </button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to='/dashboard'>
            <button>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
