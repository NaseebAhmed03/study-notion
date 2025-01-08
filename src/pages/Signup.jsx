import React from 'react'
import signupImg from '../assets/signupImg.webp'
import Template from '../components/Template'

function Signup({ setIsLoggedIn }) {
  return (
    <div>
      <Template 
      title="Join the millions learning to code with StudyNotion for free" 
      desc1="Build skills for today, tomorrow, and beyond." 
      desc2="Education to future-proof your career." 
      formType="Signup"
      image={signupImg}
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup
