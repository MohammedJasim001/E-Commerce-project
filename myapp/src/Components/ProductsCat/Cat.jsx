import React, { useEffect, useState } from 'react'
import food from '../Assets/catfood.webp'
import groom from '../Assets/catgroom.png'
import accesseries from '../Assets/cataccesseries.jpg'
import axios from 'axios'
import ProductsCat from './ProductsCat'

const Cat = () => {

  const [catproducts, setcatProducts] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/catProducts')
    .then(ele=>{
        console.log(ele)
        setcatProducts(ele.data)
        console.log(catproducts);
        
    })
    .catch(err=>{
        console.log(err)
    })

},[])

  return (
    <div className='pt-10'>
      <div className='flex items-center justify-around'>
        <div className='flex flex-col items-center justify-center'>
          <img className='w-[200px] h-[200px] rounded-full'
            src={food} alt="" />
          <h1>Food</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img className='w-[200px] h-[200px] rounded-full'
            src={groom} alt="" />
          <h1>Grooming</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img className='w-[200px] h-[200px] rounded-full'
            src={accesseries} alt="" />
          <h1>Accesseries</h1>
        </div>
        
      </div>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-3 pt-10'>
                    {catproducts.map((catproduct) => (
                        <ProductsCat key={catproduct.id}  product={catproduct} />
                    ))}

                    
                </div>
      
    </div>
  )
}

export default Cat
