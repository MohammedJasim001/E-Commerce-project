import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../HomePage/Home'
import Registration from '../Registration/Registration'

import SignIn from '../Registration/SignIn'
import Cart from '../Cart/Cart'
import Cat from '../ProductsCat/Cat'
import Dog from '../ProductsDog/Dog'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import All from '../AllProducts/All'
import ProductLists from '../ProductLists/ProductLists'




const Main = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cat' element={<Cat/>}/>
        <Route path='/dog' element={<Dog/>}/>
        <Route path='/allproducts' element={<All/>}/>
        <Route path='productdetails/:userId' element={<ProductLists/>}/>
       
      </Routes>
      <Footer/>
    </div>
  )
}

export default Main
