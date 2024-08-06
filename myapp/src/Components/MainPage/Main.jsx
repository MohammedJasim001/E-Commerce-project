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
import CatFood from '../ProductsCat/CatFood/CatFood'
import CatGroom from '../ProductsCat/CatGrooming/CatGroom'
import CatAccesseries from '../ProductsCat/CatAccesseries/CatAccesseries'
import DogFood from '../ProductsDog/DogFood/DogFood'
import DogOthers from '../ProductsDog/DogOther/DogOthers'



const Main = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cat' element={<Cat/>}/>
        <Route path='/dog' element={<Dog/>}/>
        <Route path='/catfood' element={<CatFood/>}/>
        <Route path='/catgroom' element={<CatGroom/>}/>
        <Route path='/cataccesseries' element ={<CatAccesseries/>}/>
        <Route path='/dogfood' element={<DogFood/>}/>
        <Route path='/dogothers' element={<DogOthers/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Main
