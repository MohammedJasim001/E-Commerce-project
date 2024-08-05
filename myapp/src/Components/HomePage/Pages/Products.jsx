import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <div className="">
      <div class=" bg-white border shadow-black h-[300px] border-gray-200 rounded-lg shadow-md dark:bg-gray-800 flex flex-col dark:border-gray-700 ">
        <img className="w-[150px] gap-2 rounded-lg m-auto mt-3" src={product.images} />

        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>

          <h4 className="text-white">{product.price}</h4>
        </a>
        <Link to={'/cart'}>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 justify-between dark:focus:ring-blue-800"
        >
          Add to cart
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        </Link>
        
      </div>
    </div>
  );
};

export default Products;
