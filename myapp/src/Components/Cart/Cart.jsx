import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { RemovCart } from "../AllProducts/Addcart";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import { Items } from "../MainPage/Main";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const { fetchUserData } = useContext(Items);

  const clickIncrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: (item.count || 1) + 1 } : item
      )
    );
  };

  const clickDecrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const handleRemove = async (item) => {
    await RemovCart(item);
    await fetchUserData();
    toast.success("Item deleted from the cart");
    setCart((prevCart) => prevCart.filter((e) => e.id !== item.id));
  };

  const user = localStorage.getItem('user')
  const userId = JSON.parse(user)

  console.log(userId._id,'jjjjjjjjjjakjd')
  const fetchUser = async () => {
    
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${userId._id}/cart`);
      console.log(response,'hahahahaha')
      setCart(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  const totalItem = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <div>
      <Navbar handleRemove={RemovCart} />
      <div className="min-h-screen mt-5">
        {cart.length !== 0 ? (
          <div className="md:flex ">
            <div className="md:w-[70%] grid md:grid-cols-2 gap-3">
              {cart.map((e) => (
                <div
                  key={e.id}
                  className="p-3 bg-white shadow-xl rounded-lg flex gap-10"
                >
                  <div>
                    <img
                      src={e.image}
                      alt={e.name}
                      className="h-[170px] rounded-lg shadow-xl p-2 w-[150px]"
                    />
                    <button
                      className="text-3xl"
                      onClick={() => clickDecrease(e.id)}
                    >
                      -
                    </button>
                    <span className="border border-black mx-2 px-3">
                      {e.count}
                    </span>
                    <button
                      className="text-3xl"
                      onClick={() => clickIncrease(e.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex flex-col justify-around">
                    <div>
                      <div className="font-bold">{e.name}</div>
                      <div>
                        <span className="font-serif text-gray-600">
                          Price :
                        </span>
                        <span className="font-bold text-2xl">
                          {e.count * e.price}$
                        </span>
                      </div>
                      <div>
                        <span className="font-serif text-gray-600">
                          Brand :
                        </span>
                        <span className="font-semibold">{e.brand}</span>
                      </div>
                      <div>
                        <span className="font-serif text-gray-600">
                          Ratings :
                        </span>
                        <span className="font-semibold">{e.ratings}</span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleRemove(e)}
                        className="p-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg  mt-1"
                      >
                        REMOVE FROM CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:fixed md:right-4 md:top-20 bg-white shadow-lg rounded-lg p-6 border border-gray-200 md:w-[300px] mt-7">
              <h2 className="text-xl font-semibold mb-4">Price Details</h2>

              <div className="flex justify-between mb-4">
                <span className="font-medium">Total Items:</span>
                <span className="font-bold">{totalItem}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal:</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span className="font-medium">Shipping:</span>
                <span className="font-bold">Free</span>
              </div>

              <div className="flex justify-between mb-4 border-t border-gray-300 pt-4">
                <span className="font-medium">Total:</span>
                <span className="font-bold text-2xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="text-center">
                <button
                  onClick={() =>
                    navigate("/buynow", {
                      state: { totalPrice, totalItem, cart },
                    })
                  }
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition duration-300"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-xl font-bold  py-[50px]">
            Your Cart is empty!
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
