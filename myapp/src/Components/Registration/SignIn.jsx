import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    
    <div className='h-[100vh] flex flex-col items-center justify-center bg-yellow-800 absolute top-0 w-[100%] bottom-0'>
       <form className='flex flex-col items-center justify-center rounded-md shadow-2xl h-[300px] w-[500px]'>
           
           <input className='border border-black  h-12 w-[300px] rounded-md'
               type="email" 
               placeholder='Email'/>
              
           
           <input className='border border-black  h-12 w-[300px] rounded-md mt-6'
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
