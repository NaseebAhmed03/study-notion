import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/loginImg.webp'

function Login({ setIsLoggedIn }) {
  return (
    <div>
      <Template 
      title="Welcome Back" 
      desc1="Build skills for today, tomorrow, and beyond." 
      desc2="Education to future-proof your career." 
      formType="Login"
      image={loginImg}
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login
