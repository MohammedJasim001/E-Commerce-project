import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CheckUSer } from './Logine'
import axios from 'axios'

const SignIn = () => {
  const params =useNavigate()
  const [loggine,isLoggine]=useState([])
  
  const [signin,setSignin]=useState({
    password:'',
    email:''
  })

const handleSubmit =async (e)=>{
  e.preventDefault();
try{
 const res = await  axios.get("http://localhost:3000/person")
  isLoggine(res.data)
 const user = loggine.find((e)=>{
      return e.email==signin.email && e.password==signin.password
  })
  
  if(user){
    
    localStorage.setItem("id",user.id)
   
    params("/")
    window.location.reload()
  }
  
}catch(err){
  console.log("err".err);
 
}
}

function handleChange(e){
  setSignin({
    ...signin,
    [e.target.name]:e.target.value
  })
  
  
}
  return (
    
    <div className='h-[100vh] flex flex-col items-center justify-center bg-red-200 absolute top-0 w-[100%] bottom-0'>
       <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center rounded-md md:shadow-2xl h-[300px] w-[500px] bg-white'>
           
           <input className='border border-black  h-12 w-[300px] rounded-md'
               type="email" 
               placeholder='Email'
               name='email'
               onChange={handleChange}
               value={signin.email}
               />
              
           
           <input
           onChange={handleChange}
           name='password'
            value={signin.password} 
           className='border border-black  h-12 w-[300px] rounded-md mt-6'
           type="password" 
           placeholder='Password'/>
           <button className='bg-blue-500 h-10 w-20 mt-5 rounded-md'>Sign In</button>

       </form>
       <div>

       <h2 className='text-xl mt-8'>Don't have and account?</h2>

       <Link to={'/registration'}>
       <button className='bg-blue-500 h-10 w-[200px] mt-5 rounded-md'>Create an account</button>
       </Link>
       </div>
    </div>

  )
}

export default SignIn
