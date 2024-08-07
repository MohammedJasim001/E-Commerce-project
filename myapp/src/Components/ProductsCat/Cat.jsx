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
  axios.get('http://localhost:3000/products')
    .then(res=>{
      console.log(res);  
      setCatProducts(res.data.filter((item)=>item.category==='Cat'))
      console.log(catProducts)
    })
    .catch(err=>{
      console.log(err)
    })
},[])
  

  return (
    <div className='pt-5'>
      <h1 className="md:ml-10 text-3xl font-sans font-bold ">Cat </h1>
    
     <div  className='grid grid-cols-1 md:grid-cols-2 gap-3 pt-10 '>
      
        {catProducts.map((products)=>(
          <ProductsCat key={products.id} products={products}/>
        ))}
     </div>
      
    </div>
  )
}

export default Cat
