import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

const Registration = () => {

    axios.post('http://localhost:3000/prerson')
          .then(res=>{
            console.log(res)
          })

    const [input,setInput]=useState({
        name:'',
        email:'',
        password:'',
        cpassword:''
    })

    const [formErrors,setFormErros]=useState({})
    const [isSubmit,setIssubmit]=useState(false)

    
      const handleSubmit =(e)=>{
        e.preventDefault()
        setFormErros(validate(input))
        setIssubmit(true)    
        
        // axios.post('http://localhost:3000/prerson')
        // .then(res=>{
        //   console.log(res)
        // })
    }

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value
        setInput({...input,
          [name]:value
          
        })
    }

    useEffect(()=>{
      console.log(formErrors)
      if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(input)
      }
    },[formErrors])

    const validate=(values)=>{
      const errors={}
      const regax=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
      if(!values.name){
        errors.name='Name is required'
      }
      if(!values.email){
        errors.email='Email is required'
      }else if(!regax.test(values.email)){
        errors.email='Enter a valid Email'
      }
      if(!values.password){
        errors.password='Password is required'     
      }else if(values.password.length <4){
        errors.password='Password must be more than 4 characters'
      }
      if(!values.cpassword){
        errors.cpassword='Confirm your password'
      }else if(values.cpassword !== values.password){
        errors.cpassword="Password did't match"
      }
      return errors
    }

  return (
    <div className='bg-green-800 h-[100vh] flex items-center justify-center absolute top-0 w-[100%] bottom-0'>   
        <form  className='flex flex-col items-center   w-[500px] h-[500px] justify-center rounded-md shadow-2xl '
               >
          <input className='border border-black h-12 w-[300px] rounded-md'
            type="text" 
            placeholder='Name'
            name='name'
            value={input.name}
            onChange={handleChange}/>
            <span>{formErrors.name}</span>
            
          <input className='border border-black mt-5 h-12 w-[300px] rounded-md'
            type="email" 
            placeholder='E-mail'
            name='email'
            value={input.email}
            onChange={handleChange}/>
            <span>{formErrors.email}</span>

          <input className='border border-black mt-5 h-12 w-[300px] rounded-md'
            type="password" 
            placeholder='Password'
            name='password'
            value={input.password}
            onChange={handleChange}/>
            <span>{formErrors.password}</span>

          <input className='border border-black mt-5 h-12 w-[300px] rounded-md'
            type="password" 
            placeholder='Confirm Password'
            name='cpassword'
            value={input.cpassword}
            onChange={handleChange}/>
            <span>{formErrors.cpassword}</span>
          <Link to={'/signin'}>
            <button onClick={handleSubmit}
              className='bg-blue-500 h-10 w-20 mt-5 rounded-md'
              >Submit</button>
          </Link>
        </form>
    </div>
  )
}

export default Registration
