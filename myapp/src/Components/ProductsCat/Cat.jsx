import React, { useEffect, useState } from 'react'
import food from '../Assets/catfood.webp'
import groom from '../Assets/catgroom.png'
import accesseries from '../Assets/cataccesseries.jpg'
import axios from 'axios'
import ProductsCat from './ProductsCat'
import { Link } from 'react-router-dom'

const Cat = () => {
const [catProducts,setCatProducts]=useState([])

useEffect(()=>{
  axios.get('http://localhost:3000/catProducts')
    .then(res=>{
      console.log(res);  
      setCatProducts(res.data)
      console.log(catProducts)
    })
    .catch(err=>{
      console.log(err)
    })
},[])
  

  return (
    <div className='pt-5'>
      <h1 className="md:ml-10 text-3xl font-sans font-bold ">Cat </h1>
      <div className='md:flex items-center justify-around'>
        <div className='flex flex-col items-center justify-center'>
          <Link to={'/catfood'}>
            <img className='w-[200px] h-[200px] rounded-full'
            src={food} alt="" />
          </Link>
          
          <h1 className='text-gray-900 text-lg font-semibold'>Food</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Link to={'/catgroom'}>
            <img className='w-[200px] h-[200px] rounded-full'
            src={groom} alt="" />
          </Link>
          
          <h1 className='text-gray-900 text-lg font-semibold'>Grooming</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Link to={'/cataccesseries'}>
            <img className='w-[200px] h-[200px] rounded-full'
            src={accesseries} alt="" />
          </Link>
         
          <h1 className='text-gray-900 text-lg font-semibold'>Accesseries&Litters</h1>
        </div>
        
      </div>
      <div>
        <h1 className='text-3xl font-sans font-bold mt-10 md:mt-16 md:ml-10'>Top Products</h1>
      </div>
     <div  className='grid grid-cols-1 md:grid-cols-2 gap-3 pt-10 '>
      
        {catProducts.map((products)=>(
          <ProductsCat key={products.id} products={products}/>
        ))}
     </div>
      
    </div>
  )
}

export default Cat
