import React, { useEffect, useState } from 'react';
import cat from '../Assets/cat6.jpg';
import dog from '../Assets/dog3.jpg';
import axios from 'axios';
import bgimage from '../Assets/bgpet.png'

import Products from './Pages/Products';
import { Link } from 'react-router-dom';

const Content = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(ele=>{
            console.log(ele)
            setProducts(ele.data)
            console.log(products);
            
        })
        .catch(err=>{
            console.log(err)
        })

    },[])
   

    return (
        <div>
            <div className='flex bg-red-500 '>
                <img className='w-1/2 '
                    src={bgimage} alt="" />
                <h1 className='text-5xl font-serif m-auto tracking-wide leading-loose font-extrabold mx-5'
                >WE ARE ALWAYS HERE FOR ALL YOUR PET'S GOOD HEALTH</h1>    

            </div>
            
            <div className='font-serif text-4xl  bg-green-950 h-20 text-white flex items-center justify-center gap-5'>
                <h1>Get <span className='text-green-800 text-4xl'>10% off</span> your first order</h1>
                <button className='border border-white text-xl w-[160px] h-12 rounded-md'>
                    Join Pets Club
                </button>
            </div>
            <div>
                <div className='text-4xl font-sans font-bold text-start ml-10 mt-10'>
                    <h1>Shop for</h1>
                </div>
                <div className='flex items-center justify-center mt-10 gap-10'>
                    <div className='transition duration-300 ease-in-out transform hover:scale-110 flex flex-col items-center'>
                        <Link to={'/cat'}>
                            <img className='rounded-[100%] h-[250px] w-[250px]' src={cat} alt="cat" />
                        </Link>
                        
                        <span>Cat</span>
                    </div>
                    <div className='transition duration-300 ease-in-out transform hover:scale-110 flex flex-col items-center'>
                        <Link to={'/dog'}>
                            <img className='rounded-[100%] h-[250px] w-[250px]' src={dog} alt='dog' />
                        </Link>
                        
                        <span>Dog</span>
                    </div>
                </div>
                <div>
                    <h1 className='font-serif text-4xl  bg-green-950 h-20 text-white'>Popular Categories</h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-3 pt-10'>
                    {products.map((product) => (
                        <Products key={product.id}  product={product} />
                    ))}

                    
                </div>
            </div>
        </div>
    );
}

export default Content;


