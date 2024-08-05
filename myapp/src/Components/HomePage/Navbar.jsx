import React from "react";
import { Link } from "react-router-dom";

import admin from "../Assets/admin-icon.png";
import cart from "../Assets/cart-icon.png";

const Navbar = () => {
  return (
    <div className="flex justify-around  bg-red-500 pt-10">
      <h1 class="text-3xl font-bold text-gray-800  p-3 bg-white rounded-lg shadow-lg -10 h-14">
        Luna <span class="text-green-500">Pets</span>
      </h1>

      <input
        className=" border border-black w-[70%] h-14  rounded-md"
        placeholder="seach you need"
        type="text"
        name=""
        id=""
      />

      <Link to={"/signin"}>
        <img className="w-8 ml-2 " src={admin} alt="admin" />
        <h2 className=" hidden">
         Sign in
        </h2>
       
      </Link>
      <div>
      <Link to={'/cart'}>
      <img className="w-8 " src={cart} alt="cart" />
      <h2 className="hidden">
        Cart
        </h2>
      </Link>  
        
      </div>
    </div>
  );
};

export default Navbar;
