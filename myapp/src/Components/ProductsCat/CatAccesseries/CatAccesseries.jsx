import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CatAcceProducts from './CatAcceProducts'

const CatAccesseries = () => {
    const [catAccesseries,setCatAccesseries]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/catAccessoriesAndLitters')
            .then(res=>{
                setCatAccesseries(res.data)
            })

    },[])

  return (
    <div>
        <h1 className='text-xl md:text-4xl font-sans m-auto tracking-wide leading-loose font-bold ml-5 mt-10' >Accesseries and Litters</h1>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 pt-10'>
            {catAccesseries.map((accproducts)=>(
                <CatAcceProducts key={accproducts.id} accproducts={accproducts}/>
            ))}
        </div>
      
    </div>
  )
}

export default CatAccesseries
