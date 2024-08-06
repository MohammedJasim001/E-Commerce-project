import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DogOtherProducts from './DogOtherProducts'

const DogOthers = () => {

    const [dogother,setDogother]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/dogcaccessories')
            .then(res=>{
                setDogother(res.data)
            })
            .catch(err=>console.log(err))

    },[])
  return (
    <div>
        <h1 className='text-4xl font-sans m-auto tracking-wide leading-loose font-bold ml-5 mt-10'>Dog other products</h1>

        <div  className='grid grid-cols-2 md:grid-cols-4 gap-3 pt-10'>
            {dogother.map((dogaccessories)=>(
                <DogOtherProducts key={dogaccessories.id} dogothers={dogaccessories}/>
            ))}
        </div>
      
    </div>
  )
}

export default DogOthers
