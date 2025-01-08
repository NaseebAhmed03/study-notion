import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function SignupForm({ setIsLoggedIn }) {

    const navigate = useNavigate();

    const [confirmPasswd, setConfirmPasswd] = useState('')
    const [formData, setFormData] = useState({ 
        fname: '', 
        lname: '', 
        email: '', 
        passwd: '', 
    })

    const [showPasswd1, setShowPasswd1] = useState(false)
    const [showPasswd2, setShowPasswd2] = useState(false)

    const [accountType, setAccountType] = useState('student')

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({...prev, [name]: value}))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if( formData.passwd !== confirmPasswd ) {
            toast.error("Passwords do not match")
            setFormData({
                passwd: ''
            });
            setConfirmPasswd('')
            return ;
        }
        setIsLoggedIn(true);
        navigate('/dashboard')
        toast.success("Account Created")
        
            const obj = {...formData, accountType}
            console.log(obj)
    }
    
  return (
    <div>
      <form className='flex flex-col' action="" onSubmit={submitHandler}>

        <div>
            <button 
            onClick={(e) => {
                e.preventDefault()
                setAccountType('student')}}
                className={`${accountType === 'student' ? 'bg-gray-600' : 'bg-transparent'} rounded-full p-2`}>
                Student
            </button>
            <button 
            onClick={(e) => {
                e.preventDefault()
                setAccountType('instructor')}}
            className={`${accountType === 'instructor' ? 'bg-gray-600' : 'bg-transparent'} rounded-full p-2 ml-1`}>
                Instructor
            </button>
        </div>


        <label htmlFor="fname">First Name<sup>*</sup></label>
        <input 
        required
        type="text" 
        placeholder='Enter first name'
        id='fname'
        name='fname'
        onChange={changeHandler}
        value={formData.fname}
        />

        <label htmlFor="lname">Last Name<sup>*</sup></label>
        <input 
        type="text" 
        placeholder='Enter last name'
        id='lname'
        name='lname'
        onChange={changeHandler}
        value={formData.lname}
        />

        <label htmlFor="email">Email Address<sup>*</sup></label>
        <input 
        type="email" 
        placeholder='Enter email address'
        id='email'
        name='email'
        onChange={changeHandler}
        value={formData.email}
        />

        <label htmlFor="passwd1">Create Password<sup>*</sup></label>
        <div className='flex'>
            <input 
            type={showPasswd1 ? "type" : "password"} 
            placeholder='Enter password'
            id='passwd'
            name='passwd'
            onChange={changeHandler}
            value={formData.passwd}
            />
            <span onClick={() => setShowPasswd1(prev => !prev)}>
                { showPasswd1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> }
            </span>
        </div>

        <label htmlFor="passwd2">Confirm Password<sup>*</sup></label>
        <div className='flex'>
            <input 
            type={showPasswd2 ? "type" : "password"} 
            placeholder='Enter password'
            id='confirmPasswd'
            name='confirmPasswd'
            onChange={(event) => { setConfirmPasswd(event.target.value) }}
            value={confirmPasswd}
            />
            <span onClick={() => setShowPasswd2(prev => !prev)}>
                { showPasswd2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> }
            </span>
        </div>

        <button>
            Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
