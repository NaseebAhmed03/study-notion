import React from 'react'
import Background from '../assets/background.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function Template({ title, desc1, desc2, formType, image, setIsLoggedIn }) {
  return (
    <div className='flex gap-7'>
      <div>
        <h1 className='text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5'>{title}</h1>
        <p className='mt-4 text-[1.125rem] leading-[1.625rem] flex flex-col'>
            <span>{desc1}</span>
            <span className='font-edu-sa font-bold italic text-blue-100'>{desc2}</span>
        </p>

        { formType === 'Signup' ? 
        (<SignupForm setIsLoggedIn={setIsLoggedIn}  />) : 
        (<LoginForm setIsLoggedIn={setIsLoggedIn} />) }
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="line"></div>
          <p style={{ margin: '0 10px' }}>OR</p>
          <div className="line"></div>
        </div>

        <button>
            <p>Sign Up with Google</p>
        </button>
      </div>

      <div className='relative'>
        <img 
        src={Background} 
        width={558} 
        height={504}
        loading='lazy'/>

        <img 
        className='absolute -top-4 right-4'
        src={image} 
        width={558} 
        height={504}
        loading='lazy'/>
      </div>
    </div>
  )
}

export default Template
