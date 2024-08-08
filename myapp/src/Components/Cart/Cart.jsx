import axios from "axios";
import React, { useEffect, useState } from "react";
import { RemovCart } from "../AllProducts/Addcart";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setart] = useState([]);
  const handleRemove = async (e) => {
    await RemovCart(e);
    alert('Item deleted from the cart')
  };
  useEffect(() => {
    const user = localStorage.getItem("id");
    axios
      .get(`http://localhost:3000/users/${user}`)
      .then((res) => setart(res.data.cart))
      .catch((err) => console.log(err));
  }, [handleRemove]);

  return (
    <div className=" md:grid grid-cols-3 gap-3">
      {Object.values(cart).map((e) => {
        return (
          <div
            key={e.id}
            className="p-3 bg-white shadow-xl rounded-lg grid grid-cols-2"
          >
            <img
              src={e.image}
              alt=""
              className="h-[200px] rounded-lg shadow-xl p-2 w-[170px] "
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className=" font-bold">{e.name}</div>
                <div>
                  <span className="font-serif text-gray-600 ">Prize :</span>
                  <span className="font-bold text-2xl">{e.price}$</span>
                </div>
                <div>
                  <span className="font-serif text-gray-600 ">brand :</span>
                  <span className="font-semibold ">{e.brand}</span>
                </div>
                <div>
                  <span className="font-serif text-gray-600 ">ratings :</span>
                  <span className=" font-semibold">{e.ratings}</span>
                </div>
              </div>
             
                <button className=" p-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg">
                  By Now
                </button>
             

              <button
                onClick={() => handleRemove(e)}
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg"
              >
                Remove Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
