import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CatFoodProducts from './CatFoodProducts'

const CatFood = () => {

    const [catfood,setCatfood]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/catFoodProducts')
        .then(res=>{
            setCatfood(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div>
       <h1 className='text-4xl font-sans m-auto tracking-wide leading-loose font-bold ml-5 mt-10'>Cat Foods</h1>
       <div className='grid grid-cols-2 md:grid-cols-4 gap-3 pt-10'>
            {catfood.map((catfoods)=>(
                <CatFoodProducts key={catfoods.id} catfoods={catfoods}/>
            ))}

       </div>
    </div>
  )
}

export default CatFood
