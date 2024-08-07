import React from 'react'
import { useNavigate } from 'react-router'

const ProductsCat = ({products}) => {
  const navigate = useNavigate()
   
  return (
   
    <div onClick={()=>navigate(`/productdetails/${products.id}`)}
      className=' bg-white border  h-[250px] w-[90%] border-gray-200 rounded-lg shadow-lg ml-5 md:ml-10 flex'>
      <div>
        <img className="w-[200px] gap-2 rounded-lg m-auto mt-3"
          src={products.image} alt="" />
      </div>
      <div className='flex flex-col gap-[10px] ml-10'>
        <h1 className='text-2xl font-bold tracking-tight text-gray-900'>{products.name}</h1>
        <h1 className='text-base font-bold tracking-tight text-gray-900'>{products.brand}</h1>
        <h3>{products.description}</h3>
        <h4 className='text-gray-900 text-lg font-semibold'>${products.price}</h4>
       
          <button className='text-gray-900 bg-blue-500 w-[150px] h-[35px] rounded-md  '
          >Add to cart</button>
        </div>
      
        
    </div>
  

  )
}

export default ProductsCat

