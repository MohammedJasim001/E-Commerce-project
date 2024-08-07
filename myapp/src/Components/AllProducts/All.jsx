import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AllProuducts from './AllProuducts'

const All = () => {
    const [allProducts,setAllProducts]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(ele=>{           
            setAllProducts(ele.data)    
        })
        .catch(err=>{
            console.log(err)
        })

    },[])
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight md:ml-10">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-10">
                {allProducts.map((product) => (
                    <AllProuducts key={product.id} product={product} />
                ))}
            </div>
    </div>
  )
}

export default All
