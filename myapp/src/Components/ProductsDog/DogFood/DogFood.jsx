import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DogFoodProducts from './DogFoodProducts'

const DogFood = () => {
const [dogfood,setdogfood]=useState([])
useEffect(()=>{
    axios.get('http://localhost:3000/dogfoods')
        .then(res=>{
            setdogfood(res.data)
        })
        .catch(err=>console.log(err))
},[])

  return (
    <div >
        <h1 className='text-4xl font-sans m-auto tracking-wide leading-loose font-bold ml-5 mt-10'>Dog Foods</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 pt-10'>
            {dogfood.map((dogfoods)=>(
                <DogFoodProducts key={dogfoods.id} dogfoods={dogfoods}/>
            ))}
        </div>
      
    </div>
  )
}

export default DogFood
