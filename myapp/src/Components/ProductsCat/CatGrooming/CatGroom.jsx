import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CatGroomProducts from './CatGroomProducts'

const CatGroom = () => {
    const [catGroom,setCatGroom]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/catGroomingProducts')
            .then(res=>{
                setCatGroom(res.data)
            })
            .catch(err=>console.log(err))

    },[])
  return (
    <div>
        <h1 className='text-xl md:text-4xl font-sans m-auto tracking-wide leading-loose font-bold ml-5 mt-10'>Cat Grooming products</h1>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 pt-10'>
            {catGroom.map((groomProducts)=>(
                <CatGroomProducts key={groomProducts.id} groomProducts={groomProducts}/>
            ))}
        </div>
      
    </div>
  )
}

export default CatGroom
