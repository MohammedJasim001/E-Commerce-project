import React, { useEffect, useState } from 'react'
import dogfood from '../Assets/dogfood.jpeg'
import doggroom from '../Assets/doggrooming.jpg'
import axios from 'axios'
import DogProducts from './DogProducts'
import { Link } from 'react-router-dom'


const Dog = () => {
  const [dogproducts,setDogproducts]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/dogProducts')
      .then(res=>{
        setDogproducts(res.data)
      })
      .catch(err=>console.log(err))
  },[])

  return (
    <div >
      <h1 className="mb-2 text-3xl font-bold tracking-tight md:ml-10">Dog</h1>
    <div className='md:flex items-center justify-center gap-40 mt-10'>
      <div className='flex flex-col items-center'>
        <Link to={'/dogfood'}>
          <img className='w-[200px] h-[200px] rounded-full'
        src={dogfood} alt="" />
        </Link>
        
        <h3 className='text-gray-900 text-lg font-semibold'>Foods</h3>
      </div>
      <div className='flex flex-col items-center'>
        <Link to={'/dogothers'}>
        <img className='w-[200px] h-[200px] rounded-full'
        src={doggroom} alt="" />
        </Link>
        <h3 className='text-gray-900 text-lg font-semibold'>Other Products</h3>
      </div>
    </div>
    <h1 className='text-3xl font-sans font-bold mt-16 md:ml-10'>Top products</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 pt-10 '>
      {dogproducts.map((dogproducts)=>(
        <DogProducts key={dogproducts.id} dogproducts={dogproducts}/>
      ))}
    </div>
      
      
    </div>
  )
}

export default Dog
