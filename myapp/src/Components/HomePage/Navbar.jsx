import React from "react";
import { Link } from "react-router-dom";

import admin from "../Assets/admin-icon.png";
import cart from "../Assets/cart-icon.png";

const Navbar = () => {
  return (
    <div className="flex  justify-around items-center  p-5 bg-blue-300">
    <h1 className="h-10 sm:h-14  sm:text-3xl font-bold text-gray-800 p-3 bg-white rounded-lg shadow-lg">
      Luna <span className="text-green-500">Pets</span>
    </h1>
  
    <input
      className="border border-black flex-grow max-w-[60%] h-10 sm:h-14 rounded-md mx-2"
      placeholder="Search what you need"
      type="text"
    />
  
    <div className="flex items-center space-x-4 ">
      <Link to="/signin" className="flex items-center">
        <img className="w-6 sm:w-8 ml-2 " src={admin} alt="admin" />
        <h2 className="hidden sm:block ml-2">Sign in</h2>
      </Link>
  
      <Link to="/cart" className="flex items-center ml-4">
        <img className="w-6 sm:w-8" src={cart} alt="cart" />
        <h2 className="hidden sm:block ml-2">Cart</h2>
      </Link>
    </div>
  </div>
  
  );
};

export default Navbar;
