import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function LoginForm({ setIsLoggedIn }) {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', passwd: ''})
    const [showPasswd, setShowPasswd] = useState(false)

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({...prev, [name]:value}))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        navigate('/dashboard')
        toast.success("Logged In")
    }

  return (
    <div>
      <form className='mt-6 flex w-full flex-col gap-y-4' action=""  onSubmit={submitHandler}>
        <div className='flex flex-col'>
            <label 
            className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5' 
            htmlFor="email">
                Email Address <sup className='text-pink-600'>*</sup>
            </label>
            <input 
            className='form-style w-full'
            required
            type="email" 
            name='email'
            onChange={changeHandler}
            placeholder='Enter email address'
            id='email'
            value={formData.email}
            />
        </div>

        <div className='flex flex-col'>
            <label htmlFor="passwd">Password</label>
            <div className='flex'>
                <input 
                required
                type= {showPasswd ? "type" : "password"}
                name="passwd"
                onChange={changeHandler}
                placeholder='Enter password'
                id='passwd'
                value={formData.passwd}
                />
                <span onClick={() => setShowPasswd(prev => !prev)}>
                    { showPasswd ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> }
                </span>
            </div>

            <Link to='#'>
                <p>Forgot Password?</p>
            </Link>
        </div>

        <div>
            <button>
                Sign In
            </button>
        </div>
        <div>
            Don't have an account? &nbsp;
            <button onClick={()=> {
                navigate('/signup')
            }}>
                Create a new account
            </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
