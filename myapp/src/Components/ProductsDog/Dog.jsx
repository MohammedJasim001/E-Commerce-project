import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DogProducts from './DogProducts'



const Dog = () => {
  const [dogproducts,setDogproducts]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/products')
      .then(res=>{
        setDogproducts(res.data.filter((item)=>item.category==='Dog'))
      })
      .catch(err=>console.log(err))
  },[])

  return (
    <div >
      <h1 className="mb-2 text-3xl font-bold tracking-tight md:ml-10">Dog</h1>
 
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 pt-10 '>
      {dogproducts.map((dogproducts)=>(
        <DogProducts key={dogproducts.id} dogproducts={dogproducts}/>
      ))}
    </div>
      
      
    </div>
  )
}

export default Dog
