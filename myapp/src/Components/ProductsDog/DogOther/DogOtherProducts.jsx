import React from 'react'

const DogOtherProducts = ({dogothers}) => {
  return (
    <div className='md:w-[300px]  shadow-lg className=" bg-white border shadow-black h-[420px] md:h-[350px] border-gray-200 rounded-lg flex flex-col md:ml-8   '>
        <img className="w-[200px] h-[200px] gap-2 rounded-lg m-auto mt-3"
        src={dogothers.image} alt="" />
     <h1 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 ">{dogothers.name}</h1>
     <h1>{dogothers.description}</h1>
     <h1 className='text-gray-900 text-lg font-semibold'>{dogothers.price}</h1>
     <button className='text-gray-900 bg-blue-500 w-[120px] h-[35px] rounded-md mb-1 ml-1'
         >Add to cart</button>
    </div>
  )
}

export default DogOtherProducts
