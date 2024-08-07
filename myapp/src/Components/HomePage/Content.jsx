import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import cat from '../Assets/cat6.jpg';
import dog from '../Assets/dog3.jpg';
import bgimage from '../Assets/bgpet.png';
import both from '../Assets/cat&dog.jpg';
import Products from './Pages/Products';

const Content = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                setProducts(response.data.slice(0, 10));
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            {/* Header Section */}
            <div className="flex flex-col md:flex-row bg-[#f97316]">
                <img className="w-full md:w-1/2" src={bgimage} alt="Background" />
                <h1 className="text-3xl md:text-5xl font-serif m-auto tracking-wide leading-loose font-extrabold mx-5 text-center md:text-left">
                    WE ARE ALWAYS HERE FOR ALL YOUR PET'S GOOD HEALTH
                </h1>
            </div>

            {/* Discount Banner */}
            <div className="font-serif text-xl md:text-4xl bg-green-950 h-20 text-white flex items-center justify-center gap-5 text-center">
                <h1>Get <span className="text-green-800 text-2xl md:text-4xl">10% off</span> your first order</h1>
                <Link to="/registration">
                    <button className="border border-white text-lg md:text-xl w-[120px] md:w-[160px] h-10 md:h-12 rounded-md">
                        Join Pets Club
                    </button>
                </Link>
            </div>

            {/* Shop Categories */}
            <div>
                <h1 className="text-2xl md:text-3xl font-sans font-bold ml-10 mt-10">Shop for</h1>

                <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-10 md:gap-28">
                    <div className="transition duration-300 ease-in-out transform hover:scale-110 flex flex-col items-center">
                        <Link to="/cat">
                            <img className="rounded-full h-40 w-40 md:h-[250px] md:w-[250px]" src={cat} alt="Cat" />
                        </Link>
                        <span className="text-lg md:text-xl font-semibold">Cat</span>
                    </div>
                    <div className="transition duration-300 ease-in-out transform hover:scale-110 flex flex-col items-center">
                        <Link to="/dog">
                            <img className="rounded-full h-40 w-40 md:h-[250px] md:w-[250px]" src={dog} alt="Dog" />
                        </Link>
                        <span className="text-lg md:text-xl font-semibold">Dog</span>
                    </div>
                    <div className="transition duration-300 ease-in-out transform hover:scale-110 flex flex-col items-center">
                        <Link to="/allproducts">
                            <img className="rounded-full h-40 w-40 md:h-[250px] md:w-[250px]" src={both} alt="All Products" />
                        </Link>
                        <span className="text-lg md:text-xl font-semibold">All Products</span>
                    </div>
                </div>

                {/* Popular Products */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-sans font-bold ml-10 text-gray-900 mt-16">Popular Products</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-10">
                    {products.map(product => (
                        <Products key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Content;
