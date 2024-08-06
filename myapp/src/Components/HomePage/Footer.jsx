import React from 'react'
import insta from '../Assets/FooterIcons/instagram.png'
import whatsapp from '../Assets/FooterIcons/whatsapp.png'
import facebook from '../Assets/FooterIcons/facebook.png'
import linkdein from '../Assets/FooterIcons/linkedin.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-5 ">
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="mb-8 md:mb-0 md:w-1/4">
                <h2 className="text-xl font-semibold mb-4">About Us</h2>
                <p className="text-sm">
                    We are dedicated to providing the best products and services for your pets. Your pet's health and happiness are our top priority.
                </p>
            </div>
            <div className="mb-8 md:mb-0 md:w-1/4 md:pl-16">
                <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                <ul className="text-sm space-y-2">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/shop" className="hover:underline">Shop</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
            </div>
            <div className="mb-8 md:mb-0 md:w-1/4">
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="text-sm">Email: support@petshop.com</p>
                <p className="text-sm">Phone: +1 234 567 890</p>
                <p className="text-sm">Address: 123 Pet Street, Pet City, PC 12345</p>
            </div>
            <div className="md:w-1/4">
                <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                <div className='flex w-10 '>
                    <img src={insta} alt="" />
                    <img src={whatsapp} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkdein} alt="" />
                </div>
                
            </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            &copy; 2024 PetShop. All rights reserved.
        </div>
    </div>
</footer>

  )
}

export default Footer
